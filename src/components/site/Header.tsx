import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "@/i18n";
import { brand, navRoutes } from "@/content/site";
import { CtaLink } from "./CtaLink";
import { LanguageSwitch } from "./LanguageSwitch";
import { cn } from "@/lib/utils";

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-ocean/70 bg-abyss/85 backdrop-blur-xl"
          : "bg-gradient-to-b from-abyss/90 via-abyss/45 to-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-3 md:px-10 md:py-3">
        <Link to="/" className="flex shrink-0 items-center py-1" aria-label="Serenitech — home">
          <img
            src={brand.logoWide}
            alt={t.brand.alt}
            className="glow-img hidden h-[52px] w-auto min-[1400px]:block"
            width={1096}
            height={103}
          />
          <img
            src={brand.logoCompact}
            alt={t.brand.alt}
            className="glow-img h-9 w-auto min-[1400px]:hidden"
            width={579}
            height={88}
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {navRoutes.map((r) => (
            <Link
              key={r.to}
              to={r.to}
              className="text-sm font-medium text-steel transition-colors hover:text-surface-white"
              activeProps={{ className: "text-cyan" }}
            >
              {t.nav[r.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitch />
          <CtaLink to="/contact" className="px-5 py-2.5 text-[13px] whitespace-nowrap">
            {t.nav.cta}
          </CtaLink>
        </div>

        <button
          type="button"
          className="rounded-md border border-ocean p-2 text-surface-white lg:hidden"
          aria-expanded={open}
          aria-label={open ? t.nav.close : t.nav.menu}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ocean/60 bg-abyss/95 backdrop-blur-xl lg:hidden">
          <nav
            aria-label="Mobile"
            className="mx-auto flex max-w-[1400px] flex-col gap-1 px-5 py-4"
          >
            {navRoutes.map((r) => (
              <Link
                key={r.to}
                to={r.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base text-steel hover:text-surface-white"
                activeProps={{ className: "text-cyan" }}
              >
                {t.nav[r.key]}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between gap-4">
              <LanguageSwitch />
              <CtaLink
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex-1 px-4 py-2.5 text-[13px]"
              >
                {t.nav.cta}
              </CtaLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
