import { MapPin } from "lucide-react";
import { useI18n } from "@/i18n";
import { brand } from "@/content/site";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Eyebrow } from "@/components/site/Decor";
import { Reveal } from "@/components/site/Reveal";
import { Founders } from "./Founders";

export function CompanySection() {
  const { t } = useI18n();

  return (
    <section id="company" className="scroll-mt-20 md:scroll-mt-24">
      <SectionHeader eyebrow={t.company.eyebrow} title={t.company.title}>
        <p>{t.company.about}</p>
      </SectionHeader>

      <Founders />

      <div className="section-y relative overflow-hidden border-y border-ocean/50 bg-navy/20">
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
            <h3 className="mt-5 text-3xl font-bold md:text-4xl">
              {t.company.presenceTitle}
            </h3>
          </Reveal>

          <ul className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {t.company.presence.map((p, i) => (
              <Reveal as="li" key={p.place} delay={i * 0.06}>
                <div className="surface-card flex h-full items-start gap-4 p-6">
                  <MapPin size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-cyan" />
                  <div>
                    <h4 className="text-base font-semibold">{p.place}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-steel">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
