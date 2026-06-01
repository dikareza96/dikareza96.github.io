// src/data/expertise.ts
// Tech stack expertise breakdown, dari LinkedIn skills + role description.
// Lihat design-foundation.md section 11.4 untuk spec.

export type ExpertiseRow = {
  index: string;
  category: { id: string; en: string };
  technologies: string;
};

export const expertise: ExpertiseRow[] = [
  {
    index: "01",
    category: { id: "Frontend", en: "Frontend" },
    technologies: "React, TypeScript, Tailwind CSS, Flutter",
  },
  {
    index: "02",
    category: { id: "Backend (legacy)", en: "Backend (legacy)" },
    technologies: "PHP, CodeIgniter, Laravel",
  },
  {
    index: "03",
    category: { id: "Backend (modern)", en: "Backend (modern)" },
    technologies: "Bun, Hono, WebSocket, REST API",
  },
  {
    index: "04",
    category: { id: "Mobile & Realtime", en: "Mobile & Realtime" },
    technologies: "Flutter, WebSocket, Real-time displays",
  },
  {
    index: "05",
    category: {
      id: "Domain & Integrasi",
      en: "Domain & Integration",
    },
    technologies: "SIMRS, EMR/ERM, PACS, Docker",
  },
];
