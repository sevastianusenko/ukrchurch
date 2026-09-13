import Image from "next/image";
import type { Ministry, Locale } from "../../content/church";

export default function MinistryCard({
  ministry,
  locale,
  size = "regular",
}: {
  ministry: Ministry;
  locale: Locale;
  size?: "regular" | "large";
}) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl bg-wheat-soft ring-1 ring-charcoal/5 transition-transform duration-300 hover:-translate-y-1 ${
        size === "large" ? "sm:col-span-2 sm:row-span-2" : ""
      }`}
    >
      <div className={`relative w-full overflow-hidden ${size === "large" ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        <Image
          src={ministry.photo}
          alt={ministry.alt[locale]}
          fill
          sizes={size === "large" ? "(min-width: 640px) 66vw, 100vw" : "(min-width: 640px) 33vw, 100vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-lg font-semibold text-ink">{ministry.title[locale]}</h3>
        <p className="text-sm leading-relaxed text-charcoal/75">{ministry.description[locale]}</p>
      </div>
    </article>
  );
}
