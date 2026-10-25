// Library (Бібліотека): magazines and church documents the client supplied
// as PDFs on 2026-10-24. Files live in public/library/<slug>.pdf, covers
// (page 1, rendered 400px wide) in public/library/covers/<slug>.jpg.
//
// Every title, publisher, issue number and date below is read off the PDF
// itself (cover, masthead or imprint). Where an issue doesn't print its
// running number or date, it's left out rather than inferred. Everything
// here is in Ukrainian: on 2026-10-24 the client asked to remove the books
// and anything in Russian. Publishing permission for the third-party
// magazines is still unconfirmed — see OPEN-QUESTIONS.md.

import type { Bi, Locale } from "./church";

export type LibraryItem = {
  slug: string;
  /** Short heading on the card (issue number for magazines). */
  label: Bi;
  /** Full title for the reader page and <title>. */
  title: Bi;
  /** Reader-page H1 when it differs from `title` (issues drop the magazine name, shown above it). */
  heading?: Bi;
  byline?: Bi;
  note?: Bi;
  /** Magazine issues are grouped by year on the library page. */
  year?: number;
  pages: number;
  sizeMb: number;
  /** Cover height in px at the fixed 400px render width. */
  coverH: number;
};

export type LibraryCollection = {
  id: string;
  kind: "church" | "magazine";
  title: Bi;
  description: Bi;
  items: LibraryItem[];
};

export const COVER_W = 400;

export const pdfPath = (slug: string) => `/library/${slug}.pdf`;
export const coverPath = (slug: string) => `/library/covers/${slug}.jpg`;

const MONTHS: { uk: string[]; en: string[] } = {
  uk: ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
};

// One magazine issue. `total` is the running number some
// mastheads print in brackets, e.g. №1 (91); `month` is 1–12.
function issue(
  magazine: Bi,
  slug: string,
  year: number | null,
  num: number,
  total: number | null,
  month: number | null,
  pages: number,
  sizeMb: number,
  coverH: number,
): LibraryItem {
  const label = (l: Locale) => {
    const no = `${l === "uk" ? "№" : "No. "}${num}${total ? ` (${total})` : ""}`;
    const date = [month ? MONTHS[l][month - 1] : null, year].filter(Boolean).join(" ");
    return { no, date };
  };
  const card = (l: Locale) => {
    const { no } = label(l);
    // Cards sit under a year heading, so only the month is repeated there.
    return month ? `${no} · ${MONTHS[l][month - 1]}` : no;
  };
  const heading = (l: Locale) => {
    const { no, date } = label(l);
    return `${no}${date ? `, ${date}` : ""}`;
  };
  return {
    slug,
    label: { uk: card("uk"), en: card("en") },
    title: { uk: `${magazine.uk} ${heading("uk")}`, en: `${magazine.en} ${heading("en")}` },
    heading: { uk: heading("uk"), en: heading("en") },
    year: year ?? undefined,
    pages,
    sizeMb,
    coverH,
  };
}

const VP: Bi = { uk: "«Вісник Правди»", en: "Visnyk Pravdy" };
const SV: Bi = { uk: "«Свічник»", en: "Svichnyk" };
const ZV: Bi = { uk: "«За євангельську віру»", en: "Za Yevanhelsku Viru" };

