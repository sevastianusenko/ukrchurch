import { calendarSubscribe, type Locale } from "../../content/church";
import PhotoPlaceholder from "./PhotoPlaceholder";

function CalendarPlusIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <path d="M3 9h18M8 2v4M16 2v4M12 12v6M9 15h6" />
    </svg>
  );
}

// Opens on the whole month (client's choice, 2026-11-22, after briefly
// trying the Agenda list). Google's own UI follows the site language, and
// the title/print/calendar-list/timezone chrome is hidden.
function withOptions(embedUrl: string, locale: Locale) {
  const url = new URL(embedUrl);
  url.searchParams.set("mode", "MONTH");
  url.searchParams.set("hl", locale);
  url.searchParams.set("ctz", "America/New_York");
  url.searchParams.set("wkst", "1");
  url.searchParams.set("showTitle", "0");
  url.searchParams.set("showPrint", "0");
  url.searchParams.set("showCalendars", "0");
  url.searchParams.set("showTz", "0");
  return url.toString();
}

// Subscribe links built from the embed's own calendar ID (its `src`):
// Google's "add calendar" link wants the ID base64-encoded (the same form
// Google's own "shareable link" uses), and webcal:// opens the public iCal
// feed as a subscription in Apple Calendar or Outlook.
function subscribeLinks(embedUrl: string) {
  const id = new URL(embedUrl).searchParams.get("src");
  if (!id) return null;
  const cid = btoa(id).replace(/=+$/, "");
  return {
    google: `https://calendar.google.com/calendar/u/0?cid=${cid}`,
    ical: `webcal://calendar.google.com/calendar/ical/${encodeURIComponent(id)}/public/basic.ics`,
  };
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

  const links = subscribeLinks(embedUrl);

  return (
    <>
      <div className="overflow-hidden rounded-2xl bg-wheat-soft ring-1 ring-charcoal/10">
        <iframe
          title={locale === "uk" ? "Церковний календар" : "Church calendar"}
          src={withOptions(embedUrl, locale)}
          className="h-[600px] w-full border-0"
          loading="lazy"
        />
      </div>

      {links && (
        <div className="mt-4 flex flex-col gap-5 rounded-2xl bg-wheat-soft p-6 ring-1 ring-charcoal/10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-md">
            <p className="font-display text-lg font-semibold text-ink">
              {calendarSubscribe.title[locale]}
            </p>
            <p className="mt-1 text-charcoal/70">{calendarSubscribe.lead[locale]}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href={links.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-amber-soft"
            >
              <CalendarPlusIcon />
              {calendarSubscribe.google[locale]}
            </a>
            <a
              href={links.ical}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-ink ring-1 ring-ink/25 transition-colors hover:bg-ink/5"
            >
              {calendarSubscribe.apple[locale]}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
