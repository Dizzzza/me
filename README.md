# Dias — Portfolio (Next.js + next-intl + SCSS + Tailwind)

Портфолио/визитка, перенесённая из Claude Design в Next.js (App Router).

## Стек

- **Next.js 15** (App Router, TypeScript)
- **next-intl** — локализация (`ru` по умолчанию, `en`), маршруты `/ru/...` и `/en/...`
- **SCSS** — токены дизайн-системы (`src/styles/_variables.scss`) и точечные эффекты (глитч-анимации в `*.module.scss`)
- **Tailwind CSS** — расположение, отступы, состояния наведения; цвета/шрифты/радиусы подключены к тем же CSS-переменным, что и SCSS

## Структура

```
i18n/                  конфигурация next-intl (routing, navigation, request)
messages/ru.json       переводы (русский, основной язык)
messages/en.json       переводы (английский)
src/app/[locale]/      layout.tsx, page.tsx — локализованные маршруты
src/components/        Nav, Hero, About, Stack, Experience, Contact, Footer,
                        CanvasBackground (матрица/сетка на canvas), LocaleSwitcher
src/styles/            SCSS-переменные и глобальные стили
```

## Запуск

```bash
npm install
npm run dev
```

Откройте http://localhost:3000 — middleware перенаправит на `/ru` (или `/en`, если браузер просит английский).

## Локализация

Тексты редактируются в `messages/ru.json` и `messages/en.json`. Переключатель языка — в шапке (`Nav` → `LocaleSwitcher`), сохраняет текущий путь.

## Дизайн-токены

Цвета/шрифты/отступы/радиусы заданы CSS-переменными в `src/styles/_variables.scss`
и продублированы в `tailwind.config.ts`, поэтому их можно использовать и как
`var(--color-cyan)` в SCSS, и как `text-cyan` / `bg-cyan` в Tailwind-классах.
