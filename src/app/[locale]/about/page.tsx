import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  whoWeAre,
  mission,
  values,
  affiliation,
  pastors,
  pastorsEn,
  foundingYear,
  anniversaryEvent,
  verse,
  statementOfFaith,
  ui,
  type Locale,
} from "../../../../content/church";
import RushnykDivider from "../../../components/RushnykDivider";
import PhotoPlaceholder from "../../../components/PhotoPlaceholder";
import ScriptureQuote from "../../../components/ScriptureQuote";
import FaithAccordion from "../../../components/FaithAccordion";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "uk" ? "Про нас та у що ми віримо" : "About & What We Believe",
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <>
      <section className="relative h-[46vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="/photos/about.jpg"
          alt={locale === "uk" ? "Пшениця у теплому світлі" : "Wheat in warm light"}
          fill
          priority
          sizes="100vw"
          className="hero-photo object-cover"
        />
        <div className="absolute inset-0 bg-ink/60" />
        <div className="relative mx-auto flex h-full max-w-6xl items-end px-5 pb-10">
          <h1 className="font-display text-4xl font-semibold text-wheat sm:text-5xl">
            {ui.nav.about[locale]}
          </h1>
        </div>
      </section>

      <RushnykDivider tone="wheat" />

      <section className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
        <p className="font-body text-xs font-bold tracking-[0.15em] text-poppy">
          {locale === "uk" ? "ХТО МИ" : "WHO WE ARE"}
        </p>
        <p className="mt-3 text-xl leading-relaxed text-charcoal/90">{whoWeAre[locale]}</p>

        <p className="mt-10 font-body text-xs font-bold tracking-[0.15em] text-poppy">
          {locale === "uk" ? "НАША МІСІЯ" : "OUR MISSION"}
        </p>
        <p className="mt-3 font-serif text-xl italic leading-relaxed text-ink">{mission[locale]}</p>

        <p className="mt-8 text-sm text-charcoal/60">{affiliation[locale]}</p>
      </section>

      <section className="bg-wheat-soft py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            {locale === "uk" ? "У що ми віримо, коротко" : "What we believe, in brief"}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v.title.en} className="rounded-2xl bg-wheat p-6 ring-1 ring-charcoal/5">
                <h3 className="font-display text-base font-semibold text-ink">{v.title[locale]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{v.body[locale]}</p>
              </div>
            ))}
          </div>
          <a
            href="#beliefs"
            className="mt-8 inline-block text-sm font-semibold text-ink underline decoration-poppy decoration-2 underline-offset-4"
          >
            {locale === "uk" ? "Читати повне Визнання Віри ↓" : "Read the full Statement of Faith ↓"}
          </a>
        </div>
      </section>

      <RushnykDivider tone="ink" />

      {/* Statement of Faith */}
      <section id="beliefs" className="scroll-mt-20 bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <p className="font-body text-xs font-bold tracking-[0.15em] text-amber-soft">
            {locale === "uk" ? "ВИЗНАННЯ ВІРИ" : "STATEMENT OF FAITH"}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-wheat sm:text-4xl">
            {ui.nav.beliefs[locale]}
          </h2>
          <div className="mt-8 flex justify-center">
            <ScriptureQuote text={verse.text} reference={verse.reference} locale={locale} tone="dark" />
          </div>
        </div>
      </section>

      <section className="bg-wheat">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
          <p className="mb-8 text-sm leading-relaxed text-charcoal/60">
            {locale === "uk"
              ? "Це 15 статей нашого Визнання Віри — переконань, які об'єднують нашу громаду. Натисніть на будь-яку, щоб прочитати повністю."
              : "These are the 15 articles of our Statement of Faith — the convictions that hold our congregation together. Tap any one to read it in full."}
          </p>
          <FaithAccordion articles={statementOfFaith} locale={locale} />
        </div>
      </section>

      <RushnykDivider tone="wheat" />

      {/* Pastoral leadership */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid gap-8 sm:grid-cols-[220px_1fr] sm:items-center">
          <PhotoPlaceholder
            label={
              locale === "uk"
                ? "Фото пасторів — надішліть, коли буде готово"
                : "Pastors' photo — send when ready"
            }
          />
          <div>
            <p className="font-body text-xs font-bold tracking-[0.15em] text-poppy">
              {locale === "uk" ? "ПАСТОРСЬКЕ СЛУЖІННЯ" : "PASTORAL LEADERSHIP"}
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
              {(locale === "uk" ? pastors : pastorsEn).join(", ")}
            </h2>
            <p className="mt-3 max-w-xl text-charcoal/75">
              {locale === "uk"
                ? "Прізвища, служіння кожного та фото ще будуть додані. Завітайте в неділю — і познайомтесь особисто."
                : "Surnames, each one's role, and photos are still to come. Come by on a Sunday and meet them in person."}
            </p>
          </div>
        </div>
      </section>

      <RushnykDivider tone="ink" />

      <section className="bg-ink py-16 text-center sm:py-20">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="font-display text-2xl font-semibold text-wheat sm:text-3xl">
            {locale === "uk" ? "Наша історія" : "Our History"}
          </h2>
          <p className="mt-4 text-wheat/75">
            {locale === "uk"
              ? `Церква служить українській громаді Ланкастера з ${foundingYear} року. `
              : `The church has served Lancaster's Ukrainian community since ${foundingYear}. `}
            {anniversaryEvent[locale]}
          </p>
          <Link
            href={`/${locale}/news/20th-anniversary-recap-2025`}
            className="mt-6 inline-block text-sm font-semibold text-amber-soft underline decoration-2 underline-offset-4"
          >
            {locale === "uk" ? "Читати про святкування 20-річчя" : "Read about the 20th-anniversary celebration"}
          </Link>
        </div>
      </section>
    </>
  );
}
