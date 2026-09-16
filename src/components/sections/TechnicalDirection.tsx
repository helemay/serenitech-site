import { useState } from "react";
import { useI18n } from "@/i18n";
import { images } from "@/content/site";
import { Eyebrow } from "@/components/site/Decor";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

type PanelItem = { year?: string; title: string; venue?: string; link?: string };
type Panel = { title: string; items: PanelItem[]; footnote?: string };

const toggleClass =
  "glow-text flex items-center gap-3 font-mono text-[11px] tracking-[0.24em] text-cyan uppercase transition-opacity hover:opacity-70";

/** Bio paragraph clamped to two lines, expandable ("Show more" / "Show less"). */
function Bio({ text, more, less }: { text: string; more: string; less: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-4">
      <p
        className={cn(
          "max-w-[58ch] text-[15px] leading-[1.75] text-steel transition-all duration-500 ease-out",
          !open && "line-clamp-2",
        )}
      >
        {text}
      </p>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={cn(toggleClass, "mt-3")}
      >
        {open ? less : more}
        <span aria-hidden="true">{open ? "↑" : "↓"}</span>
      </button>
    </div>
  );
}

/** Row of expandable panels (Credentials · Education · Experience · Patents · Academic); one open at a time. */
function Panels({ panels, idBase, openLabel }: { panels: Panel[]; idBase: string; openLabel: string }) {
  const [active, setActive] = useState<number | null>(null);
  const current = active === null ? null : panels[active];
  return (
    <div className="mt-5 border-t border-ocean/60 pt-4">
      <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
        {panels.map((p, i) => (
          <button
            key={p.title}
            type="button"
            onClick={() => setActive((v) => (v === i ? null : i))}
            aria-expanded={active === i}
            aria-controls={`${idBase}-panel`}
            className={toggleClass}
          >
            {p.title}
            <span aria-hidden="true">{active === i ? "↑" : "↓"}</span>
          </button>
        ))}
      </div>
      <div
        id={`${idBase}-panel`}
        className={cn(
          "grid transition-all duration-500 ease-out",
          current ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <ul className="max-w-[68ch] space-y-2">
            {(current?.items ?? []).map((it, i) => (
              <li key={`${it.year ?? ""}-${it.title}-${i}`} className="text-[14px] leading-[1.6] text-steel">
                {it.year && <span className="mr-2 font-mono text-[12px] text-cyan/70">{it.year}</span>}
                <span className="text-surface-white">{it.title}</span>
                {it.venue && <span className="text-steel"> — {it.venue}</span>}
                {it.link && (
                  <a
                    href={it.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${openLabel}: ${it.title}`}
                    className="ml-2 text-cyan transition-opacity hover:opacity-70"
                  >
                    →
                  </a>
                )}
              </li>
            ))}
          </ul>
          {current?.footnote && (
            <p className="mt-3 max-w-[68ch] text-[12px] leading-[1.6] text-steel/70">{current.footnote}</p>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Technical & scientific direction — Serenitech presents itself as a specialised technical-services
 * company: the section features the CTO's research background (bio, credentials, education, experience,
 * patents, academic work) as the proof of capability behind every service, with proof-point tiles.
 */
export function TechnicalDirection() {
  const { t } = useI18n();
  const c = t.company;
  const p = c.lead;

  return (
    <div className="section-y">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <figure className="overflow-hidden rounded-lg border border-ocean bg-navy/30 lg:sticky lg:top-28">
              <img
                src={images.hq}
                alt={c.photoAlt}
                loading="lazy"
                width={1024}
                height={484}
                className="block aspect-[1024/484] w-full object-contain"
              />
              <figcaption className="border-t border-ocean/60 px-5 py-4 font-mono text-[11px] leading-relaxed tracking-[0.16em] text-steel uppercase">
                {c.photoCaptionShort}
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>{c.technicalEyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.09}>
              <h3 className="mt-5 max-w-[26ch] text-3xl font-bold md:text-4xl">{c.technicalTitle}</h3>
            </Reveal>
            <Reveal delay={0.13}>
              <p className="mt-6 max-w-[62ch] text-base leading-[1.75] text-steel">{c.technicalIntro}</p>
            </Reveal>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {c.proofPoints.map((pp, i) => (
                <Reveal as="li" key={pp.value} delay={i * 0.05}>
                  <div className="surface-card h-full p-4">
                    <span className="glow-text block font-mono text-sm text-cyan">{pp.value}</span>
                    <span className="mt-1.5 block text-[12px] leading-snug text-steel">{pp.label}</span>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.1} className="mt-12 border-y border-ocean/60 py-8">
              <h4 className="text-2xl leading-tight font-semibold">{p.name}</h4>
              <p className="glow-text mt-1 font-mono text-[11px] tracking-[0.24em] text-cyan uppercase">{p.role}</p>
              <Bio text={p.bio} more={c.showMore} less={c.showLess} />
              {p.panels.length > 0 && <Panels panels={p.panels} idBase="technical-lead" openLabel={c.openLabel} />}
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block font-mono text-[11px] tracking-[0.24em] text-surface-white uppercase transition-colors hover:text-cyan"
              >
                {c.linkedin}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
