import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ui, type Locale } from "../../../../content/church";
import {
  COVER_W,
  countLabel,
  coverPath,
  formatSize,
  library,
  libraryUi,
  pdfPath,
  type LibraryCollection,
  type LibraryItem,
} from "../../../../content/library";
import RushnykDivider from "../../../components/RushnykDivider";
import LibraryCover from "../../../components/LibraryCover";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { title: ui.nav.library[locale], description: libraryUi.lead[locale] };
}

// Consecutive runs of issues from the same year, in data order.
function byYear(items: LibraryItem[]) {
  const groups: { year: number | undefined; items: LibraryItem[] }[] = [];
  for (const item of items) {
    const last = groups[groups.length - 1];
    if (last && last.year === item.year) last.items.push(item);
    else groups.push({ year: item.year, items: [item] });
  }
  return groups;
}

const ISSUE_GRID = "grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6";
const ISSUE_SIZES = "(min-width: 1024px) 160px, (min-width: 768px) 20vw, (min-width: 640px) 25vw, 33vw";

export default async function LibraryPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const [church, ...rest] = library;

  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-8 pt-16 sm:pt-20">
        <p className="font-body text-xs font-bold tracking-[0.15em] text-poppy">{libraryUi.eyebrow[locale]}</p>
        <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
          {ui.nav.library[locale]}
        </h1>
        <p className="mt-4 max-w-xl text-charcoal/70">{libraryUi.lead[locale]}</p>

        <nav className="mt-8 flex flex-wrap gap-2" aria-label={ui.nav.library[locale]}>
          {library.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-wheat-soft px-4 text-sm font-semibold text-ink ring-1 ring-charcoal/10 transition-colors hover:bg-ink hover:text-wheat"
            >
              {c.title[locale]}
              <span className="font-medium text-charcoal/50">{c.items.length}</span>
            </a>
          ))}
        </nav>
      </section>

      <RushnykDivider tone="ink" />

      <ChurchDocuments collection={church} locale={locale} />

      {rest.map((collection) => (
        <section key={collection.id} id={collection.id} className="scroll-mt-20 border-t border-charcoal/10">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
            <CollectionHeading collection={collection} locale={locale} />

            {collection.kind === "books" ? (
              <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
                {collection.items.map((item) => (
                  <LibraryCover
                    key={item.slug}
                    item={item}
                    locale={locale}
                    caption={item.label[locale]}
                    showByline
                    sizes="(min-width: 1024px) 170px, (min-width: 640px) 30vw, 45vw"
                  />
                ))}
              </div>
            ) : collection.groupByYear ? (
              <div className="mt-10 space-y-10">
                {byYear(collection.items).map((group) => (
                  <div key={group.year} className="grid gap-4 md:grid-cols-[5rem_1fr] md:gap-8">
                    <h3 className="font-display text-xl font-semibold text-ink/40 md:pt-1">{group.year}</h3>
                    <div className={ISSUE_GRID}>
                      {group.items.map((item) => (
                        <LibraryCover key={item.slug} item={item} locale={locale} caption={item.label[locale]} sizes={ISSUE_SIZES} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={`mt-10 ${ISSUE_GRID}`}>
                {collection.items.map((item) => (
                  <LibraryCover
                    key={item.slug}
                    item={item}
                    locale={locale}
                    caption={item.year ? `${item.label[locale]} ${item.year}` : item.label[locale]}
                    sizes={ISSUE_SIZES}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </>
  );
}

function CollectionHeading({ collection, locale }: { collection: LibraryCollection; locale: Locale }) {
  return (
    <div className="max-w-2xl">
      <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">{collection.title[locale]}</h2>
      <p className="mt-3 leading-relaxed text-charcoal/75">{collection.description[locale]}</p>
      <p className="mt-3 flex flex-wrap gap-x-3 text-xs font-bold tracking-[0.1em] text-poppy">
        <span>{countLabel(collection.items.length, collection.kind, locale).toUpperCase()}</span>
        <span className="text-charcoal/30">·</span>
        <span className="text-charcoal/55">{libraryUi.language[collection.language][locale].toUpperCase()}</span>
      </p>
    </div>
  );
}

// The church's own documents get the most room: cover, description, and
// both actions visible without opening anything.
function ChurchDocuments({ collection, locale }: { collection: LibraryCollection; locale: Locale }) {
  return (
    <section id={collection.id} className="scroll-mt-20 bg-ink text-wheat">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-16">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">{collection.title[locale]}</h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-wheat/75">{collection.description[locale]}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {collection.items.map((item) => (
            <article key={item.slug} className="flex gap-5 rounded-2xl bg-ink-soft p-5 sm:p-6">
              <Link href={`/${locale}/library/${item.slug}`} className="w-28 shrink-0 sm:w-36" tabIndex={-1} aria-hidden="true">
                <Image
                  src={coverPath(item.slug)}
                  alt=""
                  width={COVER_W}
                  height={item.coverH}
                  sizes="144px"
                  className="h-auto w-full rounded-sm shadow-lg shadow-black/30"
                />
              </Link>
              <div className="flex min-w-0 flex-col">
                <h3 className="font-display text-lg font-semibold sm:text-xl">
                  <Link href={`/${locale}/library/${item.slug}`} className="hover:text-amber-soft">
                    {item.title[locale]}
                  </Link>
                </h3>
                {item.byline && <p className="mt-1 text-sm text-wheat/60">{item.byline[locale]}</p>}
                {item.note && <p className="mt-3 text-sm leading-relaxed text-wheat/80">{item.note[locale]}</p>}
                <p className="mt-3 text-xs text-wheat/50">
                  {item.pages} {libraryUi.pages[locale]} · PDF, {formatSize(item.sizeMb, locale)}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  <Link
                    href={`/${locale}/library/${item.slug}`}
                    className="inline-flex min-h-11 items-center rounded-full bg-amber px-5 text-sm font-semibold text-ink transition-colors hover:bg-amber-soft"
                  >
                    {libraryUi.read[locale]}
                  </Link>
                  <a
                    href={pdfPath(item.slug)}
                    download
                    className="inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold text-wheat ring-1 ring-wheat/25 transition-colors hover:bg-wheat/10"
                  >
                    {libraryUi.download[locale]}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
