import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { brand } from "@/content/site";
import { Eyebrow } from "../site/Decor";
import { Reveal } from "../site/Reveal";

export function LeadershipTeaser() {
  const { t } = useI18n();

  return (
    <section className="section-y border-t border-ocean/50 bg-navy/20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <Eyebrow>{t.home.leadership.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold md:text-5xl">
            {t.home.leadership.title}
          </h2>
        </Reveal>

        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {t.home.leadership.people.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 0.1}>
              <Link to="/company" className="surface-card group flex h-full gap-5 p-6">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-ocean bg-abyss">
                  <img src={brand.mark} alt="" aria-hidden="true" className="h-7 w-7" loading="lazy" />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{p.name}</h3>
                  <p className="mt-1 glow-text font-mono text-[11px] tracking-[0.14em] text-cyan uppercase">
                    {p.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-steel">{p.line}</p>
                  <span className="glow-text mt-4 inline-flex items-center gap-2 text-sm text-cyan">
                    {t.home.leadership.link}
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
