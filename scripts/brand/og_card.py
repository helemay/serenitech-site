"""Render the Open Graph / WhatsApp link-preview card: the whole horizontal logo on the site's dark blue.

Usage:  python3 scripts/brand/og_card.py        (needs: pip install playwright pillow && playwright install chromium)
Writes public/og/serenitech-og-1200x630.jpg (og:image, ~70 KB) and public/og/serenitech-og-square-800.jpg.
Rendered from the outlined SVG with Chromium, so it is pixel-exact and needs no fonts."""
import asyncio, pathlib
from PIL import Image
from playwright.async_api import async_playwright

SITE = pathlib.Path(__file__).resolve().parents[2]  # repo root
SVG = (SITE / "public/brand/serenitech-logo-horizontal-on-dark-glow.svg").read_text(encoding="utf-8")
OUT = SITE / "public/og"
OUT.mkdir(exist_ok=True)

def page_html(w, h, logo_w, variant="horizontal"):
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>
    html,body{{margin:0;width:{w}px;height:{h}px;overflow:hidden}}
    body{{background:#061424;position:relative}}
    .bg{{position:absolute;inset:0;background:
      radial-gradient(120% 90% at 50% 40%, #0B2240 0%, #071A31 45%, #061424 100%);}}
    .lines{{position:absolute;inset:0;opacity:.32;background-image:
      repeating-linear-gradient(180deg, transparent 0 82px, rgba(30,180,255,.10) 82px 83px);}}
    .wrap{{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}}
    svg{{width:{logo_w}px;height:auto;display:block;overflow:visible}}
    .foot{{position:absolute;left:0;right:0;bottom:44px;text-align:center;
      font:500 22px/1 "Manrope","Helvetica Neue",Arial,sans-serif;letter-spacing:.32em;color:#6FA8CF;opacity:.9}}
    </style></head><body><div class="bg"></div><div class="lines"></div>
    <div class="wrap">{SVG}</div>
    <div class="foot">SERENITECH.GLOBAL</div>
    </body></html>"""

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--ignore-gpu-blocklist"])
        for name, (w, h, lw) in {
            "serenitech-og-1200x630.png": (1200, 630, 940),
            "serenitech-og-square-800.png": (800, 800, 660),
        }.items():
            pg = await b.new_page(viewport={"width": w, "height": h}, device_scale_factor=1)
            await pg.set_content(page_html(w, h, lw))
            await pg.wait_for_timeout(300)
            png = OUT / name
            await pg.screenshot(path=str(png), full_page=False)
            jpg = png.with_suffix(".jpg")
            Image.open(png).convert("RGB").save(jpg, quality=92, optimize=True, subsampling=0)
            png.unlink()
            print(jpg.name, jpg.stat().st_size, "bytes")
        await b.close()

asyncio.run(main())
