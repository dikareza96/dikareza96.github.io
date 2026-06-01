# Design Foundation — Haztech Studio

Pondasi desain untuk portofolio personal **Haztech Studio** (oleh `dikareza96`).
Dokumen ini adalah sumber kebenaran tunggal untuk warna, tipografi, ritme layout, motion, voice, dan arsitektur teknis.

> Status referensi: **Kanara-leaning** (verified live). Stitch "Artisanal Ethos" dipakai hanya untuk inspirasi tonal-layer system, **bukan** untuk shape language atau depth.

---

## 0. Sources of Truth

### Primary — Kanara Studio (verified)

- URL: https://landing-pages-one-psi.vercel.app/kanara-clothing
- Diekstrak: HTML lengkap + inline CSS (~1100 baris) sudah dibaca dan diverifikasi
- Berkontribusi: font stack, color tokens, italic-swap mechanic, marquee, glass overlays, floating cards, film grain, ambient warmth, scroll reveal, shape language (rounded), depth language (layered shadow), motion easing
- Lokasi cache lokal: snapshot tidak disimpan; rujuk live URL

### Secondary — Stitch "Artisanal Ethos" (partial)

- File: `docs/color-pallate/DESIGN.md` (sama dengan `docs/stitch_kanara_clothing_design_analysis/DESIGN.md` dan versi mobile-nya — ketiganya identik byte-by-byte)
- Berkontribusi **hanya**: nama tonal layer (`surface-low`, `surface-high`, dst.), prinsip "depth via tonal shift", underlined link pattern
- **TIDAK dipakai**: klaim "sharp 0px" dan "no shadows" dari DESIGN.md text karena `code.html` referensi-nya sendiri kontradiksi (pakai `rounded-2xl`, `rounded-full`, `shadow-sm` extensively). Plan ini ikut Kanara live.

### Reference snapshot files

- `docs/stitch_kanara_clothing_design_analysis/code.html` — Stitch desktop AESTHETE template
- `docs/stitch_kanara_clothing_design_analysis_mobile/code.html` — Stitch mobile AESTHETE template
- `docs/color-pallate/DESIGN.md` — Stitch tokens (Material Design 3 nomenclature)

Reference files dipakai untuk lihat **struktur section** dan **pola tabel/list**, bukan untuk shape/depth.

---

## 1. Brand Essence — Haztech Studio

| Aspek | Nilai |
|---|---|
| Nama brand | Haztech Studio |
| Display name (orang) | Dika Reza |
| Nama lengkap | Dika Reza Rostanto |
| Handle GitHub | `dikareza96` |
| Email kontak | `dikareza966@gmail.com` |
| LinkedIn | `dika-reza-rostanto` |
| Lokasi | Kediri, Jawa Timur, Indonesia |
| Tagline kerja (EN) | "Quiet engineering for high-stakes systems." |
| Tagline kerja (ID) | "Engineering yang tenang untuk sistem yang serius." |
| Niche / specialization | Healthcare systems engineering — SIMRS, EMR/ERM, PACS integration |
| Started professional | April 2019 (~7 tahun pengalaman) |
| Domain target | `haztech.dev` |
| Mood | Quiet, editorial, crafted, atmospheric, sedikit hangat |
| Posisi | Premium tanpa berteriak premium. Engineering portfolio yang terasa seperti editorial lookbook |
| Karakter visual | Warm neutral cream, serif-led, banyak white space, atmospheric grain |
| Karakter verbal | Declarative, spesifik, sedikit melawan arus, bilingual ID/EN |
| Audiens utama | Klien healthcare/enterprise Indonesia (default), recruiter international (versi EN) |
| Referensi spiritual | Kinfolk, The Gentlewoman, Aesop, Toast, Kanara Studio |

Prinsip utama: **show, don't tell**. Klaim dibuktikan dengan angka konkret (tahun pengalaman, jumlah project, stack spesifik, lokasi), bukan dengan adjective. Daftar kata terlarang: best, premium, luxury, world-class, cutting-edge, innovative, revolutionary, passionate.

### Brand mark / monogram

- Single letter `H` (dari "Haztech")
- Render: italic, font Instrument Serif, di dalam ink rounded-square 26px, warna paper
- Persis pola `.nav-mark-glyph` di Kanara

### Wordmark

- Format teks: `Haztech Studio` di nav, `Haztech.` (titik final sebagai signature) di footer wordmark besar
- Italic-swap pada huruf terakhir di footer wordmark besar (lihat section 6)

---

## 2. Audience & Tone Map (Bilingual)

| Konteks | Bahasa default | Tone |
|---|---|---|
| Halaman ID (`/`) | Bahasa Indonesia | Santai-formal, declarative, spesifik. Hindari slang berlebihan |
| Halaman EN (`/en`) | English | Editorial, declarative, no marketing fluff |
| Section technical (stack, role) | Bilingual mirror | Sama struktur, copy diadaptasi natural per bahasa |
| Microcopy tombol/label | Bilingual mirror | Pendek, kata kerja + objek, no exclamation |

**Audiens prioritas**:
1. Klien healthcare/enterprise Indonesia (rumah sakit, vendor SIMRS, sistem internal pemerintah) — default `/` Indonesia
2. Recruiter teknis international untuk role full-stack/backend — versi `/en`
3. Sesama developer Indonesia yang explore stack modern (Bun, Hono, TS) — di section experience & writing nanti

Aturan bilingual:
- Default locale: **`/` Indonesia**, secondary: **`/en` English**
- Kedua versi **selalu mirror** (struktur section identik, jumlah cards/items sama)
- Kalau ada konten yang tidak relevan untuk salah satu audience, hide-nya per-locale, bukan di-translate paksa
- Tanggal: format ID (`16 Mei 2026`) di `/`, format EN (`May 16, 2026`) di `/en`
- Angka: pakai pemisah yang sesuai locale (`1.000` ID, `1,000` EN)
- HTML `lang` attribute ikut locale aktif
- `hreflang` tag dipasang untuk SEO bilingual

---

## 3. Color Palette

Diadopsi langsung dari Kanara live. Nama token disesuaikan supaya semantic untuk konteks portfolio.

### Core tokens (verified persis dari Kanara)

| Token | Hex | RGB | Pemakaian |
|---|---|---|---|
| `--paper` | `#F4EFE6` | 244, 239, 230 | Background utama (cream/linen). Dominasi >70% real estate |
| `--paper-warm` | `#EDE5D6` | 237, 229, 214 | Section partisi, frame hero image, pull quote |
| `--paper-deep` | `#E4DBC8` | 228, 219, 200 | Card paling dalam, footer block, frame inner image |
| `--ink` | `#1B1814` | 27, 24, 20 | Teks utama, near-black hangat. Stroke icon |
| `--ink-soft` | `#3B352E` | 59, 53, 46 | Lead paragraph, body sekunder |
| `--ink-muted` | `#7A7266` | 122, 114, 102 | Eyebrow, caption, meta, helper text |
| `--ink-faint` | `#A9A193` | 169, 161, 147 | Placeholder, disabled, subtle separator label |
| `--sage` | `#6F7A5A` | 111, 122, 90 | Italic-swap accent, eyebrow dot, highlighter underline |
| `--ember` | `#A3542B` | 163, 84, 43 | Bag count, urgent badge, single-pop accent |
| `--sand` | `#D9C89A` | 217, 200, 154 | Dark-block italic accent (CTA inverse), sage alternative on dark |

### Rule (border) tiers

| Token | Value | Pemakaian |
|---|---|---|
| `--rule` | `rgba(27, 24, 20, 0.14)` | Default border untuk card, divider section |
| `--rule-soft` | `rgba(27, 24, 20, 0.08)` | Subtle separator dalam list, hairline antar item |
| `--rule-strong` | `rgba(27, 24, 20, 0.28)` | Border tombol ghost (outlined), state focused |

### Alpha overlays

- Sticky nav background: `rgba(244, 239, 230, 0.78)` + `backdrop-filter: blur(18px) saturate(1.2)`
- Glass card di atas image: `rgba(244, 239, 230, 0.92)` + `backdrop-filter: blur(12px)`
- Mobile menu overlay: `rgba(244, 239, 230, 0.97)` + `backdrop-filter: blur(28px)`
- Newsletter form di dark CTA: `rgba(244, 239, 230, 0.08)` bg, `rgba(244, 239, 230, 0.14)` border
- Hover background: `rgba(27, 24, 20, 0.025)` (item list), `rgba(27, 24, 20, 0.06)` (icon button)

### Atmospheric layers (signature Kanara)

Keduanya dipasang sebagai pseudo-element body, fixed position, low opacity. Tanpa keduanya, halaman terasa "datar".

- **Film grain** — `body::before`, `opacity: 0.045`, `mix-blend-mode: multiply`, SVG fractal noise inline
- **Ambient warmth** — `body::after`, radial gradient ember + sage di top viewport, opacity rendah, fixed

CSS lengkap di section 10.

### Aturan kontras

- Body text: `--ink` di atas `--paper` (rasio ~13:1, AAA)
- Lead text: `--ink-soft` di atas `--paper` (rasio ~10:1, AAA)
- Caption / meta: `--ink-muted` di atas `--paper` (rasio ~4.6:1, AA)
- Faint label: `--ink-faint` hanya untuk text non-essential (placeholder, disabled)
- **Dilarang**: `#000` murni atau `#FFF` murni — selalu warm-shifted ke `--ink` / `--paper`

### Aturan pemakaian warna

- Sage (`--sage`) muncul **dalam setiap section** sebagai italic-swap color — itu signature
- Ember (`--ember`) **hemat** — maksimal 2-3 instance per halaman (badge, single CTA pop)
- Sand (`--sand`) **hanya** muncul di dark inverse block (CTA contact) sebagai pengganti sage
- Surface naik-turun **satu step** antar section. Jangan lompat dari `--paper` langsung ke `--paper-deep` tanpa transisi `--paper-warm`

---

## 4. Typography

Pasangan dua keluarga + satu trick italic-swap. Semua diverifikasi dari Kanara live.

### Font stack (verified persis dari Kanara, dengan optimisasi budget)

```css
--font-display: "Fraunces", "Instrument Serif", Georgia, serif;
--font-italic:  "Instrument Serif", "Fraunces", Georgia, serif;
--font-body:    "Geist", -apple-system, "Helvetica Neue", sans-serif;
--font-mono:    ui-monospace, "SF Mono", Menlo, Consolas, monospace;
```

> **Catatan optimisasi budget**: Kanara aktual pakai `Geist Mono` sebagai mono family.
> Plan ini **drop Geist Mono** untuk save ~40-60 KB woff2. Pengganti: system mono stack
> (`ui-monospace, SF Mono, ...`) — match Apple/MS/Linux native mono. Trade-off: kehilangan ~5%
> visual consistency mono tapi gain ~30% font budget.

**Self-hosted (Phase 1, bukan optimization Phase 2)**:
- Subset Latin + Latin-Ext only (skip Cyrillic, Vietnamese, dst)
- Fraunces: weight **300, 400 italic** only (drop 500, 600, 500 italic)
- Instrument Serif: **400 italic** only (no roman)
- Geist: weight **400, 500** (drop 600 — tidak dipakai di plan)
- Format: woff2 only (no woff fallback — IE11 tidak support kita)
- Total estimasi setelah optimisasi: **~95-130 KB** woff2 untuk 4 file font

Google Fonts URL (Phase 0/dev only — switch ke self-host saat scaffold):
```
https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..400;1,9..144,400&family=Instrument+Serif:ital@1&family=Geist:wght@400;500&display=swap
```

### Italic-swap mechanic (signature)

Setiap kali ada `<em>` di dalam heading atau highlight teks, font **berganti family** dari Fraunces ke Instrument Serif. Italicnya jadi terasa "ditulis tangan", bukan sekadar slant. Disertai color shift ke `--sage` untuk impact ekstra.

```css
h1 em, h2 em, h3 em {
  font-family: var(--font-italic);
  font-weight: 400;
  font-style: italic;
  color: var(--sage);
}
```

### Mono usage

Mono dipakai untuk meta teknis: section number (`01 — Expertise`), tag chip uppercase, year pill (`2021 — PRESENT`), numerical indicator (`01 / 14`), eyebrow caption. Bukan untuk body atau heading.

### Type scale (fluid-aligned dengan Kanara)

| Token | Size (clamp) | Weight | Tracking | Leading | Pemakaian |
|---|---|---|---|---|---|
| `display-2xl` | `clamp(3.4rem, 8.2vw, 7.2rem)` ~54-115px | 300 | -0.035em | 0.96 | H1 hero |
| `display-xl` | `clamp(2.4rem, 5.4vw, 4.4rem)` ~38-70px | 300 | -0.030em | 1.02 | H2 section |
| `display-lg` | `clamp(2.2rem, 4.6vw, 3.8rem)` ~35-60px | 300 | -0.030em | 1.02 | H2 dark CTA |
| `display-md` | `clamp(1.85rem, 4vw, 3.4rem)` ~30-54px | 300 | -0.030em | 1.20 | Pull quote |
| `display-sm` | `clamp(1.8rem, 3vw, 2.4rem)` ~29-38px | 400 | -0.025em | 1.12 | H3 craft column |
| `display-xs` | `clamp(1.25rem, 2.4vw, 1.85rem)` ~20-30px | 400 | -0.022em | 1.10 | Journal title |
| `body-lg` | 1.05rem (~17px) | 400 | -0.005em | 1.65 | Lead paragraph |
| `body` | 15.5px | 400 | -0.005em | 1.65 | Body utama |
| `body-sm` | 0.92rem (~15px) | 400 | -0.005em | 1.50 | Card body, hover meta |
| `caption` | 0.78rem (~12.5px) | 500 | +0.18em | 1.40 | Eyebrow, meta uppercase |
| `caption-xs` | 0.7rem (~11px) | 500 | +0.22em | 1.30 | Mono micro label, footer copyright |

### Aturan typography

- Heading selalu `font-weight: 300` di Fraunces — kontras visual lahir dari italic-swap, bukan dari weight
- Eyebrow label selalu `text-transform: uppercase` + tracking `+0.18em` ke `+0.22em` + warna `--ink-muted`
- Body text **tidak** justified. Ragged-right, max-width 60ch
- Heading boleh wrap ke 2-3 baris; jangan paksa satu baris dengan font-size shrink
- Semua angka di mono (`tabular-nums`) supaya line up vertikal di tabel/list
- Italic murni (HTML `<i>`) jarang dipakai — hampir selalu via `<em>` supaya dapat italic-swap

