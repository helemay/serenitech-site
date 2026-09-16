"""Compose the two digital-twin images over the Three.js survey renders:
  twin-console.jpg  — overview with glass HUD panels (numerics, cross-section, spectrum, events) and callouts
  twin-3d-view.jpg  — berth close-up with a light HUD (title, legend, callouts)
Values are the Miami/Santos-class figures of the synthetic basin (see console/bathy.py); layout is fictional."""
import json, pathlib, sys
import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib import font_manager as fm
from PIL import Image, ImageDraw, ImageFont, ImageFilter

HERE = pathlib.Path(__file__).parent
sys.path.insert(0, str(HERE))
import bathy

FONTS = HERE / "fonts"
for f in ["Manrope-500.ttf", "Manrope-600.ttf", "Sora-600.ttf", "JetBrainsMono-400.ttf", "JetBrainsMono-500.ttf", "JetBrainsMono-600.ttf"]:
    fm.fontManager.addfont(str(FONTS / f))
MONO = "JetBrains Mono"
W, H = 1920, 1088
CYAN = (30, 180, 255); WHITE = (234, 246, 255); STEEL = (143, 179, 217); AMBER = (245, 165, 36); GREEN = (54, 214, 138); RED = (255, 92, 92)
GLASS = (6, 20, 36); HALO = (4, 12, 24)
TIDE = 0.90
TIME = "15 Sep 2026 · 14:02:17 UTC"


def font(name, size):
    return ImageFont.truetype(str(FONTS / f"{name}.ttf"), size)


F_BRAND = font("Sora-600", 21); F_SUB = font("Manrope-500", 15); F_M12 = font("JetBrainsMono-400", 12); F_M11 = font("JetBrainsMono-400", 11)
F_M13B = font("JetBrainsMono-600", 13); F_VAL = font("JetBrainsMono-600", 25); F_M14 = font("JetBrainsMono-500", 14); F_M16B = font("JetBrainsMono-600", 16)
F_LAB = font("JetBrainsMono-500", 11); F_CAP = font("JetBrainsMono-600", 12); F_CAPV = font("JetBrainsMono-500", 14)


def glass(base: Image.Image, box, radius=10, alpha=158, blur=16, border=(30, 180, 255, 70)):
    """Frosted panel: blurred, darkened copy of the background under a translucent navy fill."""
    x0, y0, x1, y1 = box
    region = base.crop(box).filter(ImageFilter.GaussianBlur(blur))
    overlay = Image.new("RGBA", region.size, GLASS + (alpha,))
    region = Image.alpha_composite(region.convert("RGBA"), overlay)
    mask = Image.new("L", region.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, region.width - 1, region.height - 1], radius=radius, fill=255)
    base.paste(region.convert("RGB"), (x0, y0), mask)
    d = ImageDraw.Draw(base, "RGBA")
    d.rounded_rectangle(box, radius=radius, outline=border, width=1)


def text(d, xy, s, f, fill=WHITE, anchor="la", halo=True):
    if halo:
        d.text(xy, s, font=f, fill=fill, anchor=anchor, stroke_width=3, stroke_fill=HALO)
    else:
        d.text(xy, s, font=f, fill=fill, anchor=anchor)


def callout(d, px, py, lx, ly, title, value, color=CYAN, ring=True, anchor="la"):
    """Object-anchored label: leader line from the object to a two-line label with halo."""
    if ring:
        d.ellipse([px - 7, py - 7, px + 7, py + 7], outline=color + (220,), width=2)
        d.ellipse([px - 2, py - 2, px + 2, py + 2], fill=WHITE)
    d.line([(px, py), (lx, ly)], fill=color + (200,), width=1)
    tx = lx + (10 if anchor == "la" else -10)
    text(d, (tx, ly - 20), title.upper(), F_CAP, fill=color, anchor=anchor)
    text(d, (tx, ly - 3), value, F_CAPV, fill=WHITE, anchor=anchor)


