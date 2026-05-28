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
  { label: "Главная", href: "#home" },
  { label: "Где купить", href: "#buy" },
  { label: "Экосистема", href: "#ecosystem" },
  { label: "Отзывы", href: "#reviews" },
  { label: "О проекте", href: "#about" },
  { label: "Контакты", href: "#contacts" },
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

export const formats = [
  { label: "A4", note: "210 × 297 мм" },
  { label: "B5", note: "176 × 250 мм" },
  { label: "A5", note: "148 × 210 мм" },
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

export type SocialLink = { name: string; href: string };

// TODO: подставь реальные ссылки на соцсети.
export const socials: SocialLink[] = [
  { name: "Telegram", href: "#" },
  { name: "VK", href: "#" },
  { name: "YouTube", href: "#" },
];
