import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { useI18n } from "@/i18n";
import { en } from "@/i18n/en";
import { brand, images } from "@/content/site";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBand } from "@/components/site/CtaBand";
import { Eyebrow } from "@/components/site/Decor";
import { Reveal } from "@/components/site/Reveal";

const meta = en.meta.company;

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/company" },
    ],
    links: [{ rel: "canonical", href: "/company" }],
  }),
  component: CompanyPage,
});

function CompanyPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader eyebrow={t.company.eyebrow} title={t.company.title}>
        <p>{t.company.about}</p>
      </PageHeader>

      <section className="section-y">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <h2 className="text-3xl font-bold md:text-4xl">
              {t.company.leadershipTitle}
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {t.company.leaders.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <article className="surface-card h-full p-8">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-ocean bg-abyss">
                    <img
                      src={brand.mark}
                      alt=""
                      aria-hidden="true"
                      className="h-8 w-8"
                      loading="lazy"
                    />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold">{p.name}</h3>
                  <p className="mt-2 font-mono text-[11px] tracking-[0.2em] text-cyan uppercase">
                    {p.role}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-steel">{p.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y relative overflow-hidden border-y border-ocean/50 bg-navy/20">
        <img
          src={brand.mark}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none absolute -right-24 -bottom-32 w-[520px] opacity-5"
        />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <Eyebrow>{t.home.presence.eyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              {t.company.presenceTitle}
            </h2>
          </Reveal>

          <div className="mt-6 grid gap-10 lg:grid-cols-2">
            <Reveal>
              <figure className="surface-card overflow-hidden p-0">
                <img
                  src={images.hq}
                  alt={t.company.photoAlt}
                  loading="lazy"
                  width={1600}
                  height={1067}
                  className="aspect-[3/2] w-full object-cover"
                />
                <figcaption className="border-t border-ocean px-5 py-4 font-mono text-[11px] leading-relaxed text-steel">
                  {t.company.photoCaption}
                </figcaption>
              </figure>
            </Reveal>

            <ul className="space-y-4">
              {t.company.presence.map((p, i) => (
                <Reveal as="li" key={p.place} delay={i * 0.06}>
                  <div className="surface-card flex items-start gap-4 p-6">
                    <MapPin size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-cyan" />
                    <div>
                      <h3 className="text-base font-semibold">{p.place}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-steel">{p.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
