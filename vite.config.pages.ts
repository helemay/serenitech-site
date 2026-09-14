// Static build for GitHub Pages (serenitech.global).
// Same application source as vite.config.ts (Lovable). Only the build target differs:
// TanStack Start prerenders every route into dist/client (+ SPA shell); no server runtime is deployed.
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoSubfolderIndex: true,
      },
      // spa shell handled separately (see scripts/postbuild-pages.mjs)
    }),
    viteReact(),
  ],
});
