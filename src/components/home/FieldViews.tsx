import { useI18n } from "@/i18n";
import { images } from "@/content/site";
import { Eyebrow } from "../site/Decor";
import { Reveal } from "../site/Reveal";

/** Gallery of the field images at full opacity — the measurements, sensors and wavefronts are the point. */
const order = [
  images.heroPort,
  images.channelBottom,
  images.quayWall,
  images.offshorePipelines,
  images.offshore,
  images.subsea,
  images.channelPov,
  images.propeller,
  images.twinConsole,
  images.twin3d,
] as const;

export function FieldViews() {
  const { t } = useI18n();
  const f = t.home.field;

  return (
    <section className="section-y border-t border-ocean/50 bg-navy/20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="max-w-3xl">
          <Eyebrow>{f.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold md:text-5xl">{f.title}</h2>
          <p className="mt-6 text-base leading-relaxed text-steel md:text-lg">{f.text}</p>
        </Reveal>

        <ul className="mt-8 grid gap-5 lg:grid-cols-2">
          {f.items.map((item, i) => {
            const src = order[i];
            if (!src) return null;
            return (
              <Reveal as="li" key={src} delay={(i % 2) * 0.08}>
                <figure className="surface-card group h-full overflow-hidden p-0">
                  <a
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${f.open}: ${item.caption}`}
                    className="block overflow-hidden"
                  >
                    <span className="relative block">
                      <img
                        src={src}
                        alt={item.caption}
                        loading="lazy"
                        width={1920}
                        height={1088}
                        className="block aspect-[1920/1088] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                      <span aria-hidden="true" className="img-tint absolute inset-0" />
                    </span>
                  </a>
                  <figcaption className="border-t border-ocean px-5 py-4 text-sm leading-relaxed text-steel">
                    <span className="glow-text mr-2 font-mono text-[11px] text-cyan">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.caption}
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