### Highlighter underline (Kanara signature)

Pengganti italic untuk emphasis di hero. Rectangle sage transparan di belakang teks (bukan underline, melainkan highlight selebar 0.32em).

```css
.highlight {
  position: relative;
  display: inline-block;
}
.highlight::after {
  position: absolute;
  left: -2%; right: -2%; bottom: 0.08em;
  height: 0.32em;
  background: rgba(111, 122, 90, 0.28);
  border-radius: 2px;
  content: "";
  z-index: -1;
}
```

Pakai sangat hemat — **maksimal 1 per halaman**, hanya di hero H1.

---
## 5. Layout & Spacing

### Grid

- Container max-width: **1240px** (verified Kanara, bukan 1280)
- Container width pattern: `min(1240px, calc(100% - 72px))` — auto-margin saat viewport sempit
- Margin desktop efektif: ~36-72px (auto), margin mobile: 20px
- Gutter: 24px (desktop), 16px (mobile)
- Underlying grid: **12 kolom** desktop, **4 kolom** mobile
- Section padding vertikal: `clamp(6rem, 12vw, 9rem)` (~96-144px). Mobile turun ke ~64px

### Spacing scale

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 144 px`

CSS custom properties:
```css
--space-2xs: 4px;
--space-xs:  8px;
--space-sm:  16px;
--space-md:  24px;
--space-lg:  48px;
--space-xl:  96px;
--space-2xl: 128px;
```

### Border radius scale (verified Kanara)

```css
--radius-sm: 0.625rem; /* 10px - chip, small icon button */
--radius-md: 1.25rem;  /* 20px - card tile, journal thumb, craft visual */
--radius-lg: 2rem;     /* 32px - hero frame, CTA card */
--radius-pill: 999px;  /* nav, btn, year-pill */
```

**TIDAK ADA `border-radius: 0` default**. Plan lama (sharp-by-default Stitch) dibatalkan. Default radius adalah `--radius-md` (20px) untuk card, `--radius-lg` (32px) untuk image frame besar, `--radius-pill` untuk semua tombol & badge.

### Asymmetric Balanced Grid (Kanara pattern)

Layout tidak boleh terlalu simetris. Pola yang diadopsi:

- **Hero**: `grid-template-columns: 1.05fr 0.95fr` — kiri sedikit lebih lebar dari kanan
- **Section head**: `grid-template-columns: 1.2fr 0.8fr` — heading kiri dominan, lead kanan
- **Marker bar**: `grid-template-columns: 0.9fr 2.1fr` — title kecil kiri, list besar kanan
- **CTA dark block**: `grid-template-columns: 1.3fr 0.7fr` — H2 dominan, form kompak

Image sering **break grid** atau span jumlah kolom yang tidak rata. Hindari layout "perfectly mirrored" antara kiri-kanan.

### Bento grid (untuk projects/work — Phase 2)

Pattern Kanara collection. Mix tile sizes dalam 12-col grid dengan `grid-auto-rows: 180px`:

| Tile class | Span columns | Span rows | Pemakaian |
|---|---|---|---|
| `.tile--feature` | 7 | 3 | Project hero, large showcase |
| `.tile--tall` | 5 | 3 | Companion vertical |
| `.tile--wide` | 7 | 2 | Standard horizontal |
| `.tile--small` | 5 | 2 | Companion compact |

Pattern stack di profile page boleh dipakai juga untuk gallery di project detail.

### Mobile adaptation rules

| Element | Desktop | Mobile (<768px) |
|---|---|---|
| Nav | Logo + 4 link inline + CTA pill | Logo + hamburger only |
| Hero grid | 2 kolom 1.05/0.95 | Stacked, image max-width 520px center |
| Hero floating cards | 3 visible (season/fabric/price) | Hidden (`display: none`) |
| Hero rail (3-stat row) | `repeat(3, 1fr)` horizontal | `1fr` vertical, hairline separator |
| Section head | `1.2fr 0.8fr` | `1fr` stacked, align-items: start |
| Bento | 12-col mixed tiles | 1 kolom, semua tile aspect 4/5 atau 3/4 |
| Craft grid | 2 kolom + center divider | 1 kolom, divider hidden |
| Journal item | `80px 1fr 1.25fr 180px auto` | Grid-areas reflow: num+arrow row, title row, meta row, thumb row |
| Footer | 4 kolom horizontal | Stack 2 kolom, big mark tetap |
| Marker bar | 2 kolom | 1 kolom |
| Container width | `min(1240px, 100% - 72px)` | `100% - 40px` |

Aturan tambahan:
- Tap target minimum **44×44px** (Apple HIG)
- Section padding vertikal turun ke ~64-96px di mobile (otomatis via clamp)
- Floating glass card di mobile **dihilangkan**, bukan diperkecil — supaya hero breathing room
- Hindari hover-only interactions; semua harus bisa di-tap atau swipe

### Ritme section (wajib diikuti)

Setiap section utama mengikuti pola yang sama:

1. **Eyebrow** — caption uppercase + sage dot + tracking 0.22em + warna `--ink-muted`
2. **Heading** — display dengan italic-swap pada 1-2 kata kunci (color sage)
3. **Lead paragraph** — body-lg, max 42ch, color `--ink-soft`
4. **Konten utama** — grid/list/image/table
5. **CTA opsional** — pill button atau underlined text link

Contoh struktur ID:
```
01 — Keahlian                     ← eyebrow (mono, uppercase)
Stack yang seimbang di seputar    ← heading
   arsitektur yang *kokoh*.          (italic-swap pada "kokoh")
Sistem yang bisa dirawat,         ← lead
pengalaman yang performant.
[tabel teknologi]                 ← konten utama
Lihat detail stack →              ← CTA underlined
```

Contoh EN equivalent:
```
01 — Expertise
A balanced stack focused on
   *robust* architecture.
Maintainable systems, performant
user experiences.
[tech table]
View full stack →
```

---
## 6. Component Patterns

Semua komponen di-spec sesuai Kanara live. Naming class disarankan, tapi implementasi boleh pakai utility (Tailwind) atau CSS modules — yang penting **token & visual match**.

### 6.1 Marquee ribbon (top of page)

Strip horizontal di paling atas, di atas nav.

- Position: `fixed top: 0`, full width, z-index 40
- Background: `var(--ink)`, color `var(--paper)`
- Padding: `0.5rem 0`
- Typography: `var(--font-mono)`, 0.7rem, uppercase, tracking 0.22em
- Animation: `animation: marquee 38s linear infinite`
- Item separator: simbol `◆` warna sage, font-size 0.6rem
- Konten ID (final): `Tersedia untuk proyek Q3 2026`, `Berbasis di Kediri, Jawa Timur`, `Spesialis sistem rumah sakit`, `Bun · Hono · TypeScript · PHP`
- Konten EN (final): `Available for Q3 2026 projects`, `Based in Kediri, East Java`, `Healthcare systems specialist`, `Bun · Hono · TypeScript · PHP`

> **Maintenance note**: Item 1 (`Q3 2026`) hardcoded di plan ini sebagai snapshot 2026-05.
> Saat implement, parameterisasi via `profile.ts` field `availabilitySeason: { id: "Q3 2026", en: "Q3 2026" }`
> supaya update tinggal touch 1 file, tidak hunt across template. Update setiap quarter.
- Konten diduplikasi 2x untuk seamless loop (translate -50%)

### 6.2 Sticky pill navigation

Floating pill di tengah viewport, melayang sedikit dari atas.

- Position: `fixed top: 1.25rem`, centered via flex parent (`justify-content: center`)
- Padding: `0.55rem 0.55rem 0.55rem 1.4rem` (asymmetric — kiri lebih lebar untuk wordmark)
- Background: `rgba(244, 239, 230, 0.78)` + `backdrop-filter: blur(18px) saturate(1.2)`
- Border: 1px `var(--rule)`, radius 999px
- Box-shadow: `0 1px 0 rgba(255,255,255,0.6) inset, 0 22px 60px -20px rgba(27,24,20,0.18)`
- Konten kiri: monogram glyph (26px ink rounded-square, italic H paper) + wordmark "Haztech Studio"
- Konten tengah: 4 link max, gap 1.6rem, color `--ink-soft`, hover underline grow left-to-right (transform scaleX)
- Konten kanan: icon button (mail) + CTA pill `Get in touch ↗`

Mobile (<768px): padding `0.35rem 0.35rem 0.35rem 1rem`, links hidden, hamburger visible (40×40 icon button dengan 2 garis 1.5px yang animate jadi X saat menu open).

### 6.3 Mobile menu overlay

Full-screen overlay yang muncul saat hamburger di-tap.

- Position: `fixed inset: 0`, z-index 45
- Background: `rgba(244, 239, 230, 0.97)` + `backdrop-filter: blur(28px)`
- Layout: flex column, justify center, padding `6rem 2rem 3rem`
- Link items: display block, font-display, size `clamp(2.4rem, 9vw, 4.4rem)`, line-height 1.02, letter-spacing -0.03em
- Italic-swap pada 1 kata kunci tiap link (sage)
- Animasi entry: opacity 0→1 + translateY 24px→0, staggered delay 0.07s per item
- Footer overlay: separator hairline + 2 kolom mono caption (e.g., "ID / EN switcher" kiri, "Email" kanan)

### 6.4 Hero split

Pola signature Kanara, adapted untuk profile.

- Grid: 2 kolom `1.05fr 0.95fr`, gap `clamp(2.5rem, 5vw, 5rem)`
- Padding-top: 8rem (akomodasi nav + ribbon)
- **Kiri**:
  - Eyebrow `01 — Profil` / `01 — Profile`
  - H1 `display-2xl` dengan italic-swap (sage) pada 1-2 kata + highlighter underline pada 1 kata kunci
  - Lead `body-lg`, max 38ch, color `--ink-soft`
  - 2 CTA: `Lihat Karya ↗` (pill ink) + `Hubungi Saya` (pill ghost outline)
  - Hero rail (3 kolom): tahun pengalaman / fokus / lokasi — angka display besar + caption mono
- **Kanan** (hero-visual):
  - Aspect-ratio 4/5
  - Frame outer: `var(--paper-warm)`, padding 0.45rem, border 1px rule, radius `--radius-lg` (32px)
  - Inner: radius `calc(--radius-lg - 0.45rem)`, overflow hidden, image `object-fit: cover`, `filter: saturate(0.9) contrast(1.02)`
  - Box-shadow outer: `0 1px 0 rgba(255,255,255,0.5) inset, 0 50px 100px -30px rgba(27,24,20,0.22)`
- **3 floating glass cards** absolute positioned di sekitar visual:
  - Card 1 (top-left, `-7%` left): mono caption + display 1.15rem (e.g., `Est. 2018` / `A *decade* of code`)
  - Card 2 (right-mid, `-4%` right): caption + display (e.g., `Focus` / `Frontend *architecture*`)
  - Card 3 (bottom-right, `-5%` right): caption + display (e.g., `Stack` / `*Typed* full-stack`)
  - Style: padding 0.45rem outer, inner 0.85rem 1rem `var(--paper)`, radius 1.25rem, blur 12px, shadow `0 28px 60px -24px rgba(27,24,20,0.3)`
  - Animation: `float-a` / `float-b` keyframes, translateY -10/-12px + slight rotate, durasi 7-9s ease-in-out infinite

Karena tidak ada foto profil saat ini, **placeholder hero visual**:
- Inner div pakai gradient warm: `linear-gradient(135deg, --paper-warm 0%, --paper-deep 60%, rgba(111,122,90,0.18) 100%)`
- Tambah pattern noise di atasnya (SVG turbulence opacity 0.08)
- Tidak terlihat seperti placeholder kosong — terlihat intentional & abstract

### 6.5 Marker bar

Bukan press logo strip. Daftar nama company/client/stack favorit, text-only (Kanara pattern).

- Padding `3.5rem 0 4rem`, border-top + border-bottom rule
- Grid: `0.9fr 2.1fr`, gap clamp 2-4rem
- Title kiri: `var(--font-display)` 1.25rem weight 400 dengan italic-swap pada 1 kata
- List kanan: flex wrap, gap `2.25rem 3.5rem`, font-display 1.45rem weight 400 letter-spacing -0.02em color `--ink-muted`
- Hover item: color → `--ink` (transition 0.4s spring)
- Konten ID (final dari LinkedIn): 4 entries — `RS Bhayangkara Kediri`, `Harmoni Integra`, `Webane`, `Politeknik Kediri`
- Konten EN: same 4 entries (nama proper tidak ditranslasi)
- Lihat section 11.4 untuk detail spec lengkap

### 6.6 Section head (default block)

Pola heading section (kecuali hero).

- Grid: `1.2fr 0.8fr`, gap `clamp(2rem, 5vw, 4.5rem)`, align-items end
- Margin-bottom: `clamp(3rem, 6vw, 4.5rem)`
- Kiri: eyebrow → H2 `display-xl` (italic-swap sage)
- Kanan: lead `body`, max 42ch, color `--ink-soft`
- Optional actions: 1-2 link/button di bawah lead

Mobile: stack vertical, align-items start.

### 6.7 Expertise table (Phase 1, profile)

Adopsi pola tabel dari `code.html` Stitch desktop section "Technical Expertise".

- Container: `var(--paper-warm)` background, padding 2rem, radius `--radius-md`, border rule
- Header row: 12-col grid, mono caption uppercase color `--ink-muted`, hairline border-bottom
- Data rows: 12-col grid, font-body untuk category (col-span 5), mono untuk technologies list (col-span 6 right-aligned), col 1 untuk index `01` `02` `03`
- Hover row: background `rgba(27,24,20,0.025)`

### 6.8 Experience timeline (asymmetric)

- Header section pakai pola section head (1.2fr 0.8fr)
- Body grid: 2 kolom (mobile 1 kolom)
- Per role item:
  - Border-top rule, padding-top 2rem
  - Top row: H3 `display-sm` (role title, 2 baris boleh) di kiri + year-pill mono di kanan
  - Subtitle: company name dalam italic Instrument Serif color sage (italic-swap di body-lg)
  - Body: 2-3 kalimat, font-body, color `--ink-soft`
  - Bottom: tag chips wrap-baris (3-4 chips per role)

### 6.9 Philosophy / How I work (3-card row)

Adapted dari Kanara craft section.

- Background section `var(--paper-warm)` (level naik)
- Section head pattern + visual image opsional
- 3 card grid (mobile 1 kolom):
  - Padding 2rem, background `var(--paper)`, radius `--radius-md`, border rule
  - Eyebrow mono `01 / KESEDERHANAAN` / `01 / RESTRAINT`
  - H3 `display-sm` italic full (Instrument Serif sage)
  - Body 3-4 kalimat, font-body, color `--ink-soft`

### 6.10 Pull quote / manifesto

- Padding `clamp(5rem, 10vw, 8rem) 0`, text-align center
- Inner max-width 960px, mx auto
- Blockquote: `display-md`, font-display weight 300, italic-swap pada 2-3 kata kunci (sage)
- Cite di bawah:
  - Inline-flex pill: padding `0.45rem 0.45rem 0.45rem 1rem`, bg `--paper-warm`, border rule, radius 999px
  - Avatar: 28px ink circle berisi inisial italic Instrument Serif paper
  - Nama + role mono caption color `--ink-muted`

### 6.11 Tag chip (rectangular pill, technical)

- Padding `0.3rem 0.7rem` (Kanara tile-tag pattern) atau `0.2rem 0.55rem` (price chip)
- Border 1px rule, radius 999px (pill, **bukan 0px** — koreksi plan lama)
- Typography: `var(--font-mono)` 0.65-0.78rem uppercase, tracking 0.18em
- Background: transparan atau `var(--paper)` (di atas warm bg)
- Color text: `--ink-muted` default, `--paper` di tile-tag (ink bg 0.85)
- Contoh: `REACT`, `TYPESCRIPT`, `CASE STUDY`, `2024`

### 6.12 Year/period pill

- Background `var(--paper-warm)` atau `var(--paper)`, border rule
- Padding `0.2rem 0.75rem`
- Typography: `var(--font-mono)` 0.75rem, tracking 0.18em uppercase
- Color `--ink-muted`
- Contoh: `2021 — PRESENT`, `2018 — 2021`
- **Non-interactive** — decorative label saja, tidak butuh focus state, tidak ada hover effect

### 6.13 Numerical indicator

- Format: `01 / 05`, `02 / 14`
- Typography: `var(--font-mono)` 0.75-0.78rem, tracking 0.18-0.20em uppercase
- Color `--ink-muted`
- Letakkan di samping/atas konten, bukan overlay

### 6.14 Underlined link (text CTA)

Pola signature Kanara nav links.

- Position relative, padding-y 0.35rem
- Underline via `::after` pseudo: `position: absolute; left: 0; right: 0; bottom: -2px; height: 1px; background: var(--ink); transform: scaleX(0); transform-origin: left;`
- Hover: `transform: scaleX(1)` dengan transition 0.5s spring
- Typography: font-body 0.885rem, color `--ink-soft` default → `--ink` on hover
- Format: `Lihat lookbook →` / `View lookbook →` (kata kerja + objek + arrow opsional)
- **Tidak** static underline — selalu animated grow

### 6.15 Pill button (primer & ghost)

**Primer**:
- Padding `0.55rem 0.55rem 0.55rem 1.25rem` (asymmetric — kanan lebih kecil untuk arrow circle)
- Background `var(--ink)`, color `var(--paper)`
- Font-size 0.88rem, weight 500, letter-spacing -0.005em
- Radius 999px
- Arrow circle: 28px paper-alpha (rgba(244,239,230,0.16)) di kanan, icon arrow mini
- Hover: `transform: translateY(-2px)`, shadow `0 18px 40px -12px rgba(27,24,20,0.4)`, arrow rotate -8deg + translate

**Ghost (outline)**:
- Same shape, background transparan, color `--ink`
- Border 1px `--rule-strong`, padding `0.55rem 1.25rem` (no arrow)
- Hover: bg `--ink`, color `--paper`, shadow

**Nav variant**: padding `0.45rem 0.45rem 0.45rem 1.1rem`, font 0.85rem, arrow 26px

### 6.16 Decorative stamp / seal (opsional)

Pengecualian shape language. Hanya untuk certification mark (mis. badge AWS Certified).

- Lingkaran 56-72px, border 1px `--ink`
- Konten: short text wrapped melingkar atau monogram di tengah
- Pakai sangat hemat — **maksimal 1 per halaman**

### 6.17 Footer

- Background `var(--paper)`, border-top rule
- Padding `4rem 0 2.5rem`
- Grid: `1.6fr 1fr 1fr 1fr` (brand + 3 link kolom)
- Brand kolom: H3 wordmark `Haztech.` + lead 1 paragraf (filosofi singkat)
- Link kolom: heading mono uppercase + ul list font-body color `--ink-soft`
- **Big wordmark** sebelum bottom row: `clamp(4rem, 18vw, 14rem)`, line-height 0.85, letter-spacing -0.05em, color `--ink`, italic-swap pada 2 huruf terakhir (sage)
- Bottom row: separator + flex justify-between, mono caption uppercase
- Konten kiri: `© 2026 Haztech Studio. Dibuat dengan niat baik di Kediri.` / `© 2026 Haztech Studio. Made with intention in Kediri.`
- Konten kanan: language switcher (`ID / EN`), social links (GitHub `dikareza96`, LinkedIn, Email)

### 6.18 Newsletter / Contact dark CTA

Adapted dari Kanara newsletter — repurposed jadi contact form/email.

- Outer card: padding 0.45rem, bg `--paper-deep`, border rule, radius `--radius-lg`, shadow dramatic
- Inner: padding `clamp(2.5rem, 5vw, 4.5rem)`, bg `--ink`, color `--paper`, radius `calc(--radius-lg - 0.45rem)`
- Grid: 2 kolom `1.3fr 0.7fr` (mobile 1 kolom)
- Kiri: eyebrow paper-alpha (sand dot), H2 `display-lg` italic-swap pada `--sand` color, body sub
- Kanan: form pill (single input email + button paper)
  - Form bg `rgba(244,239,230,0.08)`, border alpha-paper, radius 999px, padding 0.4rem
  - Input transparan, color paper, placeholder `rgba(244,239,230,0.45)`
  - Button paper bg, ink color, radius 999px, padding `0.65rem 1.25rem`
- Footnote mono di bawah form: `Tidak akan disalahgunakan · Balasan dalam 48 jam` / `No spam · Reply within 48h`

---
## 7. Iconography, Imagery & Depth

### Ikon

- Library: **Lucide** (default) atau Phosphor Regular sebagai alternative
- Stroke: 1.5px, ujung rounded
- Size default: 18-20px (inline dengan text), 24-28px (standalone button)
- Tidak pakai filled icon kecuali untuk badge count (ember bg) atau status indicator
- Untuk technical feel di list/tabel, prefer mono numerical indicator (`01 / 05`) daripada arrow icons

### Imagery — placeholder strategy (Phase 1)

Karena belum ada foto profil & project, semua image position di-fill dengan **intentional placeholder** yang tidak terlihat seperti placeholder.

**Hero visual** (4/5 aspect):
```css
background:
  linear-gradient(135deg,
    var(--paper-warm) 0%,
    var(--paper-deep) 55%,
    rgba(111, 122, 90, 0.18) 100%);
