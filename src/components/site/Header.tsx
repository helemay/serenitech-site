import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useI18n } from "@/i18n";
import { brand, navRoutes } from "@/content/site";
import { CtaLink } from "./CtaLink";
import { LanguageSwitch } from "./LanguageSwitch";
import { cn } from "@/lib/utils";

const hashScroll = { behavior: "smooth", block: "start" } as const;
// Section links all point to "/": match on the hash too, or every link reports itself as the current page.
const sectionActive = { includeHash: true, exact: true } as const;

export function Header() {
  const { t, lang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section = the last section whose top has passed a line ~35% down the viewport
  // (sections are several screens tall, so IntersectionObserver ratios are not a reliable signal).
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = Math.min(window.innerHeight * 0.35, 320);
      let current: string | null = null;
      for (const r of navRoutes) {
        const el = document.getElementById(r.hash);
        if (el && el.getBoundingClientRect().top <= line) current = r.hash;
      }
      setActive(current);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Deep link (/#section, /#module-n): the browser anchors before fonts/images settle and the smooth
  // scroll drifts off target, so re-anchor instantly once the page has loaded — unless the visitor
  // has already started scrolling.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id || !document.getElementById(id)) return;
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };
    const jump = () => {
      if (cancelled) return;
      document.getElementById(id)?.scrollIntoView({ block: "start", behavior: "instant" });
    };
    const settle = () => {
      jump();
      document.fonts?.ready.then(() => requestAnimationFrame(jump));
    };
    const cancelEvents = ["wheel", "touchstart", "keydown"] as const;
    cancelEvents.forEach((e) => window.addEventListener(e, cancel, { passive: true, once: true }));
    if (document.readyState === "complete") settle();
    else window.addEventListener("load", settle, { once: true });
    return () => {
      window.removeEventListener("load", settle);
      cancelEvents.forEach((e) => window.removeEventListener(e, cancel));
    };
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
            src={lang === "pt" ? brand.logoWidePt : brand.logoWide}
            alt={t.brand.alt}
            className="glow-img hidden h-10 w-auto min-[1400px]:block"
            width={lang === "pt" ? 1042 : 1014}
            height={76}
          />
          <img
            src={brand.logoCompact}
            alt={t.brand.alt}
            className="glow-img h-9 w-auto min-[1400px]:hidden"
            width={528}
            height={76}
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {navRoutes.map((r) => (
            <Link
              key={r.hash}
              to="/"
              hash={r.hash}
              hashScrollIntoView={hashScroll}
              activeOptions={sectionActive}
              aria-current={active === r.hash ? "true" : undefined}
              className={cn(
                "text-sm font-medium transition-colors",
                active === r.hash
                  ? "glow-text text-cyan"
                  : "text-steel hover:text-surface-white",
              )}
            >
              {t.nav[r.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitch />
          <CtaLink
            to="/"
            hash="contact"
            hashScrollIntoView={hashScroll}
            className="px-5 py-2.5 text-[13px] whitespace-nowrap"
          >
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
                key={r.hash}
                to="/"
                hash={r.hash}
                hashScrollIntoView={hashScroll}
                activeOptions={sectionActive}
                onClick={() => setOpen(false)}
                aria-current={active === r.hash ? "true" : undefined}
                className={cn(
                  "rounded-md px-2 py-3 text-base",
                  active === r.hash
                    ? "glow-text text-cyan"
                    : "text-steel hover:text-surface-white",
                )}
              >
                {t.nav[r.key]}
              </Link>
            ))}
            <div className="mt-3 flex items-center justify-between gap-4">
              <LanguageSwitch />
              <CtaLink
                to="/"
                hash="contact"
                hashScrollIntoView={hashScroll}
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
