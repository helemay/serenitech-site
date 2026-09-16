import { useReducedMotion } from "framer-motion";
import { useI18n } from "@/i18n";

/**
 * Animated HUD drawn over the clean hero picture (1920×1088): fixed cognitive units on the quay
 * piles and the channel bed, a mobile survey unit under way, expanding acoustic wavefronts, a data
 * link with packets up to the quay gateway and the measurements the services produce — under-keel
 * clearance, draft and squat, pile strain, sound level and blade rate, siltation, tide, water
 * column, current and the marine fauna kept within the noise limit. Everything in the
 * bioluminescent blue of the brand; labels appear from lg (they would be unreadable smaller).
 * Coordinates are in picture pixels; the SVG scales with the frame.
 */

const CYAN = "var(--sonar-cyan)";
const HALO = "oklch(0.15 0.05 245)";

type Line = readonly string[];

function Callout({
  x,
  y,
  lines,
  anchor = "start",
}: {
  x: number;
  y: number;
  lines: Line;
  anchor?: "start" | "end";
}) {
  return (
    <g className="font-mono" textAnchor={anchor} style={{ paintOrder: "stroke" }} stroke={HALO} strokeWidth={5} strokeLinejoin="round">
      <text x={x} y={y} fontSize={19} letterSpacing={1.5} fill={CYAN} opacity={0.8}>
        {(lines[0] ?? "").toUpperCase()}
      </text>
      <text x={x} y={y + 27} fontSize={23} fill="#EAF6FF">
        {lines[1] ?? ""}
      </text>
    </g>
  );
}

