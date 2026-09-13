import Image from "next/image";
import Link from "next/link";
import {
  site,
  verse,
  whoWeAre,
  mission,
  ministries,
  values,
  contact,
  ui,
  affiliation,
  upcomingEvents,
  type Locale,
} from "../../../content/church";
import RushnykDivider from "../../components/RushnykDivider";
import ScriptureQuote from "../../components/ScriptureQuote";
import ServiceTimesCard from "../../components/ServiceTimesCard";
import MinistryCard from "../../components/MinistryCard";
import PostCard from "../../components/PostCard";
import PhotoMosaic from "../../components/PhotoMosaic";
import { formatDate } from "../../components/PostCard";
import { posts } from "../../../content/posts";

const mosaicPhotos = [
  { src: "/photos/news/kids-camp-2026-recap/hero.jpg", alt: { uk: "Майстер-клас у таборі", en: "Camp craft workshop" } },
  { src: "/photos/news/baptism-2025/hero.jpg", alt: { uk: "Водне хрещення", en: "Water baptism" } },
  { src: "/photos/news/bake-sale-recap-2025/hero.jpg", alt: { uk: "Благодійний ярмарок випічки", en: "Charity bake sale" } },
  { src: "/photos/news/kids-camp-2026-recap/6.jpg", alt: { uk: "Футбол на таборі", en: "Soccer at camp" } },
  { src: "/photos/news/sisters-christmas-workshop-2025/2.jpeg", alt: { uk: "Сестринське служіння", en: "Women's ministry" } },
  { src: "/photos/news/new-year-2026/hero.jpg", alt: { uk: "Новорічна зустріч церкви", en: "Church New Year's gathering" } },
  { src: "/photos/news/christmas-caroling-2025/hero.jpg", alt: { uk: "Різдвяна коляда", en: "Christmas caroling" } },
  { src: "/photos/news/kids-camp-2025/3.jpg", alt: { uk: "Дитячий табір 2025", en: "Kids camp 2025" } },
] as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const base = `/${locale}`;

  const heroTitle =
    locale === "uk" ? "Двері відчинені щонеділі" : "Our doors are open every Sunday";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative h-[86vh] min-h-[560px] w-full sm:h-[92vh]">
          <Image
            src="/photos/hero.jpg"
            alt={
              locale === "uk"
                ? "Пшеничне поле на заході сонця"
                : "A wheat field at sunset"
            }
            fill
            priority
            sizes="100vw"
            className="hero-photo object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/10" />

          <a
            href="https://commons.wikimedia.org/wiki/File:Harvest_Season_(220341233).jpeg"
            target="_blank"
            rel="noreferrer"
            className="absolute right-3 top-3 z-10 text-[10px] text-wheat/50 hover:text-wheat/80"
          >
            Photo: Christoph Wurst / Wikimedia Commons (CC BY-SA 3.0)
          </a>

          <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end gap-8 px-5 pb-14 sm:pb-20">
            <div className="max-w-2xl">
              <p className="font-body text-xs font-bold tracking-[0.15em] text-amber-soft">
                {site.shortName[locale]} · LANCASTER, PA
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] text-wheat sm:text-6xl">
                {heroTitle}
              </h1>
              <p className="mt-4 max-w-lg font-serif text-lg italic leading-relaxed text-wheat/85 sm:text-xl">
                {site.tagline[locale]}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  href={`${base}/visit`}
                  className="rounded-full bg-amber px-6 py-3 font-body text-sm font-semibold text-ink transition-colors hover:bg-amber-soft"
                >
                  {ui.planVisit[locale]}
                </Link>
                <a
                  href={contact.phoneHref}
                  className="rounded-full border border-wheat/40 px-6 py-3 font-body text-sm font-semibold text-wheat transition-colors hover:bg-wheat/10"
                >
                  {contact.phone}
                </a>
              </div>
            </div>

            <div className="sm:absolute sm:bottom-14 sm:right-5">
              <ServiceTimesCard locale={locale} />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming event */}
      {upcomingEvents.length > 0 && (
        <section className="bg-amber">
          <Link
            href={`${base}/news/${upcomingEvents[0].postSlug}`}
            className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 py-4 text-ink sm:flex-row sm:items-center"
          >
            <p className="font-body text-sm font-semibold">
              <span className="font-bold">
                {formatDate(upcomingEvents[0].date, locale).toUpperCase()} · {upcomingEvents[0].time}
              </span>{" "}
              · {upcomingEvents[0].title[locale]} · {upcomingEvents[0].location[locale]}
            </p>
            <span className="whitespace-nowrap text-sm font-semibold underline underline-offset-4">
              {locale === "uk" ? "Детальніше →" : "Details →"}
            </span>
          </Link>
        </section>
      )}

      <RushnykDivider tone="wheat" />

      {/* Who we are */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="grid gap-12 sm:grid-cols-2 sm:gap-16">
          <div className="reveal">
            <ScriptureQuote text={verse.text} reference={verse.reference} locale={locale} />
          </div>
          <div className="reveal">
            <p className="font-body text-xs font-bold tracking-[0.15em] text-poppy">
              {locale === "uk" ? "ХТО МИ" : "WHO WE ARE"}
            </p>
            <p className="mt-3 text-lg leading-relaxed text-charcoal/90">{whoWeAre[locale]}</p>
            <p className="mt-4 text-sm text-charcoal/60">{affiliation[locale]}</p>
          </div>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-5">
          {values.map((v) => (
            <div key={v.title.en} className="reveal">
              <h3 className="font-display text-sm font-semibold text-ink">{v.title[locale]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{v.body[locale]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ministries */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-body text-xs font-bold tracking-[0.15em] text-poppy">
              {locale === "uk" ? "ЩОТИЖНЯ У НАС" : "EVERY WEEK HERE"}
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
              {ui.nav.ministries[locale]}
            </h2>
          </div>
          <Link
            href={`${base}/ministries`}
            className="text-sm font-semibold text-ink underline decoration-poppy decoration-2 underline-offset-4"
          >
            {locale === "uk" ? "Усі служіння" : "All ministries"}
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {ministries.map((m, i) => (
            <MinistryCard key={m.slug} ministry={m} locale={locale} size={i === 0 ? "large" : "regular"} />
          ))}
        </div>
      </section>

      {/* Photo mosaic */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <p className="font-body text-xs font-bold tracking-[0.15em] text-poppy">
          {locale === "uk" ? "У КАДРІ" : "IN FRAME"}
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
          {locale === "uk" ? "Життя нашої громади" : "Our community, in photos"}
        </h2>
        <PhotoMosaic photos={mosaicPhotos} locale={locale} className="mt-8" />
      </section>

      {/* Latest news */}
      <section className="bg-wheat-soft py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-body text-xs font-bold tracking-[0.15em] text-poppy">
                {locale === "uk" ? "ЖИТТЯ ГРОМАДИ" : "COMMUNITY LIFE"}
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
                {ui.nav.news[locale]}
              </h2>
            </div>
            <Link
              href={`${base}/news`}
              className="text-sm font-semibold text-ink underline decoration-poppy decoration-2 underline-offset-4"
            >
              {locale === "uk" ? "Усі новини" : "All news"}
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[...posts]
              .sort((a, b) => (a.date < b.date ? 1 : -1))
              .slice(0, 3)
              .map((post) => (
                <PostCard key={post.slug} post={post} locale={locale} />
              ))}
          </div>
        </div>
      </section>

      <RushnykDivider tone="ink" />

      {/* Mission */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="font-body text-xs font-bold tracking-[0.15em] text-amber-soft">
            {locale === "uk" ? "НАША МІСІЯ" : "OUR MISSION"}
          </p>
          <p className="mx-auto mt-5 max-w-3xl font-serif text-2xl italic leading-snug text-wheat sm:text-3xl">
            {mission[locale]}
          </p>
          <div className="mx-auto mt-8 h-px w-16 bg-amber" />
        </div>
      </section>

      {/* Plan your visit strip */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-wheat-soft p-8 ring-1 ring-charcoal/5 sm:flex-row sm:items-center sm:p-12">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              {ui.planVisit[locale]}
            </h2>
            <p className="mt-2 max-w-md text-charcoal/70">{contact.addressLines[locale].join(", ")}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${contact.mapsQuery}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-wheat transition-colors hover:bg-ink-soft"
            >
              {ui.getDirections[locale]}
            </a>
            <Link
              href={`${base}/visit`}
              className="rounded-full border border-charcoal/20 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-charcoal/5"
            >
              {ui.nav.visit[locale]}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
