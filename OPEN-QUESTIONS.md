# Open questions — needs client confirmation before launch

Last updated: 2026-09-13 (16 real posts now migrated/added total — see
`content/posts.ts` — plus a real printed church bulletin the client
photographed, which resolved several items below)

## Facts pulled from the two existing sites that need a human to confirm

1. **Tuesday prayer service time — resolved, 8:30 PM.** The church's own
   printed Sunday bulletin (2026-08-30 edition, found in `Downloads`,
   photographed by the client) lists "ВІВТОРОК - МОЛИТОВНЕ СЛУЖІННЯ
   (ZOOM) - 08:30" — a current, primary-source confirmation. Updated
   `content/church.ts` → `schedule` from 8:00 to 8:30 PM. No longer open.
2. **Pastor's surnames — one resolved.** The same 2026-08-30 bulletin
   lists that Sunday's preachers: "ПРОПОВІДЬ: п. Близнюк Леонід" (пастор
   Leonid **Bliznyuk**) and "ПРОПОВІДЬ: Луценко Володимир" (Volodymyr
   **Lutsenko**, no "п." title shown — unclear if he's clergy or a member
   preaching that day). `content/church.ts` → `pastors` now reads "Віктор,
   Леонід Близнюк, Кирило" — Viktor's and Kyrylo's surnames, everyone's
   role/title, and photos are still needed. Also confirm whether Volodymyr
   Lutsenko should be added as a fourth name.
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
4. **Contact email/phone — reuse or replace?** Both existing sites list
   phone `267-686-1420` and email `contact@ukrlancaster.church`. This site
   reuses both as-is. Confirm these still work, especially the email if the
   new site moves to a new domain.
5. **Domain name — one data point found.** The 2026-08-30 bulletin prints
   `WWW.UKRCHURCHLANCASTER.COM` as the church's site — a signal (not a
   final decision) that this may be the domain they consider "official,"
   even though that site itself is mostly unfinished (see CLAUDE.md). Site
   is still built without a live domain; `src/app/robots.ts` and a
   `sitemap.ts` (not yet added) both need an absolute production URL once
   one is picked.

6. **Zelle QR code — resolved.** The client saved the real QR screenshot
   to `Pictures/Screenshots`; it's now on `/give` as
   `public/photos/give/zelle-qr.png`. No longer open.
7. **Google Calendar embed — needs the real link/ID.** The client asked
   for "a Google Calendar like there was before" (2026-09-13).
   `/calendar` now has a `GoogleCalendarEmbed` component wired up and
   ready — it just needs `content/church.ts` → `googleCalendar.embedUrl`
   set. Neither old site actually had a `/calendar` or `/events` page
   (both 404), so send the calendar's public/embed link (Google Calendar
   → Settings → that calendar → "Integrate calendar" → Public URL, or the
   calendar ID that looks like `something@group.calendar.google.com`) and
   this becomes live. Until then it shows an honest placeholder, plus a
   qualitative "what we usually do each year" section (kids camp in
   summer, Harvest Festival in September, etc.) linking to real past News
   posts as examples.
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

## Content decisions made without asking (flagging, not blocking)

- Kept the **c. 2005** founding year on the site itself (About page) since
  it's the only one confirmed by the church's own recent posts, but
  logged the Bliznyuk-family coincidence for a human to actually reconcile
  (see #3) rather than merging the two stories myself.
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
