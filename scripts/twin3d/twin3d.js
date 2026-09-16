// Serenitech digital twin — survey-grade look (multibeam + lidar point-cloud aesthetic) rendered with
// Three.js in headless Chromium. World: X = east (m), Z = -north (m), Y = level (m CD) × VE.
import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { MeshSurfaceSampler } from "three/addons/math/MeshSurfaceSampler.js";

const q = new URLSearchParams(location.search);
const VIEW = q.get("view") || "console";
const W = parseInt(q.get("w") || "1920", 10), H = parseInt(q.get("h") || "1088", 10);
const SCALE = parseFloat(q.get("scale") || "1");
const VE = parseFloat(q.get("ve") || "3");
const CYAN = new THREE.Color("#1EB4FF");
const P = (k, d) => (q.has(k) ? parseFloat(q.get(k)) : d);

const meta = await (await fetch("/data/scene.json")).json();
const f32 = async (p) => new Float32Array(await (await fetch(p)).arrayBuffer());
const [bed, cov, dredged] = await Promise.all([f32("/data/terrain.bin"), f32("/data/coverage.bin"), f32("/data/dredged.bin")]);
const { nx, ny, dx } = meta;
const W2 = (x) => x, Z2 = (yN) => -yN, Y2 = (lvl) => lvl * VE;
const bedAt = (x, yN) => {
  const i = Math.min(nx - 1, Math.max(0, Math.round(x / dx))), j = Math.min(ny - 1, Math.max(0, Math.round(yN / dx)));
  return bed[j * nx + i];
};

const renderer = new THREE.WebGLRenderer({ antialias: SCALE < 1.5, preserveDrawingBuffer: true, powerPreference: "high-performance" });
renderer.setPixelRatio(SCALE);
renderer.setSize(W, H);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = P("exp", 1.05);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const BG = new THREE.Color("#04101c");
scene.background = BG;
scene.fog = new THREE.FogExp2(BG.getHex(), P("fog", VIEW === "console" ? 0.00028 : 0.00030));

// ---------- GLSL helpers: hydrographic ramp (deep blue → cyan → green → yellow → red shallow), speckle ----------
const RAMP_GLSL = `
vec3 ramp(float d) { // d = level (m CD), from -16.5 (deep) to -3 (shallow)
  // stops in metres: -16.5 deep indigo · -15 blue · -13 cyan · -10.5 green · -8 yellow-green · -6.5 yellow · -5 orange · -3.5 red
  vec3 c0 = vec3(0.06, 0.08, 0.42); vec3 c1 = vec3(0.05, 0.32, 0.90); vec3 c2 = vec3(0.05, 0.78, 0.92); vec3 c3 = vec3(0.18, 0.80, 0.32);
  vec3 c4 = vec3(0.62, 0.86, 0.22); vec3 c5 = vec3(0.92, 0.86, 0.16); vec3 c6 = vec3(0.98, 0.52, 0.10); vec3 c7 = vec3(0.80, 0.12, 0.08);
  vec3 c = mix(c0, c1, smoothstep(-16.5, -15.2, d));
  c = mix(c, c2, smoothstep(-15.2, -13.5, d));
  c = mix(c, c3, smoothstep(-13.5, -11.0, d));
  c = mix(c, c4, smoothstep(-11.0, -9.0, d));
  c = mix(c, c5, smoothstep(-9.0, -7.5, d));
  c = mix(c, c6, smoothstep(-7.5, -6.0, d));
  c = mix(c, c7, smoothstep(-6.0, -4.0, d));
  return c;
}
float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vnoise(vec2 p) { vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), f.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), f.x), f.y); }
`;