```
Tambah SVG turbulence noise overlay opacity 0.08 supaya tidak terasa flat.

**Floating glass cards**: tetap berfungsi karena isinya text (label + display number), tidak butuh image.

**Marker bar**: pure typography, no logo (sesuai original Kanara pattern).

**Avatar/monogram**: huruf `H` italic Instrument Serif di dalam ink rounded-square 26px (nav) atau ink circle 28-56px (cite/quote section).

**Project thumbnails** (Phase 2): pakai abstract pattern variant per project — kombinasi warna sage/ember/sand dengan gradient angle berbeda. Atau screenshot kalau sudah tersedia.

### Imagery — saat foto tersedia (Phase 2+)

- Natural light, low saturation, banyak negative space
- Tidak ada gradient cerah, tidak ada drop shadow eksternal pada subjek
- Filter standard: `saturate(0.9) contrast(1.02)` untuk hero, `saturate(0.88)` untuk craft visual, `saturate(0.92)` untuk tile bento
- Format: WebP/AVIF dengan JPEG fallback, lazy loading kecuali hero
- Aspect ratio standard: hero 4/5, project tile feature 7×3, square 1/1, gallery 3/4 atau 4/3

### Shape language — rounded by Kanara

Default border-radius **bukan 0px**. Adopsi nilai Kanara:

| Element | Radius token | Pixel |
|---|---|---|
| Hero image frame | `--radius-lg` | 32px |
| CTA dark card outer | `--radius-lg` | 32px |
| Bento tile (project) | `--radius-md` | 20px |
| Craft visual / journal thumb | `--radius-md` | 20px |
| Floating glass card outer | 1.25rem | 20px |
| Glass card inner | calc outer - 0.45rem | ~13px |
| Tile caption pill | 0.9rem | ~14px |
| Pill button / badge / chip | `--radius-pill` (999px) | full pill |
| Decorative stamp / avatar | 50% / 999px | circle |
| Year-pill / hero arrow circle | 999px | full pill |
| Section container | `--radius-md` (kalau dalam paper-warm block) | 20px |

**Tidak ada elemen utama yang sharp 0px**. Pengecualian hanya: section divider hairline (border 1px), input bottom-border-only style.

### Depth — layered shadow + tonal layers (Kanara approach)

**Shadow stack** (verified Kanara — bukan "no shadows" seperti plan lama):

```css
/* Subtle inset highlight pada surface terangkat */
--shadow-inset-light: 0 1px 0 rgba(255, 255, 255, 0.6) inset;
--shadow-inset-medium: 0 1px 0 rgba(255, 255, 255, 0.5) inset;

/* Floating elements (nav, glass card) */
--shadow-nav: 0 22px 60px -20px rgba(27, 24, 20, 0.18);
--shadow-glass: 0 28px 60px -24px rgba(27, 24, 20, 0.30);

/* Hero frame & CTA card (dramatic) */
--shadow-hero: 0 50px 100px -30px rgba(27, 24, 20, 0.22);
--shadow-cta: 0 50px 120px -40px rgba(27, 24, 20, 0.22);

/* Hover elevation (tile, button) */
--shadow-hover-tile: 0 40px 80px -32px rgba(27, 24, 20, 0.25);
--shadow-hover-btn: 0 18px 40px -12px rgba(27, 24, 20, 0.40);
```

**Hierarki kedalaman** dibangun lewat 4 mekanik (bukan 1):

1. **Layered shadow** — primary depth signal (Kanara approach)
2. **Tonal layer shift** — paper → paper-warm → paper-deep antar section
3. **Hard outline** — 1px rule untuk card, divider, input (disertai shadow, bukan replacement)
4. **Whitespace** — section gap 96-144px sebagai pembeda terkuat
5. **Overlap** — floating glass card di atas image (signature)

Plan lama "no shadows kecuali super subtle" **dibatalkan**. Shadow di Kanara adalah core depth language, bukan exception.

---

## 8. Motion

Easing curves yang dipakai (verified Kanara):

```css
--spring:    cubic-bezier(0.22, 0.68, 0, 1);   /* Punchy, default UI */
--ease-out:  cubic-bezier(0.32, 0.72, 0, 1);   /* Image scale, slow zoom */
--ease-soft: cubic-bezier(0.22, 1, 0.36, 1);   /* Reveal, calm transitions */
```

Durations:

```css
--dur-fast:   200ms;  /* Hover state minor */
--dur-base:   400ms;  /* Default UI transition */
--dur-medium: 700ms;  /* Tile hover translate */
--dur-slow:   900ms;  /* Scroll reveal */
--dur-slower: 1400ms; /* Image scale on hover */
```

### Pola motion

- **Hover button**: `transform: translateY(-2px)` + shadow grow, durasi 400ms spring
- **Hover tile/card**: `transform: translateY(-4px)` + shadow grow + image scale 1.045 (1400ms ease-out untuk image)
- **Hover nav link**: underline `scaleX(0)` → `scaleX(1)` origin left, 500ms spring
- **Hover icon button**: bg color + `translateY(-1px)`, 400ms spring
- **Hover journal arrow**: rotate -35deg + bg flip ink, 450ms spring
- **Marquee**: `translateX(-50%)` linear infinite, 38s (single loop)
- **Floating cards**: `float-a`/`float-b` keyframes — translateY -10/-12px + slight rotate, 7-9s ease-in-out infinite
- **Page entry / scroll reveal**: opacity 0→1 + translate3d(0, 36px, 0) → 0 + filter blur(6px) → blur(0), 900ms spring, staggered delay 0.08s per child
- **Mobile menu open**: overlay opacity 450ms + link items staggered staircase (0.07s per item)
- **Mobile menu link entry**: opacity + translateY 24px→0, 600ms spring

### Aturan motion

- Hover state: opacity, color shift, atau translateY kecil. **Bukan** scale (kecuali image inside container, max 1.045)
- Reveal on scroll: opsional, **hanya** untuk image hero, marker bar, pull quote besar — tidak boleh dipasang di setiap section (overload)
- Hindari parallax berlebihan — brand tenang
- Respect `prefers-reduced-motion`: matikan marquee, scroll reveal, dan floating card animations. Replace dengan static positioning + opacity instant

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Page transition (Astro 6 ClientRouter)

Untuk navigasi antar route (`/` → `/karya` → `/karya/[slug]`):

- Astro 6 pakai `<ClientRouter />` (bukan `<ViewTransitions />` — itu deprecated dari Astro 5)
- Import: `import { ClientRouter } from "astro:transitions";`
- Pasang di `<head>` `BaseLayout.astro`
- Custom transition: fade + translateY(8px), 400ms spring (default browser)
- Persist marquee, nav, dan footer (no flash) — pakai `transition:persist` directive di element

```astro
---
// src/layouts/BaseLayout.astro
import { ClientRouter } from "astro:transitions";
---
<html lang={lang}>
  <head>
    <ClientRouter />
    <!-- meta, fonts, etc. -->
  </head>
  <body>
    <Ribbon transition:persist />
    <PillNav transition:persist />
    <slot />
    <Footer transition:persist />
  </body>