export const library: LibraryCollection[] = [
  {
    id: "church",
    kind: "church",
    title: { uk: "Документи церкви", en: "Church documents" },
    description: {
      uk: "Історія нашої церкви, записана у 2025 році, і статут церкви.",
      en: "The history of our church, written down in 2025, and the church's statute (bylaws).",
    },
    items: [
      {
        slug: "church-history-2025",
        label: { uk: "Історія церкви", en: "Church history" },
        title: { uk: "Історія церкви", en: "Church history" },
        byline: { uk: "Ланкастер, 2025", en: "Lancaster, 2025" },
        note: {
          uk: "Як постала, росла і служила наша церква: від перших зібрань до сьогодні.",
          en: "How our church began, grew and served: from the first gatherings to today.",
        },
        pages: 9,
        sizeMb: 1.7,
        coverH: 566,
      },
      {
        slug: "church-statute",
        label: { uk: "Статут церкви", en: "Church statute" },
        title: { uk: "Статут церкви", en: "Church statute (bylaws)" },
        byline: {
          uk: "Українська Церква Євангельських Християн Баптистів м. Ланкастер",
          en: "Ukrainian Evangelical Baptist Church of Lancaster",
        },
        note: {
          uk: "Зобов’язання членів, мета церкви, визнання віри, членство, служіння і керівні органи.",
          en: "Members’ covenant, the church’s purpose, confession of faith, membership, ministries and governance.",
        },
        pages: 28,
        sizeMb: 0.8,
        coverH: 619,
      },
    ],
  },
  {
    id: "visnyk-pravdy",
    kind: "magazine",
    title: VP,
    description: {
      uk: "Журнал Західного Українського Євангельсько-Баптистського об’єднання, США. Номери 2007–2010 років.",
      en: "Magazine of the Western Ukrainian Evangelical Baptist Association, USA. Issues from 2007 to 2010.",
    },
    items: [
      issue(VP, "visnyk-pravdy-2007-1", 2007, 1, 91, null, 32, 2.5, 531),
      issue(VP, "visnyk-pravdy-2007-2", 2007, 2, 92, null, 32, 1.8, 531),
      issue(VP, "visnyk-pravdy-2007-3", 2007, 3, 93, null, 32, 2.2, 549),
      issue(VP, "visnyk-pravdy-2007-4", 2007, 4, 94, null, 32, 2.6, 549),
      issue(VP, "visnyk-pravdy-2007-5", 2007, 5, 95, null, 32, 2.9, 549),
      issue(VP, "visnyk-pravdy-2007-6", 2007, 6, 96, null, 32, 2.9, 549),
      issue(VP, "visnyk-pravdy-2008-1", 2008, 1, 97, null, 32, 3.9, 549),
      issue(VP, "visnyk-pravdy-2008-2", 2008, 2, 98, null, 32, 4.2, 549),
      issue(VP, "visnyk-pravdy-2008-3", 2008, 3, 99, null, 32, 2.8, 549),
      issue(VP, "visnyk-pravdy-2008-4", 2008, 4, 100, null, 32, 2.2, 549),
      issue(VP, "visnyk-pravdy-2008-5", 2008, 5, 101, null, 32, 2.5, 549),
      issue(VP, "visnyk-pravdy-2008-6", 2008, 6, 102, null, 32, 3.3, 549),
      issue(VP, "visnyk-pravdy-2009-1", 2009, 1, 103, null, 32, 2.8, 549),
      issue(VP, "visnyk-pravdy-2009-2", 2009, 2, 104, null, 32, 2.8, 549),
      issue(VP, "visnyk-pravdy-2009-3", 2009, 3, 105, null, 32, 3.4, 549),
      issue(VP, "visnyk-pravdy-2009-4", 2009, 4, 106, null, 32, 3.9, 549),
      issue(VP, "visnyk-pravdy-2010-1", 2010, 1, 107, null, 32, 4.6, 549),
      issue(VP, "visnyk-pravdy-2010-2", 2010, 2, 108, null, 32, 3.7, 549),
      issue(VP, "visnyk-pravdy-2010-3", 2010, 3, null, null, 32, 3.9, 549),
      issue(VP, "visnyk-pravdy-2010-4", 2010, 4, 110, null, 32, 2.5, 549),
    ],
  },
  {
    id: "svichnyk",
    kind: "magazine",
    title: SV,
    description: {
      uk: "Духовно збудовуючий журнал Обласного об’єднання церков євангельських християн-баптистів Рівненської області. Номери 2008–2010 років.",
      en: "A devotional magazine of the regional association of Evangelical Christian-Baptist churches of Rivne Oblast, Ukraine. Issues from 2008 to 2010.",
    },
    items: [
      issue(SV, "svichnyk-2008-3", 2008, 3, 41, null, 44, 14.5, 566),
      issue(SV, "svichnyk-2008-4", 2008, 4, 42, null, 44, 10.9, 566),
      issue(SV, "svichnyk-2009-1", 2009, 1, 43, null, 44, 9.7, 566),
      issue(SV, "svichnyk-2009-2", 2009, 2, 44, null, 44, 9.1, 588),
      issue(SV, "svichnyk-2009-3", 2009, 3, 45, null, 44, 5.9, 588),
      issue(SV, "svichnyk-2009-4", 2009, 4, 46, null, 40, 13.8, 588),
      issue(SV, "svichnyk-2010-1", 2010, 1, null, null, 42, 19.1, 588),
      issue(SV, "svichnyk-2010-2", 2010, 2, 48, null, 44, 14.7, 588),
      issue(SV, "svichnyk-2010-3", 2010, 3, 49, null, 23, 16.7, 588),
    ],
  },
  {
    id: "za-yevanhelsku-viru",
    kind: "magazine",
    title: ZV,
    description: {
      uk: "Часопис Всеукраїнського союзу церков християн віри євангельської (з 2011 року — Церкви ХВЄ України). Номери 2009–2011 років.",
      en: "Periodical of the All-Ukrainian Union of Churches of Christians of Evangelical Faith (from 2011, the Church of Christians of Evangelical Faith of Ukraine). Issues from 2009 to 2011.",
    },
    items: [
      issue(ZV, "za-yevanhelsku-viru-2009-01", 2009, 1, 52, 1, 8, 1.6, 566),
      issue(ZV, "za-yevanhelsku-viru-2009-02", 2009, 2, 53, 2, 8, 1.1, 566),
      issue(ZV, "za-yevanhelsku-viru-2009-03", 2009, 3, 54, 3, 8, 1.1, 566),
      issue(ZV, "za-yevanhelsku-viru-2009-04", 2009, 4, 55, 4, 8, 1.6, 566),
      issue(ZV, "za-yevanhelsku-viru-2009-05", 2009, 5, 56, 5, 8, 1.2, 566),
      issue(ZV, "za-yevanhelsku-viru-2009-06", 2009, 6, 57, 6, 8, 1.4, 566),
      issue(ZV, "za-yevanhelsku-viru-2009-07", 2009, 7, 58, 7, 8, 1.4, 566),
      issue(ZV, "za-yevanhelsku-viru-2009-08", 2009, 8, 59, 8, 8, 1.8, 566),
      issue(ZV, "za-yevanhelsku-viru-2009-09", 2009, 9, 60, 9, 8, 1.3, 566),
      issue(ZV, "za-yevanhelsku-viru-2009-10", 2009, 10, 61, 10, 8, 1.9, 566),
      issue(ZV, "za-yevanhelsku-viru-2010-01", 2010, 1, 64, 1, 8, 1.6, 566),
      issue(ZV, "za-yevanhelsku-viru-2010-02", 2010, 2, 65, 2, 8, 1.0, 566),
      issue(ZV, "za-yevanhelsku-viru-2010-03", 2010, 3, 66, 3, 8, 1.0, 566),
      issue(ZV, "za-yevanhelsku-viru-2010-04", 2010, 4, 67, 4, 8, 1.1, 566),
      issue(ZV, "za-yevanhelsku-viru-2010-05", 2010, 5, 68, 5, 8, 1.4, 566),
      issue(ZV, "za-yevanhelsku-viru-2010-06", 2010, 6, 69, 6, 8, 1.4, 566),
      issue(ZV, "za-yevanhelsku-viru-2010-07", 2010, 7, 70, 7, 8, 1.5, 566),
      issue(ZV, "za-yevanhelsku-viru-2010-08", 2010, 8, 71, 8, 8, 1.2, 566),
      issue(ZV, "za-yevanhelsku-viru-2010-09", 2010, 9, 72, 9, 8, 1.5, 566),
      issue(ZV, "za-yevanhelsku-viru-2010-10", 2010, 10, 73, 10, 8, 1.8, 566),
      issue(ZV, "za-yevanhelsku-viru-2010-11", 2010, 11, 74, 11, 8, 1.3, 566),
      issue(ZV, "za-yevanhelsku-viru-2011-01", 2011, 1, 76, 1, 8, 0.8, 566),
      issue(ZV, "za-yevanhelsku-viru-2011-02", 2011, 2, 77, 2, 8, 0.8, 566),
      issue(ZV, "za-yevanhelsku-viru-2011-03", 2011, 3, 78, 3, 8, 0.9, 566),
    ],
  },
];

