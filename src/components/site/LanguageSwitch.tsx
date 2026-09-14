import { useI18n, type Lang } from "@/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitch({ className }: { className?: string }) {
  const { lang, setLang, t } = useI18n();
  const options: { value: Lang; label: string }[] = [
    { value: "en", label: "EN" },
    { value: "pt", label: "PT" },
  ];

  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-md border border-ocean px-1 py-1 font-mono text-xs",
        className,
      )}
      role="group"
      aria-label={t.nav.language}
    >
      {options.map((o, i) => (
        <span key={o.value} className="flex items-center">
          {i > 0 && <span className="px-1 text-steel/60">|</span>}
          <button
            type="button"
            onClick={() => setLang(o.value)}
            aria-pressed={lang === o.value}
            className={cn(
              "rounded px-2 py-1 font-medium transition-colors",
              lang === o.value
                ? "border border-cyan/60 bg-cyan/10 text-cyan"
                : "border border-transparent text-steel hover:text-surface-white",
            )}
          >
            {o.label}
          </button>
        </span>
      ))}
    </div>
  );
}
