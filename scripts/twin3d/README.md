# Digital-twin images — survey-grade renderer

Produces `public/images/twin-console.jpg` and `public/images/twin-3d-view.jpg`: a **synthetic** port basin
(Miami/Santos-class parameters, fictional layout) rendered like a multibeam + lidar survey — depth-coded
bathymetry with sonar speckle, depth-coded quay wall and hulls, lidar point clouds above the waterline —
with the console HUD (numerics, cross-section, spectrum, events) composed on top.

```
cd scripts/twin3d
npm install                                   # three.js
pip install numpy scipy matplotlib pillow playwright && playwright install chromium
python3 export_scene.py                       # bathy.py → data/terrain.bin, coverage.bin, dredged.bin, scene.json (2.5 m grid)
bash serve.sh                                 # static server on 127.0.0.1:8766
python3 render.py console 1                   # out/console-raw.png + projected anchor points
python3 render.py view3d 1                    # out/view3d-raw.png
python3 compose.py                            # out/twin-console.jpg, out/twin-3d-view.jpg (HUD, callouts, legend)
```

Then copy the two JPEGs to the brand originals folder and bake the logo with `scripts/brand/watermark.py`.
Camera presets live in `VIEWS` (twin3d.js); any parameter can be overridden through the URL query
(`render.py console 1 "&az=20&el=25&dist=1900"`). Time stamp and figures must stay consistent with
`src/components/site/TwinConsole.tsx` (readouts) and `src/i18n/*` (captions): 15 Sep 2026 14:02:17 UTC,
UKC 2.68 m static / 2.37 m dynamic, bed −14.48 m CD at KP 1.05, tide +0.90 m, 142 dB @ 14.2 Hz.