def legend(base, box):
    """Vertical depth legend with the same hydrographic ramp as the render."""
    x0, y0, x1, y1 = box
    stops = [(-16.5, (15, 20, 107)), (-15.2, (13, 82, 230)), (-13.5, (13, 199, 235)), (-11.0, (46, 204, 82)), (-9.0, (158, 219, 56)), (-7.5, (235, 219, 41)), (-6.0, (250, 133, 26)), (-4.0, (204, 31, 20))]
    d = ImageDraw.Draw(base, "RGBA")
    glass(base, (x0 - 10, y0 - 34, x1 + 74, y1 + 14), radius=8, alpha=140)
    d = ImageDraw.Draw(base, "RGBA")
    text(d, (x0 - 4, y0 - 28), "m CD", F_LAB, fill=STEEL, halo=False)
    for yy in range(y0, y1):
        t = (yy - y0) / (y1 - y0)
        lvl = -4.0 - t * 12.5
        c = stops[-1][1]
        for i in range(len(stops) - 1):
            a, b = stops[i], stops[i + 1]
            if b[0] >= lvl >= a[0]:
                u = (lvl - a[0]) / (b[0] - a[0]); c = tuple(int(a[1][k] + (b[1][k] - a[1][k]) * u) for k in range(3)); break
        if lvl > -4.0: c = stops[-1][1]
        if lvl < -16.5: c = stops[0][1]
        d.line([(x0, yy), (x1, yy)], fill=c)
    for lvl in (-4, -6, -8, -10, -12, -14, -15, -16):
        yy = y0 + int((-4.0 - lvl) / 12.5 * (y1 - y0))
        d.line([(x1, yy), (x1 + 5, yy)], fill=STEEL)
        text(d, (x1 + 9, yy), f"{lvl}", F_LAB, fill=WHITE if lvl != -15 else CYAN, anchor="lm", halo=False)


def profile_chart(path, w, h, dpi=100):
    bed, mask, template, silt = bathy.surveyed_bed()
    cl = bathy.channel_centreline(800)
    seg = np.r_[0, np.cumsum(np.linalg.norm(np.diff(cl, axis=0), axis=1))]
    i = int(np.searchsorted(seg, 1050.0))
    dd = cl[i + 1] - cl[i - 1]; nrm = np.array([-dd[1], dd[0]]) / np.linalg.norm(dd)
    s = np.linspace(-260, 260, 261)
    pts = cl[i] + s[:, None] * nrm
    def sample(grid, p):
        c = np.clip(np.rint(p[:, 0] / bathy.DX), 0, bathy.NX - 1); r = np.clip(np.rint(p[:, 1] / bathy.DX), 0, bathy.NY - 1)
        return grid[r.astype(int), c.astype(int)]
    zb = sample(bed, pts)
    zt = np.where(np.abs(s) <= 110, -15.0, np.minimum(-15.0 + (np.abs(s) - 110) / 3.0, sample(bathy.natural_bed(), pts)))
    fig = plt.figure(figsize=(w / dpi, h / dpi), dpi=dpi, facecolor="none")
    ax = fig.add_axes([0.09, 0.17, 0.89, 0.80]); ax.set_facecolor("none")
    ax.fill_between(s, zb, -19, color="#5a4630", alpha=0.75)
    ax.fill_between(s, TIDE, zb, color="#1EB4FF", alpha=0.08)
    ax.plot(s, zt, color="#1EB4FF", lw=1.2, ls="--", label="design template −15.0 m · 1:3")
    ax.plot(s, zb, color="#F4F8FB", lw=1.4, label="surveyed bed (MBES 06:40)")
    ax.axhline(TIDE, color="#7ED4FF", lw=0.9, ls=":", label=f"water level +{TIDE:.2f} m (tide)")
    b, dr = 45.0, 12.7
    ax.fill_between([-b / 2, b / 2], TIDE - dr, TIDE, color="#8A3A40", alpha=0.95)
    ax.plot([-b / 2, -b / 2, b / 2, b / 2], [TIDE + 4, TIDE - dr, TIDE - dr, TIDE + 4], color="#F4F8FB", lw=0.9)
    ax.fill_between([-b / 2, b / 2], TIDE, TIDE + 4, color="#26364A")
    zc = zb[int(np.argmin(np.abs(s)))]
    ukc = (TIDE - dr) - zc
    ax.annotate("", xy=(0, TIDE - dr), xytext=(0, zc), arrowprops=dict(arrowstyle="<->", color="#F5A524", lw=1.2))
    ax.text(6, (TIDE - dr + zc) / 2, f"UKC {ukc:.2f} m", color="#F5A524", fontsize=9, family=MONO, va="center")
    ax.text(150, -14.3, "shoaling\n+0.52 m", color="#F5A524", fontsize=8, family=MONO, ha="center")
    ax.set_xlim(-260, 260); ax.set_ylim(-19, 6)
    ax.set_xlabel("offset from centreline (m) · KP 1.05 · looking inbound", color="#8FB3D9", fontsize=8, family=MONO)
    ax.set_ylabel("m CD", color="#8FB3D9", fontsize=8, family=MONO)
    ax.tick_params(colors="#8FB3D9", labelsize=8); [t.set_family(MONO) for t in ax.get_xticklabels() + ax.get_yticklabels()]
    for sp in ax.spines.values(): sp.set_color("#24507A")
    ax.grid(color="#24507A", lw=0.4, alpha=0.6)
    ax.legend(loc="upper left", fontsize=7.2, frameon=False, labelcolor="#C9D6E2", prop={"family": MONO, "size": 7.2})
    fig.savefig(path, dpi=dpi, transparent=True); plt.close(fig)
    return ukc


