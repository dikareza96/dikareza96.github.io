// src/content/config.ts
// Content Collections schema untuk projects (Phase 2 — Astro 6 Content Layer API).
// Lihat design-foundation.md §12.5b untuk pattern keputusan.
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
    // Custom ID generator: include locale suffix supaya .id.mdx dan .en.mdx
    // tidak collide ke same id (default behavior strip .mdx only).
    // entry = "simrs-modernization.id.mdx" → id = "simrs-modernization.id"
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ""),
  }),
  schema: z.object({
    /** Display title — judul project di card */
    title: z.string(),

    /** Stable canonical slug, identik antar locale (untuk URL stability) */
    slug: z.string(),

    /** Locale lang dari file ini */
    lang: z.enum(["id", "en"]),

    /** Tahun project */
    year: z.number().int().min(2018).max(2030),

    /** Role di project ini, e.g. "Senior Full Stack Developer" */
    role: z.string(),

    /** Tech stack array, ditampilkan sebagai numbered list */
    stack: z.array(z.string()).min(1).max(8),

    /** Description ~1-3 kalimat untuk card preview */
    summary: z.string().min(60).max(400),

    /** Alt text untuk cover image (a11y) */
    coverAlt: z.string(),

    /** Publish date (untuk sort) */
    pubDate: z.coerce.date(),

    /** Featured project (highlight di list) */
    featured: z.boolean().default(false),

    /** Confidential — internal hospital system, no public links */
    confidential: z.boolean().default(false),

    /** Status pill: "Production", "Active", "Maintenance", "Archived" */
    status: z
      .enum(["Production", "Active", "Maintenance", "Archived"])
      .default("Production"),

    /** Optional public links */
    links: z
      .object({
        live: z.url().optional(),
        github: z.url().optional(),
        caseStudy: z.boolean().default(false),
      })
      .default({ caseStudy: false }),
  }),
});

export const collections = { projects };
