/**
 * Весь текстовый контент сайта в одном месте.
 * Тексты взяты с действующего spiroplet.ru без изменений.
 * Ссылки на маркетплейсы и соцсети помечены TODO — подставь реальные URL.
 */

export const site = {
  name: "Спироплёт",
  tagline: "Спироплётная экосистема",
  description:
    "Спироплёт — это система спирального или кольцевого переплёта с круглыми отверстиями диаметром ==5,5 мм== и расстоянием между ними ==4 мм==.",
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "Главная", href: "/#home" },
  { label: "Где купить", href: "/#buy" },
  { label: "Экосистема", href: "/#ecosystem" },
  { label: "Записи", href: "/#notes" },
  { label: "Отзывы", href: "/#reviews" },
  { label: "О проекте", href: "/#about" },
  { label: "Контакты", href: "/#contacts" },
];

export type Advantage = { title: string; description: string };

export const advantages: Advantage[] = [
  {
    title: "Совместимость с форматами",
    description: "Единый стандарт отверстий для всех популярных форматов — A4, B5, A5.",
  },
  {
    title: "Бережно к бумаге",
    description: "Переплёт не повреждает листы при открывании и перелистывании.",
  },
  {
    title: "Раскрытие на 360°",
    description: "Листы свободно разворачиваются на полный оборот — удобно писать и читать.",
  },
  {
    title: "Единый стандарт",
    description: "Отверстия диаметром 5,5 мм с шагом 4 мм — одна экосистема для всего.",
  },
  {
    title: "Замена и добавление листов",
    description: "Легко добавить, убрать или поменять листы местами без инструментов.",
  },
];

/**
 * Форматы спироплётной экосистемы.
 * Количество отверстий на длинном крае — строго по стандарту.
 */
export type Format = {
  label: string;
  widthMm: number;
  heightMm: number;
  holes: number;
};

export const formats: Format[] = [
  { label: "A4", widthMm: 210, heightMm: 297, holes: 30 },
  { label: "B5", widthMm: 176, heightMm: 250, holes: 26 },
  { label: "A5", widthMm: 148, heightMm: 210, holes: 20 },
];

export const spec = {
  holeDiameter: "5,5 мм",
  holeSpacing: "4 мм",
};

export const etymology =
  "Само слово «Спироплёт» — производное от слов ==«Спираль»== и ==«Переплёт»==. Этот термин объясняет сам себя.";

export type Marketplace = { name: string; href: string };

// TODO: подставь реальные ссылки на карточки товара на маркетплейсах.
export const marketplaces: Marketplace[] = [
  { name: "Wildberries", href: "#" },
  { name: "Ozon", href: "#" },
  { name: "Яндекс Маркет", href: "#" },
];

export const about = {
  mission: "Популяризация в России ==спироплётной системы==.",
  invite:
    "Приглашаем к участию в экосистеме продавцов, блогеров, дизайнеров и покупателей.",
  cooperation:
    "Размещение в разделе «Где купить» ==бесплатно== для поставщиков товаров, соответствующих спироплётному стандарту.",
};

export type Review = { name: string; text: string };

// На действующем сайте отзывы пока не опубликованы.
// Добавь сюда реальные отзывы — секция отрисуется автоматически.
export const reviews: Review[] = [];

export const contacts = {
  person: "Артём Старченко",
  email: "artem@starchenko.ru",
  phone: "+7 (903) 655-75-89",
  phoneHref: "+79036557589",
  businessEmail: "dir@3davinci.ru",
};

/**
 * Записи / товары — выгрузка из Tilda-фида.
 * Сейчас отображаются только published; черновики оставлены для будущей выкатки.
 */
export type Note = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  published: boolean;
  date: string;
};

