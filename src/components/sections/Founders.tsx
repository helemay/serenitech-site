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

/** The co-founders — same presentation as monbleue.ai: numbered entries, name, role, clamped bio, panels, LinkedIn. */
export function Founders() {
  const { t } = useI18n();
  const c = t.company;

  return (
    <div className="section-y">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <figure className="relative overflow-hidden rounded-lg border border-ocean lg:sticky lg:top-28">
              <img
                src={images.hq}
                alt={c.photoAlt}
                loading="lazy"
                width={1600}
                height={1067}
                className="aspect-square w-full object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-abyss/85 to-transparent"
              />
              <figcaption className="absolute bottom-5 left-5 right-5 font-mono text-[11px] tracking-[0.2em] text-steel uppercase">
                {c.photoCaptionShort}
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>{c.foundersEyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.09}>
              <h3 className="mt-5 max-w-[18ch] text-3xl font-bold md:text-4xl">{c.foundersTitle}</h3>
            </Reveal>
            <Reveal delay={0.13}>
              <p className="mt-6 max-w-[54ch] text-base leading-[1.75] text-steel">{c.foundersIntro}</p>
            </Reveal>

            <div className="mt-12 border-t border-ocean/60">
              {c.leaders.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.09} className="border-b border-ocean/60 py-8">
                  <div className="flex items-baseline gap-5">
                    <span className="font-mono text-[11px] tracking-[0.3em] text-cyan/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-2xl leading-tight font-semibold">{p.name}</h4>
                      <p className="glow-text mt-1 font-mono text-[11px] tracking-[0.24em] text-cyan uppercase">
                        {p.role}
                      </p>
                      <Bio text={p.bio} more={c.showMore} less={c.showLess} />
                      {p.panels.length > 0 && (
                        <Panels panels={p.panels} idBase={`founder-${i}`} openLabel={c.openLabel} />
                      )}
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block font-mono text-[11px] tracking-[0.24em] text-surface-white uppercase transition-colors hover:text-cyan"
                      >
                        {c.linkedin}
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