// ---------- terrain (multibeam surface) ----------
{
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(nx * ny * 3), cv = new Float32Array(nx * ny);
  const quayRow = Math.floor(meta.quay_y / dx);
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    const k = j * nx + i;
    let d = bed[k];
    if (j > quayRow) d = -6.0;
    pos[k * 3] = W2(i * dx); pos[k * 3 + 1] = Y2(d); pos[k * 3 + 2] = Z2(j * dx);
    cv[k] = Math.min(1, Math.max(0, cov[k]));
  }
  const idx = new Uint32Array((nx - 1) * (ny - 1) * 6);
  let p = 0;
  for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
    const a = j * nx + i, b = a + 1, c2 = a + nx, d2 = c2 + 1;
    idx[p++] = a; idx[p++] = b; idx[p++] = c2; idx[p++] = b; idx[p++] = d2; idx[p++] = c2;
  }
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setAttribute("cov", new THREE.BufferAttribute(cv, 1));
  geo.setIndex(new THREE.BufferAttribute(idx, 1));
  geo.computeVertexNormals();
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9, metalness: 0.0 });
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uVE = { value: VE };
    sh.uniforms.uCyan = { value: CYAN };
    sh.uniforms.uSpeckle = { value: P("speckle", 0.22) };
    sh.uniforms.uContours = { value: P("contours", 0) };
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", "#include <common>\nvarying float vLevel; varying vec2 vXZ; varying float vCov; attribute float cov; uniform float uVE;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvLevel = position.y / uVE; vXZ = position.xz; vCov = cov;");
    sh.fragmentShader = sh.fragmentShader
      .replace("#include <common>", "#include <common>\nvarying float vLevel; varying vec2 vXZ; varying float vCov; uniform vec3 uCyan; uniform float uSpeckle; uniform float uContours;\n" + RAMP_GLSL)
      .replace("#include <color_fragment>", `#include <color_fragment>
        vec3 base = ramp(vLevel);
        // multibeam speckle: fine grain + survey-line striping + soft patches
        float g1 = vnoise(vXZ * 1.7) ; float g2 = vnoise(vXZ * 6.5 + 11.0); float g3 = vnoise(vXZ * 0.12 + 3.0);
        float speck = 1.0 + uSpeckle * (g1 - 0.5) * 1.6 + uSpeckle * 0.9 * (g2 - 0.5) + 0.10 * (g3 - 0.5);
        float lines = 0.5 + 0.5 * sin(vXZ.x * 0.09 + vXZ.y * 0.045 + 6.0 * vnoise(vXZ * 0.02));
        speck *= 1.0 - 0.06 * lines;
        float g4 = vnoise(vXZ * 0.028 + 7.0); float g5 = vnoise(vXZ * 0.009 + 21.0); speck *= 0.80 + 0.28 * g4 + 0.12 * g5; // backscatter patches (sediment)
        base *= speck;
        // 1 m contours (faint), 5 m (firmer), design depth (cyan)
        float w = fwidth(vLevel) * 1.3 + 0.004;
        float f1 = abs(fract(vLevel) - 0.5); float l1 = 1.0 - smoothstep(0.5 - w * 1.6, 0.5 - w * 0.2, f1);
        float f5 = abs(fract(vLevel / 5.0) - 0.5); float l5 = 1.0 - smoothstep(0.5 - w * 0.5, 0.5 - w * 0.08, f5);
        base = mix(base, base * 0.62, l1 * 0.5 * uContours);
        base = mix(base, base * 0.35 + vec3(0.9), l5 * 0.25 * uContours);
        // outside the survey coverage: darker, desaturated
        float lum = dot(base, vec3(0.3, 0.59, 0.11));
        base = mix(vec3(0.004, 0.012, 0.025), base, smoothstep(0.05, 0.75, vCov));
        diffuseColor.rgb = base;`)
      .replace("#include <normal_fragment_begin>", `#include <normal_fragment_begin>
        // micro-relief: perturb the normal with noise gradients (ripples, sonar texture)
        float e = 0.9; float n0 = vnoise(vXZ * 0.55); float nx1 = vnoise((vXZ + vec2(e, 0.0)) * 0.55); float nz1 = vnoise((vXZ + vec2(0.0, e)) * 0.55);
        vec3 pert = vec3((n0 - nx1), 0.0, (n0 - nz1)) * 1.4;
        normal = normalize(normal + pert * (1.0 - 0.6 * smoothstep(0.7, 1.0, vCov) * 0.0));`);
  };
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  scene.add(mesh);
}

