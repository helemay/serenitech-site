import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { en } from "@/i18n/en";
import { images } from "@/content/site";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { SonarRings } from "@/components/site/Decor";
import { Reveal } from "@/components/site/Reveal";

const meta = en.meta.sectors;

export const Route = createFileRoute("/sectors")({
  head: () => ({
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sectors" },
    ],
    links: [{ rel: "canonical", href: "/sectors" }],
  }),
  component: SectorsPage,
});

function SectorsPage() {
  const { t } = useI18n();

  const visuals = [
    { kind: "img", src: images.heroPort, rings: true },
    { kind: "img", src: images.offshore, rings: false },
    { kind: "img", src: images.subsea, rings: false },
    { kind: "img", src: images.propeller, rings: false },
  ] as const;

  return (
    <>
      <PageHeader
        eyebrow={t.sectors.eyebrow}
        title={t.sectors.title}
        image={images.offshorePipelines}
        imageAlt={t.sectors.headerAlt}
      />

      {t.sectors.items.map((s, i) => {
        const v = visuals[i]!;
        return (
          <section
            key={s.title}
            className={
              i % 2 === 0
                ? "section-y"
                : "section-y border-y border-ocean/50 bg-navy/20"
            }
          >
            <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 md:px-10 lg:grid-cols-2">
              <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
                <span className="font-mono text-xs text-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 text-2xl leading-tight font-bold md:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-steel">{s.text}</p>
                <p className="mt-6 border-l border-cyan pl-5">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-cyan uppercase">
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
                    className={
                      v.rings
                        ? "aspect-[16/10] w-full object-cover opacity-55"
                        : "aspect-[16/10] w-full object-cover opacity-80"
                    }
                  />
                  {v.rings && (
                    <>
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-abyss/20 to-transparent"
                      />
                      <SonarRings className="top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 opacity-50" />
                    </>
                  )}
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      <CtaBand />
    </>
  );
}
