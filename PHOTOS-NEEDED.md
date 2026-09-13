# Photos needed — temporary stock in use

> Per `/CLAUDE.md` hard rule 2: the client explicitly authorized CC0 stock
> photography as a placeholder for this build (2026-09-13) — real
> congregation photos to follow. Every image below is symbolic/editorial
> (wheat, candlelight, an open book, hands) or a faces-obscured lifestyle
> shot chosen deliberately over a generic "smiling stock people at a fake
> megachurch" photo, which would misrepresent this specific congregation
> more than an honest symbolic image does. **These must be replaced
> with real photos of this church and its people before launch** (some
> already have been — see below).

Last updated: 2026-09-13. Source: StockSnap.io (CC0 / public domain, no
attribution legally required — original StockSnap URLs kept below for
traceability only).

**Home hero — now a real photo.** Swapped 2026-09-13 from a stock wheat
photo to `bake-sale-recap-2025`'s hero (full-resolution 1600×900 original
pulled from `ukrlancaster.church`, not the 1024×576 thumbnail used on
that news post) — real church members, several in vyshyvanka, at the
charity bake sale. No longer needs replacing.

| File | Used on | Shows | Real photo needed |
|---|---|---|---|
| `/public/photos/about.jpg` | About page | A second wheat-sheaf photo (`light-wheat_7L4MVU7QZO`), darker/moodier crop | A real photo representing the congregation's story — could be a group photo, an anniversary gathering, or the building |
| `/public/photos/worship.jpg` | Ministries — Sunday Worship | Close-up of piano keys, soft light (`piano-keyboard_TNDRHVWFHH`) | Real photo of the worship team / choir / musicians during a service |
| `/public/photos/sunday-school.jpg` | Ministries — Sunday School | A dad reading a book with two young kids in a blanket fort with fairy lights (`family-holiday_AFYO3BBKYT`) — generic family, not this church's kids | Real photo of a Sunday school class — kids with a teacher, craft table, or classroom |
| `/public/photos/youth.jpg` | Ministries — Youth Group | A group of students collaborating around a table with markers and paper, faces mostly out of frame (`people-girls_N444PJYUP9`) | Real photo of the church's youth group meeting |
| `/public/photos/prayer.jpg` | Ministries — Prayer & Home Groups | A lit candle on a wood table by a window (`candle-table_CGNTB37FCT`) | Real photo of a home group or prayer gathering |
| `/public/photos/bible-study.jpg` | Ministries — Bible Study | Black-and-white photo of an open book on a table with coffee, hand turning a page (`book-wood_HYRNRUZTNY`) | Real photo of a Bible study session — open Bibles, people around a table |

**Kids Camp & VBS ministry card is now a real photo** — swapped 2026-09-13 to
`/public/photos/news/kids-camp-2025/hero.jpg`, one of this church's own 2025
camp photos (see "Real content migrated from the old site" below). No
longer needs replacing, unless the church wants a more recent one.

## Zelle QR code — resolved

`/public/photos/give/zelle-qr.png` (2026-09-13) — a cropped screenshot of
the actual Zelle QR the client saved to `Pictures/Screenshots`, now shown
directly on `/give`. (An earlier phone photo of the printed receipt was
not used for this — too much risk of a re-photographed QR not scanning —
but this cropped screenshot is the real thing.)

## Logo

`/public/logo.png` and `src/app/icon.png` (2026-09-13) — a line-art
church-building mark found in the client's `Pictures/Screenshots`, now
used as the header logo (replacing the placeholder "UB" circle) and as
the site favicon/app icon. **Not yet confirmed this is the church's
official logo** — assumed so because the client saved it into the same
folder as the Zelle QR while working on this site. Flag if it should be
swapped for something else.

## Real content migrated from the old site, and from the client directly (not stock)

`/public/photos/news/**` (2026-09-13 onward) are **real photos**, not
stock, and don't need replacing:
- 27 files migrated from the 14 posts on `ukrlancaster.church` (see
  `content/posts.ts`) — kids camp, caroling, the bake sale, baptism, the
  20th-anniversary/Harvest Festival, etc.
- `harvest-festival-2026/hero.png` — a flyer the client had in `Downloads`.
- `world-prayer-ukraine-2026/hero.jpg` and `convention-80-2026/hero.jpg` —
  two more real flyers found in `Downloads` (dated 2026-08-22 and
  2026-08-30 respectively) while looking for assets for the two prayer
  posts the client asked to add 2026-09-13.
- `kids-camp-2026-recap/*.jpg` (6 files) — real camera photos from the
  June 27, 2026 kids camp, found in `Downloads` (`20260627_*.jpg`) and
  resized from ~4000×3000 to ~2000×1500 to keep file size reasonable
  (originals were 4–7 MB each). The client also said they uploaded video —
  none was found; see OPEN-QUESTIONS.md #12.

They're scoped to their own news posts only; none of them were reused on
evergreen pages (like the Ministries grid) except the one explicit swap
noted above, and none showing another church's building/sign (e.g. the
multilingual-service photos, taken at a different congregation's
building) were used anywhere they could be mistaken for this church's own
space.

## Why no photo of "people worshipping together" or "youth group laughing"

Openverse and Wikimedia Commons were searched first (Pexels/Unsplash are
blocked in this environment — see `free-stock-photo-sources` reference).
Neither had convincing, non-awkward modern lifestyle photography of a
diverse group worshipping or a youth group — results were either archival
1900s book scans, unrelated religions/events, or off-topic. Rather than use
a poor match (wrong-looking building, unrelated group of strangers), the
homepage and ministry cards use honest symbolic photography instead. This
is a deliberate placeholder strategy, not a final design decision — see the
table above for exactly what each slot should become.
