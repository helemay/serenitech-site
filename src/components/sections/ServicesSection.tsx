import { useI18n } from "@/i18n";
import { apiSample, images, serviceIcons } from "@/content/site";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ContourLines, Eyebrow } from "@/components/site/Decor";
import { Reveal } from "@/components/site/Reveal";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { AdvisoryBand } from "@/components/home/AdvisoryBand";
import { HowItWorks } from "@/components/home/HowItWorks";

export function ServicesSection() {
  const { t } = useI18n();

  return (
    <section id="services" className="scroll-mt-20 md:scroll-mt-24">
      <SectionHeader
        eyebrow={t.services.eyebrow}
        title={t.services.title}
        image={images.quayWall}
        imageAlt={t.services.headerAlt}
      >
        <p>{t.services.intro}</p>
        <p className="mt-6 border-l border-cyan/50 pl-5 text-sm md:text-base">
          <span className="glow-text font-mono text-[11px] tracking-[0.2em] text-cyan uppercase">
            {t.services.mandateLabel}
          </span>
          <br />
          <span className="mt-2 block">{t.services.mandate}</span>
        </p>
      </SectionHeader>

      <ServicesOverview />

      {t.services.modules.map((m, i) => {
        const Icon = serviceIcons[i]!;
        const isLast = i === 5;
        const isAdvisory = i === 6;
        return (
          <div
            key={m.title}
            id={`module-${i + 1}`}
            className={
              i % 2 === 0
                ? "section-y relative scroll-mt-20 overflow-hidden md:scroll-mt-24"
                : "section-y relative scroll-mt-20 overflow-hidden border-y border-ocean/50 bg-navy/20 md:scroll-mt-24"
            }
          >
            {i % 2 === 0 && <ContourLines />}
            <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
              <Reveal>
                <div className="flex items-center gap-4">
                  <Icon size={22} strokeWidth={1.5} className="text-cyan" />
                  <Eyebrow>
                    {t.services.moduleLabel} {String(i + 1).padStart(2, "0")}
                  </Eyebrow>
                </div>
                <h3 className="mt-5 max-w-4xl text-2xl leading-tight font-bold md:text-4xl">
                  {m.title}
                </h3>
              </Reveal>

              {isAdvisory && (
                <Reveal delay={0.05}>
                  <p className="mt-6 max-w-4xl text-base leading-relaxed text-steel md:text-lg">
                    {t.services.advisoryIntro}
                  </p>
                </Reveal>
              )}

              {m.bullets.length > 0 ? (
                <ul className="mt-6 grid gap-6 md:grid-cols-2">
                  {m.bullets.map((b, bi) => (
                    <Reveal as="li" key={b.label} delay={bi * 0.07}>
                      <div className="surface-card h-full p-7">
                        <h4 className="glow-text text-base font-semibold text-cyan">
                          {b.label}
                        </h4>
                        <p className="mt-3 text-sm leading-relaxed text-steel">{b.text}</p>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              ) : (
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  {(
                    [
                      [t.services.columns.measure, m.measure],
                      [t.services.columns.get, m.get],
                      [t.services.columns.matters, m.matters],
                    ] as const
                  ).map(([label, text], ci) => (
                    <Reveal key={label} delay={ci * 0.08}>
                      <div className="surface-card h-full p-7">
                        <h4 className="glow-text font-mono text-[11px] tracking-[0.2em] text-cyan uppercase">
                          {label}
                        </h4>
                        <p className="mt-4 text-sm leading-relaxed text-steel">{text}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              )}

              {isLast && (
                <Reveal delay={0.1}>
                  <div className="surface-card mt-8 overflow-hidden p-0">
                    <div className="glow-text border-b border-ocean px-5 py-3 font-mono text-[11px] tracking-[0.2em] text-cyan uppercase">
                      {t.services.apiLabel}
                    </div>
                    <pre className="overflow-x-auto px-5 py-6 font-mono text-[12px] leading-relaxed text-steel">
                      <code>{apiSample}</code>
                    </pre>
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        );
      })}

      <div className="section-y grid-faint border-t border-ocean/50">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal className="max-w-3xl">
            <Eyebrow>{t.services.commercial.eyebrow}</Eyebrow>
            <h3 className="mt-5 text-3xl font-bold md:text-4xl">
              {t.services.commercial.title}
            </h3>
            <p className="mt-6 text-base leading-relaxed text-steel md:text-lg">
              {t.services.commercial.text}
            </p>
          </Reveal>
        </div>
      </div>

      <AdvisoryBand />
      <HowItWorks />
    </section>
  );
}
