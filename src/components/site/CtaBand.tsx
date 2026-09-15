import { useI18n } from "@/i18n";
import { images } from "@/content/site";
import { CtaLink } from "./CtaLink";
import { Eyebrow } from "./Decor";
import { Reveal } from "./Reveal";

export function CtaBand() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden border-y border-ocean/60">
      {/* Mobile: the whole picture as a block, copy below it */}
      <img
        src={images.offshore}
        alt={t.home.finalCta.imageAlt}
        loading="lazy"
        className="block aspect-[16/10] w-full object-cover md:hidden"
        width={1920}
        height={1088}
      />
      {/* Desktop: full-bleed, full opacity */}
      <img
        src={images.offshore}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        width={1920}
        height={1088}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 hidden h-24 bg-gradient-to-t from-abyss/70 to-transparent md:block"
      />
      <div className="relative mx-auto flex max-w-[1400px] items-end px-5 py-6 md:min-h-[560px] md:px-10 md:py-16">
        <Reveal className="glass-panel max-w-2xl p-6 md:p-8">
          <Eyebrow>{t.home.finalCta.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold md:text-5xl">
            {t.home.finalCta.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-steel md:text-lg">
            {t.home.finalCta.text}
          </p>
          <CtaLink to="/" hash="contact" className="mt-8">
            {t.home.finalCta.button}
          </CtaLink>
        </Reveal>
      </div>
    </section>
  );
}
