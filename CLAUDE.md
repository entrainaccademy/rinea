@AGENTS.md

# Rinea

Anti-tarnish fine jewellery e-commerce site.

## Stack

- Next.js 16.3.5 (App Router), React 19.2.8, React Compiler enabled
- Plain JavaScript/JSX — no TypeScript (`jsconfig.json`, `@/*` → `./src/*`)
- Tailwind CSS v4 (CSS-first config via `@theme` in `globals.css`, no `tailwind.config.js`)
- Fonts loaded via `next/font/google`: Fraunces (headings), Inter (body)

## Structure

- `src/app/` — App Router root
  - `layout.js` — root layout, loads fonts, renders `Header`
  - `page.js` — home route (placeholder only, no real page built yet)
  - `globals.css` — Tailwind import + design tokens
  - `icon.jpg` — app icon / favicon (Rinea logo)
- `src/components/` — shared UI (currently just `Header.js`, a nav placeholder)
- `public/` — static assets, including `RINEA_logo.jpeg`

## Design system

**Brand colors** (defined as CSS custom properties + Tailwind tokens in `globals.css`):

| Token      | Hex       | Tailwind utility            |
| ---------- | --------- | ---------------------------- |
| Olive      | `#4A4E2A` | `bg-olive` / `text-olive`   |
| Gold       | `#C9A667` | `bg-gold` / `text-gold`     |
| Paper      | `#F4F1EA` | `bg-paper` / `text-paper`   |

Semantic aliases: `--color-background` (paper), `--color-foreground` (olive).

**Typography**:

- Headings (`h1`–`h6`) — Fraunces, an elegant high-contrast serif. Utility: `font-heading`.
- Body/labels — Inter. This is the default `font-sans` / body font.

Both are loaded as variable fonts via `next/font/google` in `layout.js` and exposed as CSS variables (`--font-fraunces`, `--font-inter`), wired into Tailwind's `--font-heading` / `--font-sans` theme tokens.

**Logo**: `public/RINEA_logo.jpeg` (also used as the app icon at `src/app/icon.jpg`). Used in `Header.js`.

No real pages/routes are built yet — only global chrome (fonts, tokens, header placeholder, icon).
