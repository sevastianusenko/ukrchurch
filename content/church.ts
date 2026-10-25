// Single source of truth for every bilingual fact on the site.
// See CLAUDE.md rule 1 — never add a fact here that wasn't supplied or
// pulled from the church's own prior sites (see OPEN-QUESTIONS.md for the
// few that still need confirmation).

export type Locale = "uk" | "en";
export const locales: Locale[] = ["uk", "en"];
export const defaultLocale: Locale = "uk";

export type Bi = { uk: string; en: string };

export const site = {
  name: {
    uk: "Українська Євангельсько-Баптистська Церква м. Ланкастер",
    en: "Ukrainian Evangelical Baptist Church of Lancaster",
  } satisfies Bi,
  shortName: {
    uk: "Церква Ланкастер",
    en: "UEBC Lancaster",
  } satisfies Bi,
  tagline: {
    uk: "Українська євангельсько-баптистська церква в Ланкастері: богослужіння, молитва і тепла спільнота. Раді кожному, хто завітає, незалежно від віри.",
    en: "A Ukrainian Evangelical Baptist church in Lancaster: worship, prayer, and a warm community. Everyone is welcome, whatever your background.",
  } satisfies Bi,
};

export const contact = {
  address: "1460 Eden Rd, Lancaster, PA 17601",
  addressLines: {
    uk: ["1460 Eden Rd", "Ланкастер, Пенсільванія 17601"],
    en: ["1460 Eden Rd", "Lancaster, PA 17601"],
  },
  phone: "267-686-1420",
  phoneHref: "tel:+12676861420",
  email: "contact@ukrlancaster.church",
  mapsQuery: "1460+Eden+Rd+Lancaster+PA+17601",
  facebook: "https://www.facebook.com/profile.php?id=61584253362198",
  youtube: "https://www.youtube.com/@UEBCLancaster",
  instagram: "https://www.instagram.com/ukrainian_baptist_church_/",
};

// From a real Zelle receipt the client photographed and sent 2026-09-13.
// The receipt shows the org name and Zelle handle but the QR image itself
// hasn't been supplied as a file yet — see PHOTOS-NEEDED.md.
export const giving = {
  zelleName: "Ukrainian Evangelical Baptist Church",
  zelleHandle: "ukrchurchlancaster",
};

// The church currently rents its space and is raising funds toward
// buying a building of its own. Confirmed by the client 2026-09-13; also
// consistent with a prayer request in the real 2026-08-30 bulletin about
// "completing the agreement for the purchase of the house of prayer."
// No specific goal amount or deadline was given, so none is stated here.
export const buildingFund = {
  heading: { uk: "Наш власний дім молитви", en: "A House of Prayer of Our Own" } satisfies Bi,
  body: {
    uk: "Сьогодні ми орендуємо приміщення для богослужінь. Ми віримо, що Бог веде нашу церкву до власного дому молитви, і збираємо кошти на цю мету. Долучіться до цієї важливої справи своєю пожертвою.",
    en: "Right now, we rent the space where we worship. We believe God is leading our congregation toward a building of our own, and we're raising funds toward that goal. Join us in this important work with your gift.",
  } satisfies Bi,
};

// Ongoing prayer emphasis, not tied to one dated event (see the real
// 2026-08 World Prayer for Ukraine post for a specific past occasion).
export const prayForUkraine = {
  heading: { uk: "Моліться за Україну", en: "Pray for Ukraine" } satisfies Bi,
  body: {
    uk: "Війна триває, і наша церква продовжує молитися за мир, за наш народ і за перемогу України. Приєднуйтесь до нас у молитві.",
    en: "The war continues, and our congregation keeps praying for peace, for our people, and for Ukraine's victory. Join us in prayer.",
  } satisfies Bi,
  linkUrl: "https://prayforukraine.org.ua/ua",
  linkLabel: { uk: "prayforukraine.org.ua", en: "prayforukraine.org.ua" } satisfies Bi,
};

export type ScheduleItem = {
  day: Bi;
  time: string;
  label: Bi;
  note?: Bi;
};

// Tuesday time confirmed 8:30 PM by the church's own printed Sunday
// bulletin (2026-08-30 edition) — see OPEN-QUESTIONS.md.
export const schedule: ScheduleItem[] = [
  {
    day: { uk: "Неділя", en: "Sunday" },
    time: "2:00 PM",
    label: { uk: "Богослужіння", en: "Sunday Worship" },
    note: {
      uk: "Українською та англійською мовами",
      en: "In Ukrainian and English",
    },
  },
  {
    day: { uk: "Вівторок", en: "Tuesday" },
    time: "8:30 PM",
    label: { uk: "Молитовне служіння", en: "Prayer Service" },
    note: { uk: "Онлайн, через Zoom", en: "Online via Zoom" },
  },
  {
    day: { uk: "Четвер", en: "Thursday" },
    time: "8:00 PM",
    label: { uk: "Вивчення Слова Божого", en: "Bible Study" },
    note: { uk: "Онлайн, через Zoom", en: "Online via Zoom" },
  },
];

// Real embed URL supplied by the client 2026-09-13. Note its timezone is
// America/Indiana/Vincennes (an Eastern-observing zone), not
// America/New_York — passed through as given, not corrected.
export const googleCalendar: { embedUrl: string | null } = {
  embedUrl:
    "https://calendar.google.com/calendar/embed?src=ea3f3b5604b8d55a7b9bc546da9d359c38d522fbf2fa690a43eda888b759aa90%40group.calendar.google.com&ctz=America%2FIndiana%2FVincennes",
};

export type UpcomingEvent = {
  date: string; // ISO date
  time: string;
  title: Bi;
  location: Bi;
  postSlug: string;
};

// Real, confirmed upcoming events — as opposed to `annualEvents` below,
// which illustrates the recurring yearly pattern without asserting exact
// future dates. Add here only once a date is actually confirmed. Kept
// even after an event's date has passed (for the record / in case a
// recap post wants to reference it) — `getUpcomingEvents()` below is
// what the site actually renders, filtered to today or later, so a past
// entry here doesn't need to be deleted to stop showing on the site.
export const upcomingEvents: UpcomingEvent[] = [
  {
    date: "2026-09-20",
    time: "12:00 PM",
    title: { uk: "Свято Жнив 2026", en: "Harvest Festival 2026" },
    location: {
      uk: "225 Woodcrest Dr, Ephrata, PA 17522",
      en: "225 Woodcrest Dr, Ephrata, PA 17522",
    },
    postSlug: "harvest-festival-2026",
  },
];

export function getUpcomingEvents(): UpcomingEvent[] {
  const today = new Date().toISOString().slice(0, 10);
  return upcomingEvents.filter((ev) => ev.date >= today);
}

export type AnnualEvent = {
  season: Bi;
  title: Bi;
  description: Bi;
  postSlug: string; // links to content/posts.ts for a real example
};

