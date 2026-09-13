import Link from "next/link";
import type { Metadata } from "next";
import { schedule, annualEvents, upcomingEvents, googleCalendar, ui, type Locale } from "../../../../content/church";
import RushnykDivider from "../../../components/RushnykDivider";
import GoogleCalendarEmbed from "../../../components/GoogleCalendarEmbed";
import SocialLinks from "../../../components/SocialLinks";
import { formatDate } from "../../../components/PostCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { title: ui.nav.calendar[locale] };
}

export default async function CalendarPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-8 pt-16 sm:pt-20">
        <p className="font-body text-xs font-bold tracking-[0.15em] text-poppy">
          {locale === "uk" ? "РОЗКЛАД" : "SCHEDULE"}
        </p>
        <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
          {ui.nav.calendar[locale]}
        </h1>
        <p className="mt-4 max-w-xl text-charcoal/70">
          {locale === "uk"
            ? "Щотижневий ритм молитви та Слова — і те, чим живе церква протягом року."
            : "Our weekly rhythm of prayer and the Word — and what the church's year looks like."}
        </p>
      </section>

      <RushnykDivider tone="wheat" />

      {/* Weekly schedule */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <h2 className="font-display text-2xl font-semibold text-ink">
          {locale === "uk" ? "Щотижня" : "Every week"}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {schedule.map((s) => (
            <div key={s.day.en} className="rounded-2xl bg-wheat-soft p-6 ring-1 ring-charcoal/5">
              <p className="font-display text-lg font-semibold text-ink">{s.day[locale]}</p>
              <p className="mt-1 font-display text-2xl font-bold text-poppy">{s.time}</p>
              <p className="mt-2 text-sm text-charcoal/70">{s.label[locale]}</p>
              {s.note && <p className="text-xs text-charcoal/50">{s.note[locale]}</p>}
            </div>
          ))}
        </div>
      </section>

      <RushnykDivider tone="wheat" />

      {/* Google Calendar */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <h2 className="font-display text-2xl font-semibold text-ink">
          {locale === "uk" ? "Найближчі події" : "Upcoming events"}
        </h2>
        <p className="mt-2 max-w-2xl text-charcoal/70">
          {locale === "uk"
            ? "Повний календар церкви з точними датами — нижче."
            : "The church's full calendar with exact dates — below."}
        </p>

        {upcomingEvents.length > 0 && (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((ev) => (
              <Link
                key={ev.postSlug}
                href={`/${locale}/news/${ev.postSlug}`}
                className="group rounded-2xl bg-ink p-6 ring-1 ring-charcoal/5 transition-transform hover:-translate-y-1"
              >
                <p className="font-body text-xs font-bold tracking-[0.1em] text-amber-soft">
                  {formatDate(ev.date, locale).toUpperCase()} · {ev.time}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-wheat">{ev.title[locale]}</h3>
                <p className="mt-1 text-sm text-wheat/70">{ev.location[locale]}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-amber-soft underline decoration-2 underline-offset-4">
                  {locale === "uk" ? "Детальніше" : "Details"}
                </span>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-6">
          <GoogleCalendarEmbed embedUrl={googleCalendar.embedUrl} locale={locale} />
        </div>
      </section>

      <RushnykDivider tone="wheat" />

      {/* Annual rhythm */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <h2 className="font-display text-2xl font-semibold text-ink">
          {locale === "uk" ? "Протягом року" : "Through the year"}
        </h2>
        <p className="mt-2 max-w-2xl text-charcoal/70">
          {locale === "uk"
            ? "Ось що зазвичай відбувається щороку, з прикладами з минулого."
            : "Here's what usually happens each year, with real examples from the past."}
        </p>

        <div className="mt-8 divide-y divide-charcoal/10 border-y border-charcoal/10">
          {annualEvents.map((ev) => (
            <div key={ev.postSlug} className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-8">
              <p className="w-32 shrink-0 font-body text-xs font-bold tracking-[0.1em] text-poppy">
                {ev.season[locale]}
              </p>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-ink">{ev.title[locale]}</h3>
                <p className="mt-1 text-charcoal/75">{ev.description[locale]}</p>
                <Link
                  href={`/${locale}/news/${ev.postSlug}`}
                  className="mt-2 inline-block text-sm font-semibold text-ink underline decoration-poppy decoration-2 underline-offset-4"
                >
                  {locale === "uk" ? "Дивитись минулого разу" : "See last time"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <RushnykDivider tone="ink" />

      <section className="bg-ink py-14 text-center sm:py-16">
        <div className="mx-auto max-w-xl px-5">
          <h2 className="font-display text-xl font-semibold text-wheat sm:text-2xl">
            {locale === "uk" ? "Слідкуйте за новинами" : "Keep up with our news"}
          </h2>
          <p className="mt-3 text-wheat/75">
            {locale === "uk"
              ? "Точні дати та деталі найближчих подій ми публікуємо в розділі «Новини» та в соцмережах."
              : "We post exact dates and details for upcoming events in our News section and on social media."}
          </p>
          <Link
            href={`/${locale}/news`}
            className="mt-6 inline-block rounded-full bg-amber px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-amber-soft"
          >
            {ui.nav.news[locale]}
          </Link>
          <div className="mt-6 flex justify-center">
            <SocialLinks className="text-wheat/70" />
          </div>
        </div>
      </section>
    </>
  );
}
