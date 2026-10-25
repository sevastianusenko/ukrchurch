import Image from "next/image";
import { heroWallPhotos } from "../../content/church";

// Home hero background: a tilted wall of small real photos. Each row is a
// strip that slides along its own length, alternate rows in opposite
// directions, so on the tilt the photos drift diagonally both ways. Each
// strip holds its photos twice, so moving it by half its width loops
// seamlessly. Static under prefers-reduced-motion. Purely decorative.
const ROWS = 14;
const PER_ROW = 12;
// Durations differ per row so the wall never moves in lockstep.
const SECONDS = [95, 120, 105, 130, 90, 115, 100, 125, 110, 135, 98, 122, 108, 128];

// Stepping through the list by a stride coprime with its length visits
// every photo once in a well-mixed order (no run of six baptism shots).
function mixed(photos: string[]) {
  const n = photos.length;
  let stride = 23;
  while (gcd(stride, n) !== 1) stride++;
  return Array.from({ length: n }, (_, i) => photos[(i * stride) % n]);
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

export default function HeroPhotoWall() {
  const photos = mixed(heroWallPhotos);
  const rows = Array.from({ length: ROWS }, (_, r) =>
    Array.from({ length: PER_ROW }, (_, k) => photos[(r * PER_ROW + k) % photos.length]),
  );

  return (
    <div className="absolute inset-0 overflow-hidden bg-ink" aria-hidden="true">
      <div className="hero-photo absolute left-1/2 top-1/2 flex w-[160%] -translate-x-1/2 -translate-y-1/2 -rotate-12 flex-col gap-2 md:w-[130%] md:gap-3">
        {rows.map((row, r) => (
          <div
            key={r}
            className={`photo-wall-row flex w-max ${r % 2 ? "photo-wall-row--reverse" : ""}`}
            // Negative delays start each row mid-way, so nothing lines up.
            style={{ animationDuration: `${SECONDS[r]}s`, animationDelay: `-${r * 7}s` }}
          >
            {[...row, ...row].map((src, k) => (
              <Image
                key={k}
                src={src}
                alt=""
                width={320}
                height={224}
                unoptimized
                loading="lazy"
                // Spacing is a right margin, not flex gap, so the strip's
                // half width is exactly one copy and the loop has no jump.
                className="mr-2 h-20 w-[114px] shrink-0 rounded-lg object-cover md:mr-3 md:h-28 md:w-40 md:rounded-xl"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
