import { useI18n } from "@/i18n";
import { images } from "@/content/site";
import { CtaLink } from "../site/CtaLink";
import { Eyebrow } from "../site/Decor";
import { FramedVisual } from "../site/FramedVisual";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="pt-24 pb-4 md:pt-28 md:pb-8">
      <FramedVisual src={images.heroPort} alt={t.home.heroAlt} priority overlayFrom="xl">
        <Eyebrow>{t.home.eyebrow}</Eyebrow>
        <h1 className="mt-5 text-4xl leading-[1.03] font-bold sm:text-5xl xl:text-6xl">
          {t.home.h1}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-steel md:text-lg">
          {t.home.sub}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CtaLink to="/" hash="contact">
            {t.home.ctaPrimary}
          </CtaLink>
          <CtaLink to="/" hash="services" variant="outline">
            {t.home.ctaSecondary}
          </CtaLink>
        </div>
      </FramedVisual>
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
        <ul className="glow-text flex flex-wrap gap-x-6 gap-y-2 text-cyan">
          {t.home.trustRegions.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
