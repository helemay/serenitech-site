import { useI18n } from "@/i18n";
import { images } from "@/content/site";
import { Eyebrow } from "../site/Decor";
import { Reveal } from "../site/Reveal";

export function SignatureBand() {
  const { t } = useI18n();
  const s = t.home.signature;

  return (
    <section className="relative min-h-[70vh] overflow-hidden md:min-h-[60vh]">
      <img
        src={images.channelPov}
        alt={s.alt}
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-abyss via-abyss/80 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/30 to-transparent"
      />

      <div className="relative mx-auto flex min-h-[70vh] max-w-[1400px] items-center px-5 py-14 md:min-h-[60vh] md:px-10">
        <Reveal className="max-w-2xl">
          <Eyebrow>{s.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl leading-tight font-bold md:text-5xl">
            {s.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-steel md:text-lg">
            {s.text}
          </p>
          <ul className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-8">
            <li className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-steel uppercase">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full bg-cyan"
              />
              {s.legendOk}
            </li>
            <li className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-steel uppercase">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full bg-amber-alert"
              />
              {s.legendFlag}
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
