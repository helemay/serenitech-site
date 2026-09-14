// Post-build for GitHub Pages: adds CNAME, .nojekyll, a static branded 404 page and a sitemap.
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

const routes = ["/", "/services", "/sectors", "/technology", "/company", "/contact"];
const today = new Date().toISOString().slice(0, 10);
writeFileSync(
  `${out}/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    routes.map((r) => `  <url><loc>${SITE}${r === "/" ? "/" : r + "/"}</loc><lastmod>${today}</lastmod></url>`).join("\n") +
    `\n</urlset>\n`,
);
const robots = existsSync(`${out}/robots.txt`) ? readFileSync(`${out}/robots.txt`, "utf8") : "User-agent: *\nAllow: /\n";
if (!/sitemap/i.test(robots)) writeFileSync(`${out}/robots.txt`, robots.trimEnd() + `\n\nSitemap: ${SITE}/sitemap.xml\n`);

writeFileSync(
  `${out}/404.html`,
  `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Page not found — Serenitech</title><meta name="robots" content="noindex">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Manrope:wght@400;500&display=swap">
<style>
:root{color-scheme:dark}html,body{margin:0;height:100%;background:#061424;color:#F4F8FB;font-family:Manrope,system-ui,sans-serif}
main{min-height:100%;display:flex;align-items:center;justify-content:center;padding:32px 20px;box-sizing:border-box;text-align:center}
img{height:40px;margin-bottom:40px}h1{font:700 88px/1 Sora,sans-serif;margin:0;color:#F4F8FB}h2{font:600 22px/1.3 Sora,sans-serif;margin:16px 0 8px}
p{color:#8FA3B8;margin:0 0 28px;font-size:15px}a.btn{display:inline-block;background:#2BD4E6;color:#061424;text-decoration:none;font-weight:600;padding:12px 22px;border-radius:8px}
a.btn:hover{background:#0FA3B8}
</style></head><body><main><div>
<img src="/brand/serenitech-logo-horizontal-on-dark.svg" alt="Serenitech — Underwater Intelligence">
<h1>404</h1><h2>Page not found</h2><p>The page you are looking for does not exist or has been moved.</p>
<a class="btn" href="/">Go to the home page</a></div></main></body></html>
`,
);
console.log("pages output ready in", out);