// The rhythm of the church year, illustrated with real past events rather
// than invented future dates — see OPEN-QUESTIONS.md re: no confirmed
// upcoming dates were available at the time this was written.
export const annualEvents: AnnualEvent[] = [
  {
    season: { uk: "ЛІТО", en: "SUMMER" },
    title: { uk: "Дитячий табір", en: "Kids Camp" },
    description: {
      uk: "Одноденний християнський табір для дітей: ігри, майстер-класи, водна гірка та біблійні історії.",
      en: "A one-day Christian camp for kids: games, crafts, a water slide, and Bible stories.",
    },
    postSlug: "kids-camp-2025",
  },
  {
    season: { uk: "ВЕРЕСЕНЬ", en: "SEPTEMBER" },
    title: { uk: "Свято Жнив", en: "Harvest Festival" },
    description: {
      uk: "Святкове богослужіння подяки за врожай. 2025 року відзначили ще й 20-річчя церкви.",
      en: "A festive service of thanksgiving for the harvest. In 2025 it doubled as the church's 20th anniversary.",
    },
    postSlug: "harvest-festival-2026-recap",
  },
  {
    season: { uk: "ЛИСТОПАД", en: "NOVEMBER" },
    title: { uk: "Благодійний Bake Sale", en: "Charity Bake Sale" },
    description: {
      uk: "Український ярмарок домашньої випічки. Кошти йдуть на допомогу людям в Україні.",
      en: "A Ukrainian homemade-baking sale. Proceeds go toward helping people in Ukraine.",
    },
    postSlug: "bake-sale-invite-2025",
  },
  {
    season: { uk: "ГРУДЕНЬ", en: "DECEMBER" },
    title: { uk: "Різдвяна коляда", en: "Christmas Caroling" },
    description: {
      uk: "Група колядників відвідує родини церкви, друзів та сусідів зі співом і Різдвяною звісткою.",
      en: "A caroling group visits families in the congregation, friends, and neighbors with song and the Christmas message.",
    },
    postSlug: "christmas-caroling-2025",
  },
  {
    season: { uk: "31 ГРУДНЯ", en: "DECEMBER 31" },
    title: { uk: "Новорічна ніч", en: "New Year's Eve" },
    description: {
      uk: "Спільна зустріч Нового року: слово пасторів, молитва благословення і святковий стіл.",
      en: "A shared New Year's gathering: a word from the pastors, a prayer of blessing, and a holiday table.",
    },
    postSlug: "new-year-2026",
  },
];

export const verse = {
  text: {
    uk: "«Ми проповідуємо Христа розп’ятого… Божу Силу та Божу Премудрість»",
    en: "“We preach Christ crucified… the power of God and the wisdom of God.”",
  } satisfies Bi,
  reference: { uk: "1 Коринтян 1:23-24", en: "1 Corinthians 1:23-24" } satisfies Bi,
};

export const whoWeAre = {
  uk: "Ми є прості люди, які зрозуміли, що, бувши грішниками, нам потрібен Спаситель. І цим Спасителем для нас є Ісус Христос. Він помер за гріх цього світу, і тепер кожному, хто прийме Його через віру, Він дає спасіння від рабства гріха. Ми віримо, що Біблія це Слово Боже, і ця книга є для нас авторитетом у житті.",
  en: "We are ordinary people who came to understand that, being sinners, we needed a Savior, and that Savior is Jesus Christ. He died for the sin of this world, and now gives salvation from the slavery of sin to everyone who receives Him through faith. We believe the Bible is the Word of God, and that this book is the authority for our lives.",
} satisfies Bi;

export const mission = {
  uk: "Наша місія це зростати в благодаті та пізнанні Господа й Спасителя нашого Ісуса Христа: служити так, як служив Христос, любити так, як любив Христос, і бути сіллю та світлом у цьому темному й позбавленому смаку світі.",
  en: "Our mission is to grow in the grace and knowledge of our Lord and Savior Jesus Christ: to serve as Christ served, to love as Christ loved, and to be salt and light in a dark and tasteless world.",
} satisfies Bi;

// First names from a real 2026 New Year's post (Viktor, Leonid, Kyrylo
// addressed the church that night). Leonid's surname — Близнюк / Bliznyuk
// — comes from the church's own printed Sunday bulletin (2026-08-30
// edition), where he is titled "п." (pastor) preaching that day. Viktor's
// — Щипайло — from the church's written history (2025, see
// `aboutPage.history`); the English spelling "Shchypailo" is a standard
// transliteration, not one he has confirmed. Kyrylo's surname, titles,
// and photos are still not public. See OPEN-QUESTIONS.md.
export const pastors: string[] = ["Віктор Щипайло", "Леонід Близнюк", "Кирило"];
export const pastorsEn: string[] = ["Viktor Shchypailo", "Leonid Bliznyuk", "Kyrylo"];

// 2005 is when the present Ukrainian church was formed and officially
// opened (13 Nov 2005), per the church's written history; its 20th
// anniversary was celebrated 2025-09-21. Its roots go back to a first
// Ukrainian Baptist church opened in Lancaster on 8 Aug 1999. The full
// timeline is `aboutPage.history` below.
export const foundingYear = 2005;
export const anniversaryEvent = {
  uk: "21 вересня 2025 року церква відсвяткувала 20-ту річницю заснування разом зі Святом Жнив.",
  en: "On September 21, 2025, the church celebrated its 20th anniversary together with the Harvest Festival.",
} satisfies Bi;

export const affiliation = {
  uk: "Церква входить до складу Об’єднання українських баптистських церков США (UMBS).",
  en: "The church is a member congregation of the Ukrainian Baptist Convention in the USA (UMBS).",
} satisfies Bi;

export type Value = { title: Bi; body: Bi };
export const values: Value[] = [
  {
    title: { uk: "Хто ми", en: "Who we are" },
    body: {
      uk: "Ми українська євангельська баптистська церква в Ланкастері.",
      en: "We are a Ukrainian Evangelical Baptist church in Lancaster.",
    },
  },
  {
    title: { uk: "Що нас веде", en: "What drives us" },
    body: {
      uk: "Ми прагнемо, щоб у всьому прославлявся Ісус Христос.",
      en: "We strive for Jesus Christ to be glorified in everything.",
    },
  },
  {
    title: { uk: "Що ви знайдете тут", en: "What you'll find here" },
    body: {
      uk: "Тут ви знайдете підтримку, молитву і справжню спільність.",
      en: "Here you'll find support, prayer, and genuine community.",
    },
  },
  {
    title: { uk: "Наш фундамент", en: "Our foundation" },
    body: {
      uk: "Вивчення Божого Слова є основою нашого зростання.",
      en: "Studying God's Word is the foundation of our growth.",
    },
  },
  {
    title: { uk: "Для кожного", en: "For everyone" },
    body: {
      uk: "Діти, молодь, дорослі: кожен має місце в тілі Христовому.",
      en: "Children, youth, adults: everyone has a place in the body of Christ.",
    },
  },
];

