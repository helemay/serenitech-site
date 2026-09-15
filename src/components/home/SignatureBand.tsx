import { useI18n } from "@/i18n";
import { images } from "@/content/site";
import { Eyebrow } from "../site/Decor";
import { FramedVisual } from "../site/FramedVisual";

export function SignatureBand() {
  const { t } = useI18n();
  const s = t.home.signature;

  return (
    <section className="section-y">
      <FramedVisual src={images.channelPov} alt={s.alt} overlayFrom="lg">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <h2 className="mt-5 text-3xl leading-tight font-bold md:text-4xl">{s.title}</h2>
        <p className="mt-5 text-base leading-relaxed text-steel">{s.text}</p>
        <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-8">
          <li className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-steel uppercase">
            <span aria-hidden="true" className="glow-img h-2.5 w-2.5 rounded-full bg-cyan" />
            {s.legendOk}
          </li>
          <li className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] text-steel uppercase">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-amber-alert" />
            {s.legendFlag}
          </li>
        </ul>
      </FramedVisual>
    </section>
  );
}