// ---------- depth-ramp material for scanned solids (quay wall, hulls): ramp below the waterline, grey above ----------
function scannedMaterial(aboveHex, opts = {}) {
  const m = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85, metalness: 0.05, transparent: !!opts.opacity, opacity: opts.opacity || 1 });
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uVE = { value: VE }; sh.uniforms.uWater = { value: Y2(meta.tide) }; sh.uniforms.uAbove = { value: new THREE.Color(aboveHex) };
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", "#include <common>\nvarying vec3 vWp;")
      .replace("#include <begin_vertex>", "#include <begin_vertex>\nvWp = (modelMatrix * vec4(position, 1.0)).xyz;");
    sh.fragmentShader = sh.fragmentShader
      .replace("#include <common>", "#include <common>\nvarying vec3 vWp; uniform float uVE; uniform float uWater; uniform vec3 uAbove;\n" + RAMP_GLSL)
      .replace("#include <color_fragment>", `#include <color_fragment>
        float lvl = vWp.y / uVE;
        vec3 below = ramp(lvl) * (0.82 + 0.36 * vnoise(vWp.xz * 3.0 + vWp.y * 0.7) );
        float wl = smoothstep(uWater - 0.9, uWater + 0.9, vWp.y);
        vec3 above = uAbove * (0.85 + 0.3 * vnoise(vWp.xz * 2.0 + vWp.y));
        diffuseColor.rgb = mix(below, above, wl);`);
  };
  return m;
}

