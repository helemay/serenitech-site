import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useI18n } from "@/i18n";
import { images } from "@/content/site";

/**
 * The cognitive console — a rendered screen of the digital twin (synthetic demo basin with
 * Miami/Santos-class channel parameters) with a live HUD: ticking readouts, pulsing units and a
 * survey sweep, so the panel reads as a running system rather than a still.
 */
export function TwinConsole() {
  const { t } = useI18n();
  const c = t.home.twin.console;
  const reduced = useReducedMotion();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setTick((v) => v + 1), 1400);
    return () => window.clearInterval(id);
  }, [reduced]);

  // Deterministic "live" jitter around realistic values
  const wobble = (amp: number, phase: number) => Math.sin(tick * 0.9 + phase) * amp;
  const ukc = (2.68 + wobble(0.03, 0)).toFixed(2);
  const tide = (0.9 + tick * 0.0007 + wobble(0.004, 1.3)).toFixed(2);
  const sog = (6.2 + wobble(0.15, 2.1)).toFixed(1);
  const spl = (142.0 + wobble(0.7, 0.4)).toFixed(1);
  const pings = 12 + (tick % 3 === 0 ? 1 : 0);
  const clock = new Date(Date.UTC(2026, 8, 15, 14, 2, 17 + tick * 1.4));
  const hh = String(clock.getUTCHours()).padStart(2, "0");
  const mm = String(clock.getUTCMinutes()).padStart(2, "0");
  const ss = String(clock.getUTCSeconds()).padStart(2, "0");

  // Unit positions (percent of the image) — three cognitive units on the 3D view
  const nodes = [
    { x: 31.2, y: 40.6 },
    { x: 36.8, y: 47.5 },
    { x: 43.0, y: 59.8 },
  ];

  return (
    <figure className="surface-card overflow-hidden p-0">
      <div className="flex items-center justify-between gap-4 border-b border-ocean px-4 py-3">
        <span className="glow-text font-mono text-[11px] tracking-[0.2em] text-cyan uppercase">
          {c.title}
        </span>
        <span className="flex items-center gap-2 font-mono text-[11px] text-steel">
          <span
            aria-hidden="true"
            className={reduced ? "h-2 w-2 rounded-full bg-cyan" : "h-2 w-2 animate-pulse rounded-full bg-cyan"}
          />
          {c.live} · {hh}:{mm}:{ss} UTC
        </span>
      </div>

      <a
        href={images.twinConsole}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={c.open}
        className="relative block overflow-hidden"
      >
        <img
          src={images.twinConsole}
          alt={c.alt}
          loading="lazy"
          width={1920}
          height={1088}
          className="block aspect-[1920/1088] w-full"
        />
        {!reduced && (
          <>
            {/* survey sweep across the 3D view */}
            <span
              aria-hidden="true"
              className="twin-sweep pointer-events-none absolute top-[8%] bottom-[32%] w-px bg-gradient-to-b from-transparent via-cyan/70 to-transparent"
            />
            {/* pulsing cognitive units */}
            {nodes.map((n, i) => (
              <span
                key={i}
                aria-hidden="true"
                className="pointer-events-none absolute"
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
              >
                <span
                  className="sonar-ring absolute -top-3 -left-3 h-6 w-6 rounded-full border border-cyan/70"
                  style={{ animationDelay: `${i * 1.1}s` }}
                />
                <span className="absolute -top-1 -left-1 h-2 w-2 rounded-full bg-cyan shadow-[0_0_10px_#1EB4FF]" />
              </span>
            ))}
          </>
        )}
      </a>

      <ul className="grid grid-cols-2 gap-px border-t border-ocean bg-ocean/40 sm:grid-cols-5">
        {[
          [c.ukc, `${ukc} m`],
          [c.tide, `+${tide} m`],
          [c.sog, `${sog} kn`],
          [c.spl, `${spl} dB`],
          [c.pings, `${pings}/s · 24/24`],
        ].map(([label, value]) => (
          <li key={label} className="bg-navy/60 px-4 py-3">
            <span className="block font-mono text-[10px] tracking-[0.18em] text-steel uppercase">{label}</span>
            <span className="glow-text mt-1 block font-mono text-sm text-cyan tabular-nums">{value}</span>
          </li>
        ))}
      </ul>
      <figcaption className="border-t border-ocean px-4 py-3 font-mono text-[11px] leading-relaxed text-steel">
        {c.caption}
      </figcaption>
    </figure>
  );
}