</html>
```

---
## 9. Voice & Copywriting (Bilingual)

### 9.1 Aturan suara universal

- **Declarative**, bukan persuasive. Pakai kalimat pernyataan, bukan ajakan
- **Spesifik**. Pakai angka, lokasi, nama, satuan (tahun, project count, stack name, kota)
- **Em dash sebagai ritme** untuk break kalimat panjang. Bukan koma panjang, bukan titik koma
- **Antitesis untuk impact**: "Slow by design, not by accident.", "Built to be read, not just to run."
- **First-person plural** ("we"/"kami") yang humble — tapi karena ini portfolio personal, default first-person singular ("I"/"saya") lebih honest
- **Tidak pakai exclamation mark** kecuali di error message technical
- **No emoji** di body content

### 9.2 Daftar kata terlarang

**Bahasa Inggris**: best, premium, luxury, world-class, cutting-edge, innovative, revolutionary, passionate, synergy, leverage (verb), unlock, empower, seamless, elevate (verb), craft (overused), journey (overused), curated.

**Bahasa Indonesia**: terbaik, premium, kelas dunia, terdepan, inovatif, revolusioner, berdedikasi, bersemangat, bersinergi, mendongkrak, membuka potensi, membangun masa depan, solusi total, terpercaya.

**Borderline (boleh dipakai dengan justifikasi)**: `high-stakes`, `mission-critical`, `production-grade`. Acceptable hanya saat domain memang life-impact (healthcare, fintech, aviation, infrastruktur). Hindari di domain non-critical (marketing site, blog, UI showcase) — terdengar inflated.

Pengganti yang dipakai:
- "premium" → angka konkret (gsm, jam, tahun) atau "considered"
- "best" → spesifik kapasitas ("handles 10k req/s", "ships in 2 weeks")
- "passionate" → action verb ("I write", "I build", "saya tulis", "saya bangun")
- "innovative" → describe what's actually different ("uses streaming SSR", "menggunakan SSR streaming")

### 9.3 Pola heading (italic-swap)

Format: `[kata netral] [italic kata kunci] [kata netral].`

**EN contoh**:
- "Quiet pieces for *loud* weekdays."
- "Slow by *design*, not by accident."
- "Notes on *cloth*, season, and the long way round."
- "A balanced stack focused on *robust* architecture."

**ID contoh**:
- "Karya yang *tenang* untuk hari-hari yang berisik."
- "Lambat karena *niat*, bukan karena tidak sengaja."
- "Catatan tentang *kode*, sistem, dan jalan yang panjang."
- "Stack seimbang yang berpusat pada arsitektur yang *kokoh*."

### 9.4 Microcopy bilingual

| Konteks | EN | ID |
|---|---|---|
| Hero CTA primer | `View work ↗` | `Lihat karya ↗` |
| Hero CTA sekunder | `Get in touch` | `Hubungi saya` |
| Form helper kontak | `No spam · Reply within 48h` | `Tidak disalahgunakan · Balasan dalam 48 jam` |
| Footer tagline | `Made with intention in Kediri.` | `Dibuat dengan niat baik di Kediri.` |
| Newsletter / contact heading | `Let's *talk*.` | `Mari *bicara*.` |
| Section "About" eyebrow | `01 — Profile` | `01 — Profil` |
| Section "Expertise" eyebrow | `02 — Expertise` | `02 — Keahlian` |
| Section "Experience" eyebrow | `03 — History` | `03 — Pengalaman` |
| Section "Philosophy" eyebrow | `04 — Philosophy` | `04 — Prinsip` |
| Section "Manifesto" eyebrow | `05 — Manifesto` | `05 — Manifesto` |
| Section "Contact" eyebrow | `06 — Contact` | `06 — Kontak` |
| Year-pill present | `2024 — PRESENT` | `2024 — SEKARANG` |
| Time-period | `2018 — 2021` | `2018 — 2021` (sama) |
| Marquee item 1 | `Available for Q3 2026` | `Tersedia untuk proyek Q3 2026` |
| Marquee item 2 | `Based in Kediri, East Java` | `Berbasis di Kediri, Jawa Timur` |
| Marquee item 3 | `Remote-friendly` | `Bersedia remote` |
| Marquee item 4 | `Open source maintainer` | `Pemelihara open source` |
| Marker bar title | `Previously *at*` | `Pernah bekerja *di*` |
| Footer copyright | `© 2026 Haztech Studio.` | `© 2026 Haztech Studio.` (sama) |
| Language switcher | `EN / ID` | `ID / EN` (current locale highlighted) |
| 404 heading | `Not found.` | `Tidak ditemukan.` |
| 404 subtext | `The page you're looking for doesn't exist.` | `Halaman yang dicari tidak ada.` |

### 9.5 Hero copy (final draft, dari LinkedIn)

**Versi EN**:
```
Eyebrow: 01 — Senior software engineer
H1:     Quiet engineering for
        *high-stakes* systems.
Lead:   I build hospital information systems and electronic medical records
        that clinical teams rely on daily. Seven years across the stack —
        legacy PHP, modern Bun/Hono/TypeScript, and the seams between.
CTAs:   [View work ↗] [Get in touch]
Rail:   2019 — Started · Kediri — Based · 7 years — Healthcare
```

**Versi ID**:
```
Eyebrow: 01 — Senior software engineer
H1:     Engineering yang *tenang*
        untuk sistem yang serius.
Lead:   Saya membangun sistem informasi rumah sakit dan rekam medis elektronik
        yang diandalkan tim klinis setiap hari. Tujuh tahun lintas-stack —
        PHP legacy, Bun/Hono/TypeScript modern, dan jahitan di antaranya.
CTAs:   [Lihat karya ↗] [Hubungi saya]
Rail:   2019 — Mulai · Kediri — Lokasi · 7 tahun — Healthcare
```

### 9.6 Manifesto / pull quote (draft personal)

**EN**:
> "In a hospital, software doesn't get to be *clever* — it has to be reliable. The best system is the one no one notices because it never gets in the way of care."

**ID**:
> "Di rumah sakit, perangkat lunak tidak boleh sekadar *pintar* — ia harus andal. Sistem terbaik adalah yang tidak disadari keberadaannya, karena tidak pernah menghalangi pekerjaan klinis."

Cite: Dika Reza · Senior Software Engineer · RS Bhayangkara Kediri

### 9.7 Aturan format teks

- **Tanggal**:
  - ID: `16 Mei 2026`, `Mei 2026`
  - EN: `May 16, 2026`, `May 2026`
- **Angka besar**:
  - ID: `1.000 jam`, `100.000 baris`
  - EN: `1,000 hours`, `100,000 lines`
- **Range tahun**: pakai em dash dengan spasi — `2018 — 2021` (kedua locale)
- **Kapital**:
  - ID: kapital di awal kalimat & nama proper. Hindari Title Case di heading panjang
  - EN: sentence case di body, Title Case opsional di nav links singkat (`View Work`)
- **Quotes**:
  - EN: curly quotes `"..."` dan apostrof `'`
  - ID: curly quotes `"..."` (sama)

---
## 10. CSS Custom Properties (siap pakai)

Drop-in CSS untuk root tokens, body setup, atmospheric layers, dan typography base. Implementasi Phase 1 cukup mulai dari sini.

### 10.1 Root tokens

```css
:root {
  /* ─── Color ─── */
  --paper:      #F4EFE6;
  --paper-warm: #EDE5D6;
  --paper-deep: #E4DBC8;
  --ink:        #1B1814;
  --ink-soft:   #3B352E;
  --ink-muted:  #7A7266;
  --ink-faint:  #A9A193;
  --sage:       #6F7A5A;
  --ember:      #A3542B;
  --sand:       #D9C89A;

  /* ─── Rule (border) ─── */
  --rule:        rgba(27, 24, 20, 0.14);
  --rule-soft:   rgba(27, 24, 20, 0.08);
  --rule-strong: rgba(27, 24, 20, 0.28);

  /* ─── Typography ─── */
  --font-display: "Fraunces", "Instrument Serif", Georgia, serif;
  --font-italic:  "Instrument Serif", "Fraunces", Georgia, serif;
  --font-body:    "Geist", -apple-system, "Helvetica Neue", sans-serif;
  --font-mono:    "Geist Mono", "SF Mono", ui-monospace, monospace;

  /* ─── Spacing ─── */
  --space-2xs: 4px;
  --space-xs:  8px;
  --space-sm:  16px;
  --space-md:  24px;
  --space-lg:  48px;
  --space-xl:  96px;
  --space-2xl: 128px;

  /* ─── Radius ─── */
  --radius-sm:   0.625rem;
  --radius-md:   1.25rem;
  --radius-lg:   2rem;
  --radius-pill: 999px;

  /* ─── Shadow ─── */
  --shadow-inset-light:  0 1px 0 rgba(255, 255, 255, 0.6) inset;
  --shadow-inset-medium: 0 1px 0 rgba(255, 255, 255, 0.5) inset;
  --shadow-nav:          0 22px 60px -20px rgba(27, 24, 20, 0.18);
  --shadow-glass:        0 28px 60px -24px rgba(27, 24, 20, 0.30);
  --shadow-hero:         0 50px 100px -30px rgba(27, 24, 20, 0.22);
  --shadow-cta:          0 50px 120px -40px rgba(27, 24, 20, 0.22);
  --shadow-hover-tile:   0 40px 80px -32px rgba(27, 24, 20, 0.25);
  --shadow-hover-btn:    0 18px 40px -12px rgba(27, 24, 20, 0.40);

  /* ─── Motion ─── */
  --spring:    cubic-bezier(0.22, 0.68, 0, 1);
  --ease-out:  cubic-bezier(0.32, 0.72, 0, 1);
  --ease-soft: cubic-bezier(0.22, 1, 0.36, 1);

  --dur-fast:   200ms;
  --dur-base:   400ms;
  --dur-medium: 700ms;
  --dur-slow:   900ms;
  --dur-slower: 1400ms;

  /* ─── Layout ─── */
  --container-max: 1240px;
  --container-pad: 72px;
}
```

### 10.2 Reset + body base

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  overflow-x: hidden;
  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-body);
  font-size: 15.5px;
  line-height: 1.65;
  letter-spacing: -0.005em;
}

a { color: inherit; text-decoration: none; }

a, button {
  -webkit-tap-highlight-color: rgba(27, 24, 20, 0.06);
  touch-action: manipulation;
}

button {
  font: inherit;
  border: none;
  background: none;
  color: inherit;
  cursor: pointer;
}

:focus-visible {
  outline: 2px solid var(--ink);
  outline-offset: 3px;
  border-radius: 4px;
}

::selection {
  background: var(--ink);
  color: var(--paper);
}

img { display: block; max-width: 100%; }
```

### 10.3 Atmospheric layers (signature)

```css
/* Film grain — fixed, low opacity */
body::before {
  position: fixed;
  inset: 0;
  z-index: 60;
  pointer-events: none;
  content: "";
  opacity: 0.045;
  mix-blend-mode: multiply;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

/* Ambient warmth — radial gradient di top viewport */
body::after {
  position: fixed;
  inset: -10% -10% auto -10%;
  height: 60vh;
  z-index: 0;
  pointer-events: none;
  content: "";
  background:
    radial-gradient(60% 50% at 20% 10%, rgba(163, 84, 43, 0.07), transparent 70%),
    radial-gradient(50% 40% at 90% 0%, rgba(111, 122, 90, 0.08), transparent 72%);
}
```

### 10.4 Container utility

```css
.container {
  width: min(var(--container-max), calc(100% - var(--container-pad)));
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .container {
    width: calc(100% - 40px);
  }
}
```

### 10.5 Typography base

```css
h1, h2, h3, h4, h5 {
  font-family: var(--font-display);
  font-weight: 300;
  letter-spacing: -0.035em;
  line-height: 1.05;
  color: var(--ink);
}

h1 em, h2 em, h3 em, h4 em, h5 em {
  font-family: var(--font-italic);
  font-weight: 400;
  font-style: italic;
  color: var(--sage);
}

p {
  color: var(--ink);
  max-width: 60ch;
}

p.lead {
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--ink-soft);
  max-width: 42ch;
}

/* Eyebrow */
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink-muted);
}

.eyebrow::before {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--sage);
  content: "";
  box-shadow: 0 0 0 4px rgba(111, 122, 90, 0.14);
}

/* Highlighter underline (hero only) */
.highlight {
  position: relative;
  display: inline-block;
}
.highlight::after {
  position: absolute;
  left: -2%;
  right: -2%;
  bottom: 0.08em;
  height: 0.32em;
  background: rgba(111, 122, 90, 0.28);
  border-radius: 2px;
  content: "";
  z-index: -1;
}

/* Scroll reveal */
.reveal {
  opacity: 0;
  transform: translate3d(0, 36px, 0);
  filter: blur(6px);
  transition:
    opacity var(--dur-slow) var(--spring),
    transform var(--dur-slow) var(--spring),
    filter var(--dur-slow) var(--spring);
}
.reveal.in {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  filter: blur(0);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .reveal {
    opacity: 1;
    transform: none;
    filter: none;
  }
}

/* Forced-colors / Windows High Contrast — backdrop-filter di-disable
   oleh OS, alpha background tanpa blur jadi illegible. Fallback ke solid
   surface + system colors. */
