import { cn } from "@/lib/utils";

/** Thin bathymetric contour lines used as a section background. */
export function ContourLines({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full text-cyan",
        className,
      )}
      viewBox="0 0 1440 640"
      preserveAspectRatio="none"
      fill="none"
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <path
          key={i}
          d={`M-40 ${70 + i * 62} C 260 ${20 + i * 62}, 520 ${150 + i * 58}, 780 ${
            90 + i * 60
          } S 1240 ${30 + i * 64}, 1480 ${120 + i * 58}`}
          stroke="currentColor"
          strokeWidth="1"
          opacity={i % 2 === 0 ? 0.1 : 0.06}
        />
      ))}
    </svg>
  );
}

/** Concentric sonar rings, slowly pulsing. */
export function SonarRings({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute", className)}
    >
      <div className="relative h-[520px] w-[520px]">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="sonar-ring absolute inset-0 rounded-full border border-cyan/40"
            style={{ animationDelay: `${i * 1.75}s` }}
          />
        ))}
        <span className="absolute inset-0 rounded-full border border-cyan/10" />
      </div>
    </div>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("eyebrow", className)}>{children}</p>;
}

export function Hairline({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn("hairline", className)} />;
}

/** Stylised acoustic rings around a propeller silhouette (naval industry). */
export function PropellerRings({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="Concentric acoustic rings around a propeller silhouette"
      viewBox="0 0 400 400"
      className={cn("h-full w-full text-cyan", className)}
      fill="none"
    >
      <rect width="400" height="400" fill="var(--navy)" />
      {[60, 100, 140, 180].map((r, i) => (
        <circle
          key={r}
          cx="200"
          cy="200"
          r={r}
          stroke="currentColor"
          strokeWidth="1"
          opacity={0.35 - i * 0.07}
        />
      ))}
      <g transform="translate(200 200)" fill="currentColor" opacity="0.75">
        {[0, 90, 180, 270].map((a) => (
          <path
            key={a}
            transform={`rotate(${a})`}
            d="M0 -8 C 26 -30, 52 -48, 60 -22 C 64 -6, 30 4, 0 8 Z"
          />
        ))}
        <circle r="11" fill="var(--navy)" stroke="currentColor" strokeWidth="2" />
      </g>
    </svg>
  );
}

/** Stylised underwater quay illustration for the Ports & Terminals sector. */
export function QuayGraphic({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="Stylised section of a quay wall with sonar wavefronts under water"
      viewBox="0 0 400 400"
      className={cn("h-full w-full text-cyan", className)}
      fill="none"
    >
      <rect width="400" height="400" fill="var(--navy)" />
      <line
        x1="0"
        y1="96"
        x2="400"
        y2="96"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.45"
      />
      <path
        d="M96 60 L300 60 L286 96 L110 96 Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      {[130, 190, 250, 310].map((x) => (
        <rect
          key={x}
          x={x}
          y="96"
          width="14"
          height="240"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.28"
        />
      ))}
      {[1, 2, 3].map((i) => (
        <circle
          key={i}
          cx="137"
          cy="230"
          r={i * 38}
          stroke="currentColor"
          strokeWidth="1"
          opacity={0.3 - i * 0.06}
        />
      ))}
      <path
        d="M0 336 C 90 320, 180 348, 260 332 S 380 344, 400 330"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
      />
      <path
        d="M0 360 C 100 348, 190 372, 280 356 S 384 366, 400 356"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.22"
      />
    </svg>
  );
}
