import { useI18n } from "@/i18n";

// Serenitech DS v1.0 — family bar shared by every site of the group (serenitech.services, the Mon family,
// serenitech.global). Neutral greyscale with the family red underline on the current site, so it
// reads the same on every site regardless of each site's own palette.
const family = [
  { name: "Serenitech", href: "https://serenitech.services" },
  { name: "MonPanier", href: "https://monpanier.boutique" },
  { name: "MonInvoice", href: "https://moninvoice.eu" },
  { name: "MonCréance", href: "https://moncreance.eu" },
  { name: "MonConformité", href: "https://monconformite.eu" },
  { name: "Serenitech Global", href: "https://serenitech.global", current: true },
];

export function FamilyBar() {
  const { t } = useI18n();
  return (
    <div className="bg-[#1B1B1B] text-[12px] leading-none" role="navigation" aria-label={t.family.label}>
      <div className="mx-auto flex min-h-8 max-w-[1400px] items-center px-5 md:px-10">
        <nav className="flex min-w-0 items-center gap-[18px] overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <b className="font-bold text-white">{t.family.label}</b>
          {family.map((s) => (
            <a
              key={s.name}
              href={s.href}
              aria-current={s.current ? "page" : undefined}
              className={
                s.current
                  ? "border-b-2 border-[#CE1126] pt-[9px] pb-[7px] font-medium text-white"
                  : "border-b-2 border-transparent pt-[9px] pb-[7px] font-medium text-[#cfcfcf] transition-colors hover:text-white"
              }
            >
              {s.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