@media (forced-colors: active) {
  .nav,
  .hero-badge,
  .tile-caption,
  .mobile-menu {
    background: Canvas;
    color: CanvasText;
    border-color: CanvasText;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
  .ribbon {
    background: CanvasText;
    color: Canvas;
  }
  .btn {
    background: ButtonFace;
    color: ButtonText;
    border: 1px solid ButtonText;
  }
  .btn:hover { background: Highlight; color: HighlightText; }
}
```

---
### 10.6 Marquee ribbon

```css
.ribbon {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 40;
  padding: 0.5rem 0;
  background: var(--ink);
  color: var(--paper);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  overflow: hidden;
}

.ribbon-track {
  display: flex;
  gap: 3.5rem;
  white-space: nowrap;
  animation: marquee 38s linear infinite;
}

.ribbon-track span {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
}

.ribbon-track span::after {
  content: "◆";
  color: var(--sage);
  font-size: 0.6rem;
}

@keyframes marquee {
  to { transform: translateX(-50%); }
}

/* Reduced motion: marquee jadi text wall kalau cuma matikan animation.
   Solusi: hide duplicate items + show first 4 static. */
@media (prefers-reduced-motion: reduce) {
  .ribbon { overflow: hidden; }
  .ribbon-track {
    animation: none;
    justify-content: center;
    flex-wrap: wrap;
  }
  .ribbon-track > span:nth-child(n+5) {
    display: none;
  }
}

/* A11y defensive: pause marquee saat focus inside (untuk future-proof
   kalau ribbon nanti contain interactive element) */
.ribbon:focus-within .ribbon-track {
  animation-play-state: paused;
}
```

### 10.7 Sticky pill nav

```css
.nav-wrap {
  position: fixed;
  top: 1.25rem;
  left: 0; right: 0;
  z-index: 50;
  display: flex;
  justify-content: center;
  pointer-events: none;
}

.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0.55rem 0.55rem 0.55rem 1.4rem;
  background: rgba(244, 239, 230, 0.78);
  border: 1px solid var(--rule);
  border-radius: var(--radius-pill);
  backdrop-filter: blur(18px) saturate(1.2);
  -webkit-backdrop-filter: blur(18px) saturate(1.2);
  box-shadow: var(--shadow-inset-light), var(--shadow-nav);
  pointer-events: auto;
  max-width: calc(100% - 2.5rem);
}

.nav-mark {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 500;
  letter-spacing: -0.02em;
}

.nav-mark-glyph {
  width: 26px;
  height: 26px;
  border-radius: 8px;
  background: var(--ink);
  color: var(--paper);
  display: grid;
  place-items: center;
  font-family: var(--font-italic);
  font-style: italic;
  font-size: 1.05rem;
  line-height: 1;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.6rem;
  font-size: 0.885rem;
  color: var(--ink-soft);
}

.nav-links a {
  position: relative;
  padding: 0.35rem 0;
  transition: color var(--dur-base) var(--spring);
}

.nav-links a::after {
  position: absolute;
  left: 0; right: 0;
  bottom: -2px;
  height: 1px;
  background: var(--ink);
  content: "";
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 500ms var(--spring);
}

.nav-links a:hover { color: var(--ink); }
.nav-links a:hover::after { transform: scaleX(1); }

@media (max-width: 768px) {
  .nav-links { display: none; }
  .nav { padding: 0.35rem 0.35rem 0.35rem 1rem; gap: 0.75rem; }
}
```

### 10.8 Pill button

```css
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.55rem 0.55rem 0.55rem 1.25rem;
  background: var(--ink);
  color: var(--paper);
  font-size: 0.88rem;
  font-weight: 500;
  letter-spacing: -0.005em;
  border-radius: var(--radius-pill);
  transition:
    transform var(--dur-base) var(--spring),
    box-shadow var(--dur-base) var(--spring);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-hover-btn);
}

.btn:active { transform: translateY(0); }

.btn-arrow {
  width: 28px;
  height: 28px;
  border-radius: var(--radius-pill);
  background: rgba(244, 239, 230, 0.16);
  display: grid;
  place-items: center;
  transition: transform 500ms var(--spring);
}

.btn:hover .btn-arrow {
  transform: translate(2px, -1px) rotate(-8deg);
}

.btn-ghost {
  background: transparent;
  color: var(--ink);
  border: 1px solid var(--rule-strong);
  padding: 0.55rem 1.25rem;
}

.btn-ghost:hover {
  background: var(--ink);
  color: var(--paper);
}
```

### 10.9 Hero visual frame

```css
.hero-visual {
  position: relative;
  aspect-ratio: 4 / 5;
}

.hero-visual-frame {
  position: absolute;
  inset: 0;
  padding: 0.45rem;
  background: var(--paper-warm);
  border: 1px solid var(--rule);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-inset-medium), var(--shadow-hero);
}

.hero-visual-inner {
  position: relative;
  height: 100%;
  border-radius: calc(var(--radius-lg) - 0.45rem);
  overflow: hidden;
  background: var(--paper-deep);
}

.hero-visual-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.9) contrast(1.02);
}

/* Placeholder gradient (Phase 1, no photo) */
.hero-visual-placeholder {
  position: relative;
  height: 100%;
  border-radius: calc(var(--radius-lg) - 0.45rem);
  background:
    linear-gradient(135deg,
      var(--paper-warm) 0%,
      var(--paper-deep) 55%,
      rgba(111, 122, 90, 0.18) 100%);
  overflow: hidden;
}

.hero-visual-placeholder::after {
  position: absolute;
  inset: 0;
  content: "";
  opacity: 0.08;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n2)'/%3E%3C/svg%3E");
}

/* Floating glass cards */
.hero-badge {
  position: absolute;
  padding: 0.45rem;
  background: rgba(244, 239, 230, 0.92);
  border: 1px solid var(--rule);
  border-radius: 1.25rem;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: var(--shadow-glass);
}

.hero-badge-inner {
  padding: 0.85rem 1rem;
  border-radius: calc(1.25rem - 0.45rem);
  background: var(--paper);
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-width: 150px;
}

.hero-badge h5 {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: var(--ink-muted);
  font-weight: 500;
}

.hero-badge p {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 400;
  letter-spacing: -0.015em;
  line-height: 1.1;
}

.hero-badge p em {
  font-family: var(--font-italic);
  font-style: italic;
  color: var(--sage);
}

.hero-badge--a { top: 7%; left: -7%;  animation: float-a 7.5s ease-in-out infinite; }
.hero-badge--b { bottom: 9%; right: -5%; animation: float-b 9s ease-in-out infinite; }
.hero-badge--c { top: 48%; right: -4%; animation: float-a 8.5s ease-in-out infinite; }

@keyframes float-a {
  0%, 100% { transform: translateY(0) rotate(-1.5deg); }
  50%      { transform: translateY(-10px) rotate(-2deg); }
}

@keyframes float-b {
  0%, 100% { transform: translateY(0) rotate(2deg); }
  50%      { transform: translateY(-12px) rotate(1.2deg); }
}

@media (max-width: 768px) {
  .hero-badge { display: none; }
}
```

---
### 10.10 Section base

```css
.section {
  padding: clamp(6rem, 12vw, 9rem) 0;
  position: relative;
}

.section--warm {
  background: var(--paper-warm);
  border-top: 1px solid var(--rule);
  border-bottom: 1px solid var(--rule);
}

.section-head {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: end;
  margin-bottom: clamp(3rem, 6vw, 4.5rem);
}

.section-head h2 {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 5.4vw, 4.4rem);
  font-weight: 300;
  line-height: 1.02;
  letter-spacing: -0.03em;
}

.section-head h2 em {
  font-family: var(--font-italic);
  font-style: italic;
  font-weight: 400;
  color: var(--sage);
}

.section-head .eyebrow { margin-bottom: 1.25rem; }

.section-head p {
  font-size: 1rem;
  line-height: 1.65;
  color: var(--ink-soft);
  max-width: 42ch;
}

@media (max-width: 1024px) {
  .section-head {
    grid-template-columns: 1fr;
    align-items: start;
  }
}
```

### 10.11 Tag chip & year-pill

```css
.chip {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.7rem;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-muted);
  background: transparent;
  border: 1px solid var(--rule);
  border-radius: var(--radius-pill);
}

.chip-dark {
  color: var(--paper);
  background: rgba(27, 24, 20, 0.85);
  border: none;
  backdrop-filter: blur(8px);
}

.year-pill {
  display: inline-flex;
  align-items: center;
  padding: 0.2rem 0.75rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink-muted);
  background: var(--paper-warm);
  border-radius: var(--radius-pill);
}

.indicator {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--ink-muted);
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
```

### 10.12 Bento tile (Phase 2 projects)

```css
.bento {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 180px;
  gap: 1.25rem;
}

.tile {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-md);
  background: var(--paper-deep);
  border: 1px solid var(--rule);
  transition:
    transform var(--dur-medium) var(--spring),
    box-shadow var(--dur-medium) var(--spring);
}

.tile:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover-tile);
}

.tile img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--dur-slower) var(--ease-out);
  filter: saturate(0.92);
}

.tile:hover img { transform: scale(1.045); }

.tile-tag {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.tile-caption {
  position: absolute;
  left: 1.25rem; right: 1.25rem; bottom: 1.25rem;
  padding: 0.85rem 1rem;
  background: rgba(244, 239, 230, 0.92);
  border: 1px solid var(--rule);
  border-radius: 0.9rem;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.tile--feature { grid-column: span 7; grid-row: span 3; }
.tile--tall    { grid-column: span 5; grid-row: span 3; }
.tile--wide    { grid-column: span 7; grid-row: span 2; }
.tile--small   { grid-column: span 5; grid-row: span 2; }

@media (max-width: 768px) {
  .bento { grid-template-columns: 1fr; grid-auto-rows: auto; }
  .tile {
    grid-column: 1 / -1 !important;
    grid-row: auto !important;
    aspect-ratio: 4 / 5;
  }
}
```

### 10.13 Journal list (writing/blog Phase 2)

```css
.journal-item {
  display: grid;
  grid-template-columns: 80px 1fr 1.25fr 180px auto;
  gap: clamp(1rem, 3vw, 2.5rem);
  align-items: center;
  padding: 1.75rem 0;
  border-top: 1px solid var(--rule);
  transition: background 450ms var(--spring);
  position: relative;
}

.journal-item:last-child { border-bottom: 1px solid var(--rule); }
.journal-item:hover { background: rgba(27, 24, 20, 0.025); }

.journal-num   { font-family: var(--font-mono); font-size: 0.75rem; color: var(--ink-muted); letter-spacing: 0.2em; }
.journal-title { font-family: var(--font-display); font-size: clamp(1.25rem, 2.4vw, 1.85rem); font-weight: 400; letter-spacing: -0.022em; line-height: 1.1; }
.journal-meta  { font-size: 0.88rem; color: var(--ink-muted); line-height: 1.5; }

.journal-thumb {
  width: 180px;
  aspect-ratio: 5 / 4;
  border-radius: 0.75rem;
  overflow: hidden;
  background: var(--paper-deep);
}

.journal-arrow {
  width: 36px; height: 36px;
  border-radius: var(--radius-pill);
  border: 1px solid var(--rule);
  display: grid;
  place-items: center;
  transition:
    background 450ms var(--spring),
    color 450ms var(--spring),
    transform 450ms var(--spring);
}

.journal-item:hover .journal-arrow {
  background: var(--ink);
  color: var(--paper);
  transform: rotate(-35deg);
}
```

### 10.14 Dark CTA (contact block)

```css
.cta-card {
  padding: 0.45rem;
  background: var(--paper-deep);
  border: 1px solid var(--rule);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-cta);
}

.cta-inner {
  padding: clamp(2.5rem, 5vw, 4.5rem);
  background: var(--ink);
  color: var(--paper);
  border-radius: calc(var(--radius-lg) - 0.45rem);
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: clamp(2rem, 4vw, 4rem);
  align-items: end;
  position: relative;
  overflow: hidden;
}

.cta-inner h2 {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 4.6vw, 3.8rem);
  font-weight: 300;
  line-height: 1.02;
  letter-spacing: -0.03em;
  color: var(--paper);
}

.cta-inner h2 em {
  font-family: var(--font-italic);
  font-style: italic;
  color: var(--sand);
}

.cta-inner p {
  margin-top: 1rem;
  color: rgba(244, 239, 230, 0.7);
  max-width: 42ch;
}

.cta .eyebrow { color: rgba(244, 239, 230, 0.65); }
.cta .eyebrow::before {
  background: var(--sand);
  box-shadow: 0 0 0 4px rgba(217, 200, 154, 0.16);
}

@media (max-width: 1024px) {
  .cta-inner { grid-template-columns: 1fr; align-items: start; }
}
```

### 10.15 Footer

```css
.footer {
  padding: 4rem 0 2.5rem;
  border-top: 1px solid var(--rule);
  background: var(--paper);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 2.5rem;
  margin-bottom: 3rem;
}

.footer-mark {
  font-family: var(--font-display);
  font-size: clamp(4rem, 18vw, 14rem);
  line-height: 0.85;
  letter-spacing: -0.05em;
  color: var(--ink);
  text-align: center;
  margin: 3rem 0 1.5rem;
  font-weight: 300;
}

.footer-mark em {
  font-family: var(--font-italic);
  font-style: italic;
  color: var(--sage);
  font-weight: 400;
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid var(--rule);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  color: var(--ink-muted);
  text-transform: uppercase;
}

