import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { LANGS, useI18n, type Lang } from "@/i18n";
import { cn } from "@/lib/utils";
import { Flag } from "./Flag";

/**
 * Language selector: the current language's flag (plus its name from md up, unless `compact`) opens
 * a list of the five languages — each with its country flag and its name written in that language,
 * in alphabetical order of the name. Keyboard: arrows move, Enter/Space select, Escape closes.
 */
export function LanguageMenu({
  compact = false,
  align = "right",
  direction = "down",
  className,
}: {
  /** Flag and chevron only (header — desktop and mobile). */
  compact?: boolean;
  /** Which edge of the button the list aligns to. */
  align?: "left" | "right";
  /** Open below (header) or above (footer). */
  direction?: "down" | "up";
  className?: string;
}) {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const [focusIdx, setFocusIdx] = useState<number>(() => LANGS.findIndex((l) => l.code === lang));
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const current = LANGS.find((l) => l.code === lang) ?? LANGS[1]!;

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent | TouchEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("touchstart", onDoc, { passive: true });
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("touchstart", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const choose = (code: Lang) => {
    setLang(code);
    setOpen(false);
  };

  // Opening always starts from the selected language (the mount-time index may predate the stored choice).
  const openAtCurrent = () => {
    setFocusIdx(LANGS.findIndex((l) => l.code === lang));
    setOpen(true);
  };
  const onButtonKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      openAtCurrent();
    }
  };
  const onListKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusIdx((i) => (i + 1) % LANGS.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusIdx((i) => (i - 1 + LANGS.length) % LANGS.length);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      choose(LANGS[focusIdx]!.code);
    } else if (e.key === "Home") {
      setFocusIdx(0);
    } else if (e.key === "End") {
      setFocusIdx(LANGS.length - 1);
    }
  };

  useEffect(() => {
    if (!open) return;
    const el = rootRef.current?.querySelector<HTMLElement>(`[data-idx="${focusIdx}"]`);
    el?.focus();
  }, [open, focusIdx]);

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${t.nav.language}: ${current.name}`}
        onClick={() => (open ? setOpen(false) : openAtCurrent())}
        onKeyDown={onButtonKey}
        className={cn(
          "flex items-center gap-2 rounded-md border border-ocean bg-abyss/40 px-2.5 py-2 text-sm font-medium text-surface-white transition-colors hover:border-cyan/60",
          open && "border-cyan/60",
        )}
      >
        <Flag code={current.flag} />
        {!compact && <span className="hidden md:inline">{current.name}</span>}
        <ChevronDown size={14} className={cn("text-steel transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label={t.nav.language}
          aria-activedescendant={`${listId}-${LANGS[focusIdx]?.code ?? lang}`}
          onKeyDown={onListKey}
          className={cn(
            "absolute z-50 min-w-[190px] overflow-hidden rounded-md border border-ocean bg-abyss/95 p-1.5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.85)] backdrop-blur-xl",
            align === "right" ? "right-0" : "left-0",
            direction === "down" ? "top-full mt-2" : "bottom-full mb-2",
          )}
        >
          {LANGS.map((l, i) => {
            const selected = l.code === lang;
            return (
              <li
                key={l.code}
                id={`${listId}-${l.code}`}
                role="option"
                aria-selected={selected}
                tabIndex={i === focusIdx ? 0 : -1}
                data-idx={i}
                lang={l.code}
                onClick={() => choose(l.code)}
                onMouseEnter={() => setFocusIdx(i)}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded px-3 py-2 text-sm outline-none transition-colors",
                  selected ? "glow-text bg-cyan/10 text-cyan" : "text-surface-white hover:bg-navy/80 focus:bg-navy/80",
                )}
              >
                <Flag code={l.flag} />
                <span className="flex-1">{l.name}</span>
                {selected && <span aria-hidden="true" className="font-mono text-[10px] tracking-[0.2em] text-cyan uppercase">{l.code}</span>}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
