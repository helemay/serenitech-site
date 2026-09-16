import { useI18n } from "@/i18n";
import { aiIcons } from "@/content/site";
import { Eyebrow } from "../site/Decor";
import { Reveal } from "../site/Reveal";

export function AiStack() {
  const { t } = useI18n();

  return (
    <section className="section-y grid-faint border-y border-ocean/50 bg-navy/20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <Eyebrow>{t.home.ai.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold md:text-5xl">{t.home.ai.title}</h2>
        </Reveal>

        <ul className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.home.ai.items.map((item, i) => {
            const Icon = aiIcons[i]!;
            return (
              <Reveal as="li" key={item} delay={i * 0.07}>
                <div className="surface-card h-full p-6">
                  <Icon size={20} strokeWidth={1.5} className="text-cyan" />
                  <p className="mt-5 text-sm leading-relaxed text-steel">{item}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
