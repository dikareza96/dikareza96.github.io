// src/data/profile.ts
// Single source of truth untuk identity profile, bilingual.
// Update di sini, semua section akan ikut berubah.

export const profile = {
  name: { id: "Dika Reza", en: "Dika Reza" },
  fullName: "Dika Reza Rostanto",
  handle: "dikareza96",
  studio: "Haztech Studio",
  domain: "haztech.dev",
  startedYear: 2019,
  yearsExperience: { id: "7 tahun", en: "7 years" },
  city: { id: "Kediri, Jawa Timur", en: "Kediri, East Java" },
  country: { id: "Indonesia", en: "Indonesia" },
  focus: { id: "Healthcare systems", en: "Healthcare systems" },
  role: {
    id: "Senior Software Engineer",
    en: "Senior Software Engineer",
  },
  email: "dikareza966@gmail.com",
  // Maintenance: update setiap quarter
  availabilitySeason: { id: "Q3 2026", en: "Q3 2026" },
  social: {
    github: "https://github.com/dikareza96",
    linkedin: "https://www.linkedin.com/in/dika-reza-rostanto",
  },
} as const;

export type Profile = typeof profile;
