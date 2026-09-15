import { useI18n } from "@/i18n";
import { images } from "@/content/site";
import { SectionHeader } from "@/components/site/SectionHeader";
import { SonarRings } from "@/components/site/Decor";
import { Reveal } from "@/components/site/Reveal";

export function SectorsSection() {
  const { t } = useI18n();

  const visuals = [
    { src: images.channelBottom, rings: true },
    { src: images.offshore, rings: false },
    { src: images.subsea, rings: false },
    { src: images.propeller, rings: false },
  ] as const;

  return (
    <section id="sectors" className="scroll-mt-20 md:scroll-mt-24">
      <SectionHeader
        eyebrow={t.sectors.eyebrow}
        title={t.sectors.title}
        image={images.offshorePipelines}
        imageAlt={t.sectors.headerAlt}
      />

      {t.sectors.items.map((s, i) => {
        const v = visuals[i]!;
        return (
          <div
            key={s.title}
            className={
              i % 2 === 0
                ? "section-y"
                : "section-y border-y border-ocean/50 bg-navy/20"
            }
          >
            <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 md:px-10 lg:grid-cols-2">
              <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span className="glow-text font-mono text-xs text-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-2xl leading-tight font-bold md:text-4xl">
                  {s.title}
                </h3>
                <p className="mt-6 text-base leading-relaxed text-steel">{s.text}</p>
                <p className="mt-6 border-l border-cyan pl-5">
                  <span className="glow-text font-mono text-[11px] tracking-[0.2em] text-cyan uppercase">
                    {t.sectors.outcomeLabel}
                  </span>
                  <span className="mt-2 block text-base text-surface-white">
                    {s.outcome}
                  </span>
                </p>
              </Reveal>

              <Reveal delay={0.1} className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="surface-card relative overflow-hidden p-0">
                  <img
                    src={v.src}
                    alt={s.alt}
                    loading="lazy"
                    width={1920}
                    height={1088}
                    className="aspect-[16/10] w-full object-cover opacity-100"
                  />
                  {v.rings && (
                    <SonarRings className="top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 opacity-40" />
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        );
      })}
    </section>
  );
}
