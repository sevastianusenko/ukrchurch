"use client";

// In-page PDF reader for the library, built on PDF.js so it works the same
// on phones (where browsers won't render a PDF inline) as on desktop.
// Pages flow in the normal page scroll; each one renders to a canvas only
// while it's near the viewport and is released again once it scrolls far
// away, so a 700-page book stays light. With range requests the browser
// fetches only the parts of the file the visible pages need.

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { flushSync } from "react-dom";
import Image from "next/image";
import type { PDFDocumentProxy, RenderTask } from "pdfjs-dist";

type Labels = {
  loading: string;
  error: string;
  page: string;
  of: string;
  prevPage: string;
  nextPage: string;
  zoomIn: string;
  zoomOut: string;
  fullscreen: string;
  exitFullscreen: string;
  download: string;
};

type Props = {
  src: string;
  cover: { src: string; w: number; h: number };
  pageCount: number;
  labels: Labels;
};

const ZOOMS = [0.5, 0.75, 1, 1.25, 1.5, 2, 3];
const MAX_PAGE_WIDTH = 920;
const ASSETS = "/pdfjs/";

const subscribeFullscreen = (onChange: () => void) => {
  document.addEventListener("fullscreenchange", onChange);
  return () => document.removeEventListener("fullscreenchange", onChange);
};

