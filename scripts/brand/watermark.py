"""Bake the Serenitech horizontal logo (on-dark glow variant) into the bottom-right corner of every
site image, with a soft dark halo so the white wordmark stays legible on bright areas.

Usage:  SERENITECH_ORIGINALS=/path/to/imagens-originais-sem-logo python3 scripts/brand/watermark.py [file.jpg ...]
(needs: pip install playwright pillow && playwright install chromium)
Re-runnable: always starts from the originals, so the logo is never applied twice. Per-image
placement lives in PLACEMENT (console screens keep the logo inside the events panel)."""
import asyncio, os, pathlib, sys
from PIL import Image, ImageFilter
from playwright.async_api import async_playwright

HERE = pathlib.Path(__file__).resolve().parent
SITE = HERE.parents[1]  # repo root
# Originals (without logo) are NOT in the repository: they live in the brand folder
# "Serenitech Brand & Site/imagens-originais-sem-logo/" and in the session scratchpad. Point ORIG there.
ORIG = pathlib.Path(os.environ.get("SERENITECH_ORIGINALS", HERE / "originals"))
OUT = SITE / "public/images"
SVG = SITE / "public/brand/serenitech-logo-horizontal-on-dark-glow.svg"
LOGO_PNG = HERE / "logo-horizontal-glow-1800.png"

# per-image placement: logo width as a fraction of image width, margins (right, bottom) as fractions
DEFAULT = dict(w=0.16, mr=0.022, mb=0.038)
PLACEMENT = {
    "twin-console.jpg": dict(w=0.095, mr=0.019, mb=0.0135),  # inside the Events & Alerts panel, under the last event line
    "twin-3d-view.jpg": dict(w=0.13, mr=0.020, mb=0.030),
    "hq-passeio-sapiens-florianopolis.png": dict(w=0.19, mr=0.025, mb=0.040),
}


async def render_logo():
    """SVG → transparent PNG, 1800 px wide, via Chromium (paths only, no fonts involved)."""
    if LOGO_PNG.exists():
        return
    svg = SVG.read_text(encoding="utf-8")
    html = f"""<!doctype html><html><body style="margin:0;background:transparent">
    <div id="l" style="display:inline-block;padding:24px">{svg.replace('width="581" height="94"', 'width="1800" height="291"')}</div>
    </body></html>"""
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--ignore-gpu-blocklist"])
        pg = await b.new_page(viewport={"width": 2000, "height": 400}, device_scale_factor=1)
        await pg.set_content(html)
        await pg.wait_for_timeout(200)
        await pg.locator("#l").screenshot(path=str(LOGO_PNG), omit_background=True)
        await b.close()
    im = Image.open(LOGO_PNG)
    bbox = im.getbbox()
    im.crop(bbox).save(LOGO_PNG)
    print("logo", im.crop(bbox).size)


def stamp(src: pathlib.Path, dst: pathlib.Path, spec):
    im = Image.open(src)
    mode = im.mode
    base = im.convert("RGBA")
    W, H = base.size
    logo = Image.open(LOGO_PNG).convert("RGBA")
    lw = int(round(W * spec["w"]))
    lh = int(round(logo.height * lw / logo.width))
    logo = logo.resize((lw, lh), Image.LANCZOS)
    x = W - int(round(W * spec["mr"])) - lw
    y = H - int(round(W * spec["mb"])) - lh
    # soft dark shadow so the white wordmark stays legible over bright bathymetry or daylight
    pad = int(lh * 0.6)
    shadow = Image.new("RGBA", (lw + 2 * pad, lh + 2 * pad), (0, 0, 0, 0))
    a = logo.split()[3]
    dark = Image.new("RGBA", logo.size, (4, 14, 28, 0))
    dark.putalpha(a.point(lambda v: int(v * 0.9)))
    shadow.paste(dark, (pad, pad + 2), dark)
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=max(6, lh * 0.16)))
    # a second, wider and fainter halo
    halo = Image.new("RGBA", shadow.size, (4, 14, 28, 0))
    halo.paste(dark, (pad, pad + 2), dark)
    halo = halo.filter(ImageFilter.GaussianBlur(radius=max(14, lh * 0.45)))
    halo.putalpha(halo.split()[3].point(lambda v: int(v * 0.55)))
    base.alpha_composite(halo, (x - pad, y - pad))
    base.alpha_composite(shadow, (x - pad, y - pad))
    base.alpha_composite(logo, (x, y))
    if dst.suffix.lower() in (".jpg", ".jpeg"):
        base.convert("RGB").save(dst, quality=90, optimize=True, subsampling=0)
    else:
        (base if mode == "RGBA" else base.convert("RGB")).save(dst, optimize=True)
    print(f"{dst.name:45s} {W}x{H} logo {lw}x{lh} at ({x},{y}) -> {dst.stat().st_size:,} B")


def main():
    asyncio.run(render_logo())
    only = set(sys.argv[1:])
    for src in sorted(ORIG.iterdir()):
        if src.suffix.lower() not in (".jpg", ".jpeg", ".png"):
            continue
        if only and src.name not in only:
            continue
        stamp(src, OUT / src.name, PLACEMENT.get(src.name, DEFAULT))


if __name__ == "__main__":
    main()
