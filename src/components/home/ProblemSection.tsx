import { useI18n } from "@/i18n";
import { ContourLines, Eyebrow } from "../site/Decor";
import { Reveal } from "../site/Reveal";

export function ProblemSection() {
  const { t } = useI18n();

  return (
    <section className="section-y relative overflow-hidden">
      <ContourLines />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <Eyebrow>{t.home.problem.eyebrow}</Eyebrow>
          <h2 className="mt-5 max-w-4xl text-3xl leading-tight font-bold md:text-5xl">
            {t.home.problem.title}
          </h2>
        </Reveal>

        <ul className="mt-7 grid gap-6 md:grid-cols-3">
          {t.home.problem.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 0.1}>
              <div className="surface-card h-full p-7">
                <span className="glow-text font-mono text-xs text-cyan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
