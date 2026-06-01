// src/i18n/ui.ts
// Bilingual UI string dictionary. Sumber tunggal untuk semua microcopy.
// Lihat design-foundation.md section 9 untuk daftar lengkap microcopy.

export const languages = {
  id: "Bahasa Indonesia",
  en: "English",
} as const;

export const defaultLang = "id" as const;
export type Lang = keyof typeof languages;

export const ui = {
  id: {
    // Nav
    "nav.home": "Beranda",
    "nav.work": "Karya",
    "nav.about": "Profil",
    "nav.contact": "Kontak",
    "nav.getInTouch": "Hubungi saya",

    // CTA
    "cta.viewWork": "Lihat karya",
    "cta.getInTouch": "Hubungi saya",
    "cta.send": "Kirim",
    "cta.readMore": "Selengkapnya",
    "cta.viewProject": "Lihat proyek",

    // Marquee
    "marquee.available": "Tersedia untuk proyek Q3 2026",
    "marquee.based": "Berbasis di Kediri, Jawa Timur",
    "marquee.specialist": "Spesialis sistem rumah sakit",
    "marquee.stack": "Bun · Hono · TypeScript · PHP",

    // Section eyebrows
    "section.profile": "01 — Senior software engineer",
    "section.expertise": "02 — Keahlian",
    "section.history": "03 — Pengalaman",
    "section.philosophy": "04 — Prinsip",
    "section.manifesto": "05 — Manifesto",
    "section.contact": "06 — Kontak",

    // Marker bar
    "marker.title": "Pernah bekerja",
    "marker.titleItalic": "di",

    // Year-pill
    "year.present": "SEKARANG",

    // Form
    "form.email": "Email",
    "form.emailPlaceholder": "kamu@contoh.id",
    "form.helper": "dikareza966@gmail.com · Balasan dalam 48 jam",

    // Footer
    "footer.tagline": "Dibuat dengan niat baik di Kediri.",
    "footer.copyright": "© 2026 Haztech Studio.",
    "footer.colWork": "Kerja",
    "footer.colSocial": "Sosial",
    "footer.colMore": "Lainnya",

    // Language switcher
    "lang.switch": "EN",
    "lang.current": "ID",

    // 404
    "404.title": "Tidak ditemukan.",
    "404.body": "Halaman yang dicari tidak ada.",
    "404.cta": "Kembali ke beranda",

    // A11y
    "a11y.openMenu": "Buka menu navigasi",
    "a11y.closeMenu": "Tutup menu navigasi",
    "a11y.skipToContent": "Lompat ke konten utama",
    "a11y.languageSwitch": "Ganti bahasa",
  },
  en: {
    // Nav
    "nav.home": "Home",
    "nav.work": "Work",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.getInTouch": "Get in touch",

    // CTA
    "cta.viewWork": "View work",
    "cta.getInTouch": "Get in touch",
    "cta.send": "Send",
    "cta.readMore": "Read more",
    "cta.viewProject": "View project",

    // Marquee
    "marquee.available": "Available for Q3 2026 projects",
    "marquee.based": "Based in Kediri, East Java",
    "marquee.specialist": "Healthcare systems specialist",
    "marquee.stack": "Bun · Hono · TypeScript · PHP",

    // Section eyebrows
    "section.profile": "01 — Senior software engineer",
    "section.expertise": "02 — Expertise",
    "section.history": "03 — History",
    "section.philosophy": "04 — Philosophy",
    "section.manifesto": "05 — Manifesto",
    "section.contact": "06 — Contact",

    // Marker bar
    "marker.title": "Previously",
    "marker.titleItalic": "at",

    // Year-pill
    "year.present": "PRESENT",

    // Form
    "form.email": "Email",
    "form.emailPlaceholder": "you@example.com",
    "form.helper": "dikareza966@gmail.com · Reply within 48h",

    // Footer
    "footer.tagline": "Made with intention in Kediri.",
    "footer.copyright": "© 2026 Haztech Studio.",
    "footer.colWork": "Work",
    "footer.colSocial": "Social",
    "footer.colMore": "More",

    // Language switcher
    "lang.switch": "ID",
    "lang.current": "EN",

    // 404
    "404.title": "Not found.",
    "404.body": "The page you're looking for doesn't exist.",
    "404.cta": "Back to home",

    // A11y
    "a11y.openMenu": "Open navigation menu",
    "a11y.closeMenu": "Close navigation menu",
    "a11y.skipToContent": "Skip to main content",
    "a11y.languageSwitch": "Switch language",
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UIKey = keyof (typeof ui)[typeof defaultLang];