def acoustic_chart(path, w, h, dpi=100):
    bands = [10, 12.5, 16, 20, 25, 31.5, 40, 50, 63, 80, 100, 125, 160, 200, 250, 315, 400, 500, 630, 800, 1000, 1250, 1600, 2000, 2500, 3150, 4000, 5000, 6300, 8000, 10000, 12500, 16000, 20000]
    rng = np.random.default_rng(3)
    lv = 128 - 9.5 * np.log10(np.array(bands) / 12.5) + rng.normal(0, 1.6, len(bands))
    lv[1] = 142.0; lv[2] = 139.1
    fig = plt.figure(figsize=(w / dpi, h / dpi), dpi=dpi, facecolor="none")
    ax = fig.add_axes([0.09, 0.21, 0.89, 0.76]); ax.set_facecolor("none")
    x = np.arange(len(bands))
    cols = ["#F5A524" if v > 135 else "#1EB4FF" for v in lv]
    ax.bar(x, lv - 60, bottom=60, color=cols, width=0.72, alpha=0.95)
    ax.axhline(150, color="#FF5C5C", lw=1.0, ls="--"); ax.text(len(bands) - 0.5, 151.2, "limit 150 dB", color="#FF5C5C", fontsize=7.5, family=MONO, ha="right")
    ax.axhline(135, color="#F5A524", lw=0.8, ls=":"); ax.text(len(bands) - 0.5, 136.2, "watch 135 dB", color="#F5A524", fontsize=7.5, family=MONO, ha="right")
    ax.set_xticks(x[::3]); ax.set_xticklabels([f"{b:g}" if b < 1000 else f"{b / 1000:g}k" for b in bands[::3]], fontsize=7.5, family=MONO, color="#8FB3D9")
    ax.set_ylim(60, 160); ax.set_yticks([60, 80, 100, 120, 140, 160]); [t.set_family(MONO) for t in ax.get_yticklabels()]
    ax.tick_params(colors="#8FB3D9", labelsize=7.5)
    ax.set_xlabel("1/3-octave band centre (Hz) · CH-05P · Leq 60 s", color="#8FB3D9", fontsize=8, family=MONO)
    ax.set_ylabel("dB re 1 µPa", color="#8FB3D9", fontsize=8, family=MONO)
    for sp in ax.spines.values(): sp.set_color("#24507A")
    ax.grid(axis="y", color="#24507A", lw=0.4, alpha=0.6)
    ax.text(1, 144.5, "142.0 dB @ 14.2 Hz\nblade rate · MV Cabo Frio", color="#F5A524", fontsize=7.5, family=MONO)
    fig.savefig(path, dpi=dpi, transparent=True); plt.close(fig)


