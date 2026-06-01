# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — dev server at `http://localhost:4321`
- `npm run check` — `astro check` (TypeScript + content schema diagnostics, no build)
- `npm run build` — runs `astro check && astro build` to `./dist/` (check failures block the build)
- `npm run preview` — preview the production build locally

Node ≥ 22.12 (declared in `engines`). No test runner is configured; verification = `npm run check` and Lighthouse JSON reports under `docs/lighthouse/` (see `0e77c09` commit for the targets being held: A11y 100, CLS 0.00).

## Architecture

### Bilingual routing — non-obvious invariants

The site is bilingual with **Indonesian as the un-prefixed default** (`/`) and English at `/en`. Two configuration choices in `astro.config.mjs` are load-bearing and intentional, with comments warning future editors:

- `prefixDefaultLocale: false` paired with **no `redirectToDefaultLocale`** — Astro 6 forbids the combination (causes infinite loops). Don't add it back.
- **No `fallback` config** — if an EN page is missing, a 404 is the desired signal. Adding fallback would silently serve ID content under an `/en/...` URL, which violates the bilingual mirror contract.

URL slugs are stable across locales (`/karya/erm-v2` ↔ `/en/work/erm-v2`). Only the **first path segment** is translated, via `segmentMap` in `src/i18n/utils.ts`. Always use `getLocaleHref(targetLang, currentPath)` for cross-locale links — never hand-build them. When adding a new top-level translated route, extend `segmentMap` in **both** directions.

### Content collections — locale-suffixed IDs

Project case studies live in `src/content/projects/<slug>.<lang>.mdx` (e.g. `erm-v2.id.mdx`, `erm-v2.en.mdx`). The collection in `src/content.config.ts` uses a custom `generateId` that **preserves the `.id` / `.en` suffix in the entry id** because Astro's default loader strips only the file extension and would collide same-slug bilingual entries.

Filtering by locale is done on `data.lang`, not on the id. Use the helpers in `src/i18n/utils.ts`:
- `getProjectsForLang(lang)` — sorted (featured first, then year desc)
- `getProjectBySlug(slug, lang)`
- `getAdjacentProjects(slug, lang)` — for prev/next nav

Schema fields like `confidential: true` mark internal hospital systems with no public links — render UI must not show github/live link affordances when set.

### Single sources of truth

- `src/data/profile.ts` — identity, role, availability season, social. Update here, all sections follow.
- `src/i18n/ui.ts` — every microcopy string, both locales. Adding UI text = add a key in both `id` and `en` blocks; the `satisfies Record<Lang, ...>` guard will fail the build otherwise.
- `src/styles/tokens.css` — color, spacing, typography tokens.
- `design-foundation.md` (~2,750 lines) — visual + voice spec. Section numbering is referenced from comments in the codebase (e.g., `i18n/utils.ts` references §12.4 B2; `astro.config.mjs` references §12.4 B1). When changing routing/i18n behavior, read those sections first.

### Styling

Vanilla CSS with custom properties — **no Tailwind, no CSS-in-JS, no preprocessor**. Global styles are imported once in `BaseLayout.astro` via `src/styles/global.css`, which fans out to topic files (`tokens`, `base`, `typography`, `nav`, `hero`, `sections`, `bento`, `projects`, `project-detail`, `footer`, `ui`). Add new section CSS as a sibling file and `@import` it from `global.css`.

Fonts are **self-hosted via Fontsource** with deliberately narrow subsets (Fraunces wght + wght-italic, Instrument Serif 400 italic only, Geist wght). The weight selection is a font-budget decision documented in `design-foundation.md` §4 — don't widen it without checking the budget impact.

### Path aliases

`tsconfig.json` defines `@/*`, `@components/*`, `@layouts/*`, `@styles/*`, `@i18n/*`, `@data/*`. Use them in `.astro` imports rather than relative paths.

### Brand voice constraints

Banned adjectives in user-facing copy: *best, premium, luxury, world-class, cutting-edge, innovative, revolutionary, passionate*. Claims are backed by concrete numbers (years, project counts, stack names). This applies to both ID and EN copy and to MDX project summaries.

### Bilingual mirror contract

Both locales must keep **identical section structure and item counts**. If content is genuinely irrelevant for one audience, hide it per-locale rather than translating it forcibly. Dates: `id-ID` long format on `/`, `en-US` long on `/en` (use `formatDate` from `src/i18n/utils.ts`). Numbers: `formatNumber` for the matching thousands separator.
