import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { serviceIcons } from "@/content/site";
import { Eyebrow } from "../site/Decor";
import { Reveal } from "../site/Reveal";

export function ServicesOverview() {
  const { t } = useI18n();

  return (
    <section className="section-y">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <Eyebrow>{t.home.services.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold md:text-5xl">
            {t.home.services.title}
          </h2>
        </Reveal>

        <ul className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.home.services.items.map((s, i) => {
            const Icon = serviceIcons[i]!;
            return (
              <Reveal as="li" key={s.title} delay={(i % 3) * 0.08}>
                <Link
                  to="/services"
                  hash={`module-${i + 1}`}
                  className="surface-card group flex h-full flex-col p-7"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={22} strokeWidth={1.5} className="text-cyan" />
                    <span className="font-mono text-[11px] text-steel">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg leading-snug font-semibold">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel">{s.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan">
                    {t.home.services.link}
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
