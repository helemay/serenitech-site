import { useI18n } from "@/i18n";
import { images } from "@/content/site";
import { CtaLink } from "./CtaLink";
import { Eyebrow } from "./Decor";
import { FramedVisual } from "./FramedVisual";

/**
 * "How we start" — the initial consulting project as a four-step process (strategic diagnosis →
 * improvement opportunities → objectives & KPIs → definitive project). The panel sits on the right,
 * vertically centred, so it neither covers the jacket structure on the left of the picture nor the
 * logo baked into the bottom-right corner.
 */
export function CtaBand() {
  const { t } = useI18n();
  const c = t.home.finalCta;

  return (
    <section className="section-y border-t border-ocean/60">
      <FramedVisual
        src={images.offshore}
        alt={c.imageAlt}
        overlayFrom="xl"
        panelSide="right"
        panelWidth="2xl"
        panelAlign="center"
      >
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="mt-4 text-[28px] leading-tight font-bold md:text-3xl">{c.title}</h2>
        <p className="mt-4 text-[15px] leading-relaxed text-steel">{c.text}</p>
        <ol className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2">
          {c.steps.map((s, i) => (
            <li key={s.title} className="flex gap-3">
              <span className="glow-text pt-0.5 font-mono text-xs text-cyan tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-sm leading-snug font-semibold">{s.title}</h3>
                <p className="mt-1 text-[13px] leading-snug text-steel">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <CtaLink to="/" hash="contact" className="mt-7">
          {c.button}
        </CtaLink>
      </FramedVisual>
    </section>
  );
}
