// src/i18n/utils.ts
// Utilities untuk locale detection, translation, URL switching.
// Lihat design-foundation.md section 12.4 (B2 patch) untuk path stability spec.

import { ui, defaultLang, type Lang, type UIKey } from "./ui";

/**
 * Path segment translation map.
 * First segment of pathname akan di-translate antar locale, subsequent slug intact.
 *
 * Contoh: /karya/sistem-rsb (ID) <-> /en/work/sistem-rsb (EN)
 */
const segmentMap: Record<Lang, Record<string, string>> = {
  // Maps from "other-lang segment" → "current-lang segment"
  // ID lookup: kalau dapat "work" → translate jadi "karya" (ID)
  id: { work: "karya" },
  // EN lookup: kalau dapat "karya" → translate jadi "work" (EN)
  en: { karya: "work" },
};

/**
 * Detect language dari URL pathname.
 * /en/foo → "en", /foo → "id" (default).
 */
export function getLangFromUrl(url: URL): Lang {
  const segments = url.pathname.split("/").filter(Boolean);
  const first = segments[0];
  if (first && first in ui) return first as Lang;
  return defaultLang;
}

/**
 * Translation hook. Returns a `t(key)` function bound to a locale.
 * Falls back to defaultLang if key missing in target locale.
 */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Generate URL untuk locale lain dengan preservasi slug stability.
 * Translates first path segment via segmentMap, keeps subsequent slug intact.
 *
 * Examples:
 *   /                       (id) → /en               (en)
 *   /karya                  (id) → /en/work          (en)
 *   /karya/sistem-rsb       (id) → /en/work/sistem-rsb (en)
 *   /en/work/sistem-rsb     (en) → /karya/sistem-rsb (id)
 *   /en                     (en) → /                 (id)
 */
export function getLocaleHref(targetLang: Lang, currentPath: string): string {
  // Strip locale prefix kalau ada
  const stripped = currentPath.replace(/^\/(en|id)(?=\/|$)/, "") || "/";

  const segments = stripped.split("/").filter(Boolean);

  if (segments.length > 0) {
    const first = segments[0]!;
    // Cek apakah first segment punya translation di target lang
    // segmentMap[targetLang] = { foreignSegment: "translatedToTarget" }
    // Jadi kalau current segment ada sebagai key, translate ke value
    const translated = segmentMap[targetLang]?.[first];
    if (translated) {
      segments[0] = translated;
    }
    // Jika tidak ada di map, biarkan (e.g. nama route yang tidak butuh translasi)
  }

  const newPath = "/" + segments.join("/");
  // Default lang: no prefix. Non-default: /<lang> prefix.
  if (targetLang === defaultLang) {
    return newPath === "/" ? "/" : newPath;
  }
  return newPath === "/" ? `/${targetLang}` : `/${targetLang}${newPath}`;
}

/**
 * Format tanggal sesuai locale convention.
 * ID: "16 Mei 2026", EN: "May 16, 2026"
 */
export function formatDate(date: Date, lang: Lang): string {
  const localeMap: Record<Lang, string> = { id: "id-ID", en: "en-US" };
  return date.toLocaleDateString(localeMap[lang], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Format angka besar sesuai locale.
 * ID: 1.000, EN: 1,000
 */
export function formatNumber(num: number, lang: Lang): string {
  const localeMap: Record<Lang, string> = { id: "id-ID", en: "en-US" };
  return num.toLocaleString(localeMap[lang]);
}

/**
 * Get all projects untuk locale tertentu, sorted by year desc + featured first.
 * Wrapper di atas getCollection untuk centralize sort/filter logic.
 */
export async function getProjectsForLang(lang: Lang) {
  const { getCollection } = await import("astro:content");
  const all = await getCollection("projects");
  return all
    .filter((p) => p.data.lang === lang)
    .sort((a, b) => {
      // Featured first
      if (a.data.featured !== b.data.featured) {
        return a.data.featured ? -1 : 1;
      }
      // Then by year desc
      return b.data.year - a.data.year;
    });
}

/**
 * Get single project by stable slug + locale.
 */
export async function getProjectBySlug(slug: string, lang: Lang) {
  const { getCollection } = await import("astro:content");
  const all = await getCollection("projects");
  return all.find((p) => p.data.slug === slug && p.data.lang === lang);
}

/**
 * Get prev/next project (by index) in the same locale.
 * Untuk pagination di detail page.
 */
export async function getAdjacentProjects(slug: string, lang: Lang) {
  const list = await getProjectsForLang(lang);
  const idx = list.findIndex((p) => p.data.slug === slug);
  return {
    index: idx,
    total: list.length,
    prev: idx > 0 ? list[idx - 1] : null,
    next: idx >= 0 && idx < list.length - 1 ? list[idx + 1] : null,
  };
}
