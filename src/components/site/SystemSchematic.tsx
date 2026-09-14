import { cn } from "@/lib/utils";

/** Minimal vertical sea-section schematic: units → gateway → cloud engine. */
export function SystemSchematic({
  className,
  labels,
}: {
  className?: string;
  labels: {
    units: string;
    gateway: string;
    cloud: string;
    interfaces: string;
    alt: string;
  };
}) {
  const units: [number, number][] = [
    [120, 250],
    [120, 330],
    [286, 372],
  ];

  return (
    <svg
      role="img"
      aria-label={labels.alt}
      viewBox="0 0 480 440"
      className={cn("h-full w-full text-cyan", className)}
      fill="none"
    >
      <rect width="480" height="440" fill="var(--navy)" />

      {/* sea surface */}
      <line
        x1="0"
        y1="120"
        x2="480"
        y2="120"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M0 120 C 60 112, 120 128, 180 120 S 300 112, 360 120 S 450 128, 480 120"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.25"
      />

      {/* seabed */}
      <path
        d="M0 400 C 90 384, 180 410, 270 396 S 400 404, 480 390"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />

      {/* pier deck + pile */}
      <path
        d="M60 104 L200 104"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <rect
        x="112"
        y="104"
        width="16"
        height="290"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />

      {/* cloud engine box */}
      <rect
        x="250"
        y="36"
        width="166"
        height="52"
        rx="6"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
      <text
        x="333"
        y="60"
        textAnchor="middle"
        fill="currentColor"
        opacity="0.9"
        fontSize="13"
        fontFamily="var(--font-mono, monospace)"
      >
        {labels.cloud}
      </text>
      <text
        x="333"
        y="78"
        textAnchor="middle"
        fill="var(--steel)"
        fontSize="9"
        fontFamily="var(--font-mono, monospace)"
      >
        {labels.interfaces}
      </text>

      {/* gateway marker on surface */}
      <g>
        <rect
          x="236"
          y="104"
          width="14"
          height="14"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="var(--navy)"
        />
        <text
          x="258"
          y="116"
          fill="var(--steel)"
          fontSize="11"
          fontFamily="var(--font-mono, monospace)"
        >
          {labels.gateway}
        </text>
      </g>

      {/* uplink: gateway → cloud */}
      <path
        d="M250 106 L280 84"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="4 5"
        opacity="0.7"
      />

      {/* unit → gateway dashed links */}
      {units.map(([x, y]) => (
        <path
          key={`l-${x}-${y}`}
          d={`M${x + 6} ${y} L243 118`}
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 6"
          opacity="0.35"
        />
      ))}

      {/* units with pulsing rings */}
      {units.map(([x, y], i) => (
        <g key={`u-${x}-${y}`}>
          <circle
            cx={x}
            cy={y}
            r="16"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.18"
          >
            <animate
              attributeName="r"
              values="8;22"
              dur="3.6s"
              begin={`${i * 1.2}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.35;0"
              dur="3.6s"
              begin={`${i * 1.2}s`}
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={x} cy={y} r="4.5" fill="currentColor" />
        </g>
      ))}

      <text
        x="120"
        y="212"
        textAnchor="middle"
        fill="var(--steel)"
        fontSize="11"
        fontFamily="var(--font-mono, monospace)"
      >
        {labels.units}
      </text>
    </svg>
  );
}
