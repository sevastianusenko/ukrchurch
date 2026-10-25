import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales, type Locale } from "../../../../../content/church";
import {
  COVER_W,
  coverPath,
  formatSize,
  getLibraryItem,
  library,
  libraryUi,
  pdfPath,
} from "../../../../../content/library";
import PdfReader from "../../../../components/PdfReader";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    library.flatMap((collection) => collection.items.map((item) => ({ locale, slug: item.slug }))),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const found = getLibraryItem(slug);
  if (!found) return {};
  const { item, collection } = found;
  return {
    title: item.title[locale],
    description: (item.note ?? collection.description)[locale],
    openGraph: { images: [{ url: coverPath(item.slug), width: COVER_W, height: item.coverH }] },
  };
}

export default async function LibraryItemPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const found = getLibraryItem(slug);
  if (!found) notFound();
  const { item, collection, prev, next } = found;
  const isIssue = collection.kind === "magazine";
  const reader = libraryUi.reader;

  const neighbours = isIssue && (prev || next) && (
    <nav className="flex justify-between gap-4 text-sm font-semibold">
      {prev ? (
        <Link href={`/${locale}/library/${prev.slug}`} className="inline-flex min-h-11 items-center text-wheat/70 hover:text-amber-soft">
          {libraryUi.prev[locale]}
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link href={`/${locale}/library/${next.slug}`} className="inline-flex min-h-11 items-center text-wheat/70 hover:text-amber-soft">
          {libraryUi.next[locale]}
        </Link>
      )}
    </nav>
  );

  return (
    <div className="bg-ink text-wheat">
      <section className="mx-auto max-w-6xl px-5 pb-6 pt-8 sm:pt-10">
        <Link
          href={`/${locale}/library#${collection.id}`}
          className="text-sm font-semibold text-wheat/60 underline decoration-amber decoration-2 underline-offset-4 hover:text-wheat"
        >
          {libraryUi.back[locale]}
        </Link>

        <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.15em] text-amber-soft">
              {collection.title[locale].toUpperCase()}
            </p>
            <h1 className="mt-2 font-display text-2xl font-semibold leading-tight sm:text-4xl">
              {(item.heading ?? item.title)[locale]}
            </h1>
            {item.byline && <p className="mt-2 text-wheat/70">{item.byline[locale]}</p>}
            {item.note && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-wheat/75">{item.note[locale]}</p>}
            <p className="mt-3 text-xs text-wheat/50">
              {libraryUi.language[collection.language][locale]} · {item.pages} {libraryUi.pages[locale]} · PDF,{" "}
              {formatSize(item.sizeMb, locale)}
            </p>
          </div>
          <a
            href={pdfPath(item.slug)}
            download
            className="inline-flex min-h-11 shrink-0 items-center self-start rounded-full bg-amber px-5 text-sm font-semibold text-ink transition-colors hover:bg-amber-soft sm:self-auto"
          >
            {libraryUi.download[locale]}
          </a>
        </div>
      </section>

      <PdfReader
        src={pdfPath(item.slug)}
        cover={{ src: coverPath(item.slug), w: COVER_W, h: item.coverH }}
        pageCount={item.pages}
        labels={{
          loading: reader.loading[locale],
          error: reader.error[locale],
          page: reader.page[locale],
          of: reader.of[locale],
          prevPage: reader.prevPage[locale],
          nextPage: reader.nextPage[locale],
          zoomIn: reader.zoomIn[locale],
          zoomOut: reader.zoomOut[locale],
          fullscreen: reader.fullscreen[locale],
          exitFullscreen: reader.exitFullscreen[locale],
          download: libraryUi.download[locale],
        }}
      />

      {neighbours && <div className="mx-auto max-w-6xl px-5 pb-10">{neighbours}</div>}
    </div>
  );
}
