import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Mail } from "lucide-react";
import { toast } from "sonner";
import { useI18n } from "@/i18n";
import { en } from "@/i18n/en";
import { brand } from "@/content/site";
import { PageHeader } from "@/components/site/PageHeader";
import { Eyebrow } from "@/components/site/Decor";
import { Reveal } from "@/components/site/Reveal";
import { ctaClasses } from "@/components/site/CtaLink";

const meta = en.meta.contact;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: meta.title },
      { name: "description", content: meta.description },
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

type FormState = {
  name: string;
  organisation: string;
  role: string;
  country: string;
  sector: string;
  message: string;
};

const empty: FormState = {
  name: "",
  organisation: "",
  role: "",
  country: "",
  sector: "",
  message: "",
};

const fieldClass =
  "w-full rounded-md border border-ocean bg-abyss px-4 py-3 text-sm text-surface-white placeholder:text-steel/60 focus-visible:border-cyan";

function ContactPage() {
  const { t } = useI18n();
  const [values, setValues] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const set = (key: keyof FormState, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: false }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors: Partial<Record<keyof FormState, boolean>> = {};
    (Object.keys(values) as (keyof FormState)[]).forEach((k) => {
      if (!values[k].trim()) nextErrors[k] = true;
    });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const body = [
      `${t.contact.fields.name}: ${values.name}`,
      `${t.contact.fields.organisation}: ${values.organisation}`,
      `${t.contact.fields.role}: ${values.role}`,
      `${t.contact.fields.country}: ${values.country}`,
      `${t.contact.fields.sector}: ${values.sector}`,
      "",
      values.message,
    ].join("\n");

    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent(
      t.contact.title,
    )}&body=${encodeURIComponent(body)}`;
    toast.success(t.contact.success);
  };

  const textFields: { key: keyof FormState; label: string }[] = [
    { key: "name", label: t.contact.fields.name },
    { key: "organisation", label: t.contact.fields.organisation },
    { key: "role", label: t.contact.fields.role },
    { key: "country", label: t.contact.fields.country },
  ];

  return (
    <>
      <PageHeader eyebrow={t.contact.eyebrow} title={t.contact.title}>
        <p>{t.contact.text}</p>
      </PageHeader>

      <section className="section-y">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:px-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <form onSubmit={onSubmit} noValidate className="surface-card space-y-5 p-7 md:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                {textFields.map((f) => (
                  <div key={f.key}>
                    <label
                      htmlFor={f.key}
                      className="mb-2 block font-mono text-[11px] tracking-[0.16em] text-steel uppercase"
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.key}
                      name={f.key}
                      value={values[f.key]}
                      onChange={(e) => set(f.key, e.target.value)}
                      aria-invalid={errors[f.key] ? true : undefined}
                      aria-describedby={errors[f.key] ? `${f.key}-error` : undefined}
                      className={fieldClass}
                    />
                    {errors[f.key] && (
                      <p id={`${f.key}-error`} className="mt-2 text-xs text-amber-alert">
                        {t.contact.required}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <label
                  htmlFor="sector"
                  className="mb-2 block font-mono text-[11px] tracking-[0.16em] text-steel uppercase"
                >
                  {t.contact.fields.sector}
                </label>
                <select
                  id="sector"
                  name="sector"
                  value={values.sector}
                  onChange={(e) => set("sector", e.target.value)}
                  aria-invalid={errors.sector ? true : undefined}
                  className={fieldClass}
                >
                  <option value="">{t.contact.fields.sectorPlaceholder}</option>
                  {t.contact.sectorOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
                {errors.sector && (
                  <p className="mt-2 text-xs text-amber-alert">{t.contact.required}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-[11px] tracking-[0.16em] text-steel uppercase"
                >
                  {t.contact.fields.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={values.message}
                  onChange={(e) => set("message", e.target.value)}
                  aria-invalid={errors.message ? true : undefined}
                  className={fieldClass}
                />
                {errors.message && (
                  <p className="mt-2 text-xs text-amber-alert">{t.contact.required}</p>
                )}
              </div>

              <button type="submit" className={ctaClasses("primary")}>
                {t.contact.fields.submit}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="surface-card h-full p-7">
              <Eyebrow>{t.contact.locationsTitle}</Eyebrow>
              <ul className="mt-6 space-y-4">
                {t.contact.locations.map((l) => (
                  <li key={l} className="flex items-center gap-3 text-sm text-surface-white">
                    <MapPin size={16} strokeWidth={1.5} className="text-cyan" />
                    {l}
                  </li>
                ))}
              </ul>
              <div className="hairline my-7" />
              <p className="font-mono text-[11px] tracking-[0.16em] text-steel uppercase">
                {t.contact.emailLabel}
              </p>
              <a
                href={`mailto:${brand.email}`}
                className="mt-3 inline-flex items-center gap-2 font-mono text-sm text-cyan hover:text-cyan-deep"
              >
                <Mail size={15} strokeWidth={1.5} />
                {brand.email}
              </a>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
