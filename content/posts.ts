import type { Bi } from "./church";

// Real community-life posts migrated from the church's own previous site
// (ukrlancaster.church, built by Seva Web Studio) — content and photos are
// the church's own, not stock. Ukrainian text is the original; English is
// either the church's own published translation (where the source post was
// already bilingual) or a faithful translation done for this migration.
// See CLAUDE.md / OPEN-QUESTIONS.md.

export type NewsImage = { src: string; alt: Bi };

export type NewsPost = {
  slug: string;
  date: string; // ISO date
  category: Bi;
  title: Bi;
  excerpt: Bi;
  body: Bi[]; // paragraphs
  hero: NewsImage;
  // "contain" for portrait flyers/posters, where cropping to fill a
  // landscape hero would cut off the date/address printed on the image.
  // Default "cover" for real (landscape-friendly) photos.
  heroFit?: "cover" | "contain";
  gallery?: NewsImage[];
};

const p = (uk: string, en: string): Bi => ({ uk, en });

export const posts: NewsPost[] = [
  {
    slug: "kids-camp-2026-recap",
    date: "2026-06-30",
    category: p("Подія", "Event"),
    title: p(
      "Дитячий табір «Королівство Чистого Серця» — фотозвіт",
      "Kids Camp “Kingdom of a Clean Heart” — Photo Recap"
    ),
    excerpt: p(
      "27 червня наші діти розписували будиночки для пташок і гралися у футбол — фото з табору.",
      "On June 27, our kids painted birdhouses and played soccer — photos from camp day."
    ),
    hero: {
      src: "/photos/news/kids-camp-2026-recap/hero.jpg",
      alt: p("Діти за майстер-класом у таборі", "Kids at the camp craft table"),
    },
    gallery: [
      { src: "/photos/news/kids-camp-2026-recap/2.jpg", alt: p("Майстер-клас з розпису будиночків", "The birdhouse-painting workshop") },
      { src: "/photos/news/kids-camp-2026-recap/3.jpg", alt: p("Волонтер допомагає дитині", "A volunteer helping a child") },
      { src: "/photos/news/kids-camp-2026-recap/4.jpg", alt: p("Хлопчики з розписаними будиночками", "Boys with their painted birdhouses") },
      { src: "/photos/news/kids-camp-2026-recap/5.jpg", alt: p("Ігри на галявині", "Games on the field") },
      { src: "/photos/news/kids-camp-2026-recap/6.jpg", alt: p("Футбол на таборі", "Soccer at camp") },
    ],
    body: [
      p(
        "27 червня наші діти зібралися на одноденний табір «Королівство Чистого Серця» — з іграми, майстер-класами та спільним часом надворі.",
        "On June 27, our kids gathered for a one-day “Kingdom of a Clean Heart” camp — full of games, crafts, and time together outdoors."
      ),
      p(
        "Цього року діти власноруч розписували дерев'яні будиночки для пташок, а потім гуртом гралися у футбол та командні ігри на галявині.",
        "This year the kids hand-painted their own wooden birdhouses, then headed outside for soccer and team games on the lawn."
      ),
      p(
        "Дякуємо всім вчителям і волонтерам, які подарували дітям цей день, і батькам — за довіру!",
        "Thank you to all the teachers and volunteers who gave the kids this day, and to the parents for their trust!"
      ),
    ],
  },
  {
    slug: "world-prayer-ukraine-2026",
    date: "2026-08-17",
    category: p("Молитва", "Prayer"),
    title: p("Всесвітня молитва за Україну", "A Global Prayer for Ukraine"),
    excerpt: p(
      "24 серпня, у 35-ту річницю Незалежності України, — Всесвітня молитва за Україну. Приєднуйтесь 22–23 серпня.",
      "August 24, the 35th anniversary of Ukraine's Independence — a Global Prayer for Ukraine. Join in on August 22–23."
    ),
    hero: {
      src: "/photos/news/world-prayer-ukraine-2026/hero.jpg",
      alt: p("Афіша «Всесвітня молитва за Україну»", "“A Global Prayer for Ukraine” flyer"),
    },
    heroFit: "contain",
    body: [
      p(
        "24 серпня 2026 року, у день 35-ї річниці Незалежності України, оголошено проведення Всесвітньої молитви за Україну! Ініціативу підтримали Президент України та Всеукраїнська Рада Церков і релігійних організацій (ВРЦіРО).",
        "On August 24, 2026 — the 35th anniversary of Ukraine's Independence — a Global Prayer for Ukraine has been announced! The initiative is supported by the President of Ukraine and the All-Ukrainian Council of Churches and Religious Organizations (UCCRO)."
      ),
      p(
        "22 або 23 серпня (субота або неділя), напередодні основної дати, закликаємо церкви, релігійні громади, християнські організації та людей доброї волі в Україні й у всьому світі об'єднатися в молитві за Україну під час суботніх або недільних богослужінь — молитися за припинення війни, перемогу України і справедливий мир.",
        "On August 22 or 23 (Saturday or Sunday), the days before the main date, we call on churches, religious communities, Christian organizations, and people of good will in Ukraine and around the world to unite in prayer for Ukraine during their Saturday or Sunday services — praying for an end to the war, for Ukraine's victory, and for a just peace."
      ),
      p(
        "🌍 Більше інформації та матеріали для участі — на офіційному сайті Всесвітньої молитви за Україну: prayforukraine.org.ua/ua",
        "🌍 More information and materials for participation are on the official Global Prayer for Ukraine website: prayforukraine.org.ua/ua"
      ),
      p(
        "Приєднуйтесь до Всесвітньої молитви за Україну! Моліться. Поширюйте. Запрошуйте інші церкви та вірян. Разом у вірі ми сильні! Разом у молитві — незламні!",
        "Join the Global Prayer for Ukraine! Pray. Share it. Invite other churches and believers. Together in faith we are strong! Together in prayer we are unbreakable!"
      ),
    ],
  },
  {
    slug: "convention-80-2026",
    date: "2026-08-31",
    category: p("Молитва", "Prayer"),
    title: p("Молимося за 80-й з'їзд Об'єднання", "Praying for the 80th Convention of the Association"),
    excerpt: p(
      "4–6 вересня — 80-й ювілейний з'їзд Об'єднання українських євангельських баптистських церков США. Молімося разом.",
      "September 4–6 — the 80th anniversary convention of the Ukrainian Baptist Convention of the USA. Let's pray together."
    ),
    hero: {
      src: "/photos/news/convention-80-2026/hero.jpg",
      alt: p("Афіша 80-го з'їзду Об'єднання", "80th Convention flyer"),
    },
    heroFit: "contain",
    body: [
      p(
        "Мир вам! Цього тижня особливо молимося за 80-й ювілейний з'їзд нашого Об'єднання, який відбудеться 4–6 вересня.",
        "Peace to you! This week we are especially praying for the 80th anniversary convention of our Association, taking place September 4–6."
      ),
      p(
        "Просимо, щоб Бог благословив усю підготовку, подорожі гостей і служителів, а також проведення всіх богослужінь та зустрічей.",
        "We ask that God would bless all the preparations, the travel of guests and ministers, and every service and meeting held there."
      ),
      p(
        "Заохочуємо кожного по можливості максимально бути присутніми на з'їзді, підтримати цю особливу подію молитвою, участю та спільністю.",
        "We encourage everyone, as much as possible, to be present at the convention — to support this special event through prayer, participation, and fellowship."
      ),
      p(
        "Тема з'їзду цього року — «Христоцентрична Місія»: Єдині в Христі, єдині в місії.",
        "This year's theme is “Christ-Centered Mission”: United in Christ, united in mission."
      ),
      p(
        "П'ятниця, 4 вересня — відкриття з'їзду о 7:00, 920 Trenton Rd, Fairless Hills, PA 19030. Субота, 5 вересня — продовження роботи з'їзду. Неділя, 6 вересня — спільне богослужіння Об'єднання о 11:00, 4319 Hulmeville Rd, Bensalem, PA 19020.",
        "Friday, September 4 — the convention opens at 7:00, 920 Trenton Rd, Fairless Hills, PA 19030. Saturday, September 5 — the convention continues. Sunday, September 6 — a joint Convention worship service at 11:00, 4319 Hulmeville Rd, Bensalem, PA 19020."
      ),
      p(
        "Нехай Бог рясно благословить цей час і використає його для зміцнення церков та прославлення Його Імені! До зустрічі!",
        "May God richly bless this time and use it to strengthen the churches and glorify His Name! See you there!"
      ),
    ],
  },
  {
    slug: "harvest-festival-2026",
    date: "2026-09-13",
    category: p("Свято", "Celebration"),
    title: p("Свято Жнив 2026", "Harvest Festival 2026"),
    excerpt: p(
      "20 вересня о 11:00 — разом подякуємо Богові за щедрі дари та Його вірність. Ephrata, PA.",
      "September 20 at 11:00 AM — let's give thanks together for God's generous gifts and faithfulness. Ephrata, PA."
    ),
    hero: {
      src: "/photos/news/harvest-festival-2026/hero.png",
      alt: p("Афіша Свята Жнив 2026", "Harvest Festival 2026 flyer"),
    },
    heroFit: "contain",
    body: [
      p(
        "Українська Євангельсько-Баптистська Церква Ланкастера щиро запрошує вас на Свято Жнив — разом подякуємо Богові за щедрі дари та Його вірність!",
        "The Ukrainian Evangelical Baptist Church of Lancaster warmly invites you to our Harvest Festival — let's give thanks together to God for His generous gifts and faithfulness!"
      ),
      p(
        "Дата: 20 вересня. Час: 11:00. Місце: 225 Woodcrest Dr, Ephrata, PA 17522 (Woodcrest).",
        "Date: September 20. Time: 11:00 AM. Location: 225 Woodcrest Dr, Ephrata, PA 17522 (Woodcrest)."
      ),
      p("Будемо раді бачити вас!", "We'd love to see you there!"),
    ],
  },
  {
    slug: "kids-camp-2026",
    date: "2026-05-10",
    category: p("Подія", "Event"),
    title: p("Дитячий табір 2026", "Kids Camp 2026"),
    excerpt: p(
      "Одноденний християнський табір для дітей 4–14 років — 27 червня, тема «Королівство Чистого Серця».",
      "A one-day Christian camp for kids 4–14 — June 27, this year's theme is “The Kingdom of a Clean Heart.”"
    ),
    hero: {
      src: "/photos/news/kids-camp-2026/hero.jpg",
      alt: p("Діти на майстер-класі в таборі", "Kids at a camp craft table"),
    },
    body: [
      p(
        "Запрошуємо дітей віком від 4 до 14 років на одноденний дитячий християнський табір, який відбудеться 27 червня. Реєстрація о 9:00 ранку.",
        "We invite children ages 4 to 14 to a one-day Christian kids camp on June 27. Check-in is at 9:00 AM."
      ),
      p(
        "Тема табору — «Королівство Чистого Серця». На дітей чекає захоплива історія-алегорія про подорож у Королівство Чистого Серця, де вони дізнаються, що в серці кожної людини ведеться боротьба між добром і гріхом. Самостійно перемогти цю війну неможливо — тільки справжній Цар може допомогти та посісти головне місце в нашому серці.",
        "This year's theme is “The Kingdom of a Clean Heart.” Kids follow an exciting allegorical story about a journey to that Kingdom, where they discover that a battle between good and sin is fought in every human heart — and that only the true King can help win it and take His rightful place there."
      ),
      p(
        "У програмі: біблійні уроки, ігри та конкурси, пісні та спілкування, обід і просто цікаво проведений день. Табір триває один день. Участь безкоштовна! Попередня реєстрація обов'язкова.",
        "On the program: Bible lessons, games and contests, songs and fellowship, lunch, and a genuinely fun day. The camp runs one day. Participation is free — advance registration is required."
      ),
      p(
        "Дата: субота, 27 червня, 9:00–19:30. Адреса: 225 Woodcrest Dr, Ephrata, PA 17522 (Poplar View). Контакти: 717-823-7814.",
        "Date: Saturday, June 27, 9:00 AM – 7:30 PM. Location: 225 Woodcrest Dr, Ephrata, PA 17522 (Poplar View). Contact: 717-823-7814."
      ),
      p(
        "Часті питання: у таборі буде водна гірка, тому візьміть купальний костюм, рушник, змінний одяг та (за бажанням) сонцезахисний крем, а також головний убір і пляшку з водою. Наші вчителі й волонтери мають досвід роботи з дітьми. Обід і вечеря — за рахунок табору, з урахуванням дитячих смаків; про алергії чи дієтичні обмеження, будь ласка, повідомте заздалегідь.",
        "A few things to know: there will be a water slide, so bring a swimsuit, a towel, a change of clothes, and sunscreen (optional), plus a hat and water bottle. Our teachers and volunteers are experienced with children. Lunch and dinner are provided, geared to what kids like — please let us know ahead about any allergies or dietary needs."
      ),
      p(
        "Хочеш стати частиною команди волонтерів — у реєстрації, приготуванні їжі, роботі з дітьми чи фото- і відеозйомці? Не потрібно бути ідеальним — головне бажання служити! Пишіть або телефонуйте: 717-823-7814.",
        "Want to join the volunteer team — with check-in, food, working with kids, or photo/video? You don't need to be perfect, just willing to serve. Call or message: 717-823-7814."
      ),
    ],
  },
  {
    slug: "new-year-2026",
    date: "2026-01-04",
    category: p("Спільнота", "Community"),
    title: p(
      "З молитвою та радістю: як наша церква зустріла Новий 2026 рік",
      "With Prayer and Joy: How Our Church Welcomed the New Year 2026"
    ),
    excerpt: p(
      "Ніч з 31 грудня на 1 січня церква зустріла разом — словом пасторів, молитвою благословення і спільним святковим столом.",
      "The church welcomed the new year together — a word from the pastors, a prayer of blessing, and a shared holiday table."
    ),
    hero: {
      src: "/photos/news/new-year-2026/hero.jpg",
      alt: p("Святкування Нового року в церкві", "New Year's gathering at the church"),
    },
    body: [
      p(
        "Ніч з 31 грудня на 1 січня стала для нашої громади часом особливого єднання. Ми вирішили переступити поріг нового року не поодинці, а разом — прославляючи Бога та радіючи спілкуванню.",
        "The night of December 31 into January 1 became a time of special unity for our community. We chose to cross the threshold of the new year not alone, but together — glorifying God and rejoicing in fellowship."
      ),
      p(
        "Розпочали святкування з найголовнішого — духовної частини. Пастори Віктор, Леонід та Кирило звернулися до церкви з вітальним словом. Вони поділилися цінними побажаннями, надихнули нас твердо триматися віри у прийдешньому році та звершили щиру молитву благословення за майбутнє кожного з нас.",
        "We began the celebration with what matters most — the spiritual part. Pastors Viktor, Leonid, and Kyrylo addressed the church with a welcoming word, shared words of encouragement, inspired us to hold firmly to our faith in the year ahead, and offered a sincere prayer of blessing over each of our futures."
      ),
      p(
        "Після духовної частини на всіх чекав багатий святковий стіл. Атмосфера була по-справжньому родинною, адже частування готували спільними зусиллями — кожен приніс із собою смачну страву, вклавши в неї частинку своєї душі.",
        "After the spiritual part, a rich holiday table awaited everyone. The atmosphere was truly like family, since the feast was prepared together — everyone brought a dish, putting a piece of their heart into it."
      ),
      p("Дякуємо Богу за цей чудовий старт року!", "Thank God for this wonderful start to the year!"),
    ],
  },
  {
    slug: "christmas-concert-2025",
    date: "2026-01-04",
    category: p("Подія", "Event"),
    title: p("Продовжимо радість Різдва разом!", "Let's Continue the Joy of Christmas Together!"),
    excerpt: p(
      "Святковий різдвяний концерт — 11 січня 2026 о 11:00, 225 Woodcrest Dr, Ephrata, PA.",
      "A Christmas Carol Songs concert — January 11, 2026 at 11:00 AM, 225 Woodcrest Dr, Ephrata, PA."
    ),
    hero: {
      src: "/photos/news/christmas-concert-2025/hero.png",
      alt: p("Афіша різдвяного концерту", "Christmas concert poster"),
    },
    heroFit: "contain",
    body: [
      p(
        "Дорогі друзі! Різдвяні дні нагадують нам про найголовніше — Божу любов до нас. Ми хочемо ще раз зібратися разом, щоб через музику та слово подякувати Йому за цей дарунок.",
        "Dear friends! The days of Christmas remind us of what matters most — God's love for us. We want to gather once more to thank Him through music and the Word for this gift."
      ),
      p(
        "Запрошуємо вас на святковий концерт «Christmas Carol Songs» — 11 січня 2026 о 11:00, за адресою 225 Woodcrest Dr, Ephrata, PA 17522. Нехай це буде благословенний час для вашої душі. Приходьте всією родиною!",
        "You're invited to our “Christmas Carol Songs” concert — January 11, 2026 at 11:00 AM, at 225 Woodcrest Dr, Ephrata, PA 17522. May it be a blessed time for your soul. Come with your whole family!"
      ),
    ],
  },
  {
    slug: "christmas-caroling-2025",
    date: "2026-01-04",
    category: p("Служіння", "Outreach"),
    title: p(
      "Різдво у кожну хату: як пройшла наша святкова коляда цієї суботи",
      "Christmas in Every Home: Our Caroling Night"
    ),
    excerpt: p(
      "Наша група колядників винесла Різдвяну звістку зі стін церкви до родин громади, друзів та сусідів.",
      "Our carolers carried the Christmas message out of the church walls and into the homes of families, friends, and neighbors."
    ),
    hero: {
      src: "/photos/news/christmas-caroling-2025/hero.jpg",
      alt: p("Група колядників у гостях", "A group of carolers visiting a home"),
    },
    gallery: [
      { src: "/photos/news/christmas-caroling-2025/2.jpg", alt: p("Коляда під час візиту", "Caroling during a home visit") },
      { src: "/photos/news/christmas-caroling-2025/3.jpg", alt: p("Родина приймає колядників", "A family hosting carolers") },
    ],
    body: [
      p(
        "«Нова радість стала, яка не бувала…» — саме ці слова лунали минулої суботи в багатьох оселях. Наша група колядників вирішила не залишати Різдвяну звістку в стінах церкви, а винести її назовні, до людей.",
        "“A new joy has come, unlike any before…” — these words rang out in many homes last Saturday. Our group of carolers decided not to leave the Christmas message within the church walls, but to carry it out to the people."
      ),
      p(
        "Попри зимову погоду, атмосфера була надзвичайно теплою. Ми мали чудову нагоду відвідати сім'ї нашої громади, друзів та сусідів. Для нас коляда — це набагато більше, ніж просто народна традиція чи спів: це свідчення про те, що Христос прийшов у цей світ заради спасіння кожного; єдність, коли ми можемо розділити радість свята разом і помолитися за мир у кожному домі; і служіння — принести посмішку та святковий настрій туди, де їх, можливо, не вистачало.",
        "Despite the winter weather, the atmosphere was remarkably warm. We had a wonderful chance to visit the families of our congregation, friends, and neighbors. For us, caroling is far more than a folk tradition or singing: it's a witness that Christ came into this world to save every person; it's unity, a time to share the joy of the season and pray for peace in every home; and it's service — bringing a smile and a festive spirit to places that may have been missing one."
      ),
      p(
        "Ми щиро вдячні кожній родині, яка відчинила нам двері. Ваша гостинність, частування та спільні молитви стали справжнім благословенням для нас. Дякуємо всім учасникам, хто пожертвував своїм часом у суботній вечір, щоб послужити іншим! Христос народився! Славімо Його!",
        "We're sincerely grateful to every family who opened their door to us — your hospitality, treats, and shared prayers were a true blessing. Thank you to everyone who gave their Saturday evening to serve others! Christ is born! Let us glorify Him!"
      ),
    ],
  },
  {
    slug: "sisters-christmas-workshop-2025",
    date: "2025-12-24",
    category: p("Спільнота", "Community"),
    title: p(
      "Творчість та спілкування: сестри готують домівки до Різдва",
      "Creativity and Fellowship: Sisters Prepare Homes for Christmas"
    ),
    excerpt: p(
      "Сестринське служіння провело майстер-клас із різдвяних композицій зі свічками та живою хвоєю.",
      "The women's ministry hosted a workshop making Christmas centerpieces with candles and fresh greenery."
    ),
    hero: {
      src: "/photos/news/sisters-christmas-workshop-2025/hero.jpg",
      alt: p("Сестри на майстер-класі перед Різдвом", "Sisters at the pre-Christmas workshop"),
    },
    gallery: [
      { src: "/photos/news/sisters-christmas-workshop-2025/2.jpeg", alt: p("Різдвяна композиція зі свічкою", "A handmade Christmas candle centerpiece") },
      { src: "/photos/news/sisters-christmas-workshop-2025/3.jpeg", alt: p("Спільна робота над прикрасами", "Working together on the decorations") },
      { src: "/photos/news/sisters-christmas-workshop-2025/4.jpeg", alt: p("Готові різдвяні композиції", "Finished Christmas arrangements") },
    ],
    body: [
      p(
        "У минулу неділю, після благословенного часу вивчення Біблії, сестринське служіння нашої церкви мало особливе продовження. У теплій атмосфері затишку сестри взяли участь у творчому майстер-класі — власноруч створювали різдвяні композиції зі свічками та живою хвоєю.",
        "Last Sunday, after a blessed time of Bible study, our church's women's ministry had a special continuation. In a warm and cozy atmosphere, the sisters took part in a creative workshop, handcrafting Christmas centerpieces with candles and fresh greenery."
      ),
      p(
        "Ці прикраси не лише додадуть святкового настрою в їхніх домівках, а й нагадуватимуть про світло Христового Різдва. Цей час став чудовою нагодою для зміцнення дружби, щирих розмов та взаємної підтримки. Дякуємо всім сестричкам за участь та створену красу!",
        "These decorations will not only add festive cheer to their homes, but will also serve as a reminder of the light of Christ's birth. The time was a wonderful chance to strengthen friendships, have sincere conversations, and support one another. Thank you to every sister who took part and made something beautiful!"
      ),
    ],
  },
  {
    slug: "carolers-invite-2025",
    date: "2025-11-30",
    category: p("Оголошення", "Announcement"),
    title: p(
      "Запросіть колядників до себе додому! 27 грудня",
      "Invite Carolers to Your Home! December 27"
    ),
    excerpt: p(
      "За доброю традицією, група колядників відвідує родини громади — запишіться, щоб прийняти гостей 27 грудня.",
      "By our good tradition, a group of carolers visits families in the congregation — sign up to host them on December 27."
    ),
    hero: {
      src: "/photos/news/carolers-invite-2025/hero.jpg",
      alt: p("Різдвяна листівка", "A Christmas greeting graphic"),
    },
    body: [
      p(
        "Дорогі брати та сестри! Наближається величне свято Різдва Христового. За нашою доброю традицією, ми хочемо відвідати ваші домівки, щоб разом заспівати колядок та прославити народженого Ісуса.",
        "Dear brothers and sisters! The glorious feast of Christ's Nativity is approaching. Following our good tradition, we'd like to visit your homes to sing carols together and glorify the newborn Jesus."
      ),
      p(
        "Ми формуємо графік відвідувань на 27 грудня. Якщо ви бажаєте прийняти групу колядників, будь ласка, зв'яжіться з нами, щоб записатися.",
        "We're putting together the visiting schedule for December 27. If you'd like to host a group of carolers, please get in touch to sign up."
      ),
    ],
  },
  {
    slug: "facebook-launch-2025",
    date: "2025-11-30",
    category: p("Оголошення", "Announcement"),
    title: p(
      "Ми у Facebook! Приєднуйтесь до нашої онлайн-спільноти",
      "We're on Facebook! Join Our Online Community"
    ),
    excerpt: p(
      "Тепер у церкви є офіційна сторінка у Facebook — новини, фотозвіти зі свят і щоденне духовне підбадьорення.",
      "The church now has an official Facebook page — news, photos from events, and daily encouragement."
    ),
    hero: {
      src: "/photos/news/facebook-launch-2025/hero.jpg",
      alt: p("Логотип Facebook", "The Facebook logo"),
    },
    body: [
      p(
        "Дорогі друзі! Раді повідомити, що Українська Євангельська Баптистська Церква Ланкастера тепер має офіційну сторінку у Facebook.",
        "Dear friends! We're happy to announce that the Ukrainian Evangelical Baptist Church of Lancaster now has an official Facebook page."
      ),
      p(
        "Це ще один зручний спосіб бути на зв'язку з нами. Підписуйтесь, щоб першими дізнаватися про актуальні новини та анонси подій, фотозвіти зі свят і служінь, зміни в розкладі та важливі оголошення, а також духовне підбадьорення на кожен день.",
        "It's another easy way to stay connected with us. Follow the page to be first to know about upcoming events, photo recaps from services and celebrations, schedule changes and announcements, and daily spiritual encouragement."
      ),
    ],
  },
  {
    slug: "bake-sale-recap-2025",
    date: "2025-11-30",
    category: p("Благодійність", "Charity"),
    title: p(
      "Щиро дякуємо за вашу підтримку!",
      "Thank You So Much for Your Support!"
    ),
    excerpt: p(
      "Благодійний Ukrainian Bake Sale пройшов чудово — гроші зібрані на добру справу, а церква наповнилась теплом спілкування.",
      "Our Charity Ukrainian Bake Sale was a great success — funds raised for a good cause, and the church filled with warm fellowship."
    ),
    hero: {
      src: "/photos/news/bake-sale-recap-2025/hero.jpg",
      alt: p("Столи з домашньою випічкою", "Tables of homemade baked goods"),
    },
    gallery: [
      { src: "/photos/news/bake-sale-recap-2025/2.jpg", alt: p("Випічка на благодійному ярмарку", "Baked goods at the charity sale") },
      { src: "/photos/news/bake-sale-recap-2025/3.jpg", alt: p("Гості благодійного ярмарку", "Guests at the charity bake sale") },
    ],
    body: [
      p(
        "9 листопада наша церква наповнилася ароматом домашньої випічки та теплою атмосферою спілкування. Наш Благодійний Ukrainian Bake Sale пройшов чудово!",
        "On November 9th, our church was filled with the aroma of homemade pastries and a warm atmosphere of fellowship. Our Charity Ukrainian Bake Sale was a great success!"
      ),
      p(
        "Дякуємо нашим невтомним господиням — за неймовірно смачні торти, тістечка та пироги, зроблені з любов'ю; і всім гостям та волонтерам — за вашу присутність, щедрість та відкриті серця. Завдяки вам ми не лише гарно провели час разом, але й змогли зібрати кошти на добру справу.",
        "Thank you to our tireless bakers — for the incredibly delicious cakes, cookies, and pies made with love — and to all our guests and volunteers, for your presence, generosity, and open hearts. Thanks to you, we not only had a great time together but were also able to raise funds for a good cause."
      ),
      p("Нехай Господь рясно благословить вас!", "May the Lord bless you abundantly!"),
    ],
  },
  {
    slug: "20th-anniversary-recap-2025",
    date: "2025-11-30",
    category: p("Свято", "Celebration"),
    title: p(
      "20 років Божої вірності та Свято Жнив!",
      "20 Years of God's Faithfulness & Harvest Festival!"
    ),
    excerpt: p(
      "Церква відсвяткувала 20-річний ювілей громади разом зі Святом Жнив — з подякою за пройдений шлях.",
      "The church celebrated its 20th anniversary together with the Harvest Festival — giving thanks for the road traveled."
    ),
    hero: {
      src: "/photos/news/20th-anniversary-recap-2025/hero.webp",
      alt: p("Святкова композиція Свята Жнив", "A Harvest Festival display"),
    },
    body: [
      p(
        "Нещодавно наша церква пережила подвійну радість. Ми святкували 20-річний ювілей нашої громади разом зі Святом Жнив! «Аж доти допоміг нам Господь» (1 Сам. 7:12)",
        "Recently, our church experienced double the joy. We celebrated our community's 20th anniversary together with the Harvest Festival! “Thus far the Lord has helped us” (1 Sam. 7:12)"
      ),
      p(
        "Це був особливий час подяки. Ми дякували Богу не лише за врожай та хліб на столі, але й за 20 років духовних плодів. Ми згадували тих, хто стояв біля витоків церкви, дивилися на пройдений шлях і славили Господа за те, що Він зберіг і примножив нашу духовну родину в Ланкастері.",
        "It was a special time of thanksgiving. We thanked God not only for the harvest and the bread on our tables, but for 20 years of spiritual fruit. We remembered those who stood at the church's beginnings, looked back on the road we've walked, and praised the Lord for sustaining and growing our spiritual family in Lancaster."
      ),
      p(
        "Дякуємо всім гостям, друзям та членам церкви, хто розділив це велике свято з нами! Попереду — нові горизонти з Богом.",
        "Thank you to all the guests, friends, and church members who shared this great celebration with us! New horizons with God are ahead."
      ),
    ],
  },
  {
    slug: "bake-sale-invite-2025",
    date: "2025-11-02",
    category: p("Благодійність", "Charity"),
    title: p(
      "Благодійний Ukrainian Bake Sale у Ланкастері",
      "Charity Ukrainian Bake Sale in Lancaster"
    ),
    excerpt: p(
      "9 листопада, 12:00–16:30, 1460 Eden Rd — усі кошти йдуть на продукти та хліб для людей в Україні.",
      "November 9, 12:00–4:30 PM, 1460 Eden Rd — all proceeds go toward food and bread for people in Ukraine."
    ),
    hero: {
      src: "/photos/news/bake-sale-invite-2025/hero.png",
      alt: p("Афіша благодійного ярмарку випічки", "Charity bake sale flyer"),
    },
    heroFit: "contain",
    body: [
      p(
        "Запрошуємо вас у суботу, 9 листопада, з 12:00 до 16:30, до нашої української церкви за адресою 1460 Eden Rd, Lancaster, PA, на благодійний ярмарок домашньої випічки.",
        "You're invited on Saturday, November 9, from 12:00 to 4:30 PM, to our Ukrainian church at 1460 Eden Rd, Lancaster, PA, for a charity homemade bake sale."
      ),
      p(
        "Ми продаватимемо українські пиріжки, печиво та солодку випічку, а всі виручені кошти підуть на закупівлю продуктів і хліба для людей в Україні, які цього потребують. Це щира ініціатива нашої громади, щоб поділитися любов'ю, турботою та надією з тими, хто переживає складні часи.",
        "We'll be selling Ukrainian pyrizhky (filled buns), cookies, and sweet pastries, with all proceeds going toward food and bread for people in Ukraine who need it. It's our community's heartfelt initiative to share love, care, and hope with those going through hard times."
      ),
      p(
        "Приходьте, скуштуйте смачні українські страви та зробіть добру справу! Запрошуємо разом із родиною та друзями — кожен внесок має значення. 💙💛",
        "Come taste delicious Ukrainian food and do some good — bring your family and friends, every contribution matters. 💙💛"
      ),
    ],
  },
  {
    slug: "harvest-festival-invite-2025",
    date: "2025-09-08",
    category: p("Свято", "Celebration"),
    title: p(
      "Свято Жнив та святкування 20-ї річниці заснування церкви",
      "Harvest Festival & 20th Church Anniversary Celebration"
    ),
    excerpt: p(
      "21 вересня 2025 — святкове богослужіння з нагоди 20-річчя церкви та Свята Жнив, 225 Woodcrest Dr, Ephrata, PA.",
      "September 21, 2025 — a festive service marking the church's 20th anniversary and the Harvest Festival, at 225 Woodcrest Dr, Ephrata, PA."
    ),
    hero: {
      src: "/photos/news/harvest-festival-invite-2025/hero.png",
      alt: p(
        "Світлини з історії церкви: хор і святкування Жнив",
        "Photos from the church's history: the choir and a Harvest celebration"
      ),
    },
    body: [
      p(
        "Дорогі брати та сестри! Українська церква м. Ланкастер щиро запрошує вас на особливу подію, яка стане знаковою в історії нашої громади. Цього року ми маємо велику радість не лише відзначити Свято Жнив, але й разом відсвяткувати 20-ту річницю заснування нашої церкви.",
        "Dear brothers and sisters! The Ukrainian Church of Lancaster warmly invites you to a special event that will become a milestone in our community's history. This year we have the joy not only of celebrating the Harvest Festival, but of marking the 20th anniversary of our church's founding together."
      ),
      p(
        "Протягом двох десятиліть Бог вірно вів нашу церкву, благословляв у радості й випробуваннях, давав сили служити одне одному та поширювати світло Євангелія. Це свято стане гарною нагодою озирнутися назад, згадати шлях, який ми пройшли, і подякувати Господу за всі Його великі благословення.",
        "For two decades, God has faithfully led our church, blessed us in joy and in trial, and given us strength to serve one another and spread the light of the Gospel. This celebration will be a chance to look back, remember the road we've walked, and thank the Lord for all His blessings."
      ),
      p(
        "Дата: 21 вересня 2025 року. Час початку: 12:00 дня. Місце проведення: 225 Woodcrest Dr, Ephrata, PA 17522.",
        "Date: September 21, 2025. Start time: 12:00 PM. Location: 225 Woodcrest Dr, Ephrata, PA 17522."
      ),
      p(
        "У програмі свята: урочисте богослужіння з проповіддю та молитвою подяки; святковий спів та участь хору; спогади та свідчення про історію церкви та її служіння; тепле спілкування за спільним святковим столом.",
        "Program: a festive worship service with preaching and a prayer of thanksgiving; festive singing and the choir; memories and testimonies about the church's history and ministry; warm fellowship around a shared table."
      ),
      p(
        "Запрошуємо всіх — і тих, хто вже давно є частиною нашої громади, і тих, хто лише нещодавно приєднався, а також усіх друзів і гостей. Будемо раді бачити вас та разом дякувати Богові за 20 років життя та служіння нашої церкви!",
        "Everyone is invited — those who've long been part of our community, those who've only recently joined, and all our friends and guests. We'd love to see you there, to give thanks to God together for 20 years of our church's life and ministry!"
      ),
    ],
  },
  {
    slug: "kids-camp-2025",
    date: "2025-07-01",
    category: p("Подія", "Event"),
    title: p("Одноденний дитячий табір — це було чудово!", "Our One-Day Kids Camp Was Wonderful!"),
    excerpt: p(
      "День радості, пригод, ігор та пізнання Божого Слова — з водною гіркою, майстер-класами та посмішками дітей.",
      "A day of joy, adventure, games, and learning God's Word — with a water slide, crafts, and a lot of smiles."
    ),
    hero: {
      src: "/photos/news/kids-camp-2025/hero.jpg",
      alt: p("Діти на майстер-класі під час табору", "Kids at a craft table during camp"),
    },
    gallery: [
      { src: "/photos/news/kids-camp-2025/2.jpg", alt: p("Ігри на таборі", "Camp games") },
      { src: "/photos/news/kids-camp-2025/3.jpg", alt: p("Діти на водній гірці", "Kids on the water slide") },
      { src: "/photos/news/kids-camp-2025/4.jpg", alt: p("Спільна діяльність дітей", "Kids doing a group activity") },
      { src: "/photos/news/kids-camp-2025/5.jpg", alt: p("Табірний день", "A day at camp") },
    ],
    body: [
      p(
        "Це був день радості, пригод, ігор та пізнання Божого Слова. Діти вивчали історію створення світу за Біблією, брали участь у майстер-класах, творчих заняттях, і, звісно ж, веселились на водній гірці!",
        "It was a day of joy, adventure, games, and learning God's Word. The children studied the biblical account of creation, took part in hands-on activities and creative workshops, and of course had a blast on the water slide!"
      ),
      p(
        "Наша команда служителів та волонтерів зробила все, щоб кожна дитина відчула турботу, любов і підтримку. Ми дякуємо всім батькам за довіру, а дітям — за активність, відкритість і посмішки!",
        "Our team of ministers and volunteers did everything they could so every child felt cared for, loved, and supported. We thank all the parents for their trust, and the kids for their energy, openness, and smiles!"
      ),
      p("Дякуємо, що були з нами — нехай Господь благословить кожну сім'ю!", "Thank you for being with us — may the Lord bless every family!"),
    ],
  },
  {
    slug: "baptism-2025",
    date: "2025-06-08",
    category: p("Служіння", "Ministry"),
    title: p("Урочисте водне хрещення — 31 травня", "A Sacred Water Baptism — May 31"),
    excerpt: p(
      "Двоє братів, Віталій та Даниїл, публічно засвідчили свою віру в Ісуса Христа і прийняли хрещення.",
      "Two brothers, Vitaliy and Danyil, publicly testified to their faith in Jesus Christ and were baptized."
    ),
    hero: {
      src: "/photos/news/baptism-2025/hero.jpg",
      alt: p("Водне хрещення у басейні", "A water baptism in an outdoor pool"),
    },
    body: [
      p(
        "У неділю, 31 травня, у нашій церкві відбулося святе водне хрещення — подія, яка завжди є особливим благословенням для всієї громади.",
        "On Sunday, May 31, our church held a sacred water baptism — an occasion that is always a special blessing for the whole congregation."
      ),
      p(
        "Цього дня двоє братів, Віталій та Даниїл, публічно засвідчили свою віру в Ісуса Христа та готовність слідувати за Ним усім серцем. Перед усією церквою вони прийняли важливе рішення — охреститися, як вияв послуху Божому Слову і підтвердження своєї посвяти.",
        "That day, two brothers, Vitaliy and Danyil, publicly testified to their faith in Jesus Christ and their readiness to follow Him with their whole heart. Before the entire church, they made an important decision — to be baptized, as an act of obedience to God's Word and a confirmation of their commitment."
      ),
      p(
        "💧 Хрещення відбулося в атмосфері радості, миру та глибокої молитви. Прозвучали свідчення, слово настанови, спів хору та спільна молитва за нових братів. Усі присутні відчули Божу присутність та дію Святого Духа.",
        "💧 The baptism took place in an atmosphere of joy, peace, and deep prayer — with testimonies, a word of instruction, the choir singing, and a shared prayer for our new brothers. Everyone present felt God's presence and the work of the Holy Spirit."
      ),
      p(
        "«Чи ви не знаєте, що ми всі, хто христився у Христа Ісуса, у смерть Його христилися? Отож, ми поховані з Ним хрищенням у смерть, щоб, як воскрес Христос із мертвих славою Отця, так щоб і ми стали ходити в обновленні життя.» (Римлян 6:3-4)",
        "“Do you not know that all of us who were baptized into Christ Jesus were baptized into his death? We were therefore buried with him through baptism into death, in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life.” (Romans 6:3-4)"
      ),
      p(
        "Церква радіє разом із небом і молиться, щоб життя Віталія та Данііла було сповнене духовного зростання, мудрості, сили та служіння Господу. Хрещення — це не кінець, а початок нового, благословенного шляху з Христом!",
        "The church rejoices together with heaven and prays that the lives of Vitaliy and Danyil will be filled with spiritual growth, wisdom, strength, and service to the Lord. Baptism is not an end, but the beginning of a new, blessed walk with Christ!"
      ),
    ],
  },
  {
    slug: "unity-prayer-service-2025",
    date: "2025-06-08",
    category: p("Служіння", "Outreach"),
    title: p("Служіння єдності та молитви", "A Service of Unity and Prayer"),
    excerpt: p(
      "У гостях у багатонаціональної церкви — спільне богослужіння чотирма мовами: українською, англійською, креольською й іспанською.",
      "Visiting a multinational church — one worship service in four languages: Ukrainian, English, Haitian Creole, and Spanish."
    ),
    hero: {
      src: "/photos/news/unity-prayer-service-2025/hero.png",
      alt: p("Гурт прославлення у вишиванках грає під час служіння", "Worship team in vyshyvanka playing during the service"),
    },
    gallery: [
      { src: "/photos/news/unity-prayer-service-2025/2.png", alt: p("Спільне богослужіння", "The joint worship service") },
      { src: "/photos/news/unity-prayer-service-2025/3.png", alt: p("Молитва за мир", "Praying for peace") },
    ],
    body: [
      p(
        "У неділю наша церква мала особливу можливість послужити в іншій громаді — ми були в гостях у багатонаціональній церкві, де взяли участь у загальному богослужінні. Хор Української Церкви прославляв Бога співом, а проповідь виголосив місіонер Кріс Еммонс. Ми молилися разом за мир, зцілення та народи, які страждають.",
        "On Sunday our church had a special chance to serve alongside another congregation — we were guests at a multinational church and took part in a joint worship service. The choir of the Ukrainian Church praised God in song, and missionary Chris Ammons preached. We prayed together for peace, healing, and suffering nations."
      ),
      p(
        "Особливо зворушливо було те, що служіння проходило чотирма мовами — українською, англійською, креольською та іспанською. Ми молилися за мир в Україні, за відновлення в Гаїті, за припинення воєн у всьому світі, і щоб Божий мир наповнив землю.",
        "What made it especially moving was that the service was held in four languages — Ukrainian, English, Haitian Creole, and Spanish. We prayed for peace in Ukraine, for restoration in Haiti, for wars to end everywhere, and for God's peace to fill the earth."
      ),
      p(
        "Це служіння стало нагадуванням, що Церква Христа — одна, незалежно від мови, культури чи нації. «Бо один Господь, одна віра, одне хрещення…» (Еф. 4:5)",
        "This service was a reminder that the Church of Christ is one, regardless of language, culture, or nation. “One Lord, one faith, one baptism…” (Eph. 4:5)"
      ),
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
