import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { en } from "@/i18n/en";
import { apiSample, images, serviceIcons } from "@/content/site";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { ContourLines, Eyebrow } from "@/components/site/Decor";
import { Reveal } from "@/components/site/Reveal";

const meta = en.meta.services;

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader
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
      </PageHeader>

      {t.services.modules.map((m, i) => {
        const Icon = serviceIcons[i]!;
        const isLast = i === 5;
        const isAdvisory = i === 6;
        return (
          <section
            key={m.title}
            id={`module-${i + 1}`}
            className={
              i % 2 === 0
                ? "section-y relative overflow-hidden"
                : "section-y relative overflow-hidden border-y border-ocean/50 bg-navy/20"
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
                <h2 className="mt-5 max-w-4xl text-2xl leading-tight font-bold md:text-4xl">
                  {m.title}
                </h2>
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
                        <h3 className="glow-text text-base font-semibold text-cyan">{b.label}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-steel">
                          {b.text}
                        </p>
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
                        <h3 className="glow-text font-mono text-[11px] tracking-[0.2em] text-cyan uppercase">
                          {label}
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed text-steel">
                          {text}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              )}

              {isLast && (
                <Reveal delay={0.1}>
                  <div className="surface-card mt-8 overflow-hidden p-0">
                    <div className="border-b border-ocean px-5 py-3 glow-text font-mono text-[11px] tracking-[0.2em] text-cyan uppercase">
                      {t.services.apiLabel}
                    </div>
                    <pre className="overflow-x-auto px-5 py-6 font-mono text-[12px] leading-relaxed text-steel">
                      <code>{apiSample}</code>
                    </pre>
                  </div>
                </Reveal>
              )}
            </div>
          </section>
        );
      })}

      <section className="section-y grid-faint border-t border-ocean/50">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal className="max-w-3xl">
            <Eyebrow>{t.services.commercial.eyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              {t.services.commercial.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-steel md:text-lg">
              {t.services.commercial.text}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
