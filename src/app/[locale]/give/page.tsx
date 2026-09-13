import Image from "next/image";
import type { Metadata } from "next";
import { contact, giving, ui, type Locale } from "../../../../content/church";
import RushnykDivider from "../../../components/RushnykDivider";
import ScriptureQuote from "../../../components/ScriptureQuote";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { title: ui.nav.give[locale] };
}

export default async function GivePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-8 pt-16 sm:pt-20">
        <p className="font-body text-xs font-bold tracking-[0.15em] text-poppy">
          {locale === "uk" ? "СЛУЖІННЯ" : "STEWARDSHIP"}
        </p>
        <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
          {ui.nav.give[locale]}
        </h1>
        <p className="mt-4 max-w-xl text-charcoal/70">
          {locale === "uk"
            ? "Дякуємо, що підтримуєте служіння нашої церкви — фінансово чи молитвою."
            : "Thank you for supporting our church's ministry — financially or in prayer."}
        </p>
      </section>

      <RushnykDivider tone="wheat" />

      <section className="mx-auto max-w-3xl px-5 py-14 sm:py-16">
        <ScriptureQuote
          locale={locale}
          text={{
            uk: "«Кожен нехай дає, як серце йому призволяє, не в смутку й не з примусу, бо Бог любить того, хто з радістю дає»",
            en: "“Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.”",
          }}
          reference={{ uk: "2 Коринтян 9:7", en: "2 Corinthians 9:7" }}
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-[220px_1fr] sm:items-center">
          <div className="w-full overflow-hidden rounded-2xl bg-wheat-soft p-4 ring-1 ring-charcoal/5 sm:w-[220px]">
            <Image
              src="/photos/give/zelle-qr.png"
              alt={locale === "uk" ? "QR-код Zelle для пожертв" : "Zelle QR code for giving"}
              width={233}
              height={305}
              className="h-auto w-full"
            />
          </div>
          <div>
            <p className="font-body text-xs font-bold tracking-[0.15em] text-poppy">ZELLE</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink">{giving.zelleName}</h2>
            <p className="mt-2 text-charcoal/75">
              {locale === "uk" ? (
                <>
                  Відкрийте застосунок вашого банку → Zelle → знайдіть{" "}
                  <span className="font-semibold text-ink">{giving.zelleHandle}</span>, або відскануйте
                  QR-код Zelle у застосунку банку.
                </>
              ) : (
                <>
                  Open your banking app → Zelle → search{" "}
                  <span className="font-semibold text-ink">{giving.zelleHandle}</span>, or scan the Zelle QR
                  code in your banking app.
                </>
              )}
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-wheat-soft p-6 ring-1 ring-charcoal/5 sm:p-8">
          <h2 className="font-display text-lg font-semibold text-ink">
            {locale === "uk" ? "Особисто" : "In person"}
          </h2>
          <p className="mt-2 text-charcoal/75">
            {locale === "uk"
              ? "Пожертву також можна залишити особисто під час недільного богослужіння о 14:00."
              : "You can also give in person during Sunday worship at 2:00 PM."}
          </p>
          <p className="mt-4 text-sm text-charcoal/60">{contact.addressLines[locale].join(", ")}</p>
        </div>
      </section>
    </>
  );
}
