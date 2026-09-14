import { useI18n } from "@/i18n";
import { Eyebrow } from "../site/Decor";
import { Reveal } from "../site/Reveal";

export function HowItWorks() {
  const { t } = useI18n();

  return (
    <section className="section-y grid-faint border-y border-ocean/50 bg-navy/20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <Eyebrow>{t.home.how.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold md:text-5xl">{t.home.how.title}</h2>
        </Reveal>

        <ol className="relative mt-8 grid gap-10 lg:grid-cols-4 lg:gap-6">
          <div
            aria-hidden="true"
            className="absolute top-[7px] right-0 left-0 hidden h-px bg-ocean lg:block"
          />
          {t.home.how.steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.1} className="relative">
              <span
                aria-hidden="true"
                className="mb-6 block h-3.5 w-3.5 rounded-full border border-cyan bg-abyss"
              />
              <span className="font-mono text-xs text-cyan">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg leading-snug font-semibold">{s.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-steel">
                {s.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
