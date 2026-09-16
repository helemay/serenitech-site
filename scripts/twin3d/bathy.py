"""Synthetic port basin — a fictional layout with Miami/Santos-class channel parameters.

Design depth -15.0 m CD (Santos authorised depth; PortMiami -50 ft ≈ -15.2 m MLLW), channel width
220 m, side slopes 1:3, turning basin Ø 600 m, berth pockets -15.0/-16.0 m, tide +0.9 m at survey.
Nothing here reproduces a real port: the geometry is procedural.
"""
import numpy as np
from scipy.ndimage import gaussian_filter, distance_transform_edt

# Domain (metres): 3200 x 2000, 10 m grid
NX, NY = 320, 200
DX = 10.0
x = np.arange(NX) * DX
y = np.arange(NY) * DX
X, Y = np.meshgrid(x, y)

DESIGN = -15.0
WIDTH = 220.0
SLOPE = 3.0  # 1:3
SHOAL_APEX = -14.48  # bed under the keel at KP 1.05 after +0.52 m of shoaling


def channel_centreline(n=400):
    """Access channel: enters from the SE, bends north-west into the turning basin by the quay."""
    t = np.linspace(0, 1, n)
    # cubic bezier from (3150, 150) to the basin centre (1050, 1250)
    p0 = np.array([3150.0, 150.0]); p1 = np.array([2300.0, 250.0]); p2 = np.array([1900.0, 1000.0]); p3 = np.array([1050.0, 1250.0])
    pts = ((1 - t) ** 3)[:, None] * p0 + (3 * (1 - t) ** 2 * t)[:, None] * p1 + (3 * (1 - t) * t ** 2)[:, None] * p2 + (t ** 3)[:, None] * p3
    return pts


BASIN_C = np.array([1050.0, 1250.0])
BASIN_R = 300.0
QUAY_Y = 1620.0  # quay face (north side), berths run x 250..1850
BERTH_X0, BERTH_X1 = 250.0, 1850.0


def rng(seed=7):
    return np.random.default_rng(seed)


def natural_bed():
    """Undisturbed bed: -5.5 m near the quay/shore rising to -3 m on the eastern shoal, -8.5 m offshore (south)."""
    r = rng()
    base = -8.5 + 3.0 * (Y / y.max())  # deeper to the south (y small) ... wait: y=0 south => -8.5 at y=0, -5.5 at north
    # eastern shoal
    shoal = 3.2 * np.exp(-(((X - 2650) / 420) ** 2 + ((Y - 1500) / 380) ** 2))
    # western shoal / spit
    spit = 2.4 * np.exp(-(((X - 380) / 300) ** 2 + ((Y - 700) / 260) ** 2))
    noise = gaussian_filter(r.normal(0, 1, (NY, NX)), 6) * 0.9 + gaussian_filter(r.normal(0, 1, (NY, NX)), 1.6) * 0.18
    ripples = 0.12 * np.sin(X / 38.0 + 0.6 * np.sin(Y / 90.0))
    return base + shoal + spit + noise + ripples


def _soft_min(a, b, k=0.7):
    """Smooth minimum (no crease where the dredged template meets the natural bed)."""
    return -k * np.logaddexp(-a / k, -b / k)


def dredged_template():
    """Design template: channel/basin/berths at -15 m with 1:3 side slopes, softened like a real
    dredged cut (banks slump and round off; the toe wanders ±15 m). Returns the dredged mask and
    the template depth (rises outside the toe)."""
    from scipy.spatial import cKDTree
    r = rng(11)
    cl = channel_centreline()
    tree = cKDTree(cl)
    d, _ = tree.query(np.c_[X.ravel(), Y.ravel()])
    d = d.reshape(NY, NX)
    wobble = gaussian_filter(r.normal(0, 1, (NY, NX)), 9) * 18.0  # ±15 m toe irregularity
    mask = d <= WIDTH / 2 + wobble
    mask |= (X - BASIN_C[0]) ** 2 + (Y - BASIN_C[1]) ** 2 <= (BASIN_R + wobble) ** 2
    mask |= (X >= BERTH_X0) & (X <= BERTH_X1) & (Y >= 1400 + wobble * 0.6) & (Y <= QUAY_Y)
    dist_out = distance_transform_edt(~mask) * DX
    dist_in = distance_transform_edt(mask) * DX
    # 1:3 slope outside the toe, rounded shoulder (blur) and a gently dished floor inside
    template = DESIGN + dist_out / SLOPE - 0.25 * np.tanh(dist_in / 60.0)
    template = gaussian_filter(template, 2.2)
    return mask, template


