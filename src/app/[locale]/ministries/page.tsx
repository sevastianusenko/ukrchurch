import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ministries, ui, contact, type Locale } from "../../../../content/church";
import RushnykDivider from "../../../components/RushnykDivider";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { title: ui.nav.ministries[locale] };
}

export default async function MinistriesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-8 pt-16 sm:pt-20">
        <p className="font-body text-xs font-bold tracking-[0.15em] text-poppy">
          {locale === "uk" ? "ЖИТТЯ ЦЕРКВИ" : "CHURCH LIFE"}
        </p>
        <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
          {ui.nav.ministries[locale]}
        </h1>
        <p className="mt-4 max-w-xl text-charcoal/70">
          {locale === "uk"
            ? "Від недільного богослужіння до вівторкової молитви: ось де наша громада живе разом протягом тижня."
            : "From Sunday worship to Tuesday prayer: here's where our congregation lives life together through the week."}
        </p>
      </section>

      <RushnykDivider tone="wheat" />

      <section className="mx-auto max-w-6xl px-5 py-4">
        {ministries.map((m, i) => (
          <div
            key={m.slug}
            className={`flex flex-col items-center gap-8 border-b border-charcoal/10 py-14 sm:gap-12 sm:py-16 lg:flex-row ${
              i % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:w-1/2">
              <Image
                src={m.photo}
                alt={m.alt[locale]}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                {m.title[locale]}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-charcoal/80">{m.description[locale]}</p>
            </div>
          </div>
        ))}
      </section>

      <RushnykDivider tone="ink" />

      <section className="bg-ink py-16 text-center sm:py-20">
        <div className="mx-auto max-w-xl px-5">
          <h2 className="font-display text-2xl font-semibold text-wheat sm:text-3xl">
            {locale === "uk" ? "Приєднуйтесь до нас" : "Join us"}
          </h2>
          <p className="mt-3 text-wheat/75">{contact.addressLines[locale].join(", ")}</p>
          <Link
            href={`/${locale}/visit`}
            className="mt-6 inline-block rounded-full bg-amber px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-amber-soft"
          >
            {ui.planVisit[locale]}
          </Link>
        </div>
      </section>
    </>
  );
}
