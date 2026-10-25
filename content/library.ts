// Library (Бібліотека): magazines, books and church documents the client
// supplied as PDFs on 2026-10-24. Files live in public/library/<slug>.pdf,
// covers (page 1, rendered 400px wide) in public/library/covers/<slug>.jpg.
//
// Every title, publisher, issue number and date below is read off the PDF
// itself (cover, masthead or imprint). Where an issue doesn't print its
// running number or date, it's left out rather than inferred. Book titles
// stay in their original Russian in both locales; the English note gives a
// translation. Publishing permission for the third-party books and
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
  kind: "church" | "books" | "magazine";
  title: Bi;
  description: Bi;
  language: "uk" | "ru";
  /** Show issues under year headings (only when every issue is dated). */
  groupByYear?: boolean;
  items: LibraryItem[];
};

export const COVER_W = 400;

export const pdfPath = (slug: string) => `/library/${slug}.pdf`;
export const coverPath = (slug: string) => `/library/covers/${slug}.jpg`;

const MONTHS: { uk: string[]; en: string[] } = {
  uk: ["січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
};

// One magazine/newspaper issue. `total` is the running number some
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
const RZ: Bi = { uk: "«Разумный замысел»", en: "Razumnyy Zamysel" };

export const library: LibraryCollection[] = [
  {
    id: "church",
    kind: "church",
    title: { uk: "Документи церкви", en: "Church documents" },
    description: {
      uk: "Історія нашої церкви, записана у 2025 році, і статут церкви.",
      en: "The history of our church, written down in 2025, and the church's statute (bylaws).",
    },
    language: "uk",
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
    id: "books",
    kind: "books",
    title: { uk: "Книги", en: "Books" },
    description: {
      uk: "Книги для вивчення Біблії та служіння.",
      en: "Books for Bible study and ministry.",
    },
    language: "ru",
    items: [
      {
        slug: "podstrochnyy-novyy-zavet",
        label: { uk: "Подстрочный греческо-русский Новый Завет", en: "Подстрочный греческо-русский Новый Завет" },
        title: { uk: "Подстрочный греческо-русский Новый Завет", en: "Подстрочный греческо-русский Новый Завет" },
        byline: { uk: "Під редакцією Віктора Журомського", en: "Edited by Viktor Zhuromsky" },
        note: {
          uk: "Грецький текст Stephanus 1550 (Textus Receptus) з дослівним сучасним перекладом.",
          en: "Interlinear Greek–Russian New Testament: the Stephanus 1550 Textus Receptus with a word-for-word modern translation.",
        },
        pages: 709,
        sizeMb: 5.9,
        coverH: 517,
      },
      {
        slug: "bibleyskiy-slovar-vikhlyantsev",
        label: { uk: "Библейский словарь", en: "Библейский словарь" },
        title: { uk: "Библейский словарь", en: "Библейский словарь" },
        byline: { uk: "В. П. Вихлянцев", en: "V. P. Vikhlyantsev" },
        note: {
          uk: "Словник до Біблії Синодального перекладу.",
          en: "Bible Dictionary, keyed to the Russian Synodal Bible.",
        },
        pages: 331,
        sizeMb: 3.9,
        coverH: 518,
      },
      {
        slug: "kak-izuchat-bibliyu-1",
        label: { uk: "Как изучать Библию. Часть I", en: "Как изучать Библию. Часть I" },
        title: { uk: "Как изучать Библию. Часть I", en: "Как изучать Библию. Часть I" },
        byline: { uk: "BEE International · Тріада, Москва, 1996", en: "BEE International · Triada, Moscow, 1996" },
        note: {
          uk: "Навчальний посібник з індуктивного вивчення Біблії.",
          en: "How to Study the Bible, Part I: a study guide to inductive Bible study.",
        },
        pages: 292,
        sizeMb: 1.7,
        coverH: 567,
      },
      {
        slug: "dekhtyarenko-svyatoy-dukh",
        label: { uk: "Святой Дух", en: "Святой Дух" },
        title: { uk: "Святой Дух", en: "Святой Дух" },
        byline: { uk: "Р. Б. Дехтяренко · Слов’янське Євангельське Товариство", en: "R. B. Dekhtyarenko · Slavic Gospel Association" },
        note: {
          uk: "Сутність, служіння, перебування і дія Святого Духа. Серія «В помощь служителю».",
          en: "The Holy Spirit: His nature, ministry, indwelling and work. From the series “In Aid of the Minister.”",
        },
        pages: 337,
        sizeMb: 1.3,
        coverH: 561,
      },
      {
        slug: "dekhtyarenko-uchenie-ob-angelakh",
        label: { uk: "Библейское учение об ангелах", en: "Библейское учение об ангелах" },
        title: { uk: "Библейское учение об ангелах", en: "Библейское учение об ангелах" },
        byline: { uk: "Р. Б. Дехтяренко · Ірпінська біблійна семінарія, 1999", en: "R. B. Dekhtyarenko · Irpin Biblical Seminary, 1999" },
        note: {
          uk: "Що Біблія вчить про ангелів.",
          en: "Biblical Teaching on Angels.",
        },
        pages: 134,
        sizeMb: 1.0,
        coverH: 580,
      },
      {
        slug: "brock-voprosy",
        label: { uk: "Вопросы, которые задают люди и церкви", en: "Вопросы, которые задают люди и церкви" },
        title: { uk: "Вопросы, которые задают люди и церкви", en: "Вопросы, которые задают люди и церкви" },
        byline: { uk: "Чарльз Брок", en: "Charles Brock" },
        note: {
          uk: "Російське видання 1999 року книги «Questions People and Churches Ask».",
          en: "Questions People and Churches Ask, in its 1999 Russian edition.",
        },
        pages: 193,
        sizeMb: 1.0,
        coverH: 563,
      },
    ],
  },
  {
    id: "visnyk-pravdy",
    kind: "magazine",
    groupByYear: true,
    title: VP,
    description: {
      uk: "Журнал Західного Українського Євангельсько-Баптистського об’єднання, США. Номери 2007–2010 років.",
      en: "Magazine of the Western Ukrainian Evangelical Baptist Association, USA. Issues from 2007 to 2010.",
    },
    language: "uk",
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
    groupByYear: true,
    title: SV,
    description: {
      uk: "Духовно збудовуючий журнал Обласного об’єднання церков євангельських християн-баптистів Рівненської області. Номери 2008–2010 років.",
      en: "A devotional magazine of the regional association of Evangelical Christian-Baptist churches of Rivne Oblast, Ukraine. Issues from 2008 to 2010.",
    },
    language: "uk",
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
    groupByYear: true,
    title: ZV,
    description: {
      uk: "Часопис Всеукраїнського союзу церков християн віри євангельської (з 2011 року — Церкви ХВЄ України). Номери 2009–2011 років.",
      en: "Periodical of the All-Ukrainian Union of Churches of Christians of Evangelical Faith (from 2011, the Church of Christians of Evangelical Faith of Ukraine). Issues from 2009 to 2011.",
    },
    language: "uk",
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
  {
    // Issue 1 (Nov 2006) came out as «Вселенная как мысль»; the masthead
    // changed to «Разумный замысел» from issue 2. Issues 2–8 print no date.
    id: "razumnyy-zamysel",
    kind: "magazine",
    title: RZ,
    description: {
      uk: "Газета про сотворіння світу, науку і Біблію, що виходила в Україні. Перший номер (листопад 2006) вийшов під назвою «Вселенная как мысль». Номери 1–17.",
      en: "A newspaper on creation, science and the Bible, published in Ukraine. The first issue (November 2006) appeared under the title Vselennaya kak mysl. Issues 1–17.",
    },
    language: "ru",
    items: [
      issue(RZ, "razumnyy-zamysel-01", 2006, 1, null, 11, 8, 2.2, 580),
      issue(RZ, "razumnyy-zamysel-02", null, 2, null, null, 8, 5.1, 566),
      issue(RZ, "razumnyy-zamysel-03", null, 3, null, null, 8, 1.8, 580),
      issue(RZ, "razumnyy-zamysel-04", null, 4, null, null, 8, 0.7, 580),
      issue(RZ, "razumnyy-zamysel-05", null, 5, null, null, 8, 1.8, 580),
      issue(RZ, "razumnyy-zamysel-06", null, 6, null, null, 8, 1.5, 580),
      issue(RZ, "razumnyy-zamysel-07", null, 7, null, null, 8, 1.3, 580),
      issue(RZ, "razumnyy-zamysel-08", null, 8, null, null, 12, 1.8, 580),
      issue(RZ, "razumnyy-zamysel-09", 2008, 9, null, 5, 14, 1.0, 580),
      issue(RZ, "razumnyy-zamysel-10", 2008, 10, null, 7, 14, 1.4, 580),
      issue(RZ, "razumnyy-zamysel-11", 2008, 11, null, 10, 14, 1.5, 580),
      issue(RZ, "razumnyy-zamysel-12", 2008, 12, null, 12, 14, 1.2, 580),
      issue(RZ, "razumnyy-zamysel-13", 2009, 13, null, 2, 14, 1.1, 580),
      issue(RZ, "razumnyy-zamysel-14", 2009, 14, null, 4, 14, 1.3, 580),
      issue(RZ, "razumnyy-zamysel-15", 2009, 15, null, 6, 18, 2.2, 580),
      issue(RZ, "razumnyy-zamysel-16", 2009, 16, null, 8, 18, 1.7, 580),
      issue(RZ, "razumnyy-zamysel-17", 2009, 17, null, 10, 18, 2.0, 580),
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
  books: { uk: { one: "книга", few: "книги", many: "книг" }, en: { one: "book", other: "books" } },
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
    uk: "Журнали, книги і документи нашої церкви. Читайте прямо на сайті або завантажуйте собі.",
    en: "Magazines, books and our church's own documents. Read them right here on the site, or download a copy.",
  },
  language: {
    uk: { uk: "Українською", en: "In Ukrainian" },
    ru: { uk: "Російською", en: "In Russian" },
  },
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
