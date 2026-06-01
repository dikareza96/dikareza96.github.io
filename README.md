# Dika Reza — dikareza96.github.io

Public portfolio of **Dika Reza** (`dikareza96`) — Senior Software Engineer specializing in healthcare systems engineering. Bilingual (Indonesian default, English mirror). Built on the Haztech Studio design system.

> Quiet engineering for high-stakes systems.
> Engineering yang tenang untuk sistem yang serius.

## Stack

- **Framework**: [Astro 6](https://astro.build) (static, zero-JS by default)
- **Language**: TypeScript (strict)
- **Styling**: Vanilla CSS with custom properties (no Tailwind)
- **Routing**: Astro built-in i18n (`/` ID default, `/en` English)
- **Content**: Astro Content Collections (Phase 2 — projects MDX)
- **Deploy**: GitHub Pages via GitHub Actions (auto-build on push to `master`)

## Design

Visual language adapted from [Kanara Studio](https://landing-pages-one-psi.vercel.app/kanara-clothing) — verified live source. Warm neutral cream palette, Fraunces + Geist typography pair, italic-swap mechanic on emphasis, layered shadow depth, atmospheric film grain.

Full spec → [`design-foundation.md`](./design-foundation.md) (v2.3, ~2,750 lines).

## Project structure

```
src/
├── components/
│   ├── nav/         Ribbon, PillNav, MobileMenu
│   ├── hero/        Hero, HeroVisual, FloatingCard
│   ├── sections/    MarkerBar, Expertise, Experience, Philosophy, Manifesto, ContactCTA
│   ├── ui/          Button, Eyebrow, Chip, YearPill, UnderlinedLink
│   └── footer/      Footer
├── content/
│   └── projects/    (Phase 2 — MDX project case studies)
├── data/            profile, experience, expertise, philosophy
├── i18n/            ui (dictionary), utils (translations + path stability)
├── layouts/         BaseLayout
├── pages/           index.astro (ID), en/index.astro (EN), 404.astro
└── styles/          tokens, base, typography, nav, ui, hero, sections, bento, footer, global
```

## Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `http://localhost:4321` |
| `npm run check` | Run `astro check` for diagnostics |
| `npm run build` | Type-check + production build to `./dist/` |
| `npm run preview` | Preview production build locally |

## Phase status

- ✅ **Phase 0** — Design foundation document (v2.3, Kanara-verified, LinkedIn-integrated)
- ✅ **Phase 1** — Profile page scaffolded, dev-ready, bilingual mirror complete
- ⏳ **Phase 1.5** — Production deploy to Vercel + custom domain `haztech.dev`
- 📋 **Phase 2** — Projects content collection (`/karya`, `/en/work`)

## Bilingual routing

| Locale | Profile | Work (Phase 2) |
|---|---|---|
| Indonesian (default) | `/` | `/karya` |
| English | `/en` | `/en/work` |

Slug stability across locales via `getLocaleHref()` in `src/i18n/utils.ts`. Path segment dictionary translates `/karya/<slug>` ↔ `/en/work/<slug>` while keeping the slug identical.

## Browser support

Modern evergreen browsers. Reduced-motion + forced-colors (Windows High Contrast) fallbacks built in.

## Credits

- Visual reference: [Kanara Studio](https://landing-pages-one-psi.vercel.app/kanara-clothing)
- Tonal layer system inspired by Material Design 3 (Stitch "Artisanal Ethos")
- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces), [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif), [Geist](https://vercel.com/font)
- Icons: [Lucide](https://lucide.dev)

## License

Source code: not yet licensed (default copyright). Content (text, copy) is personal — do not republish without permission.

---

© 2026 Haztech Studio. Built with Astro in Kediri, East Java.
