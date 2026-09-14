import { useI18n } from "@/i18n";

/** Stylised illustration of the 3D digital twin — not a product screenshot. */
export function DigitalTwinPanel() {
  const { t } = useI18n();

  return (
    <figure className="surface-card overflow-hidden p-0">
      <div className="flex items-center justify-between border-b border-ocean px-4 py-3">
        <span className="font-mono text-[11px] tracking-[0.2em] text-cyan uppercase">
          Digital twin
        </span>
        <span className="font-mono text-[11px] text-steel">
          {t.home.twin.panelLabel}
        </span>
      </div>

      <div className="relative">
        <svg
          role="img"
          aria-label="Stylised bathymetric mesh with vessel outlines and acoustic wavefronts"
          viewBox="0 0 640 420"
          className="h-auto w-full"
        >
          <rect width="640" height="420" fill="var(--abyss)" />
          <defs>
            <linearGradient id="mesh-grad" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="var(--sonar-cyan)" />
              <stop offset="0.72" stopColor="var(--deep-cyan)" />
              <stop offset="1" stopColor="var(--alert-amber)" />
            </linearGradient>
          </defs>

          {/* bathymetric contour mesh */}
          <g stroke="url(#mesh-grad)" fill="none" strokeWidth="1">
            {Array.from({ length: 14 }).map((_, i) => (
              <path
                key={`h${i}`}
                d={`M20 ${150 + i * 18} C 170 ${120 + i * 20}, 330 ${
                  190 + i * 16
                }, 470 ${150 + i * 19} S 600 ${130 + i * 20}, 620 ${160 + i * 18}`}
                opacity={0.15 + i * 0.03}
              />
            ))}
            {Array.from({ length: 16 }).map((_, i) => (
              <line
                key={`v${i}`}
                x1={20 + i * 40}
                y1="150"
                x2={20 + i * 40}
                y2="410"
                opacity="0.1"
              />
            ))}
          </g>

          {/* vessel outlines */}
          <g stroke="var(--surface-white)" fill="var(--navy)" fillOpacity="0.45" strokeWidth="1">
            <path d="M60 96 L300 96 L330 120 L300 144 L60 144 L40 120 Z" opacity="0.8" />
            <path d="M360 60 L520 60 L544 78 L520 96 L360 96 L344 78 Z" opacity="0.55" />
          </g>

          {/* wavefronts */}
          <g stroke="var(--sonar-cyan)" fill="none">
            {[1, 2, 3].map((i) => (
              <circle
                key={i}
                cx="200"
                cy="240"
                r={i * 34}
                opacity={0.32 - i * 0.07}
              />
            ))}
          </g>
          <circle cx="200" cy="240" r="3" fill="var(--sonar-cyan)" />
          <circle cx="488" cy="300" r="3" fill="var(--alert-amber)" />
        </svg>

        <ul className="absolute top-4 right-4 space-y-2 rounded-md border border-ocean bg-abyss/80 p-3 font-mono text-[11px] text-steel backdrop-blur-sm">
          {t.home.twin.legend.map((l, i) => (
            <li key={l} className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={
                  i === 1
                    ? "inline-block h-1.5 w-1.5 rounded-full bg-amber-alert"
                    : "inline-block h-1.5 w-1.5 rounded-full bg-cyan"
                }
              />
              {l}
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
