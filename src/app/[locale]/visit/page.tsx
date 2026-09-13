import type { Metadata } from "next";
import { schedule, contact, ui, type Locale } from "../../../../content/church";
import RushnykDivider from "../../../components/RushnykDivider";
import SocialLinks from "../../../components/SocialLinks";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { title: ui.nav.visit[locale] };
}

export default async function VisitPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-8 pt-16 sm:pt-20">
        <p className="font-body text-xs font-bold tracking-[0.15em] text-poppy">
          {locale === "uk" ? "ЗАВІТАЙТЕ" : "VISIT"}
        </p>
        <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
          {locale === "uk" ? "Ми будемо раді бачити вас" : "We'd love to have you"}
        </h1>
        <p className="mt-4 max-w-xl text-charcoal/70">
          {locale === "uk"
            ? "Перший раз? Просто приходьте — не потрібно нічого готувати заздалегідь."
            : "First time? Just come — there's nothing you need to prepare ahead of time."}
        </p>
      </section>

      <RushnykDivider tone="wheat" />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:py-20 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="font-display text-xl font-semibold text-ink">
            {locale === "uk" ? "Розклад" : "Schedule"}
          </h2>
          <ul className="mt-5 space-y-4">
            {schedule.map((s) => (
              <li key={s.day.en} className="flex items-start justify-between gap-4 rounded-xl bg-wheat-soft p-4 ring-1 ring-charcoal/5">
                <div>
                  <p className="font-display font-semibold text-ink">{s.day[locale]}</p>
                  <p className="text-sm text-charcoal/70">{s.label[locale]}</p>
                  {s.note && <p className="text-xs text-charcoal/50">{s.note[locale]}</p>}
                </div>
                <p className="shrink-0 font-display text-lg font-semibold text-poppy">{s.time}</p>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-display text-xl font-semibold text-ink">
            {locale === "uk" ? "Контакти" : "Contact"}
          </h2>
          <ul className="mt-4 space-y-2 text-charcoal/80">
            <li>{contact.addressLines[locale].join(", ")}</li>
            <li>
              <a href={contact.phoneHref} className="hover:text-ink">
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-ink">
                {contact.email}
              </a>
            </li>
          </ul>
          <SocialLinks className="mt-4 text-charcoal/60" />
        </div>

        <div className="overflow-hidden rounded-2xl ring-1 ring-charcoal/10">
          <iframe
            title={locale === "uk" ? "Карта до церкви" : "Map to the church"}
            src={`https://www.google.com/maps?q=${contact.mapsQuery}&output=embed`}
            className="h-full min-h-[360px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <RushnykDivider tone="ink" />

      <section className="bg-ink py-16 sm:py-20">
        <div className="mx-auto max-w-xl px-5">
          <h2 className="text-center font-display text-2xl font-semibold text-wheat sm:text-3xl">
            {locale === "uk" ? "Напишіть нам" : "Send us a message"}
          </h2>
          <p className="mt-2 text-center text-sm text-wheat/70">
            {locale === "uk"
              ? `Ваш лист відкриється у поштовій програмі й піде на ${contact.email}.`
              : `This opens your email app and sends to ${contact.email}.`}
          </p>
          <form
            action={`mailto:${contact.email}`}
            method="post"
            encType="text/plain"
            className="mt-8 space-y-4"
          >
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-wheat/80">
                {locale === "uk" ? "Ім'я" : "Name"}
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-wheat/25 bg-wheat/5 px-4 py-2.5 text-wheat placeholder:text-wheat/40 focus:border-amber"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-wheat/80">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-wheat/25 bg-wheat/5 px-4 py-2.5 text-wheat placeholder:text-wheat/40 focus:border-amber"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-wheat/80">
                {locale === "uk" ? "Повідомлення" : "Message"}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-lg border border-wheat/25 bg-wheat/5 px-4 py-2.5 text-wheat placeholder:text-wheat/40 focus:border-amber"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-amber px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-amber-soft"
            >
              {locale === "uk" ? "Надіслати" : "Send"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
