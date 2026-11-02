# Jeyber Gómez — Portfolio

[![CI](https://github.com/jeyber-g21/PortfolioWeb/actions/workflows/ci.yml/badge.svg)](https://github.com/jeyber-g21/PortfolioWeb/actions/workflows/ci.yml)

Personal portfolio of **Jeyber Gómez**, Full-Stack & Cloud Developer (Python · Angular · AWS · SQL).
A bilingual (English / Spanish), fully static site designed to let a recruiter assess my profile in under 90 seconds.

The site is also a code sample in its own right, so this repository is public.

## Stack

| Area      | Choice                                                                                               |
| --------- | ---------------------------------------------------------------------------------------------------- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, static generation)                                     |
| Language  | TypeScript (strict)                                                                                  |
| Styling   | Tailwind CSS 4, CSS-first design tokens via `@theme`                                                 |
| i18n      | [next-intl](https://next-intl.dev): `/en` and `/es` routes, root redirect by `Accept-Language`       |
| Theming   | [next-themes](https://github.com/pacocoursey/next-themes): light / dark, persisted, no flash on load |
| Fonts     | Fraunces, Inter and JetBrains Mono, self-hosted through `next/font`                                  |
| CI        | GitHub Actions: format, lint, typecheck and build on every push and PR                               |

No UI component library, no CMS, no backend, no global state.

## Engineering decisions

- **Content is typed data, separate from the UI.** Everything shown on the page lives in [`src/content/`](src/content), and the components only render it. Updating a project means editing an object, never JSX.
- **The compiler catches content typos.** Project and experience stacks are typed against the skill list in [`stack.ts`](src/content/stack.ts), so a misspelled technology (`"Reactt"`) fails the typecheck. Translation keys are typed too.
- **Server Components by default.** Only two components ship to the client: the theme toggle and the language switch. Their strings arrive as props, so no translation JSON is sent to the browser.
- **Works without JavaScript.** Every page is pre-rendered HTML. Navigation, the language switch and the CV download are plain links. The sticky header's bottom rule appears on scroll using a CSS scroll-driven animation, with no JS.
- **Dark mode is its own palette.** It is a separately designed warm-ink palette, not an inversion of the light one. Every text and background pair meets WCAG AA in both themes.
- **Accessibility is an acceptance criterion.** The target is WCAG 2.2 AA: a skip link, a single `h1` with no heading-level gaps, landmarks with `aria-labelledby`, a visible focus ring, 44 px touch targets, `prefers-reduced-motion` respected and underlined body links.

## Project structure

```
src/
├── app/
│   ├── [locale]/            # Root layout, home page and localized 404
│   ├── global-not-found.tsx # Bilingual 404 for unmatched URLs
│   └── globals.css          # Design tokens (color, type scale, spacing)
├── components/
│   ├── layout/              # Header, Footer, ThemeToggle, LocaleSwitch
│   ├── sections/            # Hero, Projects, Stack, Experience, About, Contact
│   └── ui/                  # Section, Tag, ButtonLink
├── content/                 # Typed content: profile, experience, projects, stack
├── i18n/                    # Routing, request config and en/es messages
├── lib/                     # Fonts, site config, helpers
└── proxy.ts                 # Locale detection and redirect
```

## Getting started

Requires **Node.js 22+**.

```bash
npm install
npm run dev          # http://localhost:3000
```

| Script              | What it does                                |
| ------------------- | ------------------------------------------- |
| `npm run dev`       | Development server                          |
| `npm run build`     | Production build                            |
| `npm run start`     | Serve the production build                  |
| `npm run lint`      | ESLint                                      |
| `npm run typecheck` | Generate route types and run `tsc --noEmit` |
| `npm run format`    | Prettier, including Tailwind class sorting  |

## Roadmap

- [x] Foundations: i18n, theming, design tokens, CI
- [x] Content and sections
- [ ] Polish: motion, metadata, Open Graph images, JSON-LD, axe and Lighthouse CI
- [ ] Case studies for professional projects (MDX)

## Contact

[gomezjeyber@gmail.com](mailto:gomezjeyber@gmail.com) · [LinkedIn](https://www.linkedin.com/in/jeyber-adrian-gomez-g) · [GitHub](https://github.com/jeyber-g21)

© Jeyber Gómez. All rights reserved: the code is public for review, not licensed for reuse.
