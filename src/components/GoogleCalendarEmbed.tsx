import type { Locale } from "../../content/church";
import PhotoPlaceholder from "./PhotoPlaceholder";

// Opens on the Agenda (upcoming events list) rather than Google's default
// month grid: the church adds events months ahead, so the current month is
// often empty and the grid looked like "no calendar". Visitors can still
// switch to Week/Month with the tabs. Google's own UI follows the site
// language, and the title/print/calendar-list/timezone chrome is hidden.
function withOptions(embedUrl: string, locale: Locale) {
  const url = new URL(embedUrl);
  url.searchParams.set("mode", "AGENDA");
  url.searchParams.set("hl", locale);
  url.searchParams.set("ctz", "America/New_York");
  url.searchParams.set("wkst", "1");
  url.searchParams.set("showTitle", "0");
  url.searchParams.set("showPrint", "0");
  url.searchParams.set("showCalendars", "0");
  url.searchParams.set("showTz", "0");
  return url.toString();
}

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
    <div className="overflow-hidden rounded-2xl bg-wheat-soft ring-1 ring-charcoal/10">
      <iframe
        title={locale === "uk" ? "Церковний календар" : "Church calendar"}
        src={withOptions(embedUrl, locale)}
        className="h-[600px] w-full border-0"
        loading="lazy"
      />
    </div>
  );
}