export type Ministry = {
  slug: string;
  title: Bi;
  description: Bi;
  photo: string; // path under /public
  alt: Bi;
};

export const ministries: Ministry[] = [
  {
    slug: "worship",
    title: { uk: "Недільне богослужіння", en: "Sunday Worship" },
    description: {
      uk: "Щонеділі о 14:00 ми збираємось на спільне поклоніння українською та англійською мовами, з хоровим і сучасним прославленням.",
      en: "Every Sunday at 2:00 PM we gather for worship in Ukrainian and English, with choir and contemporary praise.",
    },
    photo: "/photos/worship.jpg",
    alt: {
      uk: "Наша церква зібралась разом на недільному богослужінні",
      en: "Our congregation gathered together for Sunday worship",
    },
  },
  {
    slug: "sunday-school",
    title: { uk: "Недільна школа", en: "Sunday School" },
    description: {
      uk: "Поки дорослі на богослужінні, діти вивчають Слово Боже у групах за віком, через історії, пісні та творчість.",
      en: "While the adults worship, children learn God's Word in age-based groups, through stories, songs, and hands-on activities.",
    },
    photo: "/photos/sunday-school.jpg",
    alt: {
      uk: "Діти нашої церкви співають на Великодньому богослужінні",
      en: "Kids from our church singing at an Easter service",
    },
  },
  {
    slug: "youth",
    title: { uk: "Молодіжні зустрічі", en: "Youth Group" },
    description: {
      uk: "Молодь церкви регулярно збирається для спільноти, обговорення Слова та служіння разом.",
      en: "Our youth gather regularly for community, Bible discussion, and serving together.",
    },
    photo: "/photos/youth.jpg",
    alt: { uk: "Молодіжна зустріч церкви", en: "Church youth group meeting" },
  },
  {
    slug: "prayer-groups",
    title: { uk: "Молитовні та домашні групи", en: "Prayer & Home Groups" },
    description: {
      uk: "У вівторок о 20:00 спільна молитва через Zoom, а протягом тижня домашні групи для ближчого спілкування.",
      en: "Tuesdays at 8:00 PM we pray together over Zoom, and through the week our home groups meet for closer fellowship.",
    },
    photo: "/photos/prayer.jpg",
    alt: { uk: "Молитовна зустріч", en: "A prayer gathering" },
  },
  {
    slug: "bible-study",
    title: { uk: "Вивчення Слова Божого", en: "Bible Study" },
    description: {
      uk: "У четвер о 20:00 ми разом розбираємо Слово Боже, глибше пізнаючи Писання для щоденного життя.",
      en: "Thursdays at 8:00 PM we study God's Word together, going deeper into Scripture for everyday life.",
    },
    photo: "/photos/bible-study.jpg",
    alt: { uk: "Групове вивчення Біблії", en: "Group Bible study" },
  },
  {
    slug: "kids-camp",
    title: { uk: "Дитячий табір і Біблійна вакаційна школа", en: "Kids Camp & Vacation Bible School" },
    description: {
      uk: "Через ігри, творчість, водну гірку та біблійні історії діти не тільки розважаються, а й відчувають Божу любов та турботу.",
      en: "Through games, crafts, a water slide, and Bible stories, kids don't just have fun. They experience God's love and care.",
    },
    photo: "/photos/news/kids-camp-2025/hero.jpg",
    alt: { uk: "Діти на нашому дитячому таборі", en: "Kids at our own kids camp" },
  },
];

export type FaithArticle = {
  number: number;
  title: Bi;
  paragraphs: Bi[];
  refs: string;
};

