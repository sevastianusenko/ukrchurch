# Open questions — needs client confirmation before launch

Last updated: 2026-10-24 (Library added, see #21; the church's own
written history now in hand, see #3)

## Facts pulled from the two existing sites that need a human to confirm

1. **Tuesday prayer service time — resolved, 8:30 PM.** The church's own
   printed Sunday bulletin (2026-08-30 edition, found in `Downloads`,
   photographed by the client) lists "ВІВТОРОК - МОЛИТОВНЕ СЛУЖІННЯ
   (ZOOM) - 08:30" — a current, primary-source confirmation. Updated
   `content/church.ts` → `schedule` from 8:00 to 8:30 PM. No longer open.
2. **Pastor's surnames — all three resolved 2026-10-24:** Віктор Щипайло
   (church history PDF), Леонід Близнюк (bulletin, below), Кирило
   Столяров (client). English spellings "Shchypailo"/"Stoliarov" are
   standard transliterations; confirm if the pastors spell them
   differently. Original note follows. The same
   2026-08-30 bulletin lists that Sunday's preachers: "ПРОПОВІДЬ: п.
   Близнюк Леонід" (пастор Leonid **Bliznyuk**) and "ПРОПОВІДЬ: Луценко
   Володимир" (Volodymyr **Lutsenko**, no "п." title shown — unclear if
   he's clergy or a member preaching that day). `content/church.ts` →
   `pastors` still reads "Віктор, Леонід Близнюк, Кирило" — Viktor's and
   Kyrylo's surnames and everyone's specific role/title are still needed.
   **Photo resolved 2026-10-11:** real Pastor Appreciation Day photos
   (`public/photos/pastors.jpg`, from `content/posts.ts` →
   `pastor-appreciation-2026`) now show all three pastors together on
   `/about` and the homepage — but the photo is a group shot with no
   name tags, so it is captioned with all three names together, not
   matched face-to-name. If individual portraits/captions are wanted
   later, ask the client which face is which. Also still open: confirm
   whether Volodymyr Lutsenko should be added as a fourth name.
3. **Founding history — two stories, not yet reconciled.** The church's
   2025 posts put founding at **c. 2005** (20th anniversary, 2025-09-21 —
   this is what's on the site now, `foundingYear` in `content/church.ts`).
   Separately, a dead site's cached snippet told an origin story about the
   **Bliznyuk family arriving in 1999**. These looked like competing,
   probably-conflicting stories — until the 2026-08-30 bulletin surfaced a
   real, current pastor named **Leonid Bliznyuk** (see #2), which is a
   striking coincidence at minimum and plausibly means the 1999 story is
   also true (e.g., the 20th-anniversary framing could mark when the
   *building* or *legal congregation* was established, distinct from when
   the Bliznyuk family began gathering people in 1999). This needs the
   client or a pastor to reconcile into one real timeline — please don't
   guess a connection here without asking them directly. A fuller written
   history may also exist: the old `.com` site linked to a PDF at the now-
   dead `1ukrchurch.org`, and one migrated post's image is a photo of a
   printed "ІСТОРІЯ м. ЛАНКАСТЕР 2025" document
   (`content/posts.ts` → `harvest-festival-invite-2025`).
   **Update 2026-10-24: that history document itself is now in hand** (the
   client's PDF, author metadata "Leonid Bliznyuk", now on `/library` as
   `public/library/church-history-2025.pdf`). It reconciles both stories:
   a Ukrainian Baptist Church was opened in Lancaster on **8 Aug 1999**
   (Bliznyuk family, initiated by Pastor Ivan Kovalchuk, meeting in New
   Holland; renamed Slavic Baptist Church in 2002); on **14 Aug 2005** a
   members' meeting voted to form the Ukrainian church; first service
   **11 Sep 2005** (~60 people, East Petersburg); official opening
   **13 Nov 2005** at Lancaster Moravian Church. It also names the pastors
   as **Леонід Близнюк and Віктор Щипайло** (no Kyrylo), says the church
   has 60 members, and states a mission sentence.
   **Resolved 2026-10-24 (client asked):** the About page's "Наша
   історія" section is now a 10-step timeline built from this document
   (`content/church.ts` → `aboutPage.history`, rendered at
   `/about#history`, with a link to the full PDF). Viktor's surname is now
   on the site as Щипайло / "Shchypailo" (that English spelling is a
   standard transliteration — confirm how he spells it). Still worth a
   quick read-through by Pastor Leonid: the pastoral handover to Viktor
   is written in the present tense ("are handing on") because the
   document gives no date; the 2022 entry dates the arrival of refugees
   by the start of the full-scale invasion (the document says "з
   початком повномасштабного вторгнення", no year); the deacons' names
   are spelled "Sevastian Usenko" and "David Mararenko" in English; the
   first ten families and the names of people baptized are left in the
   PDF rather than repeated on the page; and the document's own mission
   sentence («Приводити людей до Ісуса Христа…») differs from the
   mission statement already on the site, which was left as is.
4. **Contact email/phone — reuse or replace?** Both existing sites list
   phone `267-686-1420` and email `contact@ukrlancaster.church`. This site
   reuses both as-is. Confirm these still work, especially the email if the
   new site moves to a new domain.
5. **Domain name — resolved 2026-09-14.** The client connected
   `www.ukrlancaster.church` (the domain of the old, previously-migrated
   site) to this Vercel project — confirmed live via `curl` and via a
   Google Search Console screenshot showing that domain's sitemap being
   read. Note this is a *different* domain than the one printed in the
   2026-08-30 bulletin (`WWW.UKRCHURCHLANCASTER.COM`, #4/#2 above) — not
   a contradiction to chase down, just worth knowing both domain names
   exist in the wild if either comes up again. `src/app/sitemap.ts` (its
   `SITE_URL` constant) and `src/app/robots.ts` now point at the real
   domain instead of the `vercel.app` preview URL.

6. **Zelle QR code — resolved.** The client saved the real QR screenshot
   to `Pictures/Screenshots`; it's now on `/give` as
   `public/photos/give/zelle-qr.png`. No longer open.
7. **Google Calendar embed — resolved.** Client sent the real embed URL
   2026-09-13; it's live in `content/church.ts` → `googleCalendar.embedUrl`
   and rendering on `/calendar`. Its timezone parameter is
   `America/Indiana/Vincennes` (Eastern-observing, just an unusual IANA
   name) rather than `America/New_York` — passed through as given.
8. **Harvest Festival 2026 — added, client confirmed 2026-09-13.** The
   flyer found at `Downloads/запрошення на свято жнив 2026.png` (20
   вересня, 11:00, 225 Woodcrest Dr, Ephrata, PA 17522) is now a real News
   post (`content/posts.ts` → `harvest-festival-2026`) and the first entry
   in `content/church.ts` → `upcomingEvents`, which now renders as a
   highlighted card on `/calendar`. The September row in `annualEvents`
   now links to this post instead of last year's recap.
9. **Logo authenticity.** `public/logo.png` (a line-art church-building
   mark) was found in the client's `Pictures/Screenshots` alongside the
   Zelle QR and is now used as the header logo and favicon, on the
   assumption it's the church's real logo — this was never explicitly
   confirmed. Flag if it should be replaced.
10. **"In person" giving on `/give`.** Added "you can also give in person
   during Sunday worship" — this wasn't explicitly confirmed, but every
   physically-meeting congregation collects an offering, so it was treated
   as a safe default rather than a fact needing sourcing. Flag if this
   isn't actually how the church does it.
11. **Two prayer posts added with estimated dates.** 2026-09-13, client
    pasted the text of two past prayer announcements and said to add them
    "with an old date" (they're both already in the past relative to
    today) with photos from `Downloads`. Real flyers were found and used
    (`global prayer.jpg` → `world-prayer-ukraine-2026`,
    `80 зізд обеднання.jpg` → `convention-80-2026`), and the convention
    post's schedule (Fri/Sat/Sun times and addresses) came from the same
    2026-08-30 bulletin as #1/#2. **The publish dates themselves are
    estimates**, since neither was supplied: `world-prayer-ukraine-2026`
    is dated 2026-08-17 (the flyer's own call-to-action date is Aug
    22–23, main date Aug 24); `convention-80-2026` is dated 2026-08-31
    (the bulletin's own announcements section covers "31 серпня — 6
    вересня", and the convention itself ran Sept 4–6). Correct these if
    the real original post dates are known.
12. **Kids Camp 2026 recap — added, no video found.** 2026-09-13, client
    said they'd uploaded photo *and video* of the June 27 camp "with an
    old date." Found 6 real camera photos in `Downloads`
    (`20260627_*.jpg`, resized from ~4000×3000 down to ~2000×1500 to keep
    the repo reasonable) and used them for a new post
    (`content/posts.ts` → `kids-camp-2026-recap`, dated 2026-06-30,
    estimated). **No video file was found** anywhere recently modified in
    `Downloads`, `Pictures`, or `Videos` — it may still be uploading, or
    intended for the church's YouTube channel (`@UEBCLancaster`) rather
    than a direct file. If it's on YouTube, send the link and it can be
    embedded on this post.
13. **Design direction changed twice on the hero, same day.** 2026-09-13:
    (a) client said the neutral-background move should extend to remove
    "beige/cream" everywhere — `wheat`/`wheat-soft` tokens in
    `globals.css` changed from warm cream to neutral near-white/white
    (see `DESIGN.md`). (b) Home hero went stock-wheat → real bake-sale
    photo → real kids-camp-soccer photo ("не наше," rejected) → **back to
    a wheat field**, this time a high-quality real photograph (Wikimedia
    Commons, CC BY-SA 3.0, credited in a small corner link on the hero —
    see `PHOTOS-NEEDED.md`). About page's hero got the real bake-sale
    photo instead, since a second wheat photo there would undercut the
    "remove beige" direction. Net effect: the sitewide palette is neutral,
    but the hero specifically is a wheat field again by explicit request
    — these two aren't in tension, just both true.
14. **Em-dash cleanup — in progress.** 2026-09-13, client asked to remove
    all em-dashes ("—") from site copy (reads as "too AI-generated").
    ~150 instances across `content/church.ts` and `content/posts.ts` are
    being cleaned up by a background pass at the time of this note —
    check `git log` / diff these two files for the actual final state,
    since this note may be written before that pass finished.

15. **Ukrainian Study Bible (УНБ) announcement — added 2026-09-13.** Client
    pasted a message (apparently relayed from a denominational contact,
    addressed "Вітаю брати") saying the УНБ can now be ordered in the US at
    dorohapravdy.org/ukrainska-navchalna-bibliya, and asking churches to
    spread the word. Added as `content/posts.ts` → `ukrainian-study-bible-2026`,
    rewritten from a personal greeting into the church's own announcement
    voice (same approach used for the two August prayer posts, #11). The
    factual details about the edition (Ogienko translation + adapted ESV
    Study Bible notes, ~20,000 notes, 50 articles, 200 maps, 200 tables)
    came from fetching the linked page itself, not invented. **No photo was
    supplied for this one** — used a CC0 open-Bible photo from StockSnap
    (see `PHOTOS-NEEDED.md`) and dated the post 2026-09-13 (today), since
    there was no source photo to date it by.
16. **America's 250th anniversary post — added 2026-09-13, dated July 4.**
    Client asked for "a nice post" about America's 250th, saying the
    congregation is glad and grateful to be here and asking for God's
    blessing on the country — no specific facts to source, just a
    congratulatory message, written accordingly. Used the real greeting
    graphic the client sent themselves via Viber on 2026-07-04
    (`Downloads/viber_image_2026-07-04_11-16-21-094.jpg`) as the post's
    flyer-style hero (`content/posts.ts` → `america-250-2026`, `heroFit:
    "contain"`), and dated the post July 4, 2026 — both the photo's own
    file date and Independence Day itself, and what the client asked for.
17. **Harvest Festival date — resolved, it was 20 вересня (Sept 20).**
    The "27 вересня" flyer mentioned below turned out to be a draft/not
    the real one: a second official flyer was found in `Downloads`
    (`запрошення на свято жнив 2026 оновлений час.png`, "updated time",
    saved 2026-09-13 20:26 — a few hours after the original) confirming
    **20 вересня, but at 12:00 (not the original 11:00)**, same address.
    `content/posts.ts` → `harvest-festival-2026` and `content/church.ts`
    → `upcomingEvents` both updated to 12:00. 2026-10-01: real recap
    photos from the actual event confirmed it happened and was real (see
    #18) — the "27 вересня" Gemini-generated flyer was never used and
    can be treated as an abandoned draft.
18. **Harvest Festival 2026 recap — added 2026-10-01.** Client said there
    were harvest ("жатва"/"жнива") photos in `Downloads` and asked for a
    post. Found 5 real photos from the actual Sept 20 event (numeric
    Telegram-style filenames, no EXIF — dated by the event itself, not
    file metadata): hall decor (wheat sheaves, produce baskets on straw
    bales, a "Дякуємо Господу!" sign, Genesis 1:1 on the projector) and
    the ministers presenting bread and the harvest offering on an
    embroidered rushnyk. Added as `content/posts.ts` →
    `harvest-festival-2026-recap`, and `annualEvents`' September row now
    links to this recap instead of the original invite. Also added
    `getUpcomingEvents()` in `content/church.ts` (filters to date ≥
    today) and switched both consumers (`page.tsx`, `calendar/page.tsx`)
    to use it instead of the raw `upcomingEvents` array — the Harvest
    Festival card had been showing as "upcoming" on the homepage/calendar
    for 11 days after it actually happened, since nothing filtered past
    dates. One of the five photos (ministers with the offering) was also
    added to the homepage mosaic, replacing a `kids-camp-2025` tile (the
    grid already had two other camp photos).
19. **Baptism 2026 — added 2026-10-11, date is a rough guess, please
    confirm.** After adding the Pastor Appreciation post, the client said
    to use *all* the downloaded photos — among them was a second,
    previously-unused batch (6 photos) from a real summer baptism service
    (same pastors, same outdoor pool/cross site as the Pastor Appreciation
    photos, but clearly warmer weather and different clothing — a
    separate, earlier occasion). Added as `content/posts.ts` →
    `baptism-2026`. **Unlike every other estimated date in this file,
    this one has no supporting evidence at all beyond the foliage and
    clothing looking like summer** — no flyer, no bulletin, no
    filename timestamp (these numeric Telegram-export files carry no
    EXIF). Dated 2026-07-12 purely as a placeholder; please confirm or
    correct the real date before this is considered final. Candidates'
    names are also unknown, so the post describes them generically
    ("кілька братів і сестер"/"several brothers and sisters") rather than
    inventing names, unlike the baptism-2025 post which named Vitaliy and
    Danyil from the original migrated content.

20. **About page rebuilt 2026-10-11 with 10 new photos, captions need a
    quick check.** The client sent a new batch (Lord's Supper, a Christmas
    group photo, the "Джерельце" banner with children, prayer with laying
    on of hands, baptism day, a home group, a home visit, a service in a
    wooden hall). Captions only describe what is visible, with no names,
    dates or places. Please confirm: what "Джерельце" is (the church's
    written history, see #3, calls it the summer Christian day camp — so
    likely answered), where the wooden hall is (camp?), and whether the
    laying-on-of-hands photo at the pulpit is an ordination. Also per the
    client, the site now says "церква" instead of "громада" in its own copy
    (the Statement of Faith and migrated posts keep their original wording).

21. **Library (`/library`) added 2026-10-24 — publishing rights need a
    yes.** The client dropped 84 files in `Downloads` "to go on the site."
    78 went up on `/library` with an on-site PDF.js reader
    (`content/library.ts`, files in `public/library/`). **Same day the
    client said to remove the books and everything in Russian**: the six
    (Russian-language) books and the 17 issues of the Russian newspaper
    «Разумный замысел» were deleted, leaving 55 items (2 church documents
    + «Вісник Правди», «Свічник», «За євангельську віру»). Please confirm:
    - **Copyright.** The three remaining magazines are third-party
      publications. They're widely shared in churches, but the church
      should be sure it may host them publicly. Easy to pull any single
      issue: delete its entry in `content/library.ts` and its PDF. (The
      removed PDFs are still in the GitHub repo's history from commit
      `f1a3789`.)
    - **Статут.** The supplied PDF is a print-ready booklet (pages paired
      28|1, 2|27…); the on-site copy was re-ordered 1–28 for reading, text
      untouched. Its adoption date is printed blank ("«__» «___» 2007
      року"). Confirm it's the current statute and meant to be public.
    - **Not added:** `Програмка_25 ЖОВТНЯ_2026.pub` is a Publisher file,
      not a magazine (export to PDF if it should go up). Byte-identical
      duplicates were skipped (`2011_0*_za_viru_1`). The Russian book
      `Вайнгрин…pdf` was an empty iPhone Mail placeholder, and is out of
      scope now anyway.
    - **Labels** come only from each PDF's own cover/masthead/imprint.
      «Свічник» 1/2010 has no cover page in the supplied file, and it and
      «Вісник Правди» 3/2010 print no running number, so none is shown.
    - **Size.** ~200 MB of PDFs now live in the repo; the largest single
      file is 19 MB. If Vercel or GitHub ever push back on size, move
      `public/library/*.pdf` to Vercel Blob and point `pdfPath()` at it.

## Content decisions made without asking (flagging, not blocking)

- ~~Kept the **c. 2005** founding year on the site itself~~ Superseded
  2026-10-24: the church's own written history reconciles 1999 and 2005,
  and the About page timeline now follows it (see #3).
- English mission-statement copy was lightly smoothed for grammar from the
  church's own published English text (translation artifacts fixed,
  meaning unchanged) — see `/content/church.ts` for both versions.
- Most photography is still temporary CC0 stock, not the real
  congregation — see `/PHOTOS-NEEDED.md`. The News section
  (`/news`) is the exception: its 27 photos are real, migrated from the
  church's own posts.
- Migrated all 14 posts found on `ukrlancaster.church`'s WordPress REST
  API (`/wp-json/wp/v2/posts`) — `ukrchurchlancaster.com` had none (empty
  `[]` response). If the church has posted more since 2026-09-13, or has
  posts on Facebook that never made it to either website, those aren't
  included yet.
- Two flyer graphics (`christmas-concert-2025`, `bake-sale-invite-2025`)
  had a date/time printed directly on the image; those were used as the
  source of truth over the vaguer running text ("this Sunday").
- Merged `/beliefs` into `/about` (2026-09-13, client request) — the full
  Statement of Faith now lives at `/about#beliefs`. Old `/beliefs` links
  redirect (see `next.config.ts`).
- Fixed a real header layout bug the client screenshotted: with 7 nav
  items the phone-number button had no `whitespace-nowrap`/`shrink-0` and
  was wrapping into 3 lines inside its `rounded-full` pill. Fixed, and
  simplified the header by dropping the separate "Give" button in favor
  of a poppy-colored nav link (one fewer competing pill).
