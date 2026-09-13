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
    uk: "Дім для української громади Ланкастера, у Слові, молитві й спільноті.",
    en: "A home for Lancaster's Ukrainian community, in the Word, in prayer, in community.",
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
// future dates. Add here only once a date is actually confirmed.
export const upcomingEvents: UpcomingEvent[] = [
  {
    date: "2026-09-20",
    time: "11:00 AM",
    title: { uk: "Свято Жнив 2026", en: "Harvest Festival 2026" },
    location: {
      uk: "225 Woodcrest Dr, Ephrata, PA 17522",
      en: "225 Woodcrest Dr, Ephrata, PA 17522",
    },
    postSlug: "harvest-festival-2026",
  },
];

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
    postSlug: "harvest-festival-2026",
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
      uk: "Група колядників відвідує родини громади, друзів та сусідів зі співом і Різдвяною звісткою.",
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
// edition), where he is titled "п." (pastor) preaching that day. The
// other two surnames, titles, and photos are still not public. See
// OPEN-QUESTIONS.md.
export const pastors: string[] = ["Віктор", "Леонід Близнюк", "Кирило"];
export const pastorsEn: string[] = ["Viktor", "Leonid Bliznyuk", "Kyrylo"];

// Founding year derived from the church's own 2025 posts: a "20th
// anniversary" service was held 2025-09-21, so the church was founded
// c. 2005. An earlier, separately-found 1999 story (family Bliznuk
// arriving and proposing the church) is NOT necessarily wrong — a real
// pastor here today is "Leonid Bliznyuk" (see `pastors` above) — but the
// two stories haven't been reconciled into one timeline. See
// OPEN-QUESTIONS.md.
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
      uk: "Прославлення на недільному богослужінні",
      en: "Worship during Sunday service",
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
    alt: { uk: "Діти на уроці недільної школи", en: "Kids in Sunday school class" },
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
    give: { uk: "Пожертви", en: "Give" },
    visit: { uk: "Завітайте", en: "Visit" },
  },
  planVisit: { uk: "Плануйте візит", en: "Plan your visit" },
  callUs: { uk: "Зателефонуйте нам", en: "Call us" },
  getDirections: { uk: "Прокласти маршрут", en: "Get directions" },
  readMore: { uk: "Читати", en: "Read" },
  sundayEyebrow: { uk: "НЕДІЛЯ · 14:00", en: "SUNDAY · 2:00 PM" },
} as const;