def panel_title(d, box, title, right=None):
    x0, y0, x1, y1 = box
    text(d, (x0 + 16, y0 + 12), title, F_M13B, fill=CYAN, halo=False)
    if right:
        text(d, (x1 - 16, y0 + 13), right, F_M11, fill=STEEL, anchor="ra", halo=False)
    d.line([(x0 + 12, y0 + 36), (x1 - 12, y0 + 36)], fill=(30, 180, 255, 60))


def topbar(base, subtitle, right):
    glass(base, (0, 0, W, 58), radius=0, alpha=175, blur=14, border=(30, 180, 255, 0))
    d = ImageDraw.Draw(base, "RGBA")
    d.line([(0, 58), (W, 58)], fill=(30, 180, 255, 70))
    text(d, (30, 17), "SERENITECH", F_BRAND, fill=WHITE, halo=False)
    d.line([(178, 18), (178, 42)], fill=(30, 180, 255, 120))
    text(d, (194, 21), subtitle, F_SUB, fill=STEEL, halo=False)
    text(d, (W - 30, 22), right, F_M14, fill=CYAN, anchor="ra", halo=False)


def units_overlay(d, units, label_ids, offsets):
    for u in units:
        if not (0 < u["sx"] < W and 0 < u["sy"] < H):
            continue
        x, y = u["sx"], u["sy"]
        d.ellipse([x - 9, y - 9, x + 9, y + 9], outline=(30, 180, 255, 120), width=1)
        d.ellipse([x - 4, y - 4, x + 4, y + 4], outline=(30, 180, 255, 230), width=2)
        if u["id"] in label_ids:
            dx, dy = offsets.get(u["id"], (14, -14))
            text(d, (x + dx, y + dy), u["id"], F_LAB, fill=CYAN, anchor="la" if dx > 0 else "ra")


