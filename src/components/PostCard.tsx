import Image from "next/image";
import Link from "next/link";
import type { NewsPost } from "../../content/posts";
import type { Locale } from "../../content/church";

function formatDate(iso: string, locale: Locale) {
  // Construct from local date parts rather than `new Date(iso)` — a
  // date-only ISO string parses as UTC midnight, which rolls back to the
  // previous day once formatted in any timezone behind UTC (all of the US).
  const [year, month, day] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat(locale === "uk" ? "uk-UA" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(year, month - 1, day));
}

export default function PostCard({ post, locale }: { post: NewsPost; locale: Locale }) {
  const isPoster = post.heroFit === "contain";
  return (
    <Link
      href={`/${locale}/news/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-wheat-soft ring-1 ring-charcoal/5 transition-transform duration-300 hover:-translate-y-1"
    >
      <div className={`relative aspect-[4/3] w-full overflow-hidden ${isPoster ? "bg-ink" : ""}`}>
        <Image
          src={post.hero.src}
          alt={post.hero.alt[locale]}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`transition-transform duration-500 group-hover:scale-105 ${
            isPoster ? "object-contain p-3" : "object-cover"
          }`}
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center gap-3 text-xs font-bold tracking-[0.1em] text-poppy">
          <span>{post.category[locale].toUpperCase()}</span>
          <span className="text-charcoal/30">·</span>
          <span className="text-charcoal/50">{formatDate(post.date, locale)}</span>
        </div>
        <h3 className="font-display text-lg font-semibold text-ink">{post.title[locale]}</h3>
        <p className="text-sm leading-relaxed text-charcoal/75">{post.excerpt[locale]}</p>
      </div>
    </Link>
  );
}

export { formatDate };
