import type { Metadata } from "next";
import { ui, type Locale } from "../../../../content/church";
import { posts } from "../../../../content/posts";
import RushnykDivider from "../../../components/RushnykDivider";
import PostCard from "../../../components/PostCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { title: ui.nav.news[locale] };
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-8 pt-16 sm:pt-20">
        <p className="font-body text-xs font-bold tracking-[0.15em] text-poppy">
          {locale === "uk" ? "ЖИТТЯ ГРОМАДИ" : "COMMUNITY LIFE"}
        </p>
        <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
          {ui.nav.news[locale]}
        </h1>
        <p className="mt-4 max-w-xl text-charcoal/70">
          {locale === "uk"
            ? "Свята, служіння, хрещення, табори: те, чим живе наша церква протягом року."
            : "Celebrations, outreach, baptisms, camps: what our church has been living through the year."}
        </p>
      </section>

      <RushnykDivider tone="wheat" />

      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((post) => (
            <PostCard key={post.slug} post={post} locale={locale} />
          ))}
        </div>
      </section>
    </>
  );
}
