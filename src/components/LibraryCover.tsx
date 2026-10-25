import Image from "next/image";
import Link from "next/link";
import type { Locale } from "../../content/church";
import { COVER_W, coverPath, type LibraryItem } from "../../content/library";

// A cover thumbnail that opens the item in the on-site reader.
export default function LibraryCover({
  item,
  locale,
  caption,
  sizes,
  showByline = false,
}: {
  item: LibraryItem;
  locale: Locale;
  caption: string;
  sizes: string;
  showByline?: boolean;
}) {
  return (
    <Link href={`/${locale}/library/${item.slug}`} className="group flex flex-col gap-3">
      <div className="overflow-hidden rounded-md bg-wheat-soft shadow-md shadow-ink/10 ring-1 ring-charcoal/10 transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none">
        <Image
          src={coverPath(item.slug)}
          alt=""
          width={COVER_W}
          height={item.coverH}
          sizes={sizes}
          className="h-auto w-full"
        />
      </div>
      <div>
        <p className="text-sm font-semibold leading-snug text-ink group-hover:text-poppy">{caption}</p>
        {showByline && item.byline && <p className="mt-1 text-xs leading-snug text-charcoal/60">{item.byline[locale]}</p>}
      </div>
    </Link>
  );
}
