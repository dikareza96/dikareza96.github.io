// src/data/experience.ts
// Career history dari LinkedIn, bilingual.
// Lihat design-foundation.md section 11.4 untuk spec.

export type ExperienceItem = {
  role: { id: string; en: string };
  company: string;
  period: { id: string; en: string };
  location: { id: string; en: string };
  body: { id: string; en: string };
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: {
      id: "Senior Software Engineer",
      en: "Senior Software Engineer",
    },
    company: "RS Bhayangkara Kediri",
    period: { id: "2022 — SEKARANG", en: "2022 — PRESENT" },
    location: { id: "Kediri, Jawa Timur", en: "Kediri, East Java" },
    body: {
      id: "Pengembangan dan integrasi sistem inti rumah sakit. Kontribusi pada SIMRS, ERM v2, dan integrasi PACS untuk sinkronisasi data radiologi. Sejak April 2025, mengelola modernisasi sistem secara mandiri menggunakan Bun, Hono, React, TypeScript, dan WebSocket untuk display rawat jalan real-time.",
      en: "Development and integration of hospital core systems. Contributed to SIMRS, ERM v2, and PACS integration for radiology data synchronization. Since April 2025, independently managing system modernization using Bun, Hono, React, TypeScript, and WebSocket for real-time outpatient displays.",
    },
    tags: ["SIMRS", "EMR", "PACS", "BUN/HONO"],
  },
  {
    role: { id: "Web Developer (Freelance)", en: "Web Developer (Freelance)" },
    company: "Independen",
    period: { id: "2020 — 2021", en: "2020 — 2021" },
    location: { id: "Remote", en: "Remote" },
    body: {
      id: "Membantu bisnis dan individu mewujudkan visi digital mereka. Berkolaborasi dengan klien lintas industri, memberikan solusi yang disesuaikan dengan kebutuhan spesifik.",
      en: "Helped businesses and individuals realize their digital visions. Collaborated with clients across industries, delivering customized solutions tailored to specific needs.",
    },
    tags: ["LARAVEL", "WEB APP", "CLIENT"],
  },
  {
    role: { id: "Web Developer", en: "Web Developer" },
    company: "Harmoni Integra",
    period: { id: "2019 — 2020", en: "2019 — 2020" },
    location: { id: "Surabaya, Jawa Timur", en: "Surabaya, East Java" },
    body: {
      id: "Pengembangan aplikasi web untuk berbagai kebutuhan klien. Fokus pada delivery yang cepat dan maintainable.",
      en: "Web application development for various client needs. Focused on fast delivery and maintainability.",
    },
    tags: ["PHP", "WEB APP"],
  },
  {
    role: { id: "Web Application Developer", en: "Web Application Developer" },
    company: "Webane",
    period: { id: "2019", en: "2019" },
    location: { id: "Yogyakarta", en: "Yogyakarta" },
    body: {
      id: "Tahun pertama profesional. Fondasi pemahaman tentang bahan baku web — HTML, CSS, JavaScript, dan PHP.",
      en: "First professional year. Foundational understanding of web raw materials — HTML, CSS, JavaScript, and PHP.",
    },
    tags: ["PHP", "JUNIOR"],
  },
];
