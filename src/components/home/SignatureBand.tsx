import { useI18n } from "@/i18n";
import { images } from "@/content/site";
import { Eyebrow } from "../site/Decor";
import { Reveal } from "../site/Reveal";

export function SignatureBand() {
  const { t } = useI18n();
  const s = t.home.signature;

  return (
    <section className="relative overflow-hidden md:min-h-[60vh]">
      {/* Mobile: image as a block above the text */}
      <div className="relative w-full md:hidden">
        <img
          src={images.channelPov}
          alt={s.alt}
          loading="lazy"
          width={1920}
          height={1088}
          className="aspect-[16/10] w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-abyss to-transparent"
        />
      </div>

      <img
        src={images.channelPov}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 hidden h-full w-full object-cover object-center md:block"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-gradient-to-r from-abyss via-abyss/60 via-35% to-transparent to-55% md:block"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 hidden h-[30%] bg-gradient-to-t from-abyss to-transparent md:block"
      />

      <div className="relative mx-auto flex max-w-[1400px] items-center px-5 py-10 md:min-h-[60vh] md:px-10 md:py-14">
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