// ---------- point clouds (lidar above water, multibeam below) ----------
const cloudGeos = { above: [], below: [] };
const tmpV = new THREE.Vector3(), tmpN = new THREE.Vector3(), tmpC = new THREE.Color();
function rampJS(d) { // same hydrographic ramp for JS-side colouring
  const st = [[-16.5, 0.06, 0.08, 0.42], [-15.2, 0.05, 0.32, 0.90], [-13.5, 0.05, 0.78, 0.92], [-11.0, 0.18, 0.80, 0.32], [-9.0, 0.62, 0.86, 0.22], [-7.5, 0.92, 0.86, 0.16], [-6.0, 0.98, 0.52, 0.10], [-4.0, 0.80, 0.12, 0.08]];
  const dd = Math.min(-4.0, Math.max(-16.5, d));
  for (let i = 0; i < st.length - 1; i++) if (dd <= st[i + 1][0]) {
    const t = dd;
    const u = (dd - st[i][0]) / (st[i + 1][0] - st[i][0]);
    return tmpC.setRGB(st[i][1] + (st[i + 1][1] - st[i][1]) * u, st[i][2] + (st[i + 1][2] - st[i][2]) * u, st[i][3] + (st[i + 1][3] - st[i][3]) * u);
  }
  return tmpC.setRGB(0.8, 0.12, 0.08);
}
/** Sample a mesh's surface into points; above the waterline natural colour (with jitter), below → depth ramp. */
function sampleMesh(mesh, density, colorAbove, opts = {}) {
  mesh.updateMatrixWorld(true);
  const sampler = new MeshSurfaceSampler(mesh).build();
  const geo = mesh.geometry;
  // area estimate
  const pa = geo.attributes.position; const index = geo.index; let area = 0;
  const A = new THREE.Vector3(), Bv = new THREE.Vector3(), C = new THREE.Vector3();
  const tri = index ? index.count / 3 : pa.count / 3;
  for (let t = 0; t < tri; t++) {
    const i0 = index ? index.getX(t * 3) : t * 3, i1 = index ? index.getX(t * 3 + 1) : t * 3 + 1, i2 = index ? index.getX(t * 3 + 2) : t * 3 + 2;
    A.fromBufferAttribute(pa, i0).applyMatrix4(mesh.matrixWorld); Bv.fromBufferAttribute(pa, i1).applyMatrix4(mesh.matrixWorld); C.fromBufferAttribute(pa, i2).applyMatrix4(mesh.matrixWorld);
    area += Bv.sub(A).cross(C.sub(A)).length() / 2;
  }
  const n = Math.min(900000, Math.floor(area / (VE * 1.0) * density));
  const pos = new Float32Array(n * 3), col = new Float32Array(n * 3);
  const water = Y2(meta.tide);
  const ca = new THREE.Color(colorAbove);
  for (let i = 0; i < n; i++) {
    sampler.sample(tmpV, tmpN);
    tmpV.applyMatrix4(mesh.matrixWorld);
    // scatter a little (scan noise)
    tmpV.x += (Math.random() - 0.5) * 0.35; tmpV.y += (Math.random() - 0.5) * 0.35 * VE; tmpV.z += (Math.random() - 0.5) * 0.35;
    pos[i * 3] = tmpV.x; pos[i * 3 + 1] = tmpV.y; pos[i * 3 + 2] = tmpV.z;
    const j = 0.72 + Math.random() * 0.56;
    if (tmpV.y > water || opts.forceAbove) { tmpC.copy(ca).multiplyScalar(j); }
    else { rampJS(tmpV.y / VE); tmpC.multiplyScalar(0.8 + Math.random() * 0.5); }
    col[i * 3] = tmpC.r; col[i * 3 + 1] = tmpC.g; col[i * 3 + 2] = tmpC.b;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  g.setAttribute("color", new THREE.BufferAttribute(col, 3));
  cloudGeos[opts.group || "above"].push(g);
}

// ---------- quay, fenders, bollards, cranes, sheds ----------
const concrete = scannedMaterial("#8a8478");
const steel = new THREE.MeshStandardMaterial({ color: "#232a34", roughness: 0.6, metalness: 0.4 });
const dark = new THREE.MeshStandardMaterial({ color: "#0d1117", roughness: 0.9 });
const solids = [];
function box(w, h, d, mat, x, y, z, ry = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z); m.rotation.y = ry; m.castShadow = false; m.receiveShadow = false; scene.add(m); solids.push(m); return m;
}
const deck = 3.5;
{
  const bottom = -20;
  const len = meta.berth_x1 - meta.berth_x0 + 200;
  const depthN = ny * dx - meta.quay_y + 100;
  const quay = box(len, Y2(deck) - Y2(bottom), depthN, concrete, (meta.berth_x0 + meta.berth_x1) / 2, (Y2(deck) + Y2(bottom)) / 2, Z2(meta.quay_y + depthN / 2));
  // scanned quay face: dense multibeam points on the wall below water, lidar above
  const face = new THREE.Mesh(new THREE.PlaneGeometry(len, Y2(deck) - Y2(bottom)), concrete);
  face.position.set((meta.berth_x0 + meta.berth_x1) / 2, (Y2(deck) + Y2(bottom)) / 2, Z2(meta.quay_y) + 0.3);
  sampleMesh(face, 0.9, "#9aa0a6", { group: "below" });
  const top = new THREE.Mesh(new THREE.PlaneGeometry(len, 140), concrete);
  top.rotation.x = -Math.PI / 2; top.position.set((meta.berth_x0 + meta.berth_x1) / 2, Y2(deck) + 0.2, Z2(meta.quay_y + 70));
  sampleMesh(top, 1.3, "#9aa1a8", { forceAbove: true });
  // piles under the quay edge (visible through the scanned wall), fenders, bollards
  const pileMat = new THREE.MeshStandardMaterial({ color: "#20262e", roughness: 0.9 });
  for (let x = meta.berth_x0 + 6; x < meta.berth_x1; x += 12) {
    const pile = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, Y2(deck) - Y2(-17), 10), pileMat);
    pile.position.set(x, (Y2(deck) + Y2(-17)) / 2, Z2(meta.quay_y - 1.5));
    sampleMesh(pile, 0.8, "#8a9096", { group: "below" });
  }
  for (let x = meta.berth_x0 + 20; x < meta.berth_x1; x += 22) {
    const f = box(3.5, Y2(2.5) - Y2(-3), 2.4, dark, x, (Y2(2.5) + Y2(-3)) / 2, Z2(meta.quay_y - 1.2));
    sampleMesh(f, 0.9, "#30363d", { group: "below" });
    if ((x / 22) % 2 < 1) { const bl = box(1.6, Y2(1.4), 1.6, dark, x + 8, Y2(deck) + Y2(0.7), Z2(meta.quay_y + 4)); sampleMesh(bl, 1.5, "#4a4f55", { forceAbove: true }); }
  }
  // STS cranes over the berthed ship + a transit shed and container stacks behind
  const ship = meta.vessels[0];
  for (const cx of [ship.cx - 110, ship.cx, ship.cx + 110]) {
    const legH = Y2(52) - Y2(deck), zL = meta.quay_y + 6, zR = meta.quay_y + 36;
    for (const [lx, lz] of [[-9, zL], [9, zL], [-9, zR], [9, zR]]) sampleMesh(box(3, legH, 3, steel, cx + lx, Y2(deck) + legH / 2, Z2(lz)), 1.6, "#c9ced4", { forceAbove: true });
    sampleMesh(box(24, 4, 34, steel, cx, Y2(52), Z2((zL + zR) / 2)), 1.2, "#c9ced4", { forceAbove: true });
    sampleMesh(box(6, 3, 120, steel, cx, Y2(56), Z2(zL - 40)), 1.6, "#d5dae0", { forceAbove: true });
    sampleMesh(box(4, Y2(20), 4, steel, cx, Y2(66), Z2(zR - 6)), 1.6, "#c9ced4", { forceAbove: true });
  }
  for (let k = 0; k < 9; k++) {
    const sx = meta.berth_x0 + 120 + k * 150, sz = meta.quay_y + 110;
    sampleMesh(box(60, Y2(8.5), 30, steel, sx, Y2(deck) + Y2(4.25), Z2(sz)), 0.5, k % 3 === 0 ? "#b07a56" : k % 3 === 1 ? "#5f8bb8" : "#9aa1a9", { forceAbove: true });
  }
  sampleMesh(box(220, Y2(14), 60, steel, 1500, Y2(deck) + Y2(7), Z2(meta.quay_y + 220)), 0.3, "#aab1b8", { forceAbove: true });
}

