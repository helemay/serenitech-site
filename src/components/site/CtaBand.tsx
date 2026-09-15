import { useI18n } from "@/i18n";
import { images } from "@/content/site";
import { CtaLink } from "./CtaLink";
import { Eyebrow } from "./Decor";
import { FramedVisual } from "./FramedVisual";

export function CtaBand() {
  const { t } = useI18n();

  return (
    <section className="section-y border-t border-ocean/60">
      <FramedVisual src={images.offshore} alt={t.home.finalCta.imageAlt} overlayFrom="lg">
        <Eyebrow>{t.home.finalCta.eyebrow}</Eyebrow>
        <h2 className="mt-5 text-3xl font-bold md:text-4xl">{t.home.finalCta.title}</h2>
        <p className="mt-5 text-base leading-relaxed text-steel">{t.home.finalCta.text}</p>
        <CtaLink to="/" hash="contact" className="mt-7">
          {t.home.finalCta.button}
        </CtaLink>
      </FramedVisual>
    </section>
  );
}
