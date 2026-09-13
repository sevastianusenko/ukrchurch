import type { Locale, Bi } from "../../content/church";

export default function ScriptureQuote({
  text,
  reference,
  locale,
  tone = "light",
}: {
  text: Bi;
  reference: Bi;
  locale: Locale;
  tone?: "light" | "dark";
}) {
  const color = tone === "dark" ? "text-wheat" : "text-ink";
  const refColor = tone === "dark" ? "text-amber-soft" : "text-poppy";

  return (
    <blockquote className="max-w-2xl">
      <p className={`font-serif text-2xl italic leading-snug sm:text-3xl ${color}`}>
        {text[locale]}
      </p>
      <cite className={`mt-3 block font-body text-sm font-semibold not-italic tracking-wide ${refColor}`}>
        {reference[locale]}
      </cite>
    </blockquote>
  );
}
