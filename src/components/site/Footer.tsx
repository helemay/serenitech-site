import { Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { brand } from "@/content/site";
import { LanguageSwitch } from "./LanguageSwitch";

export function Footer() {
  const { t, lang } = useI18n();

  return (
    <footer className="border-t border-ocean/70 bg-navy/40">
      <div className="mx-auto max-w-[1400px] px-5 pt-8 pb-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <img
              src={lang === "pt" ? brand.logoHorizontalPt : brand.logoHorizontal}
              alt={t.brand.alt}
              className="glow-img h-16 w-auto md:h-20"
              width={lang === "pt" ? 582 : 586}
              height={lang === "pt" ? 93 : 94}
              loading="lazy"
            />
            <p className="max-w-xs text-sm text-steel">{t.footer.descriptor}</p>
            <LanguageSwitch className="w-fit" />
          </div>

          <div>
            <h2 className="mb-4 font-mono text-xs tracking-[0.2em] text-cyan uppercase">
              {t.footer.companyCol}
            </h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/company" className="text-steel hover:text-surface-white">
                  {t.nav.company}
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-steel hover:text-surface-white">
                  {t.nav.technology}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-steel hover:text-surface-white">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-mono text-xs tracking-[0.2em] text-cyan uppercase">
              {t.footer.servicesCol}
            </h2>
            <ul className="space-y-3 text-sm">
              {t.services.modules.map((m, i) => (
                <li key={m.title}>
                  <Link
                    to="/services"
                    hash={`module-${i + 1}`}
                    className="text-steel hover:text-surface-white"
                  >
                    {m.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 font-mono text-xs tracking-[0.2em] text-cyan uppercase">
              {t.footer.sectorsCol}
            </h2>
            <ul className="space-y-3 text-sm">
              {t.sectors.items.map((s) => (
                <li key={s.title}>
                  <Link to="/sectors" className="text-steel hover:text-surface-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mt-8 mb-4 font-mono text-xs tracking-[0.2em] text-cyan uppercase">
              {t.footer.groupTitle}
            </h2>
            <ul className="space-y-2 text-sm text-steel">
              {t.footer.group.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col gap-4 text-xs text-steel md:flex-row md:items-center md:justify-between">
          <p className="font-mono">{t.footer.rights}</p>
          <a
            href={`mailto:${brand.email}`}
            className="font-mono text-cyan hover:text-cyan-deep"
          >
            {brand.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