def compose_console():
    base = Image.open(HERE / "out/console-raw.png").convert("RGB")
    pts = json.load(open(HERE / "out/console-points.json"))
    units = json.load(open(HERE / "out/console-units.json"))
    topbar(base, "Cognitive Console · Digital twin — Basin 3 · multibeam 400 kHz + lidar · synthetic layout",
           f"{TIME}   RTK FIXED   24/24 units online   tide +{TIDE:.2f} m ↑   HW 15:41 +1.32 m")
    # numerics column (left, over the un-surveyed area)
    box = (32, 84, 440, 700)
    glass(base, box)
    d = ImageDraw.Draw(base, "RGBA")
    panel_title(d, box, "NUMERICS — MV CABO FRIO", "inbound · KP 1.05")
    text(d, (48, 132), "LOA 294 m · beam 45 m · draft 12.70 m · 6.2 kn · AIS ok", F_M11, fill=STEEL, halo=False)
    tiles = [
        ("DRAFT (STATIC)", "12.70 m", CYAN), ("WATER DEPTH", "15.38 m", WHITE), ("UKC STATIC", "2.68 m", GREEN),
        ("SQUAT @ 6.2 kn", "−0.31 m", WHITE), ("UKC DYNAMIC", "2.37 m", GREEN), ("UKC POLICY MIN", "1.50 m", WHITE),
        ("BED AT KEEL", "−14.48 m CD", AMBER), ("DESIGN DEPTH", "−15.00 m CD", WHITE), ("SHOALING", "+0.52 m · 4.3 cm/mo", AMBER),
        ("SOUND SPEED", "1 521 m/s", WHITE), ("TEMP · SAL", "24.1 °C · 30.2 PSU", WHITE), ("CURRENT", "0.62 kn @ 142°", WHITE),
    ]
    cw, ch = 196, 84
    F_VAL_M = font("JetBrainsMono-600", 19); F_VAL_S = font("JetBrainsMono-500", 14)
    for i, (lab, val, col) in enumerate(tiles):
        cx0 = 48 + (i % 2) * cw; cy0 = 156 + (i // 2) * ch
        text(d, (cx0, cy0), lab, F_LAB, fill=STEEL, halo=False)
        f = F_VAL if len(val) <= 8 else F_VAL_M if len(val) <= 12 else F_VAL_S
        text(d, (cx0, cy0 + 20 if len(val) <= 12 else cy0 + 24), val, f, fill=col, halo=False)
        d.line([(cx0, cy0 + ch - 12), (cx0 + cw - 20, cy0 + ch - 12)], fill=(30, 180, 255, 35))
    text(d, (48, 672), "policy: UKC dyn ≥ 1.50 m · squat: ICORELS · datum CD", F_M11, fill=STEEL, halo=False)
    # cross-section (bottom-left), spectrum (bottom-centre), events (top-right)
    boxp = (32, 724, 560, 1056); glass(base, boxp); d = ImageDraw.Draw(base, "RGBA"); panel_title(d, boxp, "PROFILE — CROSS-SECTION KP 1.05", "MBES vs design · UKC check")
    ukc = profile_chart(HERE / "out/_profile.png", boxp[2] - boxp[0] - 8, boxp[3] - boxp[1] - 44)
    base.paste(Image.open(HERE / "out/_profile.png").convert("RGBA"), (boxp[0] + 4, boxp[1] + 40), Image.open(HERE / "out/_profile.png").convert("RGBA"))
    boxa = (584, 774, 1130, 1056); glass(base, boxa); d = ImageDraw.Draw(base, "RGBA"); panel_title(d, boxa, "ACOUSTIC ENERGY — 1/3-OCTAVE · CH-05P", "hydrophone · Leq 60 s")
    acoustic_chart(HERE / "out/_acoustic.png", boxa[2] - boxa[0] - 8, boxa[3] - boxa[1] - 44)
    base.paste(Image.open(HERE / "out/_acoustic.png").convert("RGBA"), (boxa[0] + 4, boxa[1] + 40), Image.open(HERE / "out/_acoustic.png").convert("RGBA"))
    boxe = (1480, 84, 1888, 452); glass(base, boxe); d = ImageDraw.Draw(base, "RGBA"); panel_title(d, boxe, "EVENTS & ALERTS", "last 30 min · policy engine")
    events = [
        ("14:01:52", AMBER, "CH-03S shoaling threshold −14.5 m CD exceeded at KP 1.05 · +0.52 m · dredging window 11 d"),
        ("13:58:10", CYAN, "MV Cabo Frio entered channel · draft 12.70 m verified · UKC dyn 2.37 m ≥ 1.50 ok"),
        ("13:52:44", CYAN, "CH-05P blade-rate line 142.0 dB re 1 µPa @ 14.2 Hz · below limit 150 ok"),
        ("13:47:30", GREEN, "QW-03 berth B12 fender impact 0.11 m/s · 1 650 kN · within design"),
        ("13:40:02", CYAN, "TB-02 turning-basin siltation +0.30 m · trend 2.1 cm/mo · monitor"),
        ("13:31:15", GREEN, "All 24 units online · mesh latency 0.8 s · battery ≥ 91 %"),
        ("13:22:48", CYAN, "Dark-vessel check: 0 contacts without AIS in the last 24 h"),
    ]
    y = boxe[1] + 52
    for t, col, msg in events:
        d.ellipse([boxe[0] + 18, y + 4, boxe[0] + 25, y + 11], fill=col)
        text(d, (boxe[0] + 34, y), t, F_M12, fill=STEEL, halo=False)
        # wrap message to two lines max
        words = msg.split(" "); line = ""; lines = []
        for wds in words:
            if d.textlength((line + " " + wds).strip(), font=F_M11) > boxe[2] - boxe[0] - 130:
                lines.append(line); line = wds
            else:
                line = (line + " " + wds).strip()
        lines.append(line)
        for k, ln in enumerate(lines[:2]):
            text(d, (boxe[0] + 112, y + k * 15), ln, F_M11, fill=WHITE, halo=False)
        y += 22 + 15 * (len(lines[:2]) - 1) + 6
    # depth legend (right edge, mid)
    legend(base, (1846, 470, 1866, 720))
    d = ImageDraw.Draw(base, "RGBA")
    # object-anchored callouts
    p = pts["MV Cabo Frio"]; callout(d, p["sx"], p["sy"] - 8, p["sx"] + 160, p["sy"] - 22, "MV Cabo Frio · inbound · 6.2 kn", "draft 12.70 m · UKC dyn 2.37 m")
    p = pts["kp105"]; d.ellipse([p["sx"] - 26, p["sy"] - 14, p["sx"] + 26, p["sy"] + 14], outline=AMBER + (230,), width=2)
    callout(d, p["sx"] - 26, p["sy"], p["sx"] - 180, p["sy"] + 96, "KP 1.05 · shoaling +0.52 m", "bed −14.48 m CD · dredging window 11 d", color=AMBER, ring=False)
    p = pts["Tug Ipê"]; callout(d, p["sx"], p["sy"] - 6, p["sx"] + 120, p["sy"] - 44, "Tug Ipê", "assisting · 32 m")
    p = pts["MV Serra Azul"]; callout(d, p["sx"] + 60, p["sy"] - 4, p["sx"] + 238, p["sy"] - 40, "MV Serra Azul · berthed B12", "draft 13.80 m · UKC 3.05 m · fender peak 1 650 kN")
    p = pts["basin"]; callout(d, p["sx"], p["sy"], p["sx"] + 60, p["sy"] + 62, "Turning basin", "Ø 600 m · −15.0 m CD · siltation +0.30 m")
    p = pts["kp190"]; callout(d, p["sx"], p["sy"], p["sx"] + 60, p["sy"] + 104, "Access channel", "220 m · slopes 1:3 · −15.0 m CD")
    units_overlay(d, units, {"CH-04P", "CH-05P", "TB-02", "QW-03", "CH-07S"}, {"CH-04P": (14, -14), "CH-05P": (14, -14), "TB-02": (-12, -14), "QW-03": (14, 8), "CH-07S": (-12, 8)})
    base.save(HERE / "out/twin-console.jpg", quality=92, subsampling=0)
    print("console ok · profile ukc", round(ukc, 2))


def compose_view3d():
    base = Image.open(HERE / "out/view3d-raw.png").convert("RGB")
    pts = json.load(open(HERE / "out/view3d-points.json"))
    units = json.load(open(HERE / "out/view3d-units.json"))
    topbar(base, "3D digital twin — berth B12 & turning basin · multibeam 400 kHz · 0.5 m grid · lidar above the waterline",
           f"{TIME}   24/24 units online   tide +{TIDE:.2f} m ↑   VE ×3")
    legend(base, (1846, 470, 1866, 720))
    d = ImageDraw.Draw(base, "RGBA")
    p = pts["MV Serra Azul"]; callout(d, p["sx"] + 40, p["sy"] - 30, 1000, 330, "MV Serra Azul · berthed B12", "LOA 347 m · draft 13.80 m · UKC 3.05 m · AIS ok")
    p = pts["basin"]; callout(d, p["sx"], p["sy"], 1480, 760, "Turning basin", "Ø 600 m · −15.0 m CD · siltation +0.30 m")
    text(d, (480, 700), "BERTH POCKET −16.0 m CD · pile row QW · fenders 22 m", F_CAP, fill=CYAN)
    text(d, (480, 718), "quay face scanned: 0.05 m grid · no data under the hull (sonar shadow)", F_CAPV, fill=WHITE)
    units_overlay(d, units, {"QW-02", "QW-03", "QW-04", "TB-01", "TB-04", "CH-07P"}, {"QW-02": (14, -16), "QW-03": (14, -16), "QW-04": (14, -16), "TB-01": (14, -16), "TB-04": (14, -16), "CH-07P": (14, 8)})
    u = {x["id"]: x for x in units}
    if "QW-02" in u and 0 < u["QW-02"]["sx"] < W:
        q = u["QW-02"]; callout(d, q["sx"], q["sy"], 560, 820, "QW-02 · berthing impact 13:47:30", "0.11 m/s · 1 650 kN · within design", color=GREEN, ring=False)
    if "TB-01" in u and 0 < u["TB-01"]["sx"] < W:
        q = u["TB-01"]; callout(d, q["sx"], q["sy"], 1180, 990, "TB-01 · basin toe", f"bed {q['lvl']:.2f} m CD · vibration 0.4 mm/s", ring=False)
    base.save(HERE / "out/twin-3d-view.jpg", quality=92, subsampling=0)
    print("view3d ok")


if __name__ == "__main__":
    compose_console()
    compose_view3d()
