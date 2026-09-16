import { useI18n } from "@/i18n";
import { images } from "@/content/site";
import { CtaLink } from "../site/CtaLink";
import { Eyebrow } from "../site/Decor";
import { FramedVisual } from "../site/FramedVisual";
import { HeroHud } from "./HeroHud";

/** Opening: the copy sits above the picture; the field image is shown whole, with the animated HUD over it. */
export function Hero() {
  const { t } = useI18n();

  return (
    <section className="pt-24 pb-4 md:pt-26 md:pb-8">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow>{t.home.eyebrow}</Eyebrow>
            <h1 className="mt-5 text-4xl leading-[1.03] font-bold sm:text-5xl lg:text-6xl">
              {t.home.h1}
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-steel">{t.home.sub}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <CtaLink to="/" hash="contact">
                {t.home.ctaPrimary}
              </CtaLink>
              <CtaLink to="/" hash="services" variant="outline">
                {t.home.ctaSecondary}
              </CtaLink>
            </div>
          </div>
        </div>
      </div>
      <FramedVisual src={images.heroClean} alt={t.home.heroAlt} priority className="mt-8" overlay={<HeroHud />} />
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
