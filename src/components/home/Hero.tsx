import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useI18n } from "@/i18n";
import { images } from "@/content/site";
import { CtaLink } from "../site/CtaLink";
import { Eyebrow, SonarRings } from "../site/Decor";

export function Hero() {
  const { t } = useI18n();
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, reduced ? 0 : 60]);

  return (
    <section className="relative flex items-start overflow-hidden pt-20 pb-12 md:min-h-[80vh] md:items-center md:pt-28 md:pb-16">
      <motion.img
        style={{ y }}
        src={images.heroPort}
        alt={t.home.heroAlt}
        fetchPriority="high"
        width={2560}
        height={1440}
        className="absolute inset-0 h-[112%] w-full object-cover object-right"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-abyss/95 via-abyss/80 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-abyss to-transparent"
      />
      <SonarRings className="top-1/4 -right-24 hidden lg:block" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <div className="max-w-3xl">
          <Eyebrow>{t.home.eyebrow}</Eyebrow>
          <h1 className="mt-6 text-4xl leading-[1.03] font-bold sm:text-5xl lg:text-7xl">
            {t.home.h1}
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-steel md:text-lg">
            {t.home.sub}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CtaLink to="/contact">{t.home.ctaPrimary}</CtaLink>
            <CtaLink to="/services" variant="outline">
              {t.home.ctaSecondary}
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustStrip() {
  const { t } = useI18n();
  return (
    <div className="border-y border-ocean/60 bg-navy/30">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-5 font-mono text-[11px] tracking-[0.14em] text-steel uppercase md:flex-row md:items-center md:justify-between md:px-10">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {t.home.trustSectors.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-cyan">
          {t.home.trustRegions.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
