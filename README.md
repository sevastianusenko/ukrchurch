# Ukrainian Evangelical Baptist Church of Lancaster

Bilingual (Ukrainian / English) website for the Українська
Євангельсько-Баптистська Церква м. Ланкастер — Next.js 16, TypeScript,
Tailwind CSS v4.

Start here: **`CLAUDE.md`** (project rules), **`DESIGN.md`** (design
system), **`OPEN-QUESTIONS.md`** (facts still needing client confirmation),
**`PHOTOS-NEEDED.md`** (temporary stock photos to replace with real ones).

## Develop

```bash
npm run dev
```

Visits to `/` redirect to `/uk` (default locale). Both `/uk/...` and
`/en/...` are statically generated for every page.

## Build

```bash
npm run build
```

## Structure

- `content/church.ts` — every bilingual fact on the site (schedule,
  contact info, ministries, the full Statement of Faith). Edit copy here,
  not inside page components.
- `src/app/[locale]/` — pages (`page.tsx` = home, plus `about`, `beliefs`,
  `ministries`, `visit`)
- `src/components/` — shared UI (`Header`, `Footer`, `RushnykDivider` the
  signature embroidery-band divider, `MinistryCard`, `FaithAccordion`, etc.)
- `src/proxy.ts` — locale-redirect middleware (`/` → `/uk`)
- `public/photos/` — currently all temporary CC0 stock, see
  `PHOTOS-NEEDED.md`

Not yet done: production domain, real congregation photos, pastor's
name/photo, deployment to Vercel — see `OPEN-QUESTIONS.md`.
