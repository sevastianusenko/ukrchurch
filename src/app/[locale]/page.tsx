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
  getUpcomingEvents,
  buildingFund,
  prayForUkraine,
  pastors,
  pastorsEn,
  type Locale,
} from "../../../content/church";
import RushnykDivider from "../../components/RushnykDivider";
import ScriptureQuote from "../../components/ScriptureQuote";
import ServiceTimesCard from "../../components/ServiceTimesCard";
import MinistryCard from "../../components/MinistryCard";
import PostCard from "../../components/PostCard";
import PhotoMosaic from "../../components/PhotoMosaic";
import HeroPhotoWall from "../../components/HeroPhotoWall";
import { formatDate } from "../../components/PostCard";
import { posts } from "../../../content/posts";

const mosaicPhotos = [
  { src: "/photos/womens-retreat-2023.jpg", alt: { uk: "Жіночий реколекції «Закохана в Слово»", en: "The “In Love with the Word” women's retreat" } },
  { src: "/photos/news/baptism-2025/hero.jpg", alt: { uk: "Водне хрещення", en: "Water baptism" } },
  { src: "/photos/camp-group-2023.jpg", alt: { uk: "Табір разом на галявині", en: "The camp community together on the field" } },
  { src: "/photos/camp-vbs-2023.jpg", alt: { uk: "Дитячий табір за біблійною тематикою", en: "Bible-themed kids camp" } },
  { src: "/photos/news/sisters-christmas-workshop-2025/2.jpeg", alt: { uk: "Сестринське служіння", en: "Women's ministry" } },
  { src: "/photos/news/new-year-2026/hero.jpg", alt: { uk: "Новорічна зустріч церкви", en: "Church New Year's gathering" } },
  { src: "/photos/news/christmas-caroling-2025/hero.jpg", alt: { uk: "Різдвяна коляда", en: "Christmas caroling" } },
  { src: "/photos/harvest-offering-2026.jpg", alt: { uk: "Приношення плодів врожаю на Святі Жнив", en: "Bringing the harvest offering at the Harvest Festival" } },
] as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const base = `/${locale}`;
  const upcomingEvents = getUpcomingEvents();

  const heroTitle =
    locale === "uk" ? "Двері відчинені щонеділі" : "Our doors are open every Sunday";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink">
        <div className="relative min-h-[640px] w-full md:h-[92vh] md:min-h-[600px]">
          <HeroPhotoWall />
          {/* An even veil over the whole wall, then darker toward the text:
              the bottom on phones, the left side from md up. */}
          <div className="absolute inset-0 bg-ink/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink from-25% via-ink/70 via-50% to-transparent md:bg-gradient-to-r md:from-ink/90 md:from-0% md:via-ink/60 md:via-45% md:to-transparent md:to-90%" />

          <div className="relative mx-auto flex min-h-[640px] max-w-6xl flex-col justify-end gap-8 px-5 pb-12 pt-[26vh] md:h-full md:min-h-0 md:pb-16 md:pt-0">
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

            {/* In the text column, so it never covers the photo wall. */}
            <ServiceTimesCard locale={locale} />
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

      {/* Pastors teaser */}
      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="flex flex-col items-start gap-8 rounded-3xl bg-ink p-8 ring-1 ring-charcoal/5 sm:flex-row sm:items-center sm:p-10">
          <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-2xl sm:h-40 sm:w-40">
            <Image
              src="/photos/pastors.jpg"
              alt={
                locale === "uk"
                  ? "Наші пастори отримують квіти від церкви"
                  : "Our pastors receiving flowers from the congregation"
              }
              fill
              sizes="(min-width: 640px) 160px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="font-body text-xs font-bold tracking-[0.15em] text-amber-soft">
              {locale === "uk" ? "ПАСТОРСЬКЕ СЛУЖІННЯ" : "PASTORAL LEADERSHIP"}
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-wheat">
              {(locale === "uk" ? pastors : pastorsEn).join(", ")}
            </h2>
            <p className="mt-2 max-w-xl text-wheat/75">
              {locale === "uk"
                ? "Познайомтесь з нашими пасторами та дізнайтесь більше про церкву."
                : "Meet our pastors and learn more about the church."}
            </p>
          </div>
          <Link
            href={`${base}/about`}
            className="shrink-0 rounded-full bg-amber px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-amber-soft"
          >
            {locale === "uk" ? "Про нас" : "About us"}
          </Link>
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
          {locale === "uk" ? "Життя нашої церкви" : "Our community, in photos"}
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

      {/* Building fund */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="flex flex-col items-start gap-8 rounded-3xl bg-wheat-soft p-8 ring-1 ring-charcoal/5 sm:flex-row sm:items-center sm:p-12">
          <div className="flex-1">
            <p className="font-body text-xs font-bold tracking-[0.15em] text-poppy">
              {locale === "uk" ? "СЛУЖІННЯ" : "STEWARDSHIP"}
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
              {buildingFund.heading[locale]}
            </h2>
            <p className="mt-3 max-w-xl text-charcoal/75">{buildingFund.body[locale]}</p>
          </div>
          <Link
            href={`${base}/give`}
            className="shrink-0 rounded-full bg-amber px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-amber-soft"
          >
            {ui.nav.give[locale]}
          </Link>
        </div>
      </section>

      {/* Pray for Ukraine */}
      <section className="relative h-[46vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="/photos/pray-for-ukraine.jpg"
          alt={
            locale === "uk"
              ? "Поле соняшників під синім небом, Полтавська область, Україна"
              : "A sunflower field under a blue sky, Poltava region, Ukraine"
          }
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <a
          href="https://commons.wikimedia.org/wiki/File:%D0%9F%D0%BE%D0%BB%D0%B5_%D0%BF%D0%BE%D0%B4%D1%81%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D0%B8%D0%BA%D0%B0,%D0%BF%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,2015%D0%B3.JPG"
          target="_blank"
          rel="noreferrer"
          className="absolute right-3 top-3 z-10 text-[10px] text-wheat/50 hover:text-wheat/80"
        >
          Photo: Gennadiy Burda / Wikimedia Commons (CC BY-SA 4.0)
        </a>
        <div className="relative mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-5 text-center">
          <h2 className="font-display text-3xl font-semibold text-wheat sm:text-4xl">
            {prayForUkraine.heading[locale]}
          </h2>
          <p className="mt-4 max-w-xl text-wheat/85">{prayForUkraine.body[locale]}</p>
          <a
            href={prayForUkraine.linkUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 text-sm font-semibold text-amber-soft underline decoration-2 underline-offset-4"
          >
            {prayForUkraine.linkLabel[locale]}
          </a>
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
