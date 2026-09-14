import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { useI18n } from "@/i18n";
import { en } from "@/i18n/en";
import { images } from "@/content/site";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { Eyebrow } from "@/components/site/Decor";
import { Reveal } from "@/components/site/Reveal";
import { SystemSchematic } from "@/components/site/SystemSchematic";

const meta = en.meta.technology;

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/technology" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
  component: TechnologyPage,
});

function TechnologyPage() {
  const { t } = useI18n();
  const count = t.technology.layers.length;

  return (
    <>
      <PageHeader
        eyebrow={t.technology.eyebrow}
        title={t.technology.title}
        image={images.channelBottom}
        imageAlt={t.technology.headerAlt}
      >
        <p>{t.technology.headerLine}</p>
      </PageHeader>

      <section className="section-y grid-faint">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <h2 className="text-3xl font-bold md:text-4xl">
              {t.technology.layersTitle}
            </h2>
          </Reveal>

          <div className="mt-7 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute top-4 bottom-4 left-[13px] w-px bg-gradient-to-b from-cyan/70 via-cyan/40 to-cyan/70"
              />
              <ol className="space-y-5">
                {t.technology.layers.map((l, i) => (
                  <Reveal
                    as="li"
                    key={l.title}
                    delay={i * 0.08}
                    className="relative pl-12"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute top-6 left-0 flex h-7 w-7 items-center justify-center rounded-full border border-cyan bg-abyss font-mono text-[10px] text-cyan"
                    >
                      {count - i}
                    </span>
                    <div className="surface-card p-6">
                      <h3 className="text-lg font-semibold">{l.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-steel">
                        {l.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>

            <Reveal delay={0.12} className="lg:sticky lg:top-28">
              <div className="surface-card overflow-hidden p-0">
                <SystemSchematic labels={t.technology.schematic} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y border-y border-ocean/50 bg-navy/20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <Eyebrow>{t.technology.security.eyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              {t.technology.security.title}
            </h2>
          </Reveal>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {t.technology.security.items.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 0.06}>
                <div className="surface-card flex h-full flex-col gap-4 p-6">
                  <ShieldCheck size={18} strokeWidth={1.5} className="text-cyan" />
                  <p className="text-sm leading-relaxed text-steel">{item}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal className="max-w-3xl">
            <Eyebrow>{t.technology.research.eyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              {t.technology.research.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-steel md:text-lg">
              {t.technology.research.text}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
