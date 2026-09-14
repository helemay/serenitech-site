import { useI18n } from "@/i18n";
import { images } from "@/content/site";
import { CtaLink } from "./CtaLink";
import { Eyebrow } from "./Decor";
import { Reveal } from "./Reveal";

export function CtaBand() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden border-y border-ocean/60">
      <img
        src={images.offshore}
        alt={t.home.finalCta.imageAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
        width={2560}
        height={1440}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-abyss/80" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-12 md:px-10 md:py-16">
        <Reveal className="max-w-2xl">
          <Eyebrow>{t.home.finalCta.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold md:text-5xl">
            {t.home.finalCta.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-steel md:text-lg">
            {t.home.finalCta.text}
          </p>
          <CtaLink to="/contact" className="mt-8">
            {t.home.finalCta.button}
          </CtaLink>
        </Reveal>
      </div>
    </section>
  );
}
