// src/data/philosophy.ts
// 3 prinsip kerja, healthcare-grounded.
// Lihat design-foundation.md section 11.4 untuk spec.

export type PhilosophyCard = {
  index: string;
  eyebrow: { id: string; en: string };
  title: { id: string; en: string };
  // Italic-swap kata: substring yang akan di-wrap dengan <em>
  italicWord: { id: string; en: string };
  body: { id: string; en: string };
};

export const philosophy: PhilosophyCard[] = [
  {
    index: "01",
    eyebrow: { id: "01 / KEANDALAN", en: "01 / RELIABILITY" },
    title: {
      id: "Andal sebelum baru.",
      en: "Reliable before new.",
    },
    italicWord: { id: "baru", en: "new" },
    body: {
      id: "Healthcare tidak bisa toleran sistem yang flaky. Tech yang membosankan dan teruji menang dari teknologi yang sedang tren. Setiap dependency, setiap pattern, setiap shortcut harus dapat dipertanggungjawabkan saat sistem dipakai 24 jam non-stop oleh tim klinis.",
      en: "Healthcare doesn't tolerate flaky systems. Boring, proven tech beats trendy stacks. Every dependency, every pattern, every shortcut has to justify itself when the system runs 24/7 for clinical teams.",
    },
  },
  {
    index: "02",
    eyebrow: { id: "02 / ALUR KERJA", en: "02 / WORKFLOW" },
    title: {
      id: "Alur kerja, baru kode.",
      en: "Workflow before code.",
    },
    italicWord: { id: "kode", en: "code" },
    body: {
      id: "Saya pelajari realita klinis dulu — alur rawat inap, IGD, farmasi, radiologi — baru menerjemahkan ke arsitektur. Modul yang saya bangun harus mencerminkan cara perawat dan dokter bekerja, bukan memaksa mereka menyesuaikan dengan asumsi developer.",
      en: "I learn clinical reality first — inpatient, ER, pharmacy, radiology workflows — before translating it into architecture. The modules I build mirror how nurses and doctors actually work, not the other way around.",
    },
  },
  {
    index: "03",
    eyebrow: { id: "03 / MODERNISASI", en: "03 / MODERNIZATION" },
    title: {
      id: "Modernisasi tanpa menulis ulang.",
      en: "Modernize without rewriting.",
    },
    italicWord: { id: "menulis ulang", en: "rewriting" },
    body: {
      id: "Sistem rumah sakit yang sudah berjalan tidak bisa di-rewrite besar-besaran. Saya jalankan PHP legacy dan microservice modern (Bun, Hono, TypeScript) berdampingan, lalu migrasi bertahap modul-per-modul tanpa mengganggu operasional klinis.",
      en: "Live hospital systems can't be rewritten big-bang. I run legacy PHP and modern microservices (Bun, Hono, TypeScript) side-by-side, then migrate module-by-module without disrupting clinical operations.",
    },
  },
];
