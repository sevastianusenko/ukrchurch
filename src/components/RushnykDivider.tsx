// Signature motif: a woven cross-stitch band, in the spirit of the rushnyk
// (Ukrainian embroidered ritual cloth) that dresses icons, bread, and
// doorways in Ukrainian churches and homes. Rendered in the site's own
// palette rather than literal flag colors. See DESIGN.md.
type Props = {
  tone?: "wheat" | "ink";
  className?: string;
};

const TILE = 24;

// A data-URI SVG used as a CSS background-image is rendered as its own
// isolated document — it does NOT inherit the page's CSS custom
// properties, so `fill="var(--color-poppy)"` silently resolves to
// nothing and the browser falls back to default black. The stitch
// colors below must be literal hex values (kept in sync with
// globals.css) for that reason; only the container's own
// `backgroundColor` (real inline style on a real DOM element) can use
// `var()` safely.
const HEX = {
  wheat: "#f6f6f4",
  ink: "#1e2440",
  amberSoft: "#f2b169",
  poppy: "#c84b34",
  meadow: "#4b7357",
};

export default function RushnykDivider({ tone = "wheat", className = "" }: Props) {
  const bg = tone === "ink" ? "var(--color-ink)" : "var(--color-wheat)";
  const a = tone === "ink" ? HEX.amberSoft : HEX.poppy;
  const b = tone === "ink" ? HEX.wheat : HEX.meadow;

  // A small cross-stitched rhombus ("ромб") — the most common motif on a
  // Ukrainian rushnyk border — built from square stitches, not smooth
  // vector lines, so it reads as embroidery rather than an abstract
  // chevron. A center "seed" stitch and two flanking stitches (the small
  // filler crosses real rushnyky use between rhombi) complete the band.
  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={`h-4 w-full sm:h-5 ${className}`}
      style={{
        backgroundColor: bg,
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
          `<svg xmlns='http://www.w3.org/2000/svg' width='${TILE}' height='20' viewBox='0 0 ${TILE} 20' shape-rendering='crispEdges'>
            <rect x='11' y='2' width='2' height='2' fill='${a}'/>
            <rect x='9' y='4' width='2' height='2' fill='${a}'/>
            <rect x='13' y='4' width='2' height='2' fill='${a}'/>
            <rect x='7' y='6' width='2' height='2' fill='${a}'/>
            <rect x='15' y='6' width='2' height='2' fill='${a}'/>
            <rect x='5' y='8' width='2' height='2' fill='${a}'/>
            <rect x='17' y='8' width='2' height='2' fill='${a}'/>
            <rect x='7' y='10' width='2' height='2' fill='${a}'/>
            <rect x='15' y='10' width='2' height='2' fill='${a}'/>
            <rect x='9' y='12' width='2' height='2' fill='${a}'/>
            <rect x='13' y='12' width='2' height='2' fill='${a}'/>
            <rect x='11' y='14' width='2' height='2' fill='${a}'/>
            <rect x='11' y='8' width='2' height='2' fill='${b}'/>
            <rect x='1' y='8' width='2' height='2' fill='${b}'/>
            <rect x='21' y='8' width='2' height='2' fill='${b}'/>
          </svg>`
        )}")`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center",
        backgroundSize: `${TILE}px 20px`,
        imageRendering: "pixelated",
      }}
    />
  );
}
