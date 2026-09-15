// Post-build for GitHub Pages: adds CNAME, .nojekyll, a static branded 404 page, a sitemap and
// static redirect pages for the legacy multi-page URLs (the site is a single continuous page since
// 2026-09-15; /services, /sectors, /technology, /company and /contact live on as anchors of "/").
import { writeFileSync, existsSync, readFileSync, cpSync, mkdirSync, rmSync } from "node:fs";

const SITE = "https://serenitech.global";
const src = "dist/client";
const out = "dist/pages";
if (!existsSync(`${src}/index.html`)) throw new Error("dist/client/index.html missing — run the prerender build first");
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
cpSync(src, out, { recursive: true });

writeFileSync(`${out}/CNAME`, "serenitech.global\n");
writeFileSync(`${out}/.nojekyll`, "");

// One-page site: the sitemap lists the home page only. Sections are anchors, not URLs.
const today = new Date().toISOString().slice(0, 10);
writeFileSync(
  `${out}/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `  <url><loc>${SITE}/</loc><lastmod>${today}</lastmod></url>\n</urlset>\n`,
);
const robots = existsSync(`${out}/robots.txt`) ? readFileSync(`${out}/robots.txt`, "utf8") : "User-agent: *\nAllow: /\n";
if (!/sitemap/i.test(robots)) writeFileSync(`${out}/robots.txt`, robots.trimEnd() + `\n\nSitemap: ${SITE}/sitemap.xml\n`);

// Shared static page chrome (final palette: Bioluminescent Blue #1EB4FF · Deep Bio Blue #0E79B3 · Abyss #061424).
const head = (title, extra = "") => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title><meta name="robots" content="noindex">${extra}
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Manrope:wght@400;500&display=swap">
<style>
:root{color-scheme:dark}html,body{margin:0;height:100%;background:#061424;color:#F4F8FB;font-family:Manrope,system-ui,sans-serif}
main{min-height:100%;display:flex;align-items:center;justify-content:center;padding:32px 20px;box-sizing:border-box;text-align:center}
img{height:40px;margin-bottom:40px;filter:drop-shadow(0 0 10px rgba(30,180,255,.55))}h1{font:700 88px/1 Sora,sans-serif;margin:0;color:#F4F8FB}h2{font:600 22px/1.3 Sora,sans-serif;margin:16px 0 8px}
p{color:#8FA3B8;margin:0 0 28px;font-size:15px}a.btn{display:inline-block;background:#1EB4FF;color:#061424;text-decoration:none;font-weight:600;padding:12px 22px;border-radius:8px;box-shadow:0 0 18px rgba(30,180,255,.45)}
a.btn:hover{background:#0E79B3;color:#F4F8FB}
</style></head><body><main><div>
<img src="/brand/serenitech-logo-horizontal-on-dark-glow.svg" alt="Serenitech — Underwater Intelligence">`;

writeFileSync(
  `${out}/404.html`,
  head("Page not found — Serenitech") +
    `
<h1>404</h1><h2>Page not found</h2><p>The page you are looking for does not exist or has been moved.</p>
<a class="btn" href="/">Go to the home page</a></div></main></body></html>
`,
);

// Legacy multi-page URLs → anchors on the single page. GitHub Pages cannot issue 301s, so each old
// path gets a tiny static page: canonical → home, meta refresh + location.replace to the anchor.
const legacy = {
  services: "Services",
  sectors: "Sectors",
  technology: "Technology",
  company: "Company",
  contact: "Contact",
};
for (const [slug, label] of Object.entries(legacy)) {
  const target = `/#${slug}`;
  mkdirSync(`${out}/${slug}`, { recursive: true });
  writeFileSync(
    `${out}/${slug}/index.html`,
    head(
      `${label} — Serenitech`,
      `\n<link rel="canonical" href="${SITE}/"><meta http-equiv="refresh" content="0; url=${target}">` +
        `\n<script>location.replace(${JSON.stringify(target)});</script>`,
    ) +
      `
<h2>${label}</h2><p>This section now lives on the Serenitech home page.</p>
<a class="btn" href="${target}">Continue to ${label}</a></div></main></body></html>
`,
  );
}
console.log("pages output ready in", out, "— legacy redirects:", Object.keys(legacy).join(", "));
