import { useI18n } from "@/i18n";
import { domainIcons } from "@/content/site";
import { Eyebrow } from "../site/Decor";
import { Reveal } from "../site/Reveal";

export function SolutionSection() {
  const { t } = useI18n();

  return (
    <section className="section-y border-t border-ocean/50 bg-navy/20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="max-w-4xl">
          <Eyebrow>{t.home.solution.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl leading-tight font-bold md:text-5xl">
            {t.home.solution.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-steel md:text-lg">
            {t.home.solution.text}
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.home.solution.domains.map((d, i) => {
            const Icon = domainIcons[i]!;
            return (
              <Reveal as="li" key={d.title} delay={i * 0.08}>
                <div className="surface-card flex h-full items-start gap-4 px-5 py-5">
                  <Icon size={20} strokeWidth={1.5} className="mt-0.5 shrink-0 text-cyan" />
                  <div>
                    <h3 className="text-sm font-semibold">{d.title}</h3>
                    <p className="mt-1 font-mono text-[11px] text-steel">{d.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
