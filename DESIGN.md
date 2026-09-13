# Design system — Ukrainian Evangelical Baptist Church of Lancaster

## Brief, restated

A Ukrainian Baptist congregation in Lancaster, PA. Mood: **~30%
conservative, ~70% youthful.** Read literally: the dominant voice is warm,
bright, contemporary-worship energy (bold type, real people, an active kids
camp with a literal water slide) — with a quieter, dignified register held
in reserve for Scripture, the Statement of Faith, and the church's history,
so the site never feels like it's trivializing what it's actually about.

The one thing in this subject's world that is genuinely specific to it —
not generic "church," not generic "Ukrainian" — is the **rushnyk**: the
embroidered ritual cloth every Ukrainian church and home uses to dress an
icon, a loaf of bread, a doorway. Its cross-stitch geometry (rows of small
diamonds/crosses in a repeating band) is the signature motif here, rendered
in the site's own palette rather than literal flag blue-and-yellow, so it
reads as *textile heritage* rather than a national emblem pasted on a
website.

## Color

| Token | Hex | Use |
|---|---|---|
| `wheat` | `#F6F6F4` | Primary light background — neutral, near-white (changed 2026-09-13 from a warm cream `#F6EFE3` at the client's request; token name kept for minimal diff even though it's no longer literally wheat-toned) |
| `wheat-soft` | `#FFFFFF` | Card/surface background, pure white |
| `charcoal` | `#2A2622` | Body text, warm near-black (never pure `#000`) |
| `ink` | `#1E2440` | Deep indigo — dark sections (footer, Beliefs page hero, the "30% conservative" anchor) |
| `amber` | `#E28C2B` | Primary accent — CTAs, links, active nav state ("70% youthful" warmth) |
| `poppy` | `#C84B34` | Secondary accent — used sparingly, tags/highlights/embroidery motif thread |
| `meadow` | `#4B7357` | Tertiary accent — ministries needing a second color (kids/youth), embroidery motif thread |

Rule: no more than two accents (`amber` + one of `poppy`/`meadow`) active on
any single section. `ink` sections get `wheat` text and `amber` accents
only — never `poppy`+`meadow` together on dark.

## Type

- **Display — [Unbounded](https://fonts.google.com/specimen/Unbounded)**
  (500/600/800). Chunky, geometric, contemporary — carries the youthful
  70%. Used for H1/H2 only, always sentence case (never letter-spaced caps
  on a full headline). Full Cyrillic support.
- **Editorial/Scripture — [Spectral](https://fonts.google.com/specimen/Spectral)**
  (regular 400 + italic 400/500). Literary serif with warmth, not the
  high-contrast-display-serif cliché. Reserved for: Scripture quotes, the
  numbered Statement of Faith body copy, and pull-quotes. This is the 30%
  conservative anchor — it never appears in a button or nav item.
  Full Cyrillic support.
- **Body/UI — [Manrope](https://fonts.google.com/specimen/Manrope)**
  (400/500/700). Everything else: paragraphs, nav, buttons, captions,
  eyebrow labels (small, tracked-out, sentence case or short real words —
  not keyword strings). Full Cyrillic support.

## Layout concept

Home hero is not a generic headline-over-gradient — its job is the same as
walking up to the door: **tell someone exactly when and where to show up**,
inside a photo of the congregation. A rushnyk-band divider closes the hero
like a threshold.

```
┌──────────────────────────────────────────────┐
│  [nav]                          [UK · EN]     │  <- thin, wheat, sticky
├──────────────────────────────────────────────┤
│                                                │
│   full-bleed photo (community/worship)        │
│   ┌────────────────────────────┐              │
│   │ Unbounded H1 (2 lines)     │              │
│   │ Spectral italic subhead    │              │
│   │ [ Plan your visit → ]      │  amber pill  │
│   └────────────────────────────┘              │
│   ┌─ service-time card, bottom-left, wheat ──┐ │
│   │ SUNDAY · 2:00 PM · 1460 Eden Rd           │ │
│   └────────────────────────────────────────────┘│
├▓▓▓▓▓ rushnyk divider band (amber/poppy/meadow) ▓┤
│  "Who we are" — two-column: Spectral pull-quote │
│  (the 1 Cor. 1:23-24 verse) + short intro copy   │
├──────────────────────────────────────────────┤
│  Ministries — photo card grid (not 3-up default; │
│  6 real ministries, asymmetric grid, sized by    │
│  how central each one is to weekly life)         │
├▓▓▓▓▓ rushnyk divider, inverted colorway ▓▓▓▓▓▓▓▓┤
│  ink section: mission statement, large Spectral  │
│  italic on ink, wheat text, single amber rule    │
├──────────────────────────────────────────────┤
│  Plan-your-visit strip — address/map/times/CTA   │
├──────────────────────────────────────────────┤
│  footer (ink): nav, contact, socials, rushnyk    │
│  top edge, Seva Web Studio credit line           │
└──────────────────────────────────────────────┘
```

Beliefs page inverts the ratio: it opens on an `ink` hero (Spectral italic
verse, quiet), then the 15 articles of the Statement of Faith in a single
readable column with real numbering (1–15) — this is the one place numbered
markers are earned, because the source document itself is numbered and the
order is part of what it communicates as a confession of faith.

Ministries and Visit pages lean fully into the 70%: bright, photo-forward,
Unbounded headings, amber/meadow accents, shorter copy blocks.

## Signature element — the rushnyk divider

An SVG repeating-pattern band (`RushnykDivider` component), a row of small
diamond/cross motifs in 1–2 of the accent colors on `wheat` or `ink`,
used as the section-break device sitewide instead of a plain `<hr>` or
gradient fade. Height ~16–24px, tiles horizontally, respects
`prefers-reduced-motion` (static — no scroll-linked animation on this
element; motion budget is spent elsewhere).

## Motion

- Hero: single orchestrated load-in (photo scale-in 1.04→1 + text fade/rise,
  ~600ms, one time only) — not scattered per-element fades down the page.
  Skip entirely under `prefers-reduced-motion`.
  - Section reveals: a small opacity/translate-y on scroll-into-view,
  applied once, subtle (8px, 400ms) — not a showcase.
- Ministry cards: gentle scale on hover (1.0→1.02) + image zoom, desktop
  only.

## Accessibility floor

- Body text minimum 17px, line-height 1.6+.
- Contrast: body text ≥ 7:1 against its background (`charcoal` on `wheat`
  and `wheat` on `ink` both pass comfortably).
- Visible focus ring (`amber`, 2px offset) on every interactive element.
- Tap targets ≥ 44px.
- `prefers-reduced-motion` respected everywhere motion is used.
