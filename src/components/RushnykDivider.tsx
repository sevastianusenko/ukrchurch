// Signature motif: a woven cross-stitch band, in the spirit of the rushnyk
// (Ukrainian embroidered ritual cloth) that dresses icons, bread, and
// doorways in Ukrainian churches and homes. Rendered in the site's own
// palette rather than literal flag colors. See DESIGN.md.
type Props = {
  tone?: "wheat" | "ink";
  className?: string;
};

const TILE = 28;

export default function RushnykDivider({ tone = "wheat", className = "" }: Props) {
  const bg = tone === "ink" ? "var(--color-ink)" : "var(--color-wheat)";
  const a = tone === "ink" ? "var(--color-amber-soft)" : "var(--color-poppy)";
  const b = tone === "ink" ? "var(--color-wheat)" : "var(--color-meadow)";

  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={`h-4 w-full sm:h-5 ${className}`}
      style={{
        backgroundColor: bg,
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
          `<svg xmlns='http://www.w3.org/2000/svg' width='${TILE}' height='20' viewBox='0 0 ${TILE} 20'>
            <path d='M14 1 L23 10 L14 19 L5 10 Z' fill='none' stroke='${a}' stroke-width='2'/>
            <path d='M0 10 L4 6 L4 14 Z M28 10 L24 6 L24 14 Z' fill='${b}'/>
          </svg>`
        )}")`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center",
        backgroundSize: `${TILE}px 20px`,
      }}
    />
  );
}