// Full text of the church's own Statement of Faith ("Визнання Віри"),
// translated faithfully — see CLAUDE.md copy rules. Scripture references
// are reproduced exactly as published on the source site, uncorrected.
export const statementOfFaith: FaithArticle[] = [
  {
    number: 1,
    title: { uk: "Біблія", en: "The Bible" },
    paragraphs: [
      {
        uk: "Ми віримо, що Біблія є Богом натхненна книга в її канонічній формі. Вона є єдиним досконалим джерелом для навчання, докору, направи та виховання в праведності.",
        en: "We believe the Bible, in its canonical form, is a God-breathed book, the one perfect source for teaching, reproof, correction, and training in righteousness.",
      },
      {
        uk: "Ми віримо, що те, що говорить Біблія, те каже Бог, тому весь її багатогранний вміст (історія, пророцтва, поезія, пісні, мудрість, проповіді, листи та все інше) повинно прийматися, як від Бога.",
        en: "What the Bible says, God says. So its entire many-sided content: history, prophecy, poetry, song, wisdom, sermon, and letter, is to be received as from God.",
      },
    ],
    refs: "2 Tim. 3:16; Rom. 15:4; 2 Pet. 1:19-21; Heb. 4:12",
  },
  {
    number: 2,
    title: { uk: "Бог", en: "God" },
    paragraphs: [
      {
        uk: "Ми віримо в Єдиного Живого Бога. Бог є вічний, всюдиприсутній, досконалий і відкритий нам у Біблії, як Один у трьох особах: Отець, Син і Дух Святий. Кожна Особа Трійці володіє усією сукупністю божественних рис.",
        en: "We believe in the one living God. He is eternal, everywhere present, perfect, and revealed to us in the Bible as one in three persons: Father, Son, and Holy Spirit. Each person of the Trinity holds the full sum of the divine attributes.",
      },
      {
        uk: "Триєдиний Бог у Своєму єстві та властивостях рівний та нероздільний, так що Отець є Бог, Син є Бог і Дух Святий є Бог, але не три Боги, а Один Бог.",
        en: "The triune God, in nature and attributes, is equal and undivided. The Father is God, the Son is God, and the Holy Spirit is God, yet not three Gods but one God.",
      },
    ],
    refs: "1 John 5:7; Luke 3:21-22; Jer. 10:10",
  },
  {
    number: 3,
    title: { uk: "Бог – Отець", en: "God the Father" },
    paragraphs: [
      {
        uk: "Ми віримо, що Бог – Отець ніким не створений, через якого все сталося. Бог – Отець є Отцем Господа нашого Ісуса Христа. Він є справжнім Отцем для тих, які стали Його дітьми через віру в Ісуса Христа.",
        en: "We believe God the Father was created by no one, and that all things came to be through Him. God the Father is the Father of our Lord Jesus Christ, and a true Father to all who have become His children through faith in Jesus Christ.",
      },
    ],
    refs: "Matt. 17:5; 1 Cor. 8:6; John 1:1-4; Gal. 4:6",
  },
  {
    number: 4,
    title: { uk: "Бог – Син", en: "God the Son" },
    paragraphs: [
      {
        uk: "Ми віримо, що Бог – Син Ісус Христос є єдинородний Божий Син, непорочно зачатий від Духа Святого і тілесно народжений від Діви Марії. Він прожив абсолютно безгрішне життя і виконав відкуплення людей від гріха через пролиття Своєї крові і смерть на хресті.",
        en: "We believe God the Son, Jesus Christ, is the only-begotten Son of God, conceived without sin by the Holy Spirit and born in the flesh of the Virgin Mary. He lived an entirely sinless life and accomplished the redemption of mankind from sin by shedding His blood and dying on the cross.",
      },
      {
        uk: "Він воскрес у тілі, вознісся у славі, є єдиним заступником та посередником між Богом та людиною і прийде вдруге в силі та славі.",
        en: "He rose bodily, ascended in glory, is the one advocate and mediator between God and man, and will come again in power and glory.",
      },
    ],
    refs: "John 3:16, 14:3; Matt. 1:20-21, 27:50, 28:5-6; Luke 1:35, 2:7; 1 Tim. 2:5; Eph. 1:7; 1 Pet. 1:18, 2:22; Heb. 4:15, 9:12,15; Rom. 5:6, 8:34; Acts 1:9-11; 1 John 2:2, 3:5",
  },
  {
    number: 5,
    title: { uk: "Бог – Дух Святий", en: "God the Holy Spirit" },
    paragraphs: [
      {
        uk: "Ми віримо, що Бог – Дух Святий прийшов від Отця в ім'я Сина. Він є натхненником Святого Писання, бере участь у ділах творення, спасінні людини, будуванні Церкви.",
        en: "We believe God the Holy Spirit proceeds from the Father in the name of the Son. He inspired the Holy Scriptures, and takes part in the work of creation, in the salvation of mankind, and in building the Church.",
      },
      {
        uk: "Він прославляє Христа, відроджує людину, перебуває в дітях Божих і веде їх дорогою освячення, викриває світ у гріху, у правді та у суді.",
        en: "He glorifies Christ, regenerates the sinner, dwells in God's children and leads them in the way of sanctification, and convicts the world concerning sin, righteousness, and judgment.",
      },
    ],
    refs: "John 14:26; 2 Pet. 1:21; Gen. 1:26; Heb. 3:7; Eph. 2:22; John 16:14; Titus 3:5; John 3:5-7; 1 Cor. 6:19, 6:11; 2 Thess. 2:13; John 16:18",
  },
  {
    number: 6,
    title: { uk: "Створення світу", en: "Creation" },
    paragraphs: [
      {
        uk: "Ми віримо, що Бог є Творцем всього видимого і невидимого, а також самої людини.",
        en: "We believe God is the Creator of everything visible and invisible, including mankind itself.",
      },
    ],
    refs: "Ps. 88:12; Rev. 4:11",
  },
  {
    number: 7,
    title: { uk: "Людина", en: "Man" },
    paragraphs: [
      {
        uk: "Ми віримо, що людина створена Богом за Його образом і подобою зі свободою волі, як дух, душа і тіло. В результаті непокори Богові людина згрішила і стала духовно мертвою та втратила фізичне безсмертя.",
        en: "We believe man was created by God in His image and likeness, with free will, as spirit, soul, and body. Through disobedience to God, man sinned, became spiritually dead, and lost physical immortality.",
      },
      {
        uk: "Вона стала рабом гріха і не може сама звільнити себе від цього стану.",
        en: "He became a slave to sin and cannot free himself from this condition on his own.",
      },
    ],
    refs: "Gen. 1:26-27, 2:16-17, 3:1-6; 1 Thess. 5:23; Deut. 30:19; Josh. 24:15; Eph. 2:1; 1 Cor. 2:14; Rom. 3:10-12",
  },
  {
    number: 8,
    title: { uk: "Спасіння", en: "Salvation" },
    paragraphs: [
      {
        uk: "Ми віримо, що для спасіння необхідне покаяння та навернення грішника. Спасіння звершується Богом по благодаті через віру у викупляючу жертву Ісуса Христа.",
        en: "Salvation requires repentance and the sinner's turning to God. Salvation is accomplished by God, by grace, through faith in the atoning sacrifice of Jesus Christ.",
      },
      {
        uk: "Ми віримо, що спасенна людина є народжена згори від Духа Святого і Слова Божого. Вона воскресла з її мертвого духовного стану і народилась для нового життя.",
        en: "The saved person is born from above, of the Holy Spirit and the Word of God, raised out of spiritual death and born again to new life.",
      },
      {
        uk: "Ми віримо, що людина виправдовується вірою в Ісуса Христа.",
        en: "A person is justified by faith in Jesus Christ.",
      },
      {
        uk: "Ми віримо, що викуплених і оправданих Бог усиновлює, і вони стають спадкоємцями Царства Божого.",
        en: "God adopts the redeemed and justified as His own, and they become heirs of the Kingdom of God.",
      },
      {
        uk: "Ми віримо, що Бог потурбувався про освячення Своїх дітей. Це є Його волею. Освячення це відокремлення від гріха і присвячення себе Богові. Освячення починається з дня навернення і продовжується все життя.",
        en: "God has provided for the sanctification of His children. It is His will. Sanctification is separation from sin and dedication of oneself to God; it begins on the day of conversion and continues for life.",
      },
    ],
    refs: "Eph. 2:8; Luke 13:3; Ezek. 18:31-32; Mark 1:15, 16:16; Acts 3:19; John 3:16; John 3:3-7; Eph. 2:5; Col. 2:13; Rom. 3:24-28; Rom. 8:16-18; Gal. 3:26; Eph. 1:3-6; Acts 20:32; 1 Thess. 4:3, 4:7; Heb. 10:10; Rom. 12:1-3; Rev. 22:11",
  },
  {
    number: 9,
    title: { uk: "Церква", en: "The Church" },
    paragraphs: [
      {
        uk: "Ми віримо, що Церква є тілом Христовим, яке складається з людей, відкуплених кров'ю Ісуса Христа. Ісус Христос є наріжним каменем і Головою Церкви.",
        en: "We believe the Church is the body of Christ, made up of people redeemed by the blood of Jesus Christ. Jesus Christ is the cornerstone and the Head of the Church.",
      },
      {
        uk: "Ця місцева церква, як громада віруючих, відроджених людей, є складовою частиною тіла Христового.",
        en: "This local church, as a congregation of believing, born-again people, is a part of the body of Christ.",
      },
    ],
    refs: "Col. 1:18,24; Rom. 12:5; 1 Cor. 12:13,27; Matt. 21:42; Acts 4:11; Eph. 1:22, 2:19-21, 5:23",
  },
  {
    number: 10,
    title: { uk: "Хрищення", en: "Baptism" },
    paragraphs: [
      {
        uk: "Ми віримо, що євангельське хрищення по вірі це заповідь Ісуса Христа. Хрищення є актом послуху і свідченням віри людини в розп'ятого, похованого і воскреслого Спасителя, а також прообразом смерті віруючого для гріха і воскресіння для нового життя в Ісусі Христі.",
        en: "Believer's baptism by faith is a command of Jesus Christ. Baptism is an act of obedience and a testimony of a person's faith in the crucified, buried, and risen Savior, and a picture of the believer's death to sin and resurrection to new life in Jesus Christ.",
      },
      {
        uk: "Ми віримо, що хрищення є знаком ототожнення віруючого з місцевою церквою та з Тілом Христовим, і виконується через занурення віруючого у воді в ім'я Отця, Сина і Святого Духа.",
        en: "Baptism is a sign identifying the believer with the local church and with the Body of Christ, and is performed by immersing the believer in water in the name of the Father, the Son, and the Holy Spirit.",
      },
    ],
    refs: "Matt. 3:14-16; Mark 16:16; John 3:22-23; Acts 2:38,41, 8:36-38, 10:47, 18:8; Rom. 6:3-4; 1 Pet. 3:21; Eph. 4:5; Col. 2:12",
  },
  {
    number: 11,
    title: { uk: "Вечеря Господня", en: "The Lord's Supper" },
    paragraphs: [
      {
        uk: "Ми віримо, що Вечеря Господня це заповідь Господа нашого Ісуса Христа, яка встановлена для того, щоб згадувати та звіщати смерть Господню, аж доки Він прийде. Вона виражає єднання віруючих з Христом та один з одним.",
        en: "The Lord's Supper is a command of our Lord Jesus Christ, given so that we remember and proclaim the Lord's death until He comes. It expresses the union of believers with Christ and with one another.",
      },
      {
        uk: "Хліб та чаша вказують на Тіло та Кров Ісуса Христа, і, приймаючи ці знаки, віруючий має духовну спільність з Ним. У Вечері Господній мають право брати участь члени Церкви, які є у мирі з Богом, з Церквою та зі своїми ближніми.",
        en: "The bread and the cup point to the Body and Blood of Jesus Christ, and in receiving these signs the believer has spiritual communion with Him. The right to take part belongs to members of the church who are at peace with God, with the church, and with their neighbor.",
      },
    ],
    refs: "1 Cor. 10:16-17, 11:23-29; Luke 22:17-20; Matt. 26:26-28",
  },
  {
    number: 12,
    title: { uk: "Неділя, день Господній", en: "Sunday, the Lord's Day" },
    paragraphs: [
      {
        uk: "Ми віримо, що Ісус Христос воскрес у перший день тижня, неділю. Цей день звіщає про перемогу нашого Відкупителя та майбутнє воскресіння всіх людей.",
        en: "We believe Jesus Christ rose on the first day of the week, Sunday. This day proclaims the victory of our Redeemer and the future resurrection of all people.",
      },
      {
        uk: "Ми визнаємо неділю як особливий день, в який Церква збирається для спільного поклоніння Богу і для вивчення Слова Божого.",
        en: "We hold Sunday as a special day on which the church gathers for shared worship of God and for the study of His Word.",
      },
    ],
    refs: "Matt. 28:1-6; Mark 16:6-9; John 19:20; Acts 20:7",
  },
  {
    number: 13,
    title: { uk: "Останні події", en: "Last Things" },
    paragraphs: [
      {
        uk: "Ми віримо, що незабаром Христос прийде на землю вдруге, у силі та славі. Про день та годину Його приходу не знає ніхто, крім Бога – Отця.",
        en: "We believe Christ will soon come to earth a second time, in power and glory. No one knows the day or the hour of His coming except God the Father.",
      },
      {
        uk: "Другий прихід нашого Господа Ісуса Христа включатиме в себе невидиме для світу підхоплення Церкви та видимий прихід Його в День Господній, який ознаменується судом над людством. Після суду настане вічність, яка для одних буде безкінечним блаженством з Христом, а для інших, вічними муками в озері огняному. Святе Писання вказує на неможливість переходу у вічності з одного місця в інше.",
        en: "The second coming of our Lord Jesus Christ includes a catching-away of the church, unseen by the world, and His visible coming on the Day of the Lord, which will bring judgment on humanity. After judgment comes eternity, for some unending blessedness with Christ; for others, everlasting torment in the lake of fire. Scripture teaches there is no passing from one of these eternal states to the other.",
      },
    ],
    refs: "Matt. 24:36-44, 25:31-34,46; Acts 1:11; Luke 16:26",
  },
  {
    number: 14,
    title: { uk: "Шлюб і сім'я", en: "Marriage and Family" },
    paragraphs: [
      {
        uk: "Ми віримо, що шлюб встановлений Богом і є союзом між чоловіком і жінкою. За Святим Письмом, чоловік може мати тільки одну дружину, а дружина, тільки одного чоловіка. У випадку смерті чоловіка чи дружини Слово Боже не забороняє тому, хто залишився, вступати в шлюб. Згідно Божої настанови, відроджені віруючі вступають до шлюбу тільки в Господі.",
        en: "Marriage is instituted by God as a union between a man and a woman. According to Scripture, a man may have only one wife and a wife only one husband. If a husband or wife dies, God's Word does not forbid the one who remains from marrying again. In keeping with God's instruction, born-again believers marry only \"in the Lord.\"",
      },
      {
        uk: "Ми віримо, що Господь наказує не розлучатись тим, хто вступив у шлюб. Слово Боже дозволяє розлучення тільки за провиною перелюбу. Шлюб є установою Божою і громадською, тому отримується шляхом Слова Божого і молитви, а також здійснюється за державними законами. Шлюбний союз між особами однієї статі є гріхом і заборонений Словом Божим.",
        en: "The Lord commands that those who marry not divorce. God's Word permits divorce only on the grounds of adultery. Marriage is both a divine and a civil institution, entered through God's Word and prayer, and carried out according to the laws of the state. Marriage between persons of the same sex is sin and is forbidden by God's Word.",
      },
      {
        uk: "Ми визнаємо, що дошлюбні статеві стосунки є гріхом і засуджуються Словом Божим.",
        en: "We hold that sexual relations before marriage are sin and are condemned by God's Word.",
      },
      {
        uk: "Людина, яка навернулась до Бога, повинна привести свої шлюбні стосунки у відповідність із Словом Божим: якщо на момент покаяння вона була розлучена, примиритись і відновити сім'ю, якщо це можливо; якщо була у повторному шлюбі, не розлучатись; якщо була у незаконному шлюбі, узаконити його.",
        en: "A person who has come to God should bring their marital situation into line with God's Word: if they were divorced at the time of their conversion, they should reconcile and restore the family wherever possible; if they were already remarried, they should not divorce; if they were in an unlawful marriage, they should make it lawful.",
      },
      {
        uk: "Ми визнаємо, що діти в сім'ї є дорогоцінним даром Божим. Батьки несуть відповідальність перед Богом за виховання своїх дітей у вченні та наставленні Господньому.",
        en: "We hold that children in a family are a precious gift from God, and that parents bear responsibility before God for raising their children in the Lord's teaching and instruction.",
      },
      {
        uk: "Ми визнаємо, що діти з моменту зачаття є благословенням від Господа, тому штучне переривання вагітності (аборт) розглядається як вбивство і засуджується як навмисний гріх.",
        en: "We hold that children, from the moment of conception, are a blessing from the Lord. Therefore the deliberate termination of a pregnancy (abortion) is regarded as the taking of a life and condemned as a willful sin.",
      },
    ],
    refs: "Gen. 2:18-24; Matt. 5:32, 19:4-6,9; Mark 10:11-12; Rom. 1:26-28, 7:2-3; 1 Cor. 7:2, 10:13, 39; 2 Cor. 6:14; Heb. 12:16, 13:4; Lev. 18:22; Matt. 3:8; Rom. 12:18; 1 Cor. 7:12-17, 24; 1 Pet. 2:13; Ps. 126:3-5; Matt. 18:6; Eph. 6:4; Prov. 13:24, 23:13-14; Deut. 6:7-8; Ps. 138:13-16; Job 10:8-12",
  },
  {
    number: 15,
    title: { uk: "Відношення Церкви до держави", en: "The Church's Relationship to the State" },
    paragraphs: [
      {
        uk: "Ми віримо, що згідно Слова Божого існуючі влади встановлені від Бога для «...карання злочинців та похвали доброчинців».",
        en: "According to God's Word, the governing authorities that exist are established by God \"to punish those who do wrong and to commend those who do right.\"",
      },
      {
        uk: "Нашим обов'язком є підкорятись законам влади, крім тих, які суперечать Слову Божому. За наукою Христа, треба віддавати «...кесареве кесареві, а Богові Боже», але абсолютний послух і покора належать Богові, і тільки Бог є Господом сумління віруючої людини.",
        en: "It is our duty to obey the laws of the authorities, except where they conflict with God's Word. As Christ taught, we render \"to Caesar what is Caesar's, and to God what is God's.\" But absolute obedience and submission belong to God alone, and God alone is Lord of the believer's conscience.",
      },
      {
        uk: "Ми повинні молитись за уряд, щоб він по волі Божій так виконував ввірену йому владу, щоб зберігати мир і правосуддя. Місцева церква є незалежним від держави об'єднанням віруючих.",
        en: "We are to pray for our government, that according to God's will it would exercise its entrusted authority to preserve peace and justice. The local church is an assembly of believers independent of the state.",
      },
      {
        uk: "Вибір та звільнення служителів церкви, прийняття в члени, відлучення, виконання духовних потреб (вінчання, хрищення, членські зібрання та інші церковні акти) проводяться без втручання державних установ. Реєстрація церкви в державних установах не може служити підставою для порушення принципу відділення церкви від держави.",
        en: "The calling and release of the church's ministers, the reception of members, church discipline, and the carrying out of spiritual needs (including weddings, baptisms, members' meetings, and other church acts) are conducted without interference from government bodies. Registration of the church with government bodies may not be used as grounds for violating the principle of the separation of church and state.",
      },
      {
        uk: "Ми віримо, що у питаннях військової служби не повинно бути жодного примусу до тих, чиє сумління не дозволяє їм складати присягу та нести військову службу зі зброєю.",
        en: "We believe there should be no compulsion, in matters of military service, on those whose conscience does not allow them to take an oath or bear arms in military service.",
      },
    ],
    refs: "1 Pet. 2:13-14; Acts 4:19; Rom. 13:1-7; Matt. 22:21; 1 Tim. 2:1-2; Matt. 5:34,44, 26:52; Eph. 6:12; James 5:12; Rev. 13:10",
  },
];