def surveyed_bed(seed=7):
    """Bed as surveyed: natural bed softly merged with the dredged template, plus siltation patches,
    sand waves, slumped banks and multibeam texture — an organic channel floor, not a CAD trench."""
    nat = natural_bed()
    mask, template = dredged_template()
    bed = _soft_min(nat, template, k=0.7)
    # berth pocket dredged deeper (-16.0) on the two western berths, soft edges
    pocket = np.exp(-(((X - 700) / 380) ** 8 + ((Y - 1540) / 95) ** 8))
    bed = bed - 1.0 * pocket * (template < -13.5)
    r = rng(seed + 1)
    # siltation: accretion in the outer bend (on the centreline at KP 1.05), along the quay, at the basin entrance
    silt = (
        0.55 * np.exp(-(((X - 2200) / 240) ** 2 + ((Y - 570) / 170) ** 2))
        + 0.42 * np.exp(-(((X - 1500) / 330) ** 2 + ((Y - 1540) / 90) ** 2))
        + 0.30 * np.exp(-(((X - 1150) / 180) ** 2 + ((Y - 1000) / 160) ** 2))
    )
    silt += np.clip(gaussian_filter(r.normal(0, 1, (NY, NX)), 5) * 0.08, -0.1, 0.15)
    bed = bed + np.where(mask, silt, silt * 0.3)
    # sand waves across the channel floor (λ ≈ 60 m, 0.12 m) and slump lobes at the toe
    cl = channel_centreline(400)
    from scipy.spatial import cKDTree
    _, idx = cKDTree(cl).query(np.c_[X.ravel(), Y.ravel()])
    along = np.r_[0, np.cumsum(np.linalg.norm(np.diff(cl, axis=0), axis=1))][idx].reshape(NY, NX)
    sandwaves = 0.12 * np.sin(along / 9.5 + 0.8 * np.sin(X / 140.0)) * mask
    toe = np.exp(-((distance_transform_edt(mask) * DX - 25) / 22) ** 2)
    slumps = 0.35 * gaussian_filter(r.normal(0, 1, (NY, NX)), 3) * toe
    # multibeam texture: fine noise + faint furrows
    texture = gaussian_filter(r.normal(0, 1, (NY, NX)), 0.9) * 0.05 + 0.03 * np.sin(Y / 7.0 + X / 90.0) * mask
    bed = bed + sandwaves + slumps + texture
    # calibrate the shoal apex on the centreline at KP 1.05 to exactly -14.48 m CD (numerics panel)
    cl8 = channel_centreline(800)
    seg = np.r_[0, np.cumsum(np.linalg.norm(np.diff(cl8, axis=0), axis=1))]
    p = cl8[int(np.searchsorted(seg, 1050.0))]
    bump = np.exp(-(((X - p[0]) / 150) ** 2 + ((Y - p[1]) / 110) ** 2))
    here = bed[int(round(p[1] / DX)), int(round(p[0] / DX))]
    bed = bed + (SHOAL_APEX - here) * bump / bump[int(round(p[1] / DX)), int(round(p[0] / DX))]
    return bed, mask, template, silt


