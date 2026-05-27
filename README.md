# Спироплёт

Лендинг спироплётной экосистемы — единого стандарта спирального переплёта
(отверстия Ø 5,5 мм с шагом 4 мм для форматов A4, B5 и A5).

Переверстка сайта [spiroplet.ru](https://spiroplet.ru).

## Стек

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** (компоненты на Base UI, пресет Nova)
- **react-three-fiber** / **three.js** — 3D-спираль в hero-секции
- Деплой на **Vercel**

## Разработка

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # продакшн-сборка
npm run start    # запуск собранного приложения
```

## Структура

- `src/app/` — layout, страница, глобальные стили и дизайн-токены
- `src/components/site/` — секции лендинга (hero, преимущества, экосистема и т. д.)
- `src/components/ui/` — компоненты shadcn/ui
- `src/lib/content.ts` — весь текстовый контент и ссылки в одном месте

## Что осталось заполнить

В `src/lib/content.ts` помечены `TODO`:

- реальные ссылки на карточки товара на маркетплейсах (Wildberries, Ozon, Яндекс Маркет);
- ссылки на соцсети (Telegram, VK, YouTube);
- тексты отзывов (массив `reviews` пока пуст — секция покажет заглушку).

## Деплой

1. Запушить в GitHub.
2. На [vercel.com](https://vercel.com) → **Import Project** → выбрать репозиторий.
3. Vercel сам определит Next.js и соберёт проект. Дальнейшие пуши деплоятся автоматически.
