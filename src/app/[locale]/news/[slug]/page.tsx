import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales, ui, type Locale } from "../../../../../content/church";
import { posts, getPost } from "../../../../../content/posts";
import RushnykDivider from "../../../../components/RushnykDivider";
import { formatDate } from "../../../../components/PostCard";

export function generateStaticParams() {
  return locales.flatMap((locale) => posts.map((post) => ({ locale, slug: post.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title[locale], description: post.excerpt[locale] };
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const isPoster = post.heroFit === "contain";

  return (
    <>
      {isPoster ? (
        <section className="bg-ink">
          <div className="mx-auto flex max-w-3xl flex-col items-center px-5 pb-10 pt-8">
            <div className="relative max-h-[70vh] w-full max-w-sm">
              <Image
                src={post.hero.src}
                alt={post.hero.alt[locale]}
                width={800}
                height={1200}
                priority
                sizes="(min-width: 640px) 384px, 90vw"
                className="h-auto w-full rounded-xl object-contain"
              />
            </div>
            <div className="mt-6 flex items-center gap-3 text-xs font-bold tracking-[0.1em] text-amber-soft">
              <span>{post.category[locale].toUpperCase()}</span>
              <span className="text-wheat/40">·</span>
              <span className="text-wheat/70">{formatDate(post.date, locale)}</span>
            </div>
            <h1 className="mt-3 text-center font-display text-3xl font-semibold leading-tight text-wheat sm:text-4xl">
              {post.title[locale]}
            </h1>
          </div>
        </section>
      ) : (
        <section className="relative h-[50vh] min-h-[340px] w-full overflow-hidden">
          <Image
            src={post.hero.src}
            alt={post.hero.alt[locale]}
            fill
            priority
            sizes="100vw"
            className="hero-photo object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-ink/10" />
          <div className="relative mx-auto flex h-full max-w-3xl flex-col justify-end px-5 pb-10">
            <div className="flex items-center gap-3 text-xs font-bold tracking-[0.1em] text-amber-soft">
              <span>{post.category[locale].toUpperCase()}</span>
              <span className="text-wheat/40">·</span>
              <span className="text-wheat/70">{formatDate(post.date, locale)}</span>
            </div>
            <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-wheat sm:text-4xl">
              {post.title[locale]}
            </h1>
          </div>
        </section>
      )}

      <RushnykDivider tone="wheat" />

      <article className="mx-auto max-w-3xl px-5 py-14 sm:py-16">
        <Link
          href={`/${locale}/news`}
          className="text-sm font-semibold text-ink/60 underline decoration-poppy decoration-2 underline-offset-4 hover:text-ink"
        >
          {locale === "uk" ? "← Усі новини" : "← All news"}
        </Link>

        <div className="mt-8 space-y-5">
          {post.body.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed text-charcoal/90">
              {paragraph[locale]}
            </p>
          ))}
        </div>

        {post.gallery && post.gallery.length > 0 && (
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {post.gallery.map((img) => (
              <div key={img.src} className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={img.src}
                  alt={img.alt[locale]}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </article>

      <RushnykDivider tone="ink" />

      <section className="bg-ink py-14 text-center sm:py-16">
        <div className="mx-auto max-w-xl px-5">
          <h2 className="font-display text-xl font-semibold text-wheat sm:text-2xl">
            {locale === "uk" ? "Приєднуйтесь до нас" : "Join us"}
          </h2>
          <Link
            href={`/${locale}/visit`}
            className="mt-5 inline-block rounded-full bg-amber px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-amber-soft"
          >
            {ui.planVisit[locale]}
          </Link>
        </div>
      </section>
    </>
  );
}
