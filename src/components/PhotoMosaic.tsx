import Image from "next/image";
import type { Bi, Locale } from "../../content/church";

type Photo = { src: string; alt: Bi };

export default function PhotoMosaic({
  photos,
  locale,
  className = "",
}: {
  photos: readonly Photo[];
  locale: Locale;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 ${className}`}>
      {photos.map((photo) => (
        <div key={photo.src} className="group relative aspect-square overflow-hidden rounded-xl">
          <Image
            src={photo.src}
            alt={photo.alt[locale]}
            fill
            sizes="(min-width: 640px) 25vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