// ---------- objects on the bed (scanned): outfall pipeline, debris blocks, an old mooring block ----------
{
  const scanned = scannedMaterial("#8a8478");
  // debris / rock blocks near the basin toe and along the channel edge
  const blocks = [[1380, 1290, 5, 2.2, 4], [1420, 1330, 3, 1.4, 3], [640, 980, 6, 2.6, 5], [1560, 640, 4, 1.8, 3.5], [1720, 520, 7, 2.4, 6], [900, 1400, 4.5, 1.6, 4], [2320, 780, 5, 2.0, 4.5]];
  for (const [x, y, w, h, d] of blocks) {
    const lvl = bedAt(x, y) + h / 2;
    const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), scanned);
    const g = new THREE.Group(); g.add(b); g.scale.set(1, VE, 1); g.position.set(W2(x), Y2(lvl), Z2(y)); g.rotation.y = x * 0.37; scene.add(g); g.updateMatrixWorld(true);
    sampleMesh(b, 2.5, "#8a8478", { group: "below" });
  }
  // dredge furrows: nothing to add — the sand waves in the bed grid already carry the texture
}

// ---------- vessels ----------
function hullGeometry(v) {
  const L = v.loa, B = v.beam, D = v.draft;
  const fb = v.type === "tug" ? 3.0 : v.type === "bulk" ? 9.0 : 11.5;
  const ns = 72, nt = 12, pts = [];
  const smooth = (t) => t * t * (3 - 2 * t);
  for (let is = 0; is <= ns; is++) {
    const s = is / ns;
    let b = B / 2;
    if (s < 0.22) b *= 0.62 + 0.38 * smooth(s / 0.22);
    if (s > 0.72) b *= 1 - Math.pow((s - 0.72) / 0.28, 2.4);
    if (s > 0.995) b = 0.6;
    let d = D;
    if (s < 0.18) d *= 0.55 + 0.45 * smooth(s / 0.18);
    if (s > 0.9) d *= 1 - 0.55 * Math.pow((s - 0.9) / 0.1, 1.6);
    const x = (s - 0.5) * L;
    for (let it = 0; it <= nt; it++) {
      const t = it / nt, ang = t * Math.PI / 2;
      const yy = -d + (d + fb) * (t < 0.55 ? (1 - Math.cos(ang)) * 0.62 : 0.34 + (t - 0.55) / 0.45 * 0.66);
      const xx = b * (t < 0.55 ? Math.sin(ang) * 1.05 : 1.0);
      pts.push([x, Math.min(yy, fb), Math.min(xx, b)]);
    }
  }
  const pos = [], idx = [], cols = nt + 1, n = pts.length;
  for (const [x, y, z] of pts) pos.push(x, y, z);
  for (const [x, y, z] of pts) pos.push(x, y, -z);
  for (let is = 0; is < ns; is++) for (let it = 0; it < nt; it++) {
    const a = is * cols + it, b2 = a + 1, c = a + cols, d2 = c + 1;
    idx.push(a, b2, c, b2, d2, c, n + a, n + c, n + b2, n + b2, n + c, n + d2);
  }
  for (let is = 0; is < ns; is++) { const a = is * cols + nt, c = a + cols; idx.push(a, c, n + a, n + a, c, n + c); }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx); g.computeVertexNormals();
  return g;
}
function addVessel(v) {
  const grp = new THREE.Group();
  grp.scale.set(1, VE, 1);
  grp.position.set(W2(v.cx), Y2(meta.tide), Z2(v.cy));
  grp.rotation.y = THREE.MathUtils.degToRad(v.hdg);
  scene.add(grp);
  const add = (mesh) => { mesh.castShadow = false; grp.add(mesh); grp.updateMatrixWorld(true); return mesh; };
  const hullMesh = add(new THREE.Mesh(hullGeometry(v), scannedMaterial(v.type === "tug" ? "#b8433c" : v.type === "bulk" ? "#6b2f2a" : "#233f6e")));
  sampleMesh(hullMesh, v.type === "tug" ? 3.0 : 1.6, v.type === "tug" ? "#d9534f" : v.type === "bulk" ? "#9c4a42" : "#3f6db0", { group: "below" });
  const L = v.loa, B = v.beam;
  const white = "#d8dcdf";
  if (v.type === "container") {
    sampleMesh(add(new THREE.Mesh(new THREE.BoxGeometry(22, 26, B * 0.78), steel)).translateX(-L * 0.12).translateY(11.5 + 13), 0.8, white, { forceAbove: true });
    sampleMesh(add(new THREE.Mesh(new THREE.BoxGeometry(14, 18, 12), steel)).translateX(-L * 0.36).translateY(11.5 + 9), 0.5, "#8a8f96", { forceAbove: true });
    const boxCols = ["#3b5a8c", "#6c7076", "#9a5a44", "#3f7a5c", "#7d7d7d", "#a8703a"];
    let bi = 0;
    for (let bx = -L * 0.44; bx < L * 0.42; bx += 13.5) {
      if (Math.abs(bx + L * 0.12) < 14) continue;
      const tiers = 4 + Math.round(2 * Math.sin(bx * 0.05 + 1.3) ** 2);
      const rows = Math.max(3, Math.round(B / 2.6) - (Math.abs(bx) > L * 0.33 ? 4 : 0));
      const h = tiers * 2.6, w = rows * 2.55;
      const c = add(new THREE.Mesh(new THREE.BoxGeometry(12.2, h, w), steel)); c.position.set(bx, 11.5 + h / 2, 0); grp.updateMatrixWorld(true);
      sampleMesh(c, 0.9, boxCols[bi++ % boxCols.length], { forceAbove: true });
    }
  } else if (v.type === "bulk") {
    const acc = add(new THREE.Mesh(new THREE.BoxGeometry(24, 22, B * 0.7), steel)); acc.position.set(-L * 0.42, 9 + 11, 0); grp.updateMatrixWorld(true);
    sampleMesh(acc, 0.9, white, { forceAbove: true });
    for (let k = 0; k < 7; k++) {
      const hatch = add(new THREE.Mesh(new THREE.BoxGeometry(L * 0.085, 2.4, B * 0.56), steel)); hatch.position.set(-L * 0.30 + k * L * 0.105, 9 + 1.2, 0); grp.updateMatrixWorld(true);
      sampleMesh(hatch, 0.8, "#c8724a", { forceAbove: true });
    }
    // main deck plane (lidar)
    const dk = add(new THREE.Mesh(new THREE.PlaneGeometry(L * 0.9, B * 0.95), steel)); dk.rotation.x = -Math.PI / 2; dk.position.set(0, 9.05, 0); grp.updateMatrixWorld(true);
    sampleMesh(dk, 0.5, "#98a3ab", { forceAbove: true });
  } else {
    const wh = add(new THREE.Mesh(new THREE.BoxGeometry(9, 6, 7), steel)); wh.position.set(2, 3 + 3, 0); grp.updateMatrixWorld(true);
    sampleMesh(wh, 3.0, white, { forceAbove: true });
  }
  if (v.type === "container") { // deck plane
    const dk = add(new THREE.Mesh(new THREE.PlaneGeometry(L * 0.92, B * 0.96), steel)); dk.rotation.x = -Math.PI / 2; dk.position.set(0, 11.55, 0); grp.updateMatrixWorld(true);
    sampleMesh(dk, 0.5, "#8b959d", { forceAbove: true });
  }
}
for (const v of meta.vessels) addVessel(v);