export const ui = {
  nav: {
    home: { uk: "Головна", en: "Home" },
    about: { uk: "Про нас", en: "About" },
    beliefs: { uk: "У що ми віримо", en: "Beliefs" },
    ministries: { uk: "Служіння", en: "Ministries" },
    news: { uk: "Новини", en: "News" },
    calendar: { uk: "Календар", en: "Calendar" },
    library: { uk: "Бібліотека", en: "Library" },
    give: { uk: "Пожертви", en: "Give" },
    visit: { uk: "Завітайте", en: "Visit" },
  },
  planVisit: { uk: "Плануйте візит", en: "Plan your visit" },
  callUs: { uk: "Зателефонуйте нам", en: "Call us" },
  getDirections: { uk: "Прокласти маршрут", en: "Get directions" },
  readMore: { uk: "Читати", en: "Read" },
  sundayEyebrow: { uk: "НЕДІЛЯ · 14:00", en: "SUNDAY · 2:00 PM" },
} as const;

// About page (rebuilt 2026-10-11). The idea follows the church's original
// "Хто ми / Наша місія / Історія" page on ukrchurchlancaster.com, rewritten.
// Photos in public/photos/about/ are the church's own, sent 2026-10-11.
// Captions describe only what is visible; no names or dates are guessed.
export const aboutPage = {
  heroTitle: { uk: "Про нашу церкву", en: "About our church" } satisfies Bi,
  heroLead: {
    uk: "Українська євангельсько-баптистська церква в Ланкастері. Щонеділі збираємось на богослужіння українською та англійською, і будемо раді бачити й вас.",
    en: "A Ukrainian Evangelical Baptist church in Lancaster. We gather every Sunday for worship in Ukrainian and English, and you are welcome to join us.",
  } satisfies Bi,
  whoTitle: { uk: "Хто ми", en: "Who we are" } satisfies Bi,
  who: [
    {
      uk: "Ми звичайні люди, які зрозуміли просту і важливу річ: самі себе ми не врятуємо, нам потрібен Спаситель. Ним для нас став Ісус Христос. Він помер за гріх цього світу і дарує нове життя кожному, хто приходить до Нього з вірою.",
      en: "We are ordinary people who came to understand one simple, important thing: we cannot save ourselves, we need a Savior. For us, that Savior is Jesus Christ. He died for the sin of this world and gives new life to everyone who comes to Him in faith.",
    },
    {
      uk: "Біблія для нас є Словом Божим і головним авторитетом у житті. Тому в центрі кожного зібрання стоять молитва, спів і проповідь Слова, а церква для нас є родиною, де ми разом вчимося жити так, як вчить Христос.",
      en: "We believe the Bible is the Word of God and the authority for our lives. That is why prayer, singing and the preaching of the Word are at the heart of every gathering, and why the church is a family to us: a place where we learn together to live the way Christ teaches.",
    },
  ] satisfies Bi[],
  missionTitle: { uk: "Наша місія", en: "Our mission" } satisfies Bi,
  missionPillars: [
    {
      title: { uk: "Зростати", en: "Grow" },
      body: {
        uk: "Зростати в благодаті та пізнанні Господа і Спасителя нашого Ісуса Христа.",
        en: "To grow in the grace and knowledge of our Lord and Savior Jesus Christ.",
      },
      ref: { uk: "2 Петра 3:18", en: "2 Peter 3:18" },
    },
    {
      title: { uk: "Служити й любити", en: "Serve and love" },
      body: {
        uk: "Служити так, як служив Христос, і любити так, як Він полюбив нас.",
        en: "To serve as Christ served, and to love as He loved us.",
      },
      ref: { uk: "Івана 13:34", en: "John 13:34" },
    },
    {
      title: { uk: "Бути сіллю і світлом", en: "Be salt and light" },
      body: {
        uk: "Бути сіллю і світлом у світі, якому так бракує смаку і світла.",
        en: "To be salt and light in a world so short of both.",
      },
      ref: { uk: "Матвія 5:13-14", en: "Matthew 5:13-14" },
    },
  ] satisfies { title: Bi; body: Bi; ref: Bi }[],
  lifeTitle: { uk: "Життя церкви", en: "Church life" } satisfies Bi,
  lifeLead: {
    uk: "Богослужіння, Вечеря Господня, хрещення, молитва, діти і зустрічі вдома. Усі фото тут наші.",
    en: "Worship, the Lord's Supper, baptism, prayer, children and gatherings at home. Every photo here is our own.",
  } satisfies Bi,
  photos: [
    { src: "/photos/about/lords-supper.jpg", w: 1280, h: 960, alt: { uk: "Служителі біля столу Вечері Господньої", en: "Ministers at the Lord's Supper table" } },
    { src: "/photos/about/baptism-prayer.jpg", w: 960, h: 1280, alt: { uk: "Молитва з покладанням рук у день хрещення", en: "Prayer with laying on of hands on baptism day" } },
    { src: "/photos/about/dzherelce.jpg", w: 1280, h: 960, alt: { uk: "Діти та дорослі з написом «Джерельце»", en: "Children and adults with the Dzherelce banner" } },
    { src: "/photos/about/prayer-blessing.jpg", w: 1280, h: 960, alt: { uk: "Служителі моляться за братів і сестер біля кафедри", en: "Ministers praying over brothers and sisters at the pulpit" } },
    { src: "/photos/about/after-baptism.jpg", w: 960, h: 1280, alt: { uk: "Пастор вітає сестру з квітами після хрещення", en: "A pastor greets a sister with flowers after her baptism" } },
    { src: "/photos/about/home-group.jpg", w: 1280, h: 960, alt: { uk: "Зустріч удома", en: "A gathering at home" } },
    { src: "/photos/about/flowers-hall.jpg", w: 960, h: 1280, alt: { uk: "Привітання з квітами під час служіння", en: "Greeting with flowers during a service" } },
    { src: "/photos/about/home-visit.jpg", w: 1280, h: 640, alt: { uk: "Відвідини брата вдома", en: "Visiting a brother at home" } },
    { src: "/photos/about/hall-service.jpg", w: 960, h: 1280, alt: { uk: "Служіння в залі", en: "A service in the hall" } },
  ],
  // Timeline from the church's own written history ("Історія церкви",
  // Lancaster 2025, by Pastor Leonid Bliznyuk; on the site at
  // /library/church-history-2025). Only events and dates that document
  // states are used; the 20th-anniversary date comes from the real 2025
  // News post, and the building fund from the client (2026-09-13).
  historyTitle: { uk: "Наша історія", en: "Our story" } satisfies Bi,
  historyEyebrow: { uk: "ІСТОРІЯ ЦЕРКВИ", en: "CHURCH HISTORY" } satisfies Bi,
  historyLead: {
    uk: "Історія нашої церкви почалася 8 серпня 1999 року. А 13 листопада 2005 року в Ланкастері відбулося офіційне відкриття Української Церкви Євангельських Християн Баптистів.",
    en: "Our church's story began on August 8, 1999. On November 13, 2005, the Ukrainian Evangelical Christian Baptist Church of Lancaster was officially opened.",
  } satisfies Bi,
  historyReadFull: { uk: "Читати повну історію церкви", en: "Read the full church history" } satisfies Bi,
  history: [
    {
      year: { uk: "1999", en: "1999" },
      title: { uk: "Перша українська церква в Ланкастері", en: "The first Ukrainian church in Lancaster" },
      body: {
        uk: "Коли до Америки приїхала родина Леоніда та Галини Близнюк, пастор Іван Ковальчук, тодішній голова Об’єднання українських баптистських церков США, запропонував заснувати в Ланкастері українську баптистську церкву. Це була його мрія, виплекана в молитвах. Конвенція південних баптистів допомогла знайти й оплатити приміщення в американській баптистській церкві в Нью-Голланді. Офіційне відкриття відбулося 8 серпня 1999 року за участі чоловічого хору Першої української церкви Філадельфії. Першими до цієї праці долучилися десять родин.",
        en: "When Leonid and Halyna Bliznyuk's family arrived in America, Pastor Ivan Kovalchuk, then head of the Ukrainian Baptist Convention in the USA, proposed starting a Ukrainian Baptist church in Lancaster. It was a dream he had carried in prayer for a long time. The Southern Baptist Convention helped find and pay for space in an American Baptist church in New Holland. The church officially opened on August 8, 1999, with the men's choir of the First Ukrainian Church of Philadelphia taking part. Ten families were the first to join the work.",
      },
    },
    {
      year: { uk: "2002–2003", en: "2002–2003" },
      title: { uk: "Нова назва і нові люди", en: "A new name and new people" },
      body: {
        uk: "У 2002 році церкву перейменували на Слов’янську баптистську церкву. Того ж року в East Petersburg почалися вивчення Біблії та українська школа для дітей. У 2003 році разом із Першою українською церквою Філадельфії відзначили 100-річчя перекладу Біблії українською мовою та вшанували пам’ять жертв Голодомору в його 70-ті роковини. На ці заходи поштою запросили жителів слов’янського походження, і дехто з них почав шукати Бога та спілкування з українцями. Саме це стало підґрунтям для створення Української церкви в Ланкастері.",
        en: "In 2002 the church was renamed the Slavic Baptist Church. That same year a Bible study and a Ukrainian school for children began in East Petersburg. In 2003, together with the First Ukrainian Church of Philadelphia, the church marked the 100th anniversary of the Bible's translation into Ukrainian and remembered the victims of the Holodomor on its 70th anniversary. Local residents of Slavic background were invited by postcard, and some of them began seeking God and fellowship with other Ukrainians. This laid the groundwork for a Ukrainian church in Lancaster.",
      },
    },
    {
      year: { uk: "2005", en: "2005" },
      title: { uk: "Народження Української церкви", en: "The Ukrainian church is born" },
      body: {
        uk: "14 серпня членське зібрання Слов’янської баптистської церкви в Стівенсі за участі пастора Івана Ковальчука та секретаря Об’єднання пастора Анатолія Мошковського розглянуло створення Української церкви в Ланкастері. Близько 80% присутніх проголосували «за», і на це служіння благословили пастора Леоніда Близнюка. 11 вересня в церкві братів-менонітів в East Petersburg відбулося перше богослужіння: прийшло близько 60 людей разом із дітьми, звершили Вечерю Господню. 13 листопада в приміщенні Lancaster Moravian Church церкву офіційно відкрили, а 27 листопада вона відсвяткувала своє перше Свято Жнив.",
        en: "On August 14, a members' meeting of the Slavic Baptist Church in Stevens, joined by Pastor Ivan Kovalchuk and the Convention's secretary, Pastor Anatoliy Moshkovsky, took up the question of forming a Ukrainian church in Lancaster. About 80% of those present voted in favor, and Pastor Leonid Bliznyuk was blessed for this ministry. The first service was held on September 11 at a Mennonite Brethren church in East Petersburg: about 60 people came, children included, and shared the Lord's Supper. On November 13 the church was officially opened at Lancaster Moravian Church, and on November 27 it celebrated its first Harvest Festival.",
      },
    },
    {
      year: { uk: "2006–2008", en: "2006–2008" },
      title: { uk: "Церква приймає гостей", en: "A church that hosts" },
      body: {
        uk: "У 2006 році церква приймала 6-ту конференцію сестер, а у 2008 році приймала 63-й з’їзд нашого Українського Братерства, який пройшов в атмосфері радості та миру. Разом із церквами Об’єднання регулярно проводилися євангелізаційні зібрання.",
        en: "In 2006 the church hosted the 6th sisters' conference, and in 2008 it hosted the 63rd convention of our Ukrainian Brotherhood, held in a spirit of joy and peace. Evangelistic meetings with the churches of our Convention were held regularly.",
      },
    },
    {
      year: { uk: "2009", en: "2009" },
      title: { uk: "Служіння поруч і далеко", en: "Serving near and far" },
      body: {
        uk: "Церква взяла активну участь у відкритті церкви в Бережанах на Тернопільщині, служіння якої почалося в будинку-інтернаті. Ми підтримували його молитовно й фінансово, посилали сиротам одяг, харчі й теплу білизну. Сестри й молодь заробляли на це кошти: ліпили пельмені, готували частування і продавали їх на базарах, а молодь проводила кав’ярню в Ефраті. Того ж року разом із хорами церков Філадельфії, Гаррісбурга і Стівенса церква провела фестиваль слов’янської культури, де гості почули Євангелію Христа.",
        en: "The church took an active part in opening a church in Berezhany, in Ukraine's Ternopil Oblast, whose ministry began in an orphanage. We supported it with prayer and money and sent the orphans clothes, food and warm underclothes. The sisters and young people raised the funds by making pelmeni and other food to sell at markets, and the youth ran a coffeehouse in Ephrata. That same year, with the choirs of churches from Philadelphia, Harrisburg and Stevens, the church held a festival of Slavic culture where guests also heard the Gospel of Christ.",
      },
    },
    {
      year: { uk: "2020", en: "2020" },
      title: { uk: "15 років", en: "15 years" },
      body: {
        uk: "У листопаді церква відсвяткувала свій 15-річний ювілей. Озираючись назад, ми можемо з упевненістю сказати словами пророка Самуїла: «Аж доти допоміг нам Господь» (1 Самуїла 7:12).",
        en: "In November the church celebrated its 15th anniversary. Looking back, we can say with confidence what the prophet Samuel said: “Thus far the Lord has helped us” (1 Samuel 7:12).",
      },
    },
    {
      year: { uk: "2022", en: "2022" },
      title: { uk: "Нові брати і сестри", en: "New brothers and sisters" },
      body: {
        uk: "З початком повномасштабного вторгнення Росії в Україну багато віруючих братів і сестер прибули до США, і зокрема до нашої церкви. Усі вони активно долучилися до служінь церкви: проповіді, співу, навчання та інших.",
        en: "When Russia's full-scale invasion of Ukraine began, many believers came to the United States, and a number of them to our church. They have all thrown themselves into its ministries: preaching, singing, teaching and more.",
      },
    },
    {
      year: { uk: "2025", en: "2025" },
      title: { uk: "Нові диякони і 20 років", en: "New deacons and 20 years" },
      body: {
        uk: "Влітку церква обрала на дияконське служіння двох братів, Севастяна Усенка і Давида Мараренка. Після річного випробувального терміну церква планує рукопокласти їх на служіння. А 21 вересня церква відсвяткувала 20-ту річницю разом зі Святом Жнив.",
        en: "In the summer the church chose two brothers, Sevastian Usenko and David Mararenko, for the ministry of deacon. After a one-year probation, the church plans to ordain them. Then on September 21 the church celebrated its 20th anniversary together with the Harvest Festival.",
      },
      link: {
        href: "/news/20th-anniversary-recap-2025",
        label: { uk: "Про святкування 20-річчя", en: "About the 20th-anniversary celebration" },
      },
    },
    {
      year: { uk: "Сьогодні", en: "Today" },
      title: { uk: "Церква живе", en: "A living church" },
      body: {
        uk: "Пастор Леонід і вся церква передають пасторське служіння молодому пастору Віктору Щипайлу, який до того ніс служіння пастора в Першій українській євангельсько-баптистській церкві Філадельфії. Богослужіння звершуються щонеділі, у вівторок ми збираємось на молитву, а в четвер вивчаємо Біблію в Zoom разом із гостями з України та інших міст Америки. Щонеділі співає хор, читається поезія і лунає спів музичних груп. Працюють українська та недільна школи, кожного літа проходить денний християнський табір «Джерельце», а хрещення по вірі звершуються майже щороку. Сьогодні церква налічує 60 членів.",
        en: "Pastor Leonid and the whole church are handing the pastoral ministry on to a younger pastor, Viktor Shchypailo, who previously served as pastor of the First Ukrainian Evangelical Baptist Church of Philadelphia. We worship every Sunday, pray together on Tuesdays and study the Bible on Zoom on Thursdays, joined by guests from Ukraine and other American cities. A choir sings every Sunday, alongside poetry and music groups. We have a Ukrainian school and a Sunday school, a Christian day camp called Dzherelce every summer, and baptisms by faith almost every year. Today the church has 60 members.",
      },
    },
    {
      year: { uk: "Далі", en: "Next" },
      title: { uk: "Власний дім молитви", en: "A house of prayer of our own" },
      body: {
        uk: "Зараз ми орендуємо приміщення і збираємо кошти на власну будівлю.",
        en: "We rent our space today and are raising funds for a building of our own.",
      },
      link: {
        href: "/give",
        label: { uk: "Пожертвувати на будівлю", en: "Give toward the building" },
      },
    },
  ] as { year: Bi; title: Bi; body: Bi; link?: { href: string; label: Bi } }[],
  visitTitle: { uk: "Приходьте в неділю", en: "Come on Sunday" } satisfies Bi,
  visitBody: {
    uk: "Богослужіння щонеділі о 14:00 за адресою 1460 Eden Rd, Ланкастер. Приходьте такими, як ви є.",
    en: "Worship every Sunday at 2 PM at 1460 Eden Rd, Lancaster. Come as you are.",
  } satisfies Bi,
};