def survey_coverage():
    """Multibeam coverage: an irregular corridor around the dredged works (True = surveyed)."""
    mask, _ = dredged_template()
    r = rng(21)
    dist = distance_transform_edt(~mask) * DX
    edge = 620 + gaussian_filter(r.normal(0, 1, (NY, NX)), 12) * 160
    cov = dist <= edge
    cov |= (Y >= 1250) & (X >= 150) & (X <= 1950)  # full coverage in front of the terminal
    return cov


# Vessels (LOA x beam, position of centre, heading deg from x-axis)
VESSELS = [
    {"id": "MV Serra Azul", "type": "container", "loa": 347.0, "beam": 48.2, "draft": 13.8, "c": (1030.0, 1585.0), "hdg": 0.0, "status": "berthed · B12"},
    {"id": "MV Cabo Frio", "type": "bulk", "loa": 294.0, "beam": 45.0, "draft": 12.7, "c": None, "kp": 1050.0, "hdg": None, "status": "inbound · 6.2 kn"},
    {"id": "Tug Ipê", "type": "tug", "loa": 32.0, "beam": 11.5, "draft": 4.9, "c": None, "kp": 1300.0, "offset": 70.0, "hdg": None, "status": "assisting"},
]


def _place_on_channel():
    """Vessels with a `kp` sit on the centreline at that chainage, heading inbound along the tangent."""
    cl = channel_centreline(800)
    seg = np.r_[0, np.cumsum(np.linalg.norm(np.diff(cl, axis=0), axis=1))]
    for v in VESSELS:
        if v.get("kp") is None:
            continue
        i = int(np.searchsorted(seg, v["kp"]))
        i = min(max(i, 1), len(cl) - 2)
        d = cl[i + 1] - cl[i - 1]
        hdg = np.degrees(np.arctan2(d[1], d[0]))
        nrm = np.array([-d[1], d[0]]) / np.linalg.norm(d)
        c = cl[i] + nrm * v.get("offset", 0.0)
        v["c"] = (float(c[0]), float(c[1]))
        v["hdg"] = float(hdg)


_place_on_channel()


def vessel_polygon(v):
    L, B = v["loa"], v["beam"]
    # hull outline with a pointed bow (+x) and squarer stern
    pts = np.array([[-L / 2, -B / 2], [L * 0.30, -B / 2], [L / 2, 0.0], [L * 0.30, B / 2], [-L / 2, B / 2]])
    a = np.deg2rad(v["hdg"])
    R = np.array([[np.cos(a), -np.sin(a)], [np.sin(a), np.cos(a)]])
    return pts @ R.T + np.array(v["c"])


def sensor_nodes():
    """24 cognitive units: along both channel toes every ~330 m, basin ring and quay piles."""
    cl = channel_centreline(200)
    nodes = []
    idx = np.linspace(8, 190, 7).astype(int)
    for k, i in enumerate(idx):
        p = cl[i]
        d = cl[min(i + 1, 199)] - cl[max(i - 1, 0)]
        nrm = np.array([-d[1], d[0]]) / np.linalg.norm(d)
        for side, s in (("P", -1), ("S", 1)):
            q = p + nrm * s * (WIDTH / 2 + 25)
            nodes.append({"id": f"CH-{k + 1:02d}{side}", "xy": q, "kind": "toe"})
    for k, ang in enumerate(np.deg2rad([200, 250, 300, 340])):
        nodes.append({"id": f"TB-{k + 1:02d}", "xy": BASIN_C + (BASIN_R + 40) * np.array([np.cos(ang), np.sin(ang)]), "kind": "basin"})
    for k, xq in enumerate(np.linspace(380, 1750, 6)):
        nodes.append({"id": f"QW-{k + 1:02d}", "xy": np.array([xq, QUAY_Y - 18]), "kind": "quay"})
    return nodes


if __name__ == "__main__":
    bed, mask, template, silt = surveyed_bed()
    print("bed range", bed.min().round(2), bed.max().round(2), "dredged cells", mask.sum(), "nodes", len(sensor_nodes()))
    print("silt max in channel", (silt * mask).max().round(2))
