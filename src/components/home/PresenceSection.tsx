import { MapPin } from "lucide-react";
import { useI18n } from "@/i18n";
import { Eyebrow } from "../site/Decor";
import { Reveal } from "../site/Reveal";

export function PresenceSection() {
  const { t } = useI18n();

  return (
    <section className="section-y">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <Eyebrow>{t.home.presence.eyebrow}</Eyebrow>
          <h2 className="mt-5 max-w-3xl text-3xl font-bold md:text-5xl">
            {t.home.presence.title}
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.home.presence.items.map((p, i) => (
            <Reveal as="li" key={p.place} delay={i * 0.08}>
              <div className="surface-card h-full p-6">
                <MapPin size={18} strokeWidth={1.5} className="text-cyan" />
                <h3 className="mt-5 text-base font-semibold">{p.place}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
