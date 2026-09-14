# Ukrainian Evangelical Baptist Church of Lancaster — Project Instructions

## What this is

Bilingual (Ukrainian / English) marketing + information website for the
**Українська Євангельсько-Баптистська Церква м. Ланкастер** (Ukrainian
Evangelical Baptist Church of Lancaster, PA), 1460 Eden Rd, Lancaster, PA
17601.

The church already has two unfinished sites (`ukrchurchlancaster.com`,
`ukrlancaster.church` — the latter built previously by Seva Web Studio, the
user's own studio). This is a full redesign with new structure, new visual
identity, and a real bilingual toggle. Only **factual information** was
carried over from those two sites — no layout, copy structure, or imagery.

Mood brief from the client: **~30% conservative / ~70% youthful.** The site
should feel warm, energetic and contemporary (bold type, real community
photography, an active youth/kids program on display) while staying rooted
and dignified where the content calls for it (Scripture, the Statement of
Faith, the church's history). See `/DESIGN.md` for the token system this
maps to.

---

## Hard rules — never violate these

1. **Never invent facts.** No pastor name, no founding date, no attendance
   numbers, no testimonials, no addresses/phones/emails beyond what's in
   `/content/church.ts`. If something is needed and missing, write
   `[TBD: ...]` and log it in `/OPEN-QUESTIONS.md`. This is a real church,
   not a demo brand — a wrong fact here is a real-world credibility problem
   for the pastor and the congregation.
2. **Stock photography is temporary and must be tracked.** The client
   explicitly authorized CC0 stock as a placeholder for the initial build
   (real congregation photos to follow). Every stock photo in use must be
   listed in `/PHOTOS-NEEDED.md` with what it currently shows and what real
   photo should replace it. Do not add a new stock photo without adding its
   row there in the same change.
3. **Every page ships in both locales.** No page goes live in Ukrainian
   without its English counterpart (or vice versa). Content lives in
   `/content/church.ts` as `{ uk, en }` pairs — never hardcode
   locale-specific strings inside a page component.
4. **Sources of truth for facts:**
   - Address: 1460 Eden Rd, Lancaster, PA 17601
   - Phone: 267-686-1420
   - Email: contact@ukrlancaster.church
   - Sunday worship: 2:00 PM (14:00), Ukrainian and English
   - Tuesday prayer (Zoom): 8:00 PM — **sources conflict (8:00 vs 8:30 PM),
     see OPEN-QUESTIONS.md, confirm before this goes live**
   - Thursday Bible study (Zoom): 8:00 PM (20:00)
   - Denominational affiliation: member church of the Ukrainian Baptist
     Convention in the USA (UMBS / ukrbaptist.org)
   Do not alter these without the client confirming a change.
   - Pastors (first names only, from a real 2026-01 post): Віктор, Леонід,
     Кирило. No surnames, titles, or photos yet.
   - Founded c. 2005 — the church's own 2025 posts describe a 20th
     anniversary service held 2025-09-21. An earlier, unverified "1999"
     founding story (family Bliznuk, Pastor Ivan Kovalchuk) was found only
     in a dead site's cached snippet and appears to be superseded/wrong —
     see OPEN-QUESTIONS.md.
5. **Do not create pages that duplicate content.** Page inventory: Home,
   About (Про нас — includes the full Statement of Faith at
   `/about#beliefs`; `/beliefs` was merged into this page 2026-09-13 and
   now redirects, see `next.config.ts`), Ministries (Служіння), News
   (Новини — real community-life posts, see below), Calendar (Календар —
   a `GoogleCalendarEmbed` component plus the weekly recurring schedule
   and an honest "annual rhythm" section linking to real past News posts
   instead of inventing future dates — see `content.googleCalendar` and
   OPEN-QUESTIONS.md for the still-missing real calendar link), Give
   (Пожертви — real Zelle info + QR in `content.giving` and
   `public/photos/give/zelle-qr.png`), Visit/Contact (Завітайте до нас).
   The header logo (`public/logo.png`, `src/app/icon.png`) is a real
   asset found in the client's files, not designed — see
   PHOTOS-NEEDED.md re: its authenticity is still unconfirmed.
6. **News/blog content lives in `content/posts.ts`.** These are 14 real
   posts migrated 2026-09-13 from `ukrlancaster.church`'s own WordPress
   blog (`/wp-json/wp/v2/posts`) — real events, real photos of this
   congregation (`public/photos/news/`), not invented. Ukrainian text is
   the church's own original wording; English is either the church's own
   published translation (where the source post already had one) or a
   faithful translation done during migration — never a literal
   word-for-word crib. When adding a new post, follow the same pattern:
   `{slug, date, category, title, excerpt, body[], hero, gallery?}` with
   every field as a `{uk, en}` pair, and add any new photos under
   `public/photos/news/<slug>/`.

---

## Audience

Two real, overlapping groups:
- Ukrainian-speaking families (including recent arrivals/refugees) looking
  for a church community and practical support in the Lancaster, PA area.
- English-primary second-generation youth and adults who grew up in the
  church or are visiting for the first time and want to know "is this for
  me" before showing up on a Sunday.

Both need the service time and address within one screen of landing, and
both need to feel the congregation is alive and current — not a museum
piece — while trusting that the doctrine page is handled with care.

---

## Stack

- Next.js 16 (App Router), TypeScript, Tailwind CSS v4
- Locale routing via `app/[locale]/...` (`uk` default, `en` secondary) —
  no `next-intl`/`next-i18next` dependency, content is plain typed data in
  `/content/church.ts`, picked per-locale at render time
- Static generation for all pages
- Deployed on Vercel, live at `https://www.ukrlancaster.church` (connected 2026-09-14, see OPEN-QUESTIONS.md #5)
- Images: `next/image`, explicit width/height, no layout shift
- No CMS. Content lives in typed data files under `/content`.
- No client component unless it genuinely needs interactivity (language
  switcher, mobile nav, contact form). Default to server components.

---

## Design decisions live in `/DESIGN.md`

Read it before writing any UI. Do not introduce colors, fonts, spacing
values or radii that are not tokens there. The signature motif (the
embroidery/rushnyk divider) should appear consistently, not be reinvented
per page.

---

## Copy rules

- Ukrainian copy is primary/authentic — written the way the congregation
  actually speaks (see the real quotes already in `/content/church.ts`
  pulled from the church's own prior sites). English copy is a clean,
  natural translation of the same meaning, not a literal word-for-word
  crib — fix translation-artifact grammar, never change the meaning.
- Never invent a pastor's welcome message in first person — if there's no
  supplied quote from the pastor, don't fabricate one.
- CTAs say what happens: "Plan your visit", "Call 267-686-1420" — not
  "Learn more", not "Get started".
- No ALL-CAPS eyebrow spam; short caps labels are fine as the design's
  eyebrow style (see DESIGN.md) but keep them short and real (e.g. "SUNDAY
  SERVICE", not a keyword string).

---

## Files to keep current

- `/OPEN-QUESTIONS.md` — every fact still needing client confirmation
- `/PHOTOS-NEEDED.md` — every stock photo in use and what should replace it
- `/DESIGN.md` — token system and signature element
- `/content/church.ts` — single source of truth for all bilingual facts