export function getLibraryItem(slug: string) {
  for (const collection of library) {
    const index = collection.items.findIndex((i) => i.slug === slug);
    if (index !== -1) {
      return {
        collection,
        item: collection.items[index],
        prev: collection.items[index - 1],
        next: collection.items[index + 1],
      };
    }
  }
  return undefined;
}

const COUNT_WORDS = {
  magazine: { uk: { one: "номер", few: "номери", many: "номерів" }, en: { one: "issue", other: "issues" } },
  church: { uk: { one: "документ", few: "документи", many: "документів" }, en: { one: "document", other: "documents" } },
} as const;

/** "20 номерів" / "20 issues", with Ukrainian plural forms. */
export function countLabel(n: number, kind: LibraryCollection["kind"], locale: Locale) {
  const words: Record<string, string> = COUNT_WORDS[kind][locale];
  const rule = new Intl.PluralRules(locale === "uk" ? "uk-UA" : "en-US").select(n);
  return `${n} ${words[rule] ?? words.many ?? words.other}`;
}

/** "1,7 МБ" / "1.7 MB" */
export function formatSize(mb: number, locale: Locale) {
  return `${mb.toLocaleString(locale === "uk" ? "uk-UA" : "en-US", { maximumFractionDigits: 1 })} ${locale === "uk" ? "МБ" : "MB"}`;
}

