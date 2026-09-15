import { useI18n } from "@/i18n";
import { TwinConsole } from "../site/TwinConsole";
import { Eyebrow } from "../site/Decor";
import { Reveal } from "../site/Reveal";

export function TwinSection() {
  const { t } = useI18n();

  return (
    <section className="section-y">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
          <Reveal>
            <Eyebrow>{t.home.twin.eyebrow}</Eyebrow>
            <h2 className="mt-5 text-3xl leading-tight font-bold md:text-5xl">{t.home.twin.title}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {t.home.twin.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-steel">
                  <span aria-hidden="true" className="mt-2 h-px w-6 shrink-0 bg-cyan" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.12} className="mt-8">
          <TwinConsole />
        </Reveal>
      </div>
    </section>
  );
}
