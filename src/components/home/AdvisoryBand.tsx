import { useI18n } from "@/i18n";
import { CtaLink } from "../site/CtaLink";
import { Eyebrow } from "../site/Decor";
import { Reveal } from "../site/Reveal";

export function AdvisoryBand() {
  const { t } = useI18n();
  const a = t.home.advisory;

  return (
    <section className="section-y border-y border-ocean/50 bg-navy/30">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 md:px-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <Eyebrow>{a.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl leading-tight font-bold md:text-4xl">
            {a.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-steel md:text-lg">
            {a.text}
          </p>
          <CtaLink
            to="/services"
            hash="module-7"
            variant="outline"
            className="mt-7 px-5 py-2.5 text-[13px]"
          >
            {a.cta}
          </CtaLink>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="grid gap-4">
            {a.chips.map((c) => (
              <li
                key={c}
                className="surface-card flex items-center gap-4 px-6 py-5 text-sm font-medium text-surface-white"
              >
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 rounded-full bg-cyan"
                />
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