export default function PdfReader({ src, cover, pageCount, labels }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const columnRef = useRef<HTMLDivElement>(null);
  const [doc, setDoc] = useState<PDFDocumentProxy | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [numPages, setNumPages] = useState(pageCount);
  const [aspect, setAspect] = useState(cover.h / cover.w);
  const [fitWidth, setFitWidth] = useState(0);
  const [zoomIndex, setZoomIndex] = useState(ZOOMS.indexOf(1));
  const [current, setCurrent] = useState(1);
  const [pageInput, setPageInput] = useState("1");
  const canFullscreen = useSyncExternalStore(subscribeFullscreen, () => document.fullscreenEnabled, () => false);
  const isFullscreen = useSyncExternalStore(
    subscribeFullscreen,
    () => document.fullscreenElement !== null && document.fullscreenElement === rootRef.current,
    () => false,
  );

  const zoom = ZOOMS[zoomIndex];
  const pageWidth = Math.round(fitWidth * zoom);

  // Load the document.
  useEffect(() => {
    let cancelled = false;
    let loadingTask: { destroy: () => Promise<void> } | undefined;
    (async () => {
      const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
      pdfjs.GlobalWorkerOptions.workerSrc = `${ASSETS}pdf.worker.min.mjs`;
      const task = pdfjs.getDocument({
        url: src,
        cMapUrl: `${ASSETS}cmaps/`,
        standardFontDataUrl: `${ASSETS}standard_fonts/`,
        wasmUrl: `${ASSETS}wasm/`,
        iccUrl: `${ASSETS}iccs/`,
        // Fetch only what the visible pages need (via HTTP range requests)
        // instead of pulling the whole file up front.
        disableStream: true,
        disableAutoFetch: true,
      });
      loadingTask = task;
      const pdf = await task.promise;
      if (cancelled) return;
      const first = await pdf.getPage(1);
      const vp = first.getViewport({ scale: 1 });
      if (cancelled) return;
      setAspect(vp.height / vp.width);
      setNumPages(pdf.numPages);
      setDoc(pdf);
      setStatus("ready");
    })().catch(() => {
      if (!cancelled) setStatus("error");
    });
    return () => {
      cancelled = true;
      loadingTask?.destroy();
    };
  }, [src]);

  // Fit-to-width size follows the column's width.
  useEffect(() => {
    const el = columnRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setFitWidth(Math.min(Math.floor(entry.contentRect.width), MAX_PAGE_WIDTH));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const pageElement = useCallback(
    (n: number) => rootRef.current?.querySelector<HTMLElement>(`[data-page="${n}"]`) ?? null,
    [],
  );

  // Track the page under the middle of the screen. Captures scrolls from
  // the window and from the reader itself (it scrolls in full screen).
  useEffect(() => {
    if (status !== "ready") return;
    let frame = 0;
    let last = 0;
    const update = () => {
      frame = 0;
      const root = rootRef.current;
      if (!root) return;
      const mid = window.innerHeight / 2;
      const pages = root.querySelectorAll<HTMLElement>("[data-page]");
      let lo = 0;
      let hi = pages.length - 1;
      while (lo < hi) {
        const m = (lo + hi + 1) >> 1;
        if (pages[m].getBoundingClientRect().top <= mid) lo = m;
        else hi = m - 1;
      }
      const n = lo + 1;
      if (n !== last) {
        last = n;
        setCurrent(n);
        setPageInput(String(n));
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    document.addEventListener("scroll", onScroll, { capture: true, passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      document.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [status, numPages]);

  const goTo = useCallback(
    (n: number) => {
      const target = Math.min(Math.max(1, n), numPages);
      pageElement(target)?.scrollIntoView({ block: "start" });
      setPageInput(String(target));
    },
    [numPages, pageElement],
  );

  // Re-layout synchronously at the new zoom, then bring the page the reader
  // was on back into view.
  const changeZoom = (delta: number) => {
    const page = current;
    flushSync(() => setZoomIndex((i) => Math.min(ZOOMS.length - 1, Math.max(0, i + delta))));
    if (status === "ready") pageElement(page)?.scrollIntoView({ block: "start" });
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else rootRef.current?.requestFullscreen().catch(() => {});
  };

  const btn =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-wheat transition-colors hover:bg-wheat/10 disabled:opacity-35 disabled:hover:bg-transparent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber";

  return (
    <div
      ref={rootRef}
      className="bg-ink [&:fullscreen]:overflow-y-auto"
    >
      <div className="sticky top-[61px] z-40 border-b border-wheat/10 bg-ink-soft/95 backdrop-blur [:fullscreen_&]:top-0">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-1 px-3 py-1 sm:px-5">
          <div className="flex items-center gap-0.5">
            <button type="button" className={btn} onClick={() => goTo(current - 1)} disabled={status !== "ready" || current <= 1} aria-label={labels.prevPage} title={labels.prevPage}>
              <Chevron dir="up" />
            </button>
            <form
              className="flex items-center gap-1.5 text-sm text-wheat/80"
              onSubmit={(e) => {
                e.preventDefault();
                const n = parseInt(pageInput, 10);
                if (!Number.isNaN(n)) goTo(n);
              }}
            >
              <label className="sr-only" htmlFor="reader-page">
                {labels.page}
              </label>
              <input
                id="reader-page"
                inputMode="numeric"
                value={pageInput}
                onChange={(e) => setPageInput(e.target.value.replace(/\D/g, ""))}
                onBlur={() => setPageInput(String(current))}
                disabled={status !== "ready"}
                className="h-9 w-12 rounded-lg bg-wheat/10 text-center font-semibold tabular-nums text-wheat focus:outline-2 focus:outline-amber"
              />
              <span className="whitespace-nowrap tabular-nums">
                {labels.of} {numPages}
              </span>
            </form>
            <button type="button" className={btn} onClick={() => goTo(current + 1)} disabled={status !== "ready" || current >= numPages} aria-label={labels.nextPage} title={labels.nextPage}>
              <Chevron dir="down" />
            </button>
          </div>

          <div className="flex items-center gap-0.5">
            <button type="button" className={btn} onClick={() => changeZoom(-1)} disabled={zoomIndex === 0} aria-label={labels.zoomOut} title={labels.zoomOut}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 9h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
            <span className="hidden w-12 text-center text-sm tabular-nums text-wheat/70 sm:inline">{Math.round(zoom * 100)}%</span>
            <button type="button" className={btn} onClick={() => changeZoom(1)} disabled={zoomIndex === ZOOMS.length - 1} aria-label={labels.zoomIn} title={labels.zoomIn}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 9h10M9 4v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
            {canFullscreen && (
              <button type="button" className={`${btn} hidden sm:flex`} onClick={toggleFullscreen} aria-label={isFullscreen ? labels.exitFullscreen : labels.fullscreen} title={isFullscreen ? labels.exitFullscreen : labels.fullscreen}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  {isFullscreen ? (
                    <path d="M7 3v4H3M11 3v4h4M7 15v-4H3M11 15v-4h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  ) : (
                    <path d="M3 7V3h4M15 7V3h-4M3 11v4h4M15 11v4h-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  )}
                </svg>
              </button>
            )}
            <a href={src} download className={btn} aria-label={labels.download} title={labels.download}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M9 3v8m0 0L5.5 7.5M9 11l3.5-3.5M3.5 14.5h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto px-3 py-6 sm:px-5 sm:py-8">
        <div ref={columnRef} className="mx-auto w-full max-w-[920px]" />
        {status === "loading" && (
          <div className="relative mx-auto overflow-hidden rounded-sm bg-wheat-soft" style={{ width: fitWidth || undefined, aspectRatio: `${cover.w} / ${cover.h}` }}>
            <Image src={cover.src} alt="" width={cover.w} height={cover.h} className="h-full w-full object-cover opacity-40" priority />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <span className="h-10 w-10 animate-spin rounded-full border-4 border-ink/15 border-t-amber motion-reduce:animate-none" aria-hidden="true" />
              <p className="rounded-full bg-ink px-4 py-1.5 text-sm font-semibold text-wheat" role="status">
                {labels.loading}
              </p>
            </div>
          </div>
        )}
        {status === "error" && (
          <div className="mx-auto max-w-md rounded-2xl bg-ink-soft p-6 text-center text-wheat" role="alert">
            <p>{labels.error}</p>
            <a href={src} download className="mt-5 inline-block rounded-full bg-amber px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-amber-soft">
              {labels.download}
            </a>
          </div>
        )}
        {status === "ready" && doc && pageWidth > 0 && (
          <div className="mx-auto flex flex-col items-center gap-4 sm:gap-6" style={{ width: pageWidth }}>
            {Array.from({ length: numPages }, (_, i) => (
              <PdfPage key={i + 1} doc={doc} pageNumber={i + 1} width={pageWidth} initialAspect={aspect} label={`${labels.page} ${i + 1}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function PdfPage({
  doc,
  pageNumber,
  width,
  initialAspect,
  label,
}: {
  doc: PDFDocumentProxy;
  pageNumber: number;
  width: number;
  initialAspect: number;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const canvasHolder = useRef<HTMLDivElement>(null);
  const [aspect, setAspect] = useState(initialAspect);
  const [near, setNear] = useState(false);
  const [drawnWidth, setDrawnWidth] = useState(0);

  // Render pages within about a screen and a half of the viewport.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setNear(entry.isIntersecting);
        if (!entry.isIntersecting) setDrawnWidth(0);
      },
      { rootMargin: "150% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const holder = canvasHolder.current;
    if (!holder) return;
    if (!near) {
      holder.replaceChildren(); // release the canvas memory
      return;
    }
    let cancelled = false;
    let task: RenderTask | undefined;
    (async () => {
      const page = await doc.getPage(pageNumber);
      if (cancelled) return;
      const base = page.getViewport({ scale: 1 });
      setAspect(base.height / base.width);
      // Sharp on high-DPI screens, but within mobile Safari's canvas limits.
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const scale = Math.min(
        (width / base.width) * dpr,
        4096 / base.width,
        4096 / base.height,
        Math.sqrt(16_000_000 / (base.width * base.height)),
      );
      const viewport = page.getViewport({ scale });
      const canvas = document.createElement("canvas");
      canvas.width = Math.floor(viewport.width);
      canvas.height = Math.floor(viewport.height);
      canvas.className = "block h-full w-full";
      task = page.render({ canvas, viewport });
      await task.promise;
      // Swap in only once drawn, so re-renders (zoom) don't flash blank.
      if (!cancelled) {
        holder.replaceChildren(canvas);
        setDrawnWidth(width);
      }
    })().catch(() => {
      // Cancelled renders reject; a page that fails stays a blank sheet.
    });
    return () => {
      cancelled = true;
      task?.cancel();
    };
  }, [near, width, doc, pageNumber]);

  return (
    <div
      ref={ref}
      data-page={pageNumber}
      role="img"
      aria-label={label}
      className="relative scroll-mt-[128px] bg-wheat-soft shadow-lg shadow-black/30"
      style={{ width, height: Math.round(width * aspect) }}
    >
      {/* Canvases are swapped in imperatively; React never renders into this div. */}
      <div ref={canvasHolder} className="h-full w-full" />
      {near && drawnWidth === 0 && (
        <span
          className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 animate-spin rounded-full border-4 border-ink/10 border-t-amber motion-reduce:animate-none"
          aria-hidden="true"
        />
      )}
    </div>
  );
}

function Chevron({ dir }: { dir: "up" | "down" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d={dir === "up" ? "M4.5 11.5 9 7l4.5 4.5" : "M4.5 6.5 9 11l4.5-4.5"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