// build the point clouds
function addCloud(list, size, opacity) {
  if (!list.length) return;
  let n = 0; for (const g of list) n += g.attributes.position.count;
  const pos = new Float32Array(n * 3), col = new Float32Array(n * 3); let o = 0;
  for (const g of list) { pos.set(g.attributes.position.array, o * 3); col.set(g.attributes.color.array, o * 3); o += g.attributes.position.count; }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  g.setAttribute("color", new THREE.BufferAttribute(col, 3));
  const m = new THREE.PointsMaterial({ size, vertexColors: true, sizeAttenuation: true, transparent: true, opacity, depthWrite: false });
  scene.add(new THREE.Points(g, m));
  console.log("cloud points", n);
}
addCloud(cloudGeos.below, P("psize", 2.6), 0.95);
addCloud(cloudGeos.above, P("psize", 2.6) * 0.9, 0.9);

// ---------- cognitive units ----------
const unitPos = [];
for (const n of meta.nodes) {
  let lvl = bedAt(n.x, n.y);
  if (n.kind === "quay") lvl = -6.0;
  const y = Y2(lvl) + 1.5;
  const s = new THREE.Mesh(new THREE.SphereGeometry(2.4, 16, 12), new THREE.MeshBasicMaterial({ color: "#eaf8ff" }));
  s.position.set(W2(n.x), y, Z2(n.y)); scene.add(s);
  const halo = new THREE.Mesh(new THREE.SphereGeometry(5.2, 16, 12), new THREE.MeshBasicMaterial({ color: CYAN, transparent: true, opacity: 0.3 }));
  halo.position.copy(s.position); scene.add(halo);
  unitPos.push({ id: n.id, kind: n.kind, x: n.x, y: n.y, lvl });
}