export const libraryUi = {
  eyebrow: { uk: "БІБЛІОТЕКА", en: "LIBRARY" },
  lead: {
    uk: "Християнські журнали і документи нашої церкви. Читайте прямо на сайті або завантажуйте собі.",
    en: "Christian magazines and our church's own documents. Read them right here on the site, or download a copy.",
  },
  language: { uk: "Українською", en: "In Ukrainian" },
  pages: { uk: "с.", en: "pp." },
  read: { uk: "Читати", en: "Read" },
  download: { uk: "Завантажити PDF", en: "Download PDF" },
  back: { uk: "← Бібліотека", en: "← Library" },
  prev: { uk: "← Попередній", en: "← Previous" },
  next: { uk: "Наступний →", en: "Next →" },
  reader: {
    loading: { uk: "Відкриваємо документ…", en: "Opening the document…" },
    error: {
      uk: "Не вдалося показати документ у браузері. Завантажте PDF, щоб прочитати його.",
      en: "This document couldn't be shown in the browser. Download the PDF to read it.",
    },
    page: { uk: "Сторінка", en: "Page" },
    of: { uk: "з", en: "of" },
    prevPage: { uk: "Попередня сторінка", en: "Previous page" },
    nextPage: { uk: "Наступна сторінка", en: "Next page" },
    zoomIn: { uk: "Збільшити", en: "Zoom in" },
    zoomOut: { uk: "Зменшити", en: "Zoom out" },
    fullscreen: { uk: "На весь екран", en: "Full screen" },
    exitFullscreen: { uk: "Вийти з повноекранного режиму", en: "Exit full screen" },
  },
} as const;
