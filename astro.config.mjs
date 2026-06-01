// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://dikareza96.github.io",
  i18n: {
    defaultLocale: "id",
    locales: ["id", "en"],
    routing: {
      prefixDefaultLocale: false,
      // NOTE: redirectToDefaultLocale dihapus karena Astro 6 melarang kombinasi
      // dengan prefixDefaultLocale=false (bisa cause infinite loop). Default behavior
      // sudah benar: / serves ID, /en serves EN, no redirect needed.
      fallbackType: "rewrite",
    },
    // NOTE: fallback config sengaja tidak di-set.
    // Kalau EN page missing, biarkan 404 sebagai signal eksplisit, bukan
    // diam-diam serve content ID. Lihat design-foundation.md section 12.4 (B1).
  },
  integrations: [mdx(), sitemap()],
});