// ---------- lights ----------
scene.add(new THREE.HemisphereLight("#a9d3f0", "#0a1a30", P("hemi", 0.55)));
const sun = new THREE.DirectionalLight("#eaf4ff", P("sun", 2.2));
sun.position.set(W2(400), Y2(360), Z2(2700));
sun.target.position.set(W2(1500), Y2(-10), Z2(1000));
scene.add(sun.target);
sun.castShadow = P('shadows', 0) > 0;
sun.shadow.mapSize.set(4096, 4096);
const sc = sun.shadow.camera; sc.left = -1900; sc.right = 1900; sc.top = 1500; sc.bottom = -1500; sc.near = 100; sc.far = 6000;
sun.shadow.bias = -0.0005; sun.shadow.normalBias = 1.0;
scene.add(sun);
const fill = new THREE.DirectionalLight("#5cb8ff", 0.3); fill.position.set(W2(3400), Y2(200), Z2(-600)); scene.add(fill);

// ---------- camera ----------
const VIEWS_FOV = { console: 40, view3d: 38 };
const camera = new THREE.PerspectiveCamera(P("fov", (VIEWS_FOV[VIEW] || 38)), W / H, 2, 12000);
const VIEWS = {
  console: { fx: 1590, fy: 1050, fl: -9, dist: 1920, el: 27, az: 22, fov: 38 },   // overview: berth, basin, channel and the inbound vessel
  view3d:  { fx: 1050, fy: 1500, fl: -8, dist: 1000, el: 18, az: -60, fov: 40 },  // berth close-up from the south-west
};
const V = VIEWS[VIEW] || VIEWS.console;
const focus = new THREE.Vector3(W2(P("fx", V.fx)), Y2(P("fl", V.fl)), Z2(P("fy", V.fy)));
const D = P("dist", V.dist), el = THREE.MathUtils.degToRad(P("el", V.el)), az = THREE.MathUtils.degToRad(P("az", V.az));
camera.position.set(focus.x + D * Math.cos(el) * Math.sin(az), focus.y + D * Math.sin(el), focus.z + D * Math.cos(el) * Math.cos(az));
camera.lookAt(focus);

// ---------- post ----------
const composer = new EffectComposer(renderer, new THREE.WebGLRenderTarget(W * SCALE, H * SCALE, { samples: SCALE < 1.5 ? 4 : 0, type: THREE.HalfFloatType }));
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new UnrealBloomPass(new THREE.Vector2(W * SCALE, H * SCALE), P("bloom", 0.5), 0.5, 0.9));
composer.addPass(new OutputPass());
composer.render();

window.project = (pts) => pts.map(([x, yN, lvl]) => {
  const v = new THREE.Vector3(W2(x), Y2(lvl), Z2(yN)).project(camera);
  return [((v.x + 1) / 2) * W, ((1 - v.y) / 2) * H, v.z];
});
window.units = unitPos;
window.__done = true;
