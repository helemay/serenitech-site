import asyncio, json, sys, time, pathlib
from playwright.async_api import async_playwright

view = sys.argv[1] if len(sys.argv) > 1 else "console"
scale = sys.argv[2] if len(sys.argv) > 2 else "1"
extra = sys.argv[3] if len(sys.argv) > 3 else ""
OUT = pathlib.Path(__file__).parent / "out"
OUT.mkdir(exist_ok=True)


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--ignore-gpu-blocklist", "--enable-unsafe-swiftshader", "--use-gl=angle", "--use-angle=swiftshader"])
        pg = await b.new_page(viewport={"width": 1920, "height": 1088})
        logs = []
        pg.on("console", lambda m: logs.append(f"{m.type}: {m.text}"))
        pg.on("pageerror", lambda e: logs.append(f"pageerror: {e}"))
        t0 = time.time()
        await pg.goto(f"http://127.0.0.1:8766/twin3d.html?view={view}&scale={scale}{extra}", wait_until="load")
        try:
            await pg.wait_for_function("window.__done === true", timeout=800000)
        except Exception as e:
            print("timeout/err", str(e)[:200])
        print(f"rendered in {time.time() - t0:.1f}s")
        await pg.wait_for_timeout(400)
        await pg.locator("canvas").screenshot(path=str(OUT / f"{view}-raw.png"))
        try:
            meta = json.loads((pathlib.Path(__file__).parent / "data" / "scene.json").read_text())
            cl = meta["centreline"]
            import math
            seg = [0.0]
            for i in range(1, len(cl)):
                seg.append(seg[-1] + math.hypot(cl[i][0] - cl[i-1][0], cl[i][1] - cl[i-1][1]))
            def kp(k):
                for i, sgm in enumerate(seg):
                    if sgm >= k: return cl[i]
                return cl[-1]
            named = {"kp105": kp(1050.0) + [-14.48], "kp190": kp(1900.0) + [-15.0], "kp000": kp(0.0) + [-15.0]}
            for v in meta["vessels"]:
                named[v["id"]] = [v["cx"], v["cy"], meta["tide"]]
                named[v["id"] + ":keel"] = [v["cx"], v["cy"], meta["tide"] - v["draft"]]
            named["basin"] = [meta["basin"]["cx"], meta["basin"]["cy"], -15.0]
            named["quay_mid"] = [(meta["berth_x0"] + meta["berth_x1"]) / 2, meta["quay_y"], 3.5]
            keys = list(named.keys())
            pr = await pg.evaluate("(p)=>window.project(p)", [named[k] for k in keys])
            (OUT / f"{view}-points.json").write_text(json.dumps({k: {"world": named[k], "sx": p[0], "sy": p[1], "sz": p[2]} for k, p in zip(keys, pr)}))
            units = await pg.evaluate("window.units")
            proj = await pg.evaluate("(u)=>window.project(u.map(n=>[n.x,n.y,n.lvl]))", units)
            (OUT / f"{view}-units.json").write_text(json.dumps([dict(n, sx=p[0], sy=p[1], sz=p[2]) for n, p in zip(units, proj)]))
        except Exception as e:
            print("project err", str(e)[:200])
        for l in logs[:15]:
            print(l)
        await b.close()


asyncio.run(main())