@media (max-width: 1024px) {
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
```

---
## 11. Information Architecture

### 11.1 Site map (Phase 1 — Profile only)

```
/                           → Profil (default, Bahasa Indonesia)
/en                         → Profile (English mirror)
/404                        → Tidak ditemukan / Not found
```

Total: 1 halaman utama × 2 locale = 2 routes terlihat.

### 11.2 Site map (Phase 2 — Projects added)

```
/                           → Profil (ID)
/karya                      → Daftar proyek (ID)
/karya/[slug]               → Detail proyek (ID)
/en                         → Profile (EN)
/en/work                    → Project list (EN)
/en/work/[slug]             → Project detail (EN)
/404
```

Catatan path:
- ID memakai `/karya` bukan `/projects` supaya konsisten dengan locale default
- EN memakai `/en/work` (bukan `/en/projects`) — lebih pendek, lebih natural di EN portfolio
- Slug project sama di kedua locale (tidak diterjemahkan, supaya URL stable & SEO-friendly)

### 11.3 Profile page structure (Phase 1)

Section urut dari atas ke bawah. Setiap section mengikuti ritme (eyebrow → heading → lead → konten → CTA opsional).

| # | Section | Background | Tujuan |
|---|---|---|---|
| 0 | Marquee ribbon | `--ink` | Status & lokasi (status banner, fixed top) |
| 0 | Sticky pill nav | `rgba(paper, 0.78)` blur | Wayfinding global |
| 1 | Hero | `--paper` | Hook utama, identitas, lead, CTA |
| 2 | Marker bar | `--paper` | Trust signal: pernah bekerja dengan |
| 3 | Expertise (tabular) | `--paper` | Stack & domain dalam format tabel ringkas |
| 4 | Experience timeline | `--paper` | Sejarah karir dengan asymmetric grid |
| 5 | Philosophy / How I work | `--paper-warm` | 3-card prinsip kerja (level naik) |
| 6 | Manifesto / pull quote | `--paper` | Kutipan pendek + cite |
| 7 | Contact dark CTA | `--paper` (card `--ink`) | Email / form kontak |
| 8 | Footer | `--paper` | Big wordmark + link sosial + bottom row |

Total: 6 content sections + hero + footer + nav + ribbon.

Estimated viewport-vh: ~6-7 viewport scroll di desktop, ~10-12 di mobile.

### 11.4 Per-section spec (referensi cepat)

#### Section 1 — Hero
- Eyebrow: `01 — Senior software engineer` (sama untuk ID & EN)
- H1: 2 baris max, italic-swap pada 1 kata, highlighter underline pada 1 kata
- Lead: 2-3 kalimat, max 38ch
- 2 CTA: primer (lihat karya), ghost (kontak)
- Hero rail: 3 stat — `2019 — Mulai`, `Kediri — Lokasi`, `7 tahun — Domain healthcare` / `2019 — Started`, `Kediri — Based`, `7 years — Healthcare`
- Hero visual placeholder gradient + 3 floating glass cards
- Section padding: 8rem top (akomodasi nav + ribbon), bottom default

**Floating glass card content** (final dari LinkedIn):
- Card A (top-left): mono `Sejak` / display `2019` italic-swap pada angka — sage
- Card B (right-mid): mono `Fokus` / display `Healthcare *systems*` — italic sage pada systems
- Card C (bottom-right): mono `Stack` / display `Bun · *Hono* · TS` — italic sage pada Hono

#### Section 2 — Marker bar
- Title: `Pernah bekerja *di*` / `Previously *at*`
- List 4 entries (final dari LinkedIn):
  - `RS Bhayangkara Kediri`
  - `Harmoni Integra`
  - `Webane`
  - `Politeknik Kediri` (alma mater)
- Border top + bottom rule, padding 3.5rem 0 4rem
- Catatan: client freelance Jun 2020-Des 2021 tidak disertakan (tidak ada nama publik yang bisa disebut)

#### Section 3 — Expertise (tabular)
- Eyebrow: `02 — Keahlian` / `02 — Expertise`
- H2: dengan italic-swap
- Lead: 1 kalimat
- Tabel container `--paper-warm` radius `--radius-md` border rule
- 5 row final (dari LinkedIn skills + role description):
  - `01` — Frontend — `React, TypeScript, Tailwind CSS, Flutter`
  - `02` — Backend (legacy) — `PHP, CodeIgniter, Laravel`
  - `03` — Backend (modern) — `Bun, Hono, WebSocket, REST API`
  - `04` — Mobile & Realtime — `Flutter, WebSocket, Real-time displays`
  - `05` — Domain & Integration — `SIMRS, EMR/ERM, PACS, Docker`
- Format: index mono, category nama (font-body), tech list (mono right-aligned)

#### Section 4 — Experience timeline
- Eyebrow: `03 — Pengalaman` / `03 — History`
- Section head 1.2fr 0.8fr
- Body: 2-kolom grid card (mobile 1 kolom)
- 4 role item final (dari LinkedIn):
  1. **Senior Software Engineer** · `RS Bhayangkara Kediri` · `2022 — SEKARANG` / `2022 — PRESENT` · Kediri · chips: `SIMRS`, `EMR`, `PACS`, `BUN/HONO`
  2. **Web Developer (Freelance)** · `Independen` / `Independent` · `2020 — 2021` · Remote · chips: `LARAVEL`, `WEBSITE`, `CLIENT`
  3. **Web Developer** · `Harmoni Integra` · `2019 — 2020` · Surabaya · chips: `PHP`, `WEB APP`
  4. **Web Application Developer** · `Webane` · `2019` · Yogyakarta · chips: `PHP`, `JUNIOR`
- Border-top per item

#### Section 5 — Philosophy
- Background `--paper-warm` (level naik)
- Eyebrow: `04 — Prinsip` / `04 — Philosophy`
- Section head + visual opsional 4/3
- 3 card row (mobile 1 kolom) — **Opsi A: Healthcare-grounded** (final dari LinkedIn track record):
  - **Card 1** — eyebrow mono `01 / KEANDALAN` (ID) / `01 / RELIABILITY` (EN)
    - H3 italic full sage: `Andal sebelum *baru*.` / `Reliable before *new*.`
    - Body: "Healthcare tidak bisa toleran sistem yang flaky. Tech yang membosankan dan teruji menang dari teknologi yang sedang tren. Setiap dependency, setiap pattern, setiap shortcut harus dapat dipertanggungjawabkan saat sistem dipakai 24 jam non-stop oleh tim klinis." / "Healthcare doesn't tolerate flaky systems. Boring, proven tech beats trendy stacks. Every dependency, every pattern, every shortcut has to justify itself when the system runs 24/7 for clinical teams."
  - **Card 2** — eyebrow mono `02 / ALUR KERJA` / `02 / WORKFLOW`
    - H3: `Alur kerja, baru *kode*.` / `Workflow before *code*.`
    - Body: "Saya pelajari realita klinis dulu — alur rawat inap, IGD, farmasi, radiologi — baru menerjemahkan ke arsitektur. Modul yang saya bangun harus mencerminkan cara perawat dan dokter bekerja, bukan memaksa mereka menyesuaikan dengan asumsi developer." / "I learn clinical reality first — inpatient, ER, pharmacy, radiology workflows — before translating it into architecture. The modules I build mirror how nurses and doctors actually work, not the other way around."
  - **Card 3** — eyebrow mono `03 / MODERNISASI` / `03 / MODERNIZATION`
    - H3: `Modernisasi tanpa *menulis ulang*.` / `Modernize without *rewriting*.`
    - Body: "Sistem rumah sakit yang sudah berjalan tidak bisa di-rewrite besar-besaran. Saya jalankan PHP legacy dan microservice modern (Bun, Hono, TypeScript) berdampingan, lalu migrasi bertahap modul-per-modul tanpa mengganggu operasional klinis." / "Live hospital systems can't be rewritten big-bang. I run legacy PHP and modern microservices (Bun, Hono, TypeScript) side-by-side, then migrate module-by-module without disrupting clinical operations."
- Card bg `--paper` di atas section bg `--paper-warm`

#### Section 6 — Manifesto
- Eyebrow: `05 — Manifesto`
- Padding `clamp(5rem, 10vw, 8rem) 0`, text-align center
- Blockquote display-md, italic-swap 2-3 kata
- Cite pill: avatar circle ink + nama mono caption

#### Section 7 — Contact CTA
- Eyebrow: `06 — Kontak` / `06 — Contact`
- Card outer `--paper-deep`, inner `--ink`
- Grid 1.3fr 0.7fr
- Kiri: H2 `Mari *bicara*.` / `Let's *talk*.` + body sub
- Kanan: form pill (email input + button "Send"/"Kirim") **atau** mailto link besar ke `dikareza966@gmail.com`
- Phase 1 lokal: pakai mailto link besar (`mailto:dikareza966@gmail.com`) supaya tidak butuh backend
- Phase 1.5 deploy: opsional ganti ke form (Resend/Formspree) kalau spam jadi masalah
- Footnote mono di bawah form: `dikareza966@gmail.com · Balasan dalam 48 jam` / `dikareza966@gmail.com · Reply within 48h`

#### Section 8 — Footer
- Background `--paper`, border-top
- Footer-grid: brand kolom + 3 link kolom (Kerja / Sosial / Lainnya)
- Big wordmark `Haztech.` italic-swap pada 2 huruf terakhir
- Bottom row: copyright kiri, language switcher + social kanan

### 11.5 Project detail (Phase 2 — preview)

Untuk dipikirkan saat Phase 2, tapi struktur sudah disiapkan supaya design tokens tidak perlu di-extend:

- Hero project: image 16/9 atau 4/5 dengan frame & shadow Kanara, eyebrow "case study", H1 nama project, lead 2-3 kalimat, 4-stat rail (year, role, stack count, duration)
- Body editorial: heading + body sections, image gallery dengan bento grid
- Tag row: chips stack
- Next/prev project navigation (pagination)
- Back to /karya link

---
## 12. Tech Stack & Implementation

### 12.1 Stack decision

**Framework**: **Astro 4+**

Alasan:
- JS bundle minimal — sesuai brand "quiet by design"
- Content Collections (TS-typed MDX) untuk projects nanti
- i18n routing built-in
- Bisa pakai React/Vue/Svelte component selectively saat butuh interactivity
- Deploy Vercel/Netlify first-class
- View Transitions API native

**Bukan Next.js**: overkill untuk portfolio yang nyaris zero-JS.

### 12.2 Core dependencies (verified terhadap npm registry per 2026-05-16)

```json
{
  "dependencies": {
    "astro": "^6.3.3",
    "@astrojs/check": "^0.9.9",
    "@astrojs/mdx": "^5.0.6",
    "@astrojs/sitemap": "^3.7.2",
    "lucide-astro": "^0.556.0",
    "typescript": "^6.0.3"
  },
  "devDependencies": {
    "@astrojs/vercel": "^10.0.7",
    "prettier": "^3.3.0",
    "prettier-plugin-astro": "^0.14.0"
  }
}
```

**Catatan breaking changes Astro 4 → 6** yang affect plan ini:
- Content Collections sekarang pakai **Content Layer API** dengan `glob`/`file` loader dari `astro/loaders`. Lihat section 12.4 / 12.5
- View Transitions diganti dari `<ViewTransitions />` jadi `<ClientRouter />` (import dari `astro:transitions`). Lihat section 8 patch
- Schema validator lebih disarankan dari `astro/zod` daripada `astro:content` direct (TS-typed)

Tidak pakai:
- Tailwind (vanilla CSS dengan custom properties cukup, dan match Kanara approach)
- React/Vue (Astro components saja kecuali butuh interactivity client-side)
- Animation library (CSS keyframes + transitions cukup)

Boleh tambah nanti kalau butuh:
- `motion` (alternatif Framer Motion ringan) — kalau butuh JS-driven animation di Phase 2+
- `astro-icon` — kalau lucide-astro tidak fleksibel

### 12.3 Folder structure

```
portofolio/
├── design-foundation.md          # ← dokumen ini
├── docs/                         # ← reference files
│   ├── color-pallate/
│   ├── stitch_kanara_clothing_design_analysis/
│   └── stitch_kanara_clothing_design_analysis_mobile/
├── public/
│   ├── fonts/                    # Self-hosted fonts (later optimization)
│   └── og-image.png              # OG default
├── src/
│   ├── components/
│   │   ├── nav/
│   │   │   ├── Ribbon.astro
│   │   │   ├── PillNav.astro
│   │   │   └── MobileMenu.astro
│   │   ├── hero/
│   │   │   ├── Hero.astro
│   │   │   ├── HeroVisual.astro
│   │   │   └── FloatingCard.astro
│   │   ├── sections/
│   │   │   ├── MarkerBar.astro
│   │   │   ├── Expertise.astro
│   │   │   ├── Experience.astro
│   │   │   ├── Philosophy.astro
│   │   │   ├── Manifesto.astro
│   │   │   └── ContactCTA.astro
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── Chip.astro
│   │   │   ├── YearPill.astro
│   │   │   ├── Eyebrow.astro
│   │   │   └── UnderlinedLink.astro
│   │   └── footer/
│   │       └── Footer.astro
│   ├── content/                  # Phase 2: project content collection
│   │   └── config.ts
│   ├── data/
│   │   ├── profile.ts            # Bilingual profile data (single source)
│   │   ├── experience.ts
│   │   ├── expertise.ts
│   │   └── philosophy.ts
│   ├── i18n/
│   │   ├── ui.ts                 # UI string dictionary (id, en)
│   │   └── utils.ts              # getLocale, t(), formatDate
│   ├── layouts/
│   │   └── BaseLayout.astro      # html shell, meta, fonts, atmospheric
│   ├── pages/
│   │   ├── index.astro           # / (ID profile)
│   │   ├── 404.astro
│   │   └── en/
│   │       └── index.astro       # /en (EN profile)
│   └── styles/
│       ├── tokens.css            # :root vars (section 10.1)
│       ├── base.css              # reset, body, atmospheric
│       ├── typography.css        # h*, eyebrow, highlight
│       └── components.css        # nav, hero, btn, etc.
├── astro.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

### 12.4 Bilingual implementation pattern

**Struktur i18n minimal** (tanpa library):

```ts
// src/i18n/ui.ts
export const languages = {
  id: "Indonesia",
  en: "English",
} as const;

export const defaultLang = "id" as const;
export type Lang = keyof typeof languages;

export const ui = {
  id: {
    "nav.work":         "Karya",
    "nav.about":        "Profil",
    "nav.contact":      "Kontak",
    "cta.viewWork":     "Lihat karya",
    "cta.getInTouch":   "Hubungi saya",
    "marquee.available":"Tersedia untuk proyek Q3 2026",
    // ... seluruh string UI di sini
  },
  en: {
    "nav.work":         "Work",
    "nav.about":        "About",
    "nav.contact":      "Contact",
    "cta.viewWork":     "View work",
    "cta.getInTouch":   "Get in touch",
    "marquee.available":"Available for Q3 2026 projects",
    // ... mirror semua key
  },
} as const;
```

```ts
// src/i18n/utils.ts
import { ui, defaultLang, type Lang } from "./ui";

// Path segment translation map. Slug after path word is preserved.
// Example: /karya/sistem-rsb → /en/work/sistem-rsb
const pathSegments: Record<Lang, Record<string, string>> = {
  id: { work: "karya", projects: "karya" },
  en: { karya: "work", proyek: "work" },
};

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Switch URL ke locale lain dengan preservasi slug stability.
 * Translates first path segment via pathSegments map, keeps subsequent slug intact.
 *
 * Examples:
 *   /                       (id) → /en               (en)
 *   /karya                  (id) → /en/work          (en)
 *   /karya/sistem-rsb       (id) → /en/work/sistem-rsb (en)
 *   /en/work/sistem-rsb     (en) → /karya/sistem-rsb (id)
 */
export function getLocaleHref(targetLang: Lang, currentPath: string): string {
  // Strip current locale prefix
  const stripped = currentPath.replace(/^\/(en|id)(?=\/|$)/, "") || "/";

  // Split into segments
  const segments = stripped.split("/").filter(Boolean);

  // Translate first segment kalau ada di map locale aktif
  if (segments.length > 0) {
    const currentLang = getLangFromUrl(new URL(`https://x${currentPath}`));
    const translated = pathSegments[currentLang]?.[segments[0]];
    if (translated) {
      // Find the target-lang version of the translated key
      const targetSegment = Object.entries(pathSegments[targetLang] ?? {})
        .find(([_, v]) => v === segments[0])?.[0]
        ?? Object.entries(pathSegments[targetLang] ?? {})
          .find(([k]) => k === translated)?.[0]
        ?? translated;
      segments[0] = targetSegment;
    }
  }

  const path = "/" + segments.join("/");
  return targetLang === defaultLang ? path : `/en${path === "/" ? "" : path}`;
}
```

**Astro config** (Astro 6 syntax verified):
```js
// astro.config.mjs
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://haztech.dev",  // Phase 1.5 deploy target
  i18n: {
    defaultLocale: "id",
    locales: ["id", "en"],
    routing: {
      prefixDefaultLocale: false,    // / untuk ID, /en untuk EN
      redirectToDefaultLocale: true, // /id/* → /*
      fallbackType: "rewrite",       // EN-only page tetap accessible di /
    },
    // NOTE: fallback config DIHAPUS (sebelumnya: fallback: { en: "id" })
    // Alasan: kita commit ke full mirror. Kalau EN halaman missing, biarkan 404
    // sebagai signal eksplisit, bukan diam-diam serve content ID. Visitor international
    // tidak boleh dapat halaman bahasa lain tanpa indicator.
  },
  integrations: [mdx(), sitemap()],
});
```

### 12.5 Profile data (single source bilingual)

```ts
// src/data/profile.ts
export const profile = {
  name:        { id: "Dika Reza", en: "Dika Reza" },
  fullName:    "Dika Reza Rostanto",
  handle:      "dikareza96",
  studio:      "Haztech Studio",
  domain:      "haztech.dev",
  startedYear: 2019,
  city:        { id: "Kediri, Jawa Timur",      en: "Kediri, East Java" },
  country:     { id: "Indonesia",                en: "Indonesia" },
  focus:       { id: "Healthcare systems",       en: "Healthcare systems" },
  role:        { id: "Senior Software Engineer", en: "Senior Software Engineer" },
  email:       "dikareza966@gmail.com",
  social: {
    github:   "https://github.com/dikareza96",
    linkedin: "https://www.linkedin.com/in/dika-reza-rostanto",
  },
} as const;
```

Pattern sama untuk `experience.ts`, `expertise.ts`, `philosophy.ts` — tiap entry punya `id` dan `en` field, di-render via locale aktif.

### 12.5b Content Collections — Phase 2 projects (Astro 6 Content Layer API)

Pattern keputusan: **1 collection + locale field di frontmatter**, file naming `<slug>.<lang>.mdx`. Trade-off vs 2 collections terpisah:

| Approach | Pros | Cons |
|---|---|---|
| **1 collection + lang field** ✅ | Slug stable, query filter `lang === currentLang`, no duplicate schema | Filter di setiap query |
| 2 collections (`projects-id`, `projects-en`) | Cleaner separation per locale | Slug drift risk, schema duplikat, ref antar locale awkward |

```ts
// src/content/config.ts
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
    // generateId strip locale suffix supaya `id` field jadi stable slug
    generateId: ({ entry }) => entry.replace(/\.(id|en)\.(md|mdx)$/, ""),
  }),
  schema: z.object({
    title:    z.string(),
    slug:     z.string(),                  // STABLE across locales (canonical)
    lang:     z.enum(["id", "en"]),
    year:     z.number().int().min(2019).max(2030),
    role:     z.string(),
    stack:    z.array(z.string()).min(1),
    summary:  z.string().max(200),
    coverAlt: z.string(),
    pubDate:  z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
```

**File naming convention**:
```
src/content/projects/
├── sistem-rsb.id.mdx          # ID version
├── sistem-rsb.en.mdx          # EN mirror
├── erm-v2.id.mdx
├── erm-v2.en.mdx
└── pacs-integration.id.mdx
    pacs-integration.en.mdx
```

**Query helpers** (di `src/i18n/utils.ts`):
```ts
import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";

export async function getProjectsForLang(lang: Lang) {
  return (await getCollection("projects"))
    .filter((p) => p.data.lang === lang)
    .sort((a, b) => b.data.year - a.data.year);
}

export async function getProjectBySlug(slug: string, lang: Lang) {
  const all = await getCollection("projects");
  return all.find((p) => p.data.slug === slug && p.data.lang === lang);
}

// Next/prev navigation — filter by lang dulu, sort by year desc
export async function getAdjacentProjects(slug: string, lang: Lang) {
  const list = await getProjectsForLang(lang);
  const idx = list.findIndex((p) => p.data.slug === slug);
  return {
    prev: idx > 0 ? list[idx - 1] : null,
    next: idx < list.length - 1 ? list[idx + 1] : null,
  };
}
```

**Dynamic routes** (Astro 6):
```ts
// src/pages/karya/[slug].astro
export async function getStaticPaths() {
  const projects = await getCollection("projects", (p) => p.data.lang === "id");
  return projects.map((p) => ({ params: { slug: p.data.slug }, props: { project: p } }));
}

// src/pages/en/work/[slug].astro
export async function getStaticPaths() {
  const projects = await getCollection("projects", (p) => p.data.lang === "en");
  return projects.map((p) => ({ params: { slug: p.data.slug }, props: { project: p } }));
}
```

Pattern ini menjamin:
- Slug `sistem-rsb` valid di `/karya/sistem-rsb` (ID) dan `/en/work/sistem-rsb` (EN)
- Language switcher dari salah satu route bisa derive counterpart deterministic
- Schema validation TS-typed di authoring time

### 12.6 Performance budget

| Metric | Target | Tooling |
|---|---|---|
| Lighthouse Performance | ≥ 95 | CI check via `lhci` |
| Lighthouse Accessibility | ≥ 95 | Same |
| Lighthouse Best Practices | 100 | Same |
| Lighthouse SEO | 100 | Same |
| LCP | < 1.8s | WebPageTest mobile slow 3G |
| CLS | < 0.05 | Reserve aspect-ratio untuk semua image |
| Total JS shipped | < 50 KB gz | Astro default (minimal hydration) |
| Total CSS shipped | < 20 KB gz | Single tokens + components file |
| Total fonts (woff2) | < 150 KB | Subset Latin only, preload Fraunces+Geist regular only |

### 12.7 Font loading strategy

**Phase 1**: Google Fonts via stylesheet link (cepat ship, bisa cache CDN)

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="..." rel="stylesheet" />
```

**Phase 2 optimization** (kalau Lighthouse minta): self-host woff2, subset Latin + Latin-Ext, preload Fraunces 300 + Geist 400.

### 12.8 Deploy

- **Hosting**: Vercel (default) atau Netlify
- **Domain**: `haztech.dev` (target — cek availability di Cloudflare/Namecheap saat ready Phase 1.5)
- **Build command**: `npm run build` (Astro default)
- **Output**: `dist/` static files
- **CI**: GitHub Actions on push to main → auto-deploy

---
## 13. Roadmap & Phasing

Pendekatan: ship profile dulu, pelajari behavior visitor, baru tambah projects. Setiap fase punya exit criteria yang konkret sebelum lanjut ke fase berikutnya.

### Phase 0 — Foundation (current)

**Output**: dokumen `design-foundation.md` ini sebagai source of truth.

**Done when**:
- ✓ Plan diverifikasi terhadap source aktual (Kanara live)
- ✓ Diskrepansi diidentifikasi & di-resolve
- ✓ Token, layout, components, voice di-spec lengkap
- ✓ Stack & folder structure decided

### Phase 1 — Profile page (LOCAL-FIRST, target: 3-5 minggu kerja part-time)

**Output**: `/` dan `/en` profile page jalan di `localhost:4321`. Deploy DITUNDA sampai user puas.

**Asumsi waktu**: 8-12 jam/minggu setelah pekerjaan utama (Senior Software Engineer di RSB). Single dev. Asumsi sudah familiar Astro syntax — kalau belum, tambah 1 minggu untuk ramp up Astro 6 + Content Layer API + i18n routing.

**Content source**: LinkedIn PDF user (akan di-drop ke `docs/linkedin-reza.pdf`) sebagai source of truth untuk Experience, Expertise, Education, dan input awal Philosophy.

**Tasks**:
1. Scaffold Astro project di root portofolio + npm install + verify `npm run dev`
2. Setup tokens.css, base.css, typography.css dari section 10
3. Build `BaseLayout.astro` dengan ribbon + nav + atmospheric layers + footer
4. Build hero component (placeholder gradient + 3 floating cards), monogram letter `H`
5. Read LinkedIn PDF → extract structured content
6. Build marker bar (dari LinkedIn companies), expertise tabular (dari LinkedIn skills), experience timeline (dari LinkedIn roles)
7. Draft 3 personal philosophy berdasar LinkedIn track record → user review → finalisasi → build philosophy 3-card row
8. Build manifesto pull quote (placeholder → user revisi)
9. Build dark CTA contact block (skip email final dulu, pakai placeholder)
10. Setup i18n routing + UI dictionary
11. Seed bilingual content (ID + EN mirror)
12. Lighthouse audit + perf optimization (lokal)
13. **STOP** — tunggu user approval sebelum deploy

**Done when (Phase 1 lokal)**:
- ✓ Astro dev server jalan stabil di localhost
- ✓ Lighthouse Performance ≥ 95 di local audit (mobile slow 3G simulation)
- ✓ Accessibility ≥ 95
- ✓ Bilingual mirror complete (semua section punya versi ID dan EN)
- ✓ Reduced-motion fallback works
- ✓ Mobile menu functional
- ✓ Content dari LinkedIn sudah ter-integrate (bukan placeholder generic)
- ✓ User sudah review & approve setiap section
- ✓ Vercel preview deploy aktif untuk PR (auto-generated URL `*.vercel.app` untuk dibagi ke teman/recruiter sebelum domain custom hooked) — push branch `phase-1` ke GitHub, Vercel project di-link tanpa custom domain, preview URL muncul di setiap commit

**Deploy = Phase 1.5** (terpisah, dilakukan setelah user puas):
- ✓ Domain custom hooked
- ✓ OG meta + sitemap generated
- ✓ 404 page styled
- ✓ HTTPS + production environment OK

### Phase 2 — Projects (saat sudah ada 3+ case study siap)

**Output**: `/karya` dan `/karya/[slug]` (+ `/en/work` mirror).

**Prerequisites**:
- Minimal 3 project content sudah siap (story + assets)
- Phase 1 sudah live & stabil

**Tasks**:
1. Setup Astro Content Collections (`src/content/projects/`)
2. Schema TS untuk project frontmatter (title, slug, year, role, stack, summary, hero image, gallery, body MDX)
3. Build project list page dengan bento grid
4. Build project detail template
5. Page navigation (prev/next)
6. Update sitemap & i18n routes
7. Seed 3 case study MDX files

**Done when**:
- ✓ 3+ project terpampang
- ✓ Detail page berfungsi bilingual
- ✓ Bento grid responsive (mobile stack)
- ✓ Image lazy loading & WebP/AVIF
- ✓ Lighthouse tetap ≥ 95

### Phase 3 — Optional polish

Hanya kalau Phase 1 & 2 sudah stabil dan sehat:

- **Writing/journal section** — kalau mau blogging
- **Lab/playground** — sketch UI eksperimen, demo interaktif
- **CMS Decap** — editing via web interface (git-based, no DB)
- **Analytics minimal** — Plausible atau Umami self-hosted
- **Newsletter actual** — kalau ada appetite untuk regular writing
- **Foto profesional** — replace placeholder gradient saat siap

### Phase 4 — Refinement (continuous)

- Update copy berdasar feedback recruiter/klien
- Tambah/hapus project dari `/karya`
- Update marquee untuk status terkini (available/booked, season tag)
- Update marker bar saat ada client baru
- Annual visual refresh: tonal mood (sage→ember dominant) sesuai musim

---

## 14. Translation dari plan lama (yang perlu di-flag)

Ini section pengingat: hal-hal yang berbeda dengan `design-foundation.md` versi awal supaya tidak kembali ke pola lama.

| Plan lama | Plan ini (current) | Alasan |
|---|---|---|
| Sharp 0px default radius | Rounded by Kanara (`md` 20px, `lg` 32px, `pill` 999px default) | Kanara live pakai rounded extensively; Stitch DESIGN.md text contradicts dengan code.html-nya sendiri |
| No box-shadow (kecuali subtle) | Layered shadow stack (`nav`, `glass`, `hero`, `cta`, `hover-tile`, `hover-btn`) | Shadow = core depth language di Kanara, bukan exception |
| CTA = link teks dengan arrow | Pill button primer + ghost + arrow circle | Verified Kanara |
| Surface naming `--canvas`, `--surface-low/high/highest` | `--paper`, `--paper-warm`, `--paper-deep` | Match Kanara naming + lebih semantic |
| Token `--canvas: #F4EFE6` | `--paper: #F4EFE6` (same value) | Rename only |
| `--surface-highest: #E4DBC8` | `--paper-deep: #E4DBC8` (same value) | Rename only |
| Type weight 300 untuk semua heading | 300 untuk display-2xl/xl/lg/md, 400 untuk display-sm/xs (italic-swap weight juga 400) | Match Kanara per-size |
| Type scale fixed px | Type scale fluid clamp | Kanara pakai clamp untuk scale responsif |
| Container max 1280px | Container max 1240px | Verified Kanara |
| Container margin 64px desktop | Container pad 72px (auto-margin via min/calc) | Verified Kanara |
| Section padding 96px (atau 128px berat) | clamp(6rem, 12vw, 9rem) ≈ 96-144px | Match Kanara |
| Sticky nav blur 12px | blur 18px saturate 1.2 | Verified Kanara |
| Reveal opacity + Y translate 8px | Reveal opacity + Y 36px + blur(6px)→0 | Match Kanara |
| Easing cubic-bezier(0.22, 1, 0.36, 1) | Spring `cubic-bezier(0.22, 0.68, 0, 1)` (default), ease-soft yang lama jadi alternative | Kanara default-nya spring, bukan ease-out lembut |
| Marquee 40s | Marquee 38s | Verified Kanara |
| Plan claim "diekstrak dari Kanara DOM" tanpa source file | Verified live URL, full CSS extracted, snapshot dirujuk | Honest sourcing |

### Yang ditambahkan (tidak ada di plan lama)

- **Atmospheric film grain** (body::before SVG turbulence)
- **Ambient warmth gradient** (body::after radial sage+ember)
- **Highlighter underline** (sage 28% transparent rectangle behind hero keyword)
- **3-tier rule system** (`--rule`, `--rule-soft`, `--rule-strong`)
- **`--ink-faint` color** (untuk placeholder/disabled)
- **Floating card animations** (float-a, float-b keyframes)
- **Mobile menu overlay** dengan staggered reveal
- **Bento grid pattern** (untuk projects Phase 2)
- **Bilingual UI dictionary** structure
- **Tech stack decision** (Astro + content collections)
- **Performance budget** numerik
- **Phasing roadmap** dengan exit criteria

---
## 15. Quick Reference Cheat Sheet

Copy-paste ready snippets untuk kerja sehari-hari saat implement. Detail lengkap ada di section 10-12.

### 15.1 Quick color picker

| Need | Token |
|---|---|
| Background utama | `var(--paper)` |
| Section partisi (level naik 1) | `var(--paper-warm)` |
| Card bg dalam paper-warm | `var(--paper)` |
| Footer block / inner card | `var(--paper-deep)` |
| Heading & strong text | `var(--ink)` |
| Body & lead text | `var(--ink-soft)` |
| Caption, eyebrow, meta | `var(--ink-muted)` |
| Italic-swap accent (selalu) | `var(--sage)` |
| CTA pop (hemat) | `var(--ember)` |
| Italic accent di dark block | `var(--sand)` |

### 15.2 Quick typography picker

| Need | Class / mixin |
|---|---|
| Section number eyebrow | `.eyebrow` (mono uppercase + sage dot) |
| Section H2 | `font-display` 300, italic-swap di kata kunci |
| Lead paragraph | `font-body` 1.05rem, max 42ch, `--ink-soft` |
| Body | inherit body 15.5px, max 60ch |
| Tag chip | `font-mono` 0.65rem, uppercase, tracking 0.18em |
| Year-pill | `font-mono` 0.75rem, uppercase, tracking 0.18em |
| Numerical indicator | `font-mono` 0.78rem, uppercase, tracking 0.18em |

### 15.3 Quick component picker

| Need | Component / class |
|---|---|
| Primary CTA | `.btn` (pill ink + arrow circle) |
| Secondary CTA | `.btn-ghost` (pill outline) |
| Text link | underlined animated (scaleX) |
| Trust signal row | marker-bar pattern |
| Tabel teknis | expertise tabular pattern |
| Card group | philosophy 3-card row |
| Big quote | manifesto pull-quote |
| Newsletter / email capture | dark CTA card |

### 15.4 Quick spacing rules

- Section vertical: `clamp(6rem, 12vw, 9rem)`
- Section gap (header → content): `clamp(3rem, 6vw, 4.5rem)`
- Card internal padding: 2rem (`var(--space-md)` × 2 atau 32px)
- Card list gap: 2rem desktop, 1rem mobile
- Eyebrow → heading: 1.25rem
- Heading → lead: 1.5rem
- Lead → CTA: 2rem

### 15.5 Quick shadow picker

| Element | Shadow stack |
|---|---|
| Floating nav | `var(--shadow-inset-light), var(--shadow-nav)` |
| Hero image frame | `var(--shadow-inset-medium), var(--shadow-hero)` |
| Floating glass card | `var(--shadow-glass)` |
| Dark CTA card outer | `var(--shadow-cta)` |
| Tile hover | `var(--shadow-hover-tile)` |
| Button hover | `var(--shadow-hover-btn)` |

### 15.6 Quick motion picker

| Interaction | Pattern |
|---|---|
| Button hover | translateY(-2px) + shadow, 400ms spring |
| Tile/card hover | translateY(-4px) + image scale 1.045 + shadow, 700ms+1400ms |
| Nav link hover | underline scaleX(0→1) origin-left, 500ms spring |
| Page scroll reveal | opacity 0→1 + translateY 36→0 + blur 6→0, 900ms spring |
| Marquee | translateX -50% linear infinite, 38s |
| Floating card | float-a/b, 7-9s ease-in-out infinite |

---

## 16. Acceptance Criteria — Phase 1 Profile

Checklist final sebelum Phase 1 dianggap "done". Semua harus true sebelum announce live.

### Visual fidelity

- [ ] Atmospheric film grain visible tapi subtle (opacity 0.045)
- [ ] Ambient warmth gradient terlihat di top viewport saat scroll near-top
- [ ] Marquee ribbon scrolling tanpa stutter di 60fps
- [ ] Sticky nav floating di tengah, blur backdrop bekerja, tidak menutupi hero saat scroll
- [ ] Hero H1 italic-swap di kata kunci dengan font Instrument Serif sage
- [ ] Highlighter underline sage 28% di belakang 1 kata di hero
- [ ] 3 floating glass cards di hero dengan animation float-a/float-b berbeda timing
- [ ] Hero placeholder gradient: linear-gradient 135deg paper-warm → paper-deep → sage 18%, plus turbulence noise SVG overlay opacity 0.08, no flat color, no placeholder text/icon
- [ ] Setiap section punya eyebrow (mono + sage dot) → heading → lead → konten
- [ ] Section padding sesuai clamp 96-144px desktop, ~64px mobile
- [ ] Tonal transition halus: paper → paper-warm di philosophy section, kembali paper di manifesto
- [ ] Dark CTA card outer paper-deep, inner ink, italic-swap pakai sand
- [ ] Footer big wordmark italic-swap di 2 huruf terakhir
- [ ] Tidak ada `#000` atau `#FFF` murni di mana pun

### Interaction

- [ ] Hover button: translateY -2px + shadow grow + arrow rotate
- [ ] Hover nav link: underline scaleX grow dari kiri
- [ ] Hover icon button: bg color + translateY -1px
- [ ] Mobile hamburger toggle membuka overlay full-screen
- [ ] Mobile menu link entry staggered animation
- [ ] Mobile menu close via tap-outside atau hamburger lagi
- [ ] Scroll reveal hanya untuk hero, marker bar, manifesto (tidak overload)
- [ ] Reduced motion preference respected (semua animation jadi instant)

### Bilingual

- [ ] `/` default ID, `/en` default EN
- [ ] HTML `lang` attribute ikut locale aktif
- [ ] `hreflang` tag di `<head>`
- [ ] Language switcher di footer (& nav opsional) berfungsi 2-way
- [ ] Setiap UI string di-translate di kedua locale
- [ ] Tanggal & angka format ikut locale
- [ ] URL slug stable antar locale (kalau ada di Phase 2)

### Responsive

- [ ] Layout sehat di viewport: 360px, 768px, 1024px, 1280px, 1440px, 1920px
- [ ] Hero stack vertikal di < 1024px, image max-width 520px center
- [ ] Hero floating cards hidden di < 768px
- [ ] Hero rail single-column di < 768px dengan hairline separator
- [ ] Section head stack di < 1024px
- [ ] Footer grid 2-column di < 1024px
- [ ] Container width adaptive (`min(1240, 100% - 72px)` desktop, `100% - 40px` mobile)
- [ ] Tap target ≥ 44×44px untuk semua interactive element
- [ ] Tidak ada horizontal scroll di mana pun

### Accessibility

- [ ] Lighthouse Accessibility ≥ 95
- [ ] Skip-to-content link tersedia
- [ ] Heading hierarchy logis (H1 satu kali, H2 per section, H3 per card)
- [ ] Semua interactive element punya focus-visible state (outline 2px ink offset 3px)
- [ ] Semua image punya alt text bermakna (atau alt="" untuk decorative)
- [ ] Color contrast: body AAA, caption AA
- [ ] Screen reader-friendly: aria-label di icon-only buttons, aria-current di nav active
- [ ] Form input punya label terkait (visible atau aria-label)
- [ ] Animation tidak trigger seizure (no flashing > 3hz)

### Performance

- [ ] Lighthouse Performance ≥ 95 di mobile slow 3G simulation
- [ ] LCP < 1.8s
- [ ] CLS < 0.05 (semua image punya aspect-ratio reserved)
- [ ] FID/INP < 100ms (Astro default minimal JS)
- [ ] Total JS shipped < 50KB gzip
- [ ] Total CSS shipped < 20KB gzip
- [ ] Fonts: woff2, subset Latin, preload Fraunces 300 + Geist 400
- [ ] Images: WebP/AVIF dengan JPEG fallback (saat foto ada)
- [ ] No layout shift saat font load (font-display: swap + size-adjust)

### SEO & meta

- [ ] `<title>` per page (bilingual)
- [ ] Meta description bilingual
- [ ] OG image custom (atau default brand image)
- [ ] Open Graph tags lengkap (title, description, image, url, type, locale)
- [ ] Twitter card tags
- [ ] `hreflang` & `canonical` tags
- [ ] sitemap.xml auto-generated via @astrojs/sitemap
- [ ] robots.txt allows crawling
- [ ] Structured data JSON-LD (Person schema)

### Deploy

- [ ] Domain custom hooked (haztech.studio atau alternatif)
- [ ] HTTPS enforced
- [ ] 404 page styled (bukan default Vercel)
- [ ] CI auto-deploy on push to main
- [ ] Preview deployments untuk PR
- [ ] Environment variables (kalau ada) ter-secure di Vercel/Netlify

---

## 17. Open Questions (status update)

Pertanyaan yang sudah diputuskan dan yang masih open. Detail per pertanyaan:

### Resolved (decisions made)

1. ✅ **Domain final** → `haztech.dev` (perlu cek availability di registrar saat ready deploy)
2. ✅ **Display name** → `Dika Reza` (nav, hero), `Dika Reza Rostanto` (footer copyright, structured data)
3. ✅ **Studio name** → `Haztech Studio` (tetap)
4. ✅ **Monogram letter** → `H` (Haztech)
5. ✅ **Hero rail content** → `2019 — Mulai`, `Kediri — Lokasi`, `Healthcare — Domain`
6. ✅ **Marker bar entries** → 4 entries: RS Bhayangkara Kediri, Harmoni Integra, Webane, Politeknik Kediri (alma mater)
7. ✅ **Experience timeline roles** → 4 role dari LinkedIn (RSB, Freelance, Harmoni Integra, Webane)
8. ✅ **Philosophy 3 prinsip** → Opsi A: Reliability, Workflow, Modernization (dari healthcare track record)
9. ✅ **Manifesto quote** → Healthcare-grounded draft (section 9.6) — user boleh edit pas implement
10. ✅ **Contact method** → `mailto:dikareza966@gmail.com` di Phase 1, evaluasi form di Phase 1.5

### Still open (decide saat reach task terkait)

11. ❓ **Tagline final** → draft saat ini "Quiet engineering for high-stakes systems." / "Engineering yang tenang untuk sistem yang serius." — user belum confirm, finalisasi saat copy review
12. ❓ **Foto profil strategy** → tetap placeholder gradient di Phase 1, evaluasi foto session di Phase 2+
13. ❓ **Domain email** → tetap `dikareza966@gmail.com` (no custom email needed)
14. ❓ **Analytics** → skip Phase 1, pertimbangkan Plausible self-hosted di Phase 2+ kalau ada traffic
15. ❓ **LinkedIn certifications** → tidak ada di PDF saat ini. Skip section "Certifications" di Phase 1, tambah opsional kalau user nantinya sertifikasi (AWS, GCP, dsb.)

---

## 18. Changelog dokumen

- **v2.3 (current — 2026-05-16)** — Oracle audit pass. 14 patches applied: 3 BLOCKING (i18n fallback dihapus untuk cegah silent content drift, getLocaleHref enhancement dengan path segment dictionary untuk slug stability, font budget self-host dari Phase 1 + drop Geist Mono + subset weights), 6 MEDIUM (marquee reduced-motion text-wall fix, ribbon focus-within pause, forced-colors fallback untuk backdrop-filter, hero rail symmetry tambah `7 tahun`, Phase 1 timeline 3-5 minggu part-time, Content Collections Layer API spec lengkap untuk Phase 2), 5 LOW (acceptance criteria placeholder concrete, year-pill non-interactive explicit, marquee Q3 parameterized note, tagline borderline doctrine `high-stakes` justified, Vercel preview deploy strategy).
- **v2.2 (2026-05-16)** — Audit pass. Verifikasi npm registry: package versions di-bump ke current (Astro `^6.3.3`, `@astrojs/mdx ^5.0.6`, `@astrojs/vercel ^10.0.7`, `typescript ^6.0.3`, dst.). Verifikasi Context7 Astro 6 docs: i18n config diperluas, Content Layer API, View Transitions diganti ke `<ClientRouter />`. Stale references `haztech.studio` dan `Jakarta` di-clean.
- **v2.1 (2026-05-16)** — LinkedIn data integration. Display name, lokasi, niche, stack, philosophy, hero copy, manifesto, marker bar entries, experience timeline, expertise table, profile data semua di-update dari `docs/Profile_linkedin.pdf`. Phase 1 di-shift jadi local-first. Domain target: `haztech.dev`. Philosophy: Healthcare-grounded.
- **v2 (2026-05-16)** — Verified terhadap Kanara live, full rewrite. Tetap warm-neutral character tapi shape & depth jadi rounded + layered shadow. Tambah bilingual ID/EN spec, tech stack Astro, phasing roadmap, acceptance checklist.
- **v1 (deprecated — 2026-05-15)** — Hybrid Kanara + Stitch claim. Sharp 0px + no-shadow philosophy. Banyak claim "diekstrak dari Kanara DOM" tanpa verified source.
