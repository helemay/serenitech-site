import { useI18n } from "@/i18n";
import { Eyebrow } from "../site/Decor";
import { Reveal } from "../site/Reveal";

export function CognitiveSection() {
  const { t } = useI18n();

  return (
    <section className="section-y border-t border-ocean/50">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <Eyebrow>{t.home.cognitive.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold md:text-5xl">
            {t.home.cognitive.title}
          </h2>
        </Reveal>

        <ol className="relative mt-16 grid gap-12 lg:grid-cols-3 lg:gap-10">
          <div
            aria-hidden="true"
            className="absolute top-[11px] right-0 left-0 hidden h-px bg-gradient-to-r from-cyan/20 via-cyan/60 to-cyan/20 lg:block"
          />
          {t.home.cognitive.steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.1} className="relative">
              <span aria-hidden="true" className="relative mb-7 block h-[22px] w-[22px]">
                <span
                  className="sonar-ring absolute inset-0 rounded-full border border-cyan/50"
                  style={{ animationDelay: `${i * 0.9}s` }}
                />
                <span className="absolute inset-[6px] rounded-full bg-cyan" />
              </span>
              <span className="font-mono text-xs text-cyan">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl leading-snug font-semibold">{s.title}</h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-steel">
                {s.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