export const notes: Note[] = [
  {
    id: "es14h4xm71",
    title: "Кожанная тетрадь",
    category: "Готовые изделия",
    description: "Премиальная тетрадь на восьми спироплетных кольцах",
    image:
      "https://static.tildacdn.com/tild6462-3633-4664-b862-363736616638/Frame_68.png",
    published: true,
    date: "2025-06-14",
  },
  {
    id: "js0tgunnf1",
    title: "Спироплетный дырокол на 6 отверстий",
    category: "Cпироплётные дыроколы",
    description: "Компактный удобный спироплётный дырокол",
    image:
      "https://static.tildacdn.com/tild3064-6332-4534-b337-643838393237/Frame_54.png",
    published: true,
    date: "2022-12-26",
  },
  {
    id: "8laarvfj11",
    title: "Спироплётный дырокол на 10 отверстий",
    category: "Cпироплётные дыроколы",
    description: "Компактный удобный спироплётный дырокол",
    image:
      "https://static.tildacdn.com/tild3862-3863-4930-b165-633830373634/Frame_55.png",
    published: true,
    date: "2022-12-25",
  },
  {
    id: "u4jpi1goa1",
    title: "Спироплётные кольца",
    category: "Спироплётные крепления",
    description: "Спироплётные кольца, изготовленные из пластика",
    image:
      "https://static.tildacdn.com/tild6663-3936-4165-a630-323632383136/Frame_57.png",
    published: true,
    date: "2022-12-24",
  },
  {
    id: "95b7s7hk11",
    title: "Спироплётные пружины",
    category: "Спироплётные крепления",
    description: "Спироплётные пружины для простого переплёта 360°",
    image:
      "https://static.tildacdn.com/tild6331-3330-4432-b265-386362343432/Frame_58.png",
    published: true,
    date: "2022-12-24",
  },
  {
    id: "ip0drsnp31",
    title: "Спироплётная тетрадь",
    category: "Готовые изделия",
    description: "Спироплётная тетрадь для записей",
    image:
      "https://static.tildacdn.com/tild3662-3539-4264-b236-303335333038/Frame_59.png",
    published: true,
    date: "2022-12-22",
  },
  {
    id: "zzfcbfbpx1",
    title: "Спироплётная бумага",
    category: "Спироплётные вкладыши",
    description: "Бумага специально для спироплётов",
    image:
      "https://static.tildacdn.com/tild3465-3938-4336-a434-376665363738/Frame_60.png",
    published: true,
    date: "2022-12-22",
  },
  {
    id: "1lsxtre8a1",
    title: "Спироплётный брошюратор",
    category: "Cпироплётные дыроколы",
    description:
      "Спироплётный брошюратор для промышленного переплёта. Позволяет за раз создавать отверстия на 30 листах.",
    image:
      "https://static.tildacdn.com/tild3364-3430-4366-b765-653462373962/Frame_61.png",
    published: true,
    date: "2022-12-22",
  },
  {
    id: "zmh4niitb1",
    title: "Спироплётные пружины из металла",
    category: "Спироплётные крепления",
    description:
      "Набор металлических пружин для надёжного переплёта вместе со спироплётным дыроколом.",
    image:
      "https://static.tildacdn.com/tild3236-6563-4265-b161-323362306165/Frame_64.png",
    published: true,
    date: "2022-12-05",
  },
  {
    id: "gezkd95r81",
    title: "Декоративные спироплётные зажимы",
    category: "Спироплётные крепления",
    description: "Декоративные спироплётные кольца (зажимы).",
    image:
      "https://static.tildacdn.com/tild3734-6664-4935-a262-343663373330/Frame_62.png",
    published: true,
    date: "2022-12-04",
  },
  {
    id: "30el0nt3s1",
    title: "Спироплётные обложки",
    category: "Спироплётные обложки",
    description: "Спироплётная плотная обложка для переплета",
    image:
      "https://static.tildacdn.com/tild3562-3137-4936-b230-386433346133/Frame_63.png",
    published: true,
    date: "2022-05-02",
  },
];

export type SocialLink = { name: string; href: string };

// TODO: подставь реальные ссылки на соцсети.
export const socials: SocialLink[] = [
  { name: "Telegram", href: "#" },
  { name: "VK", href: "#" },
  { name: "YouTube", href: "#" },
];