/** A fixed cognitive unit: glowing dot plus expanding wavefronts (two rings, staggered). */
function Unit({ x, y, delay = 0, animate, r = 8 }: { x: number; y: number; delay?: number; animate: boolean; r?: number }) {
  return (
    <g>
      {animate ? (
        [0, 1].map((k) => (
          <circle key={k} cx={x} cy={y} r={r} fill="none" stroke={CYAN} strokeWidth={2}>
            <animate attributeName="r" values={`${r};${r * 9}`} dur="3.6s" begin={`${delay + k * 1.8}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.85;0" dur="3.6s" begin={`${delay + k * 1.8}s`} repeatCount="indefinite" />
          </circle>
        ))
      ) : (
        <>
          <circle cx={x} cy={y} r={r * 3} fill="none" stroke={CYAN} strokeWidth={2} opacity={0.5} />
          <circle cx={x} cy={y} r={r * 6} fill="none" stroke={CYAN} strokeWidth={1.5} opacity={0.25} />
        </>
      )}
      <circle cx={x} cy={y} r={r * 1.9} fill={CYAN} opacity={0.25} />
      <circle cx={x} cy={y} r={r} fill="#DFF3FF" filter="url(#hud-glow)" />
    </g>
  );
}

export function HeroHud() {
  const { t } = useI18n();
  const h = t.home.hud;
  const reduced = useReducedMotion();
  const animate = !reduced;

  // fixed units: two on quay piles, one hydrophone on the quay wall, two on the channel bed
  const units = [
    { x: 1436, y: 790, delay: 0 }, // QW-02 — quay pile
    { x: 1664, y: 872, delay: 1.2 }, // QW-03 — quay pile
    { x: 1378, y: 604, delay: 2.1 }, // HY-01 — hydrophone on the quay wall
    { x: 1010, y: 906, delay: 0.7 }, // CH-04S — channel bed under the keel
    { x: 560, y: 986, delay: 2.6 }, // CH-03P — channel bed, siltation
  ];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1920 1088"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full select-none"
    >
      <defs>
        <filter id="hud-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <marker id="hud-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill={CYAN} />
        </marker>
      </defs>

      {/* hull-radiated noise — slow wavefronts leaving the hull bottom */}
      <g fill="none" stroke={CYAN} strokeWidth={1.5}>
        {animate ? (
          [0, 1, 2].map((k) => (
            <circle key={k} cx={1010} cy={735} r={40}>
              <animate attributeName="r" values="40;300" dur="6s" begin={`${k * 2}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.45;0" dur="6s" begin={`${k * 2}s`} repeatCount="indefinite" />
            </circle>
          ))
        ) : (
          <>
            <circle cx={1010} cy={735} r={120} opacity={0.3} />
            <circle cx={1010} cy={735} r={220} opacity={0.15} />
          </>
        )}
      </g>

      {/* under-keel clearance — keel to bed */}
      <g stroke={CYAN} strokeWidth={2} strokeDasharray="6 8" opacity={0.9}>
        <line x1={1010} y1={760} x2={1010} y2={896} markerStart="url(#hud-arrow)" markerEnd="url(#hud-arrow)" />
      </g>
      <line x1={950} y1={760} x2={1070} y2={760} stroke={CYAN} strokeWidth={1.5} opacity={0.6} />

      {/* data link: pile unit → quay top → quay gateway, with packets */}
      <path id="hud-link" d="M1436 790 L1436 462 L1700 432" fill="none" stroke={CYAN} strokeWidth={1.5} strokeDasharray="4 10" opacity={0.7} />
      <path d="M1378 604 L1378 462" fill="none" stroke={CYAN} strokeWidth={1.5} strokeDasharray="4 10" opacity={0.5} />
      {animate &&
        [0, 1, 2].map((k) => (
          <circle key={k} r={5} fill="#EAF6FF" filter="url(#hud-glow)">
            <animateMotion dur="4.2s" begin={`${k * 1.4}s`} repeatCount="indefinite" rotate="auto">
              <mpath href="#hud-link" />
            </animateMotion>
          </circle>
        ))}
      {/* quay gateway */}
      <rect x={1690} y={420} width={22} height={22} rx={4} fill="none" stroke={CYAN} strokeWidth={2.5} />
      <circle cx={1701} cy={431} r={4} fill={CYAN} />

      {/* mobile survey unit under way, with its multibeam swath */}
      <g>
        {animate && (
          <animateTransform attributeName="transform" type="translate" values="0 0; 160 6; 0 0" dur="22s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1; 0.4 0 0.6 1" />
        )}
        <path d="M330 512 L380 512 L396 506 L380 500 L330 500 L322 506 Z" fill="#DFF3FF" opacity={0.95} filter="url(#hud-glow)" />
        <path d="M356 512 L300 640 L412 640 Z" fill={CYAN} opacity={0.16}>
          {animate && <animate attributeName="opacity" values="0.1;0.26;0.1" dur="2.4s" repeatCount="indefinite" />}
        </path>
        <line x1={356} y1={512} x2={300} y2={640} stroke={CYAN} strokeWidth={1} opacity={0.5} />
        <line x1={356} y1={512} x2={412} y2={640} stroke={CYAN} strokeWidth={1} opacity={0.5} />
        <g className="hidden lg:block">
          <Callout x={330} y={548} lines={h.auv} />
        </g>
      </g>

      {/* fixed cognitive units */}
      {units.map((u) => (
        <Unit key={`${u.x}-${u.y}`} x={u.x} y={u.y} delay={u.delay} animate={animate} />
      ))}

      {/* current vector */}
      <g stroke={CYAN} strokeWidth={2} opacity={0.85}>
        <line x1={1150} y1={1034} x2={1235} y2={1034} markerEnd="url(#hud-arrow)" />
      </g>

      {/* labels — from lg only */}
      <g className="hidden lg:block">
        <Callout x={40} y={500} lines={h.tide} />
        <Callout x={860} y={560} lines={h.draft} />
        <Callout x={1350} y={650} lines={h.hydrophone} anchor="end" />
        <Callout x={1462} y={764} lines={h.pile} />
        <Callout x={1640} y={862} lines={h.pile2} anchor="end" />
        <Callout x={985} y={886} lines={h.bed} anchor="end" />
        <Callout x={585} y={958} lines={h.siltation} />
        <Callout x={520} y={826} lines={h.fauna} />
        <Callout x={40} y={886} lines={h.water} />
        <Callout x={1250} y={1040} lines={h.current} />
        <Callout x={1890} y={402} lines={h.gateway} anchor="end" />
        <g className="font-mono" style={{ paintOrder: "stroke" }} stroke={HALO} strokeWidth={4} strokeLinejoin="round">
          <text x={40} y={1056} fontSize={17} letterSpacing={1.5} fill={CYAN} opacity={0.75}>
            {h.legend.toUpperCase()}
          </text>
        </g>
      </g>
    </svg>
  );
}
