import type { Locale } from "../../content/church";
import PhotoPlaceholder from "./PhotoPlaceholder";

export default function GoogleCalendarEmbed({
  embedUrl,
  locale,
}: {
  embedUrl: string | null;
  locale: Locale;
}) {
  if (!embedUrl) {
    return (
      <PhotoPlaceholder
        className="aspect-[16/10] w-full"
        label={
          locale === "uk"
            ? "Google-календар: надішліть посилання, щоб вбудувати тут"
            : "Google Calendar: send the link to embed it here"
        }
      />
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl ring-1 ring-charcoal/10">
      <iframe
        title={locale === "uk" ? "Церковний календар" : "Church calendar"}
        src={embedUrl}
        className="h-[600px] w-full border-0"
        loading="lazy"
      />
    </div>
  );
}
