import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type SchematicLabels = {
  alt: string;
  layers: readonly string[]; // L5..L1 (top to bottom)
  cloud: string;
  interfaces: string;
  gateway: string;
  gatewayLink: string;
  unitsLink: string;
  units: string;
  auv: string;
  phenomena: string;
  edge: string;
  federated: string;
  readouts: readonly string[];
};

const MONO = "var(--font-mono, ui-monospace, monospace)";

/**
 * Vertical sea-section of the system, layer by layer: sensing → cognitive robotic units → surface
 * gateway (edge intelligence) → cloud engine → interfaces. Data packets travel along the links,
 * units emit wavefronts, a survey unit sweeps the bed. SMIL animations are skipped for
 * reduced-motion users.
 */
export function SystemSchematic({ className, labels }: { className?: string; labels: SchematicLabels }) {
  const reduced = useReducedMotion();
  const anim = !reduced;

  const Packet = ({ path, dur, delay = 0, color = "var(--sonar-cyan)" }: { path: string; dur: number; delay?: number; color?: string }) =>
    anim ? (
      <circle r="2.6" fill={color}>
        <animateMotion dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" path={path} />
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.9;1" dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" />
      </circle>
    ) : null;

  const Ring = ({ cx, cy, delay = 0, max = 26 }: { cx: number; cy: number; delay?: number; max?: number }) => (
    <circle cx={cx} cy={cy} r="6" stroke="var(--sonar-cyan)" strokeWidth="1" fill="none" opacity="0.3">
      {anim && (
        <>
          <animate attributeName="r" values={`4;${max}`} dur="3.4s" begin={`${delay}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.45;0" dur="3.4s" begin={`${delay}s`} repeatCount="indefinite" />
        </>
      )}
    </circle>
  );

  const Chip = ({ x, y, w, text, color = "var(--sonar-cyan)" }: { x: number; y: number; w: number; text: string; color?: string }) => (
    <g>
      <rect x={x} y={y} width={w} height="16" rx="3" fill="var(--abyss)" stroke={color} strokeOpacity="0.55" strokeWidth="0.8" />
      <text x={x + w / 2} y={y + 11.2} textAnchor="middle" fill={color} fontSize="8.2" fontFamily={MONO}>
        {text}
      </text>
    </g>
  );

  // Geometry (viewBox 560 x 600)
  const surfaceY = 214;
  const gateway = { x: 296, y: surfaceY - 4 };
  const cloud = { x: 190, y: 74, w: 260, h: 60 };
  const units: { x: number; y: number; kind: "pile" | "bed" | "quay" }[] = [
    { x: 118, y: 330, kind: "pile" },
    { x: 118, y: 412, kind: "pile" },
    { x: 262, y: 486, kind: "bed" },
    { x: 452, y: 470, kind: "bed" },
  ];
  const auvPath = "M 330 400 C 380 392, 430 410, 480 398 S 520 386, 540 394";

  return (
    <svg role="img" aria-label={labels.alt} viewBox="0 0 620 600" className={cn("h-auto w-full text-cyan", className)} fill="none">
      <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--navy)" />
          <stop offset="1" stopColor="var(--abyss)" />
        </linearGradient>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--abyss)" />
          <stop offset="1" stopColor="var(--navy)" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="620" height={surfaceY} fill="url(#sky)" />
      <rect y={surfaceY} width="620" height={600 - surfaceY} fill="url(#sea)" />
      <rect width="60" height="600" fill="var(--abyss)" opacity="0.55" />
      <line x1="60" y1="0" x2="60" y2="600" stroke="currentColor" strokeOpacity="0.15" />

      {/* layer bands & labels (L5 → L1) in the left gutter */}
      {([
        [0, 62],
        [62, 150],
        [150, 262],
        [262, 468],
        [468, 600],
      ] as const).map(([y0, y1], i) => {
        const text = labels.layers[i] ?? "";
        const cy = (y0 + y1) / 2;
        return (
          <g key={`${i}-${text}`}>
            {i > 0 && <line x1="60" y1={y0} x2="620" y2={y0} stroke="currentColor" strokeOpacity="0.1" strokeDasharray="2 6" />}
            <text transform={`translate(24 ${cy}) rotate(-90)`} textAnchor="middle" fill="var(--steel)" fontSize="7.6" fontFamily={MONO} letterSpacing="1.0">
              L{5 - i} · {text.toUpperCase()}
            </text>
            <text x="46" y={cy + 3} textAnchor="middle" fill="var(--sonar-cyan)" fontSize="8" fontFamily={MONO} opacity="0.7">
              {5 - i}
            </text>
          </g>
        );
      })}

      <g transform="translate(60 0)">
      {/* sea surface */}
      <path d={`M0 ${surfaceY} C 70 ${surfaceY - 6}, 140 ${surfaceY + 6}, 210 ${surfaceY} S 350 ${surfaceY - 6}, 420 ${surfaceY} S 530 ${surfaceY + 6}, 560 ${surfaceY}`} stroke="currentColor" strokeWidth="1.2" opacity="0.7">
        {anim && <animate attributeName="d" dur="6s" repeatCount="indefinite" values={`M0 ${surfaceY} C 70 ${surfaceY - 6}, 140 ${surfaceY + 6}, 210 ${surfaceY} S 350 ${surfaceY - 6}, 420 ${surfaceY} S 530 ${surfaceY + 6}, 560 ${surfaceY};M0 ${surfaceY} C 70 ${surfaceY + 6}, 140 ${surfaceY - 6}, 210 ${surfaceY} S 350 ${surfaceY + 6}, 420 ${surfaceY} S 530 ${surfaceY - 6}, 560 ${surfaceY};M0 ${surfaceY} C 70 ${surfaceY - 6}, 140 ${surfaceY + 6}, 210 ${surfaceY} S 350 ${surfaceY - 6}, 420 ${surfaceY} S 530 ${surfaceY + 6}, 560 ${surfaceY}`} />}
      </path>

      {/* seabed with a dredged channel profile */}
      <path d="M0 520 L60 518 C 120 522, 150 516, 190 526 L 230 552 L 330 556 L 372 528 C 420 518, 470 526, 560 514" stroke="currentColor" strokeWidth="1.2" opacity="0.55" />
      <path d="M0 520 L60 518 C 120 522, 150 516, 190 526 L 230 552 L 330 556 L 372 528 C 420 518, 470 526, 560 514 L560 600 L0 600 Z" fill="var(--sonar-cyan)" opacity="0.05" />
      <text x="280" y="576" textAnchor="middle" fill="var(--steel)" fontSize="8.5" fontFamily={MONO}>
        −15.0 m CD · 220 m · 1:3
      </text>

      {/* quay: deck, wall, pile, fender */}
      <rect x="0" y={surfaceY - 30} width="152" height="10" fill="var(--ocean)" opacity="0.9" />
      <rect x="140" y={surfaceY - 30} width="12" height="330" fill="var(--ocean)" opacity="0.55" />
      <rect x="106" y={surfaceY - 20} width="24" height="330" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1" fill="var(--navy)" />
      <rect x="152" y={surfaceY + 6} width="10" height="52" rx="3" fill="var(--abyss)" stroke="currentColor" strokeOpacity="0.5" />

      {/* moored vessel hull section (right of the fender) */}
      <path d={`M 168 ${surfaceY - 26} L 300 ${surfaceY - 26} L 300 ${surfaceY + 96} C 260 ${surfaceY + 118}, 200 ${surfaceY + 112}, 168 ${surfaceY + 70} Z`} fill="var(--navy)" stroke="var(--surface-white)" strokeOpacity="0.55" strokeWidth="1" />
      <text x="234" y={surfaceY + 44} textAnchor="middle" fill="var(--steel)" fontSize="8.5" fontFamily={MONO}>
        draft 13.8 m
      </text>

      {/* pile-mounted + bed units */}
      {units.map((u, i) => (
        <g key={i}>
          <Ring cx={u.x} cy={u.y} delay={i * 0.9} />
          <Ring cx={u.x} cy={u.y} delay={i * 0.9 + 1.7} max={36} />
          <rect x={u.x - 5} y={u.y - 5} width="10" height="10" rx="2" fill="var(--sonar-cyan)" filter="url(#glow)" />
          {u.kind === "bed" && <path d={`M${u.x - 9} ${u.y + 24} L${u.x} ${u.y + 5} L${u.x + 9} ${u.y + 24}`} stroke="currentColor" strokeOpacity="0.6" strokeWidth="1" />}
        </g>
      ))}
      <text x="118" y="300" textAnchor="middle" fill="var(--steel)" fontSize="9" fontFamily={MONO}>
        {labels.units}
      </text>

      {/* survey unit (AUV) with swath */}
      <g>
        <g>
          {anim && <animateMotion dur="14s" repeatCount="indefinite" path={auvPath} rotate="auto" />}
          {!anim && <animateMotion dur="0.001s" fill="freeze" path="M 420 402 L 421 402" />}
          <path d="M-14 0 L-8 -5 L10 -5 L16 0 L10 5 L-8 5 Z" fill="var(--sonar-cyan)" opacity="0.9" />
          <path d="M-12 0 L-60 120 M-12 0 L36 120" stroke="var(--sonar-cyan)" strokeOpacity="0.25" strokeWidth="1" />
          <path d="M-60 120 Q -12 96 36 120" stroke="var(--sonar-cyan)" strokeOpacity="0.35" strokeWidth="1" />
        </g>
        <text x="470" y="382" textAnchor="middle" fill="var(--steel)" fontSize="8.5" fontFamily={MONO}>
          {labels.auv}
        </text>
      </g>

      {/* gateway on the quay */}
      <g>
        <rect x={gateway.x - 9} y={gateway.y - 22} width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.4" fill="var(--navy)" />
        <line x1={gateway.x} y1={gateway.y - 22} x2={gateway.x} y2={gateway.y - 46} stroke="currentColor" strokeWidth="1.2" />
        <circle cx={gateway.x} cy={gateway.y - 48} r="2.2" fill="var(--sonar-cyan)" filter="url(#glow)" />
        <text x={gateway.x + 16} y={gateway.y - 9} fill="var(--surface-white)" fontSize="10" fontFamily={MONO}>
          {labels.gateway}
        </text>
        <text x={gateway.x + 16} y={gateway.y + 4} fill="var(--steel)" fontSize="8" fontFamily={MONO}>
          {labels.edge}
        </text>
      </g>

      {/* links: units → gateway (acoustic / magneto-inductive), with packets */}
      {units.map((u, i) => {
        const p = `M ${u.x} ${u.y} Q ${(u.x + gateway.x) / 2} ${(u.y + gateway.y) / 2 - 30} ${gateway.x} ${gateway.y - 4}`;
        return (
          <g key={`l${i}`}>
            <path d={p} stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" opacity="0.35">
              {anim && <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.6s" repeatCount="indefinite" />}
            </path>
            <Packet path={p} dur={4.2 + i * 0.6} delay={i * 0.8} />
          </g>
        );
      })}
      <text x="196" y="452" fill="var(--steel)" fontSize="8" fontFamily={MONO}>
        {labels.unitsLink}
      </text>

      {/* uplink gateway → cloud */}
      <path d={`M ${gateway.x} ${gateway.y - 48} L ${gateway.x + 14} ${cloud.y + cloud.h}`} stroke="currentColor" strokeWidth="1" strokeDasharray="4 5" opacity="0.7">
        {anim && <animate attributeName="stroke-dashoffset" from="18" to="0" dur="1.2s" repeatCount="indefinite" />}
      </path>
      <Packet path={`M ${gateway.x} ${gateway.y - 48} L ${gateway.x + 14} ${cloud.y + cloud.h}`} dur={2.4} />
      <Packet path={`M ${gateway.x + 14} ${cloud.y + cloud.h} L ${gateway.x} ${gateway.y - 48}`} dur={5.2} delay={1.1} color="var(--alert-amber)" />
      <text x={gateway.x + 24} y={(gateway.y - 48 + cloud.y + cloud.h) / 2 + 4} fill="var(--steel)" fontSize="8" fontFamily={MONO}>
        {labels.gatewayLink}
      </text>
      <text x={gateway.x - 12} y={(gateway.y - 48 + cloud.y + cloud.h) / 2 + 4} textAnchor="end" fill="var(--alert-amber)" fontSize="8" fontFamily={MONO}>
        {labels.federated}
      </text>

      {/* cloud engine */}
      <rect x={cloud.x} y={cloud.y} width={cloud.w} height={cloud.h} rx="8" stroke="currentColor" strokeWidth="1.2" fill="var(--abyss)" opacity="0.95" />
      <text x={cloud.x + cloud.w / 2} y={cloud.y + 22} textAnchor="middle" fill="var(--surface-white)" fontSize="12" fontFamily={MONO}>
        {labels.cloud}
      </text>
      <Chip x={cloud.x + 12} y={cloud.y + 34} w={70} text="REST · WS" />
      <Chip x={cloud.x + 92} y={cloud.y + 34} w={80} text="policy engine" />
      <Chip x={cloud.x + 182} y={cloud.y + 34} w={66} text="3D twin" />

      {/* interfaces (top) */}
      <g>
        {[0, 1, 2].map((k) => (
          <g key={k}>
            <path d={`M ${cloud.x + 50 + k * 80} ${cloud.y} L ${cloud.x + 50 + k * 80} 40`} stroke="currentColor" strokeDasharray="3 4" opacity="0.5">
              {anim && <animate attributeName="stroke-dashoffset" from="14" to="0" dur="1.4s" begin={`${k * 0.3}s`} repeatCount="indefinite" />}
            </path>
            <rect x={cloud.x + 30 + k * 80} y="22" width="40" height="18" rx="3" stroke="currentColor" strokeOpacity="0.6" fill="var(--navy)" />
            <rect x={cloud.x + 35 + k * 80} y="27" width="30" height="8" rx="1" fill="var(--sonar-cyan)" opacity={0.35 + k * 0.15} />
          </g>
        ))}
        <text x={cloud.x + cloud.w / 2} y="16" textAnchor="middle" fill="var(--steel)" fontSize="9" fontFamily={MONO}>
          {labels.interfaces}
        </text>
      </g>

      {/* readouts (real-scale values) */}
      <Chip x={40} y={358} w={64} text={labels.readouts[0] ?? ""} />
      <Chip x={40} y={440} w={64} text={labels.readouts[1] ?? ""} />
      <Chip x={300} y={490} w={84} text={labels.readouts[2] ?? ""} color="var(--alert-amber)" />
      <Chip x={452} y={504} w={78} text={labels.readouts[3] ?? ""} />

      {/* physical phenomena band (L1) */}
      <text x="548" y="590" textAnchor="end" fill="var(--steel)" fontSize="8" fontFamily={MONO}>
        {labels.phenomena}
      </text>
      </g>
    </svg>
  );
}
