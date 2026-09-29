import { useI18n } from "@/i18n";

// Serenitech DS v1.0 — family bar shared by every site of the group, same pattern everywhere
// (decisions of 29/09/2026, Serenitech_DS_v1/GUIDELINES.md): #0B0B0B band, "Famille Serenitech" in
// Bodoni Moda 15 px, red lozenges after the title and before Serenitech Global, the products as
// their official logos (dark versions, 18 px; monPanier 26 px, optically matched), and Serenitech
// Global as the eye mark + name. Order: sereniTech, monInvoice, monConformité, monCréance,
// monPanier, Serenitech Global.
const logos = [
  { alt: "sereniTech", href: "https://serenitech.services", src: "/brand/family/serenitech-logo-dark.svg" },
  { alt: "monInvoice", href: "https://moninvoice.eu", src: "/brand/family/moninvoice-logo-dark.svg" },
  { alt: "monConformité", href: "https://monconformite.eu", src: "/brand/family/monconformite-logo-dark.svg" },
  { alt: "monCréance", href: "https://moncreance.eu", src: "/brand/family/moncreance-logo-dark.svg" },
  { alt: "monPanier", href: "https://monpanier.boutique", src: "/brand/family/monpanier-logo-dark.svg", serif: true },
];

const Lozenge = () => <span aria-hidden="true" className="inline-block h-[7px] w-[7px] flex-none rotate-45 bg-[#CE1126]" />;

export function FamilyBar() {
  const { t } = useI18n();
  return (
    <div className="border-b border-[#666] bg-[#0B0B0B] text-[12px] leading-none text-white" translate="no" role="navigation" aria-label={t.family.label}>
      <div className="mx-auto flex min-h-8 max-w-[1400px] items-center px-5 md:px-10">
        <nav className="flex min-w-0 items-center gap-[14px] overflow-x-auto whitespace-nowrap [scrollbar-width:none] md:gap-[18px] [&::-webkit-scrollbar]:hidden [&>*]:flex-none">
          <b className="font-normal text-white" style={{ font: '400 15px/1 "Bodoni Moda", Didot, "Bodoni 72", Georgia, serif' }}>
            {t.family.label}
          </b>
          <Lozenge />
          {logos.map((l) => (
            <a key={l.alt} href={l.href} className="inline-flex items-center py-[7px] leading-none opacity-80 transition-opacity hover:opacity-100">
              <img
                src={l.src}
                alt={l.alt}
                width={96}
                height={18}
                className={l.serif ? "-my-1 block h-[24px] w-auto md:h-[26px]" : "block h-4 w-auto md:h-[18px]"}
              />
            </a>
          ))}
          <Lozenge />
          <a
            href="https://serenitech.global"
            aria-current="page"
            className="inline-flex items-center gap-[7px] py-[7px] text-[12px] font-semibold tracking-[0.01em] text-white"
          >
            <img src="/brand/family/serenitech-global-eye.svg" alt="" width={46} height={22} className="-my-1 block h-[22px] w-auto" />
            Serenitech Global
          </a>
        </nav>
      </div>
    </div>
  );
}
