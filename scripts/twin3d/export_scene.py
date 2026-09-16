"""Export the synthetic basin (console/bathy.py) for the Three.js renderer: 2.5 m terrain grid with
fine bed detail, survey coverage, vessels, sensor nodes, quay and centreline."""
import json, sys, pathlib
import numpy as np
from scipy.ndimage import zoom, gaussian_filter
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
import bathy as B

OUT = pathlib.Path(__file__).parent / "data"; OUT.mkdir(exist_ok=True)
bed, mask, template, silt = B.surveyed_bed()
cov = B.survey_coverage()
Z = 4  # 10 m → 2.5 m
bedf = zoom(bed, Z, order=3)
maskf = zoom(mask.astype(float), Z, order=1) > 0.5
covf = zoom(cov.astype(float), Z, order=1)
covf = gaussian_filter(covf, 22)  # soft survey boundary (~55 m)
ny, nx = bedf.shape
dx = B.DX / Z
y, x = np.mgrid[0:ny, 0:nx] * dx
r = np.random.default_rng(3)
# fine detail: ripples (λ 5–9 m) on the natural bed, faint dredge furrows along the channel, grain noise
rip = 0.045 * np.sin(x / 1.1 + 0.7 * np.sin(y / 3.3)) * np.cos(y / 1.6 + 0.4 * np.sin(x / 5.0))
rip *= (1 - 0.8 * maskf)
# medium-scale relief on the natural bed: sand ridges (λ 60–140 m, 0.25 m) and gentle mounds
ridges = 0.22 * np.sin(x / 14.0 + 2.5 * np.sin(y / 31.0)) * np.cos(y / 22.0 + 1.5 * np.sin(x / 47.0)) * (1 - maskf)
mounds = gaussian_filter(r.normal(0, 1, (ny, nx)), 28) * 3.2 * (1 - maskf)
bedf = bedf + ridges + mounds
grain = gaussian_filter(r.normal(0, 1, (ny, nx)), 1.2) * 0.02
bedf = bedf + rip + grain
bedf.astype("<f4").tofile(OUT / "terrain.bin")
covf.astype("<f4").tofile(OUT / "coverage.bin")
maskf.astype("<f4").tofile(OUT / "dredged.bin")
cl = B.channel_centreline(200)
nodes = [{"id": n["id"], "x": float(n["xy"][0]), "y": float(n["xy"][1]), "kind": n["kind"]} for n in B.sensor_nodes()]
vessels = []
for v in B.VESSELS:
    vessels.append({k: v[k] for k in ("id", "type", "loa", "beam", "draft", "status")} | {"cx": v["c"][0], "cy": v["c"][1], "hdg": v["hdg"]})
meta = {
    "nx": nx, "ny": ny, "dx": dx, "design": B.DESIGN, "width": B.WIDTH, "tide": 0.9,
    "quay_y": B.QUAY_Y, "berth_x0": B.BERTH_X0, "berth_x1": B.BERTH_X1, "basin": {"cx": B.BASIN_C[0], "cy": B.BASIN_C[1], "r": B.BASIN_R},
    "centreline": [[float(p[0]), float(p[1])] for p in cl],
    "vessels": vessels, "nodes": nodes,
    "bed_range": [float(np.nanmin(bedf)), float(np.nanmax(bedf))],
}
(OUT / "scene.json").write_text(json.dumps(meta))
print("terrain", bedf.shape, "range", meta["bed_range"], "vessels", [(v["id"], round(v["cx"]), round(v["cy"]), round(v["hdg"], 1)) for v in vessels])
