import { useRef, useState, type FormEvent } from "react";
import { MapPin, Mail } from "lucide-react";
import { toast } from "sonner";
import { useI18n } from "@/i18n";
import { brand } from "@/content/site";
import { CtaBand } from "@/components/site/CtaBand";
import { Eyebrow } from "@/components/site/Decor";
import { Reveal } from "@/components/site/Reveal";
import { ctaClasses } from "@/components/site/CtaLink";

type FormState = {
  name: string;
  email: string;
  organisation: string;
  role: string;
  country: string;
  sector: string;
  message: string;
};

const empty: FormState = {
  name: "",
  email: "",
  organisation: "",
  role: "",
  country: "",
  sector: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const fieldClass =
  "w-full rounded-md border border-ocean bg-abyss px-4 py-3 text-sm text-surface-white placeholder:text-steel/60 focus-visible:border-cyan";

export function ContactSection() {
  const { t, lang } = useI18n();
  const [values, setValues] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const t0 = useRef(Date.now());

  const set = (key: keyof FormState, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: false }));
  };

  const reset = () => {
    setValues(empty);
    setErrors({});
    setWebsite("");
    setStatus("idle");
    t0.current = Date.now();
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors: Partial<Record<keyof FormState, boolean>> = {};
    (Object.keys(values) as (keyof FormState)[]).forEach((k) => {
      if (!values[k].trim()) nextErrors[k] = true;
    });
    if (!nextErrors.email && !emailPattern.test(values.email.trim())) {
      nextErrors.email = true;
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch(brand.contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          organisation: values.organisation,
          role: values.role,
          country: values.country,
          sector: values.sector,
          message: values.message,
          website,
          t0: t0.current,
          lang,
          page: window.location.href,
        }),
      });
      const json = (await res.json().catch(() => null)) as { ok?: boolean } | null;
      if (!res.ok || json?.ok !== true) throw new Error("send-failed");
      setStatus("success");
      toast.success(t.contact.success);
    } catch {
      setStatus("error");
      toast.error(t.contact.error);
    }
  };

  const textFields: { key: keyof FormState; label: string }[] = [
    { key: "name", label: t.contact.fields.name },
    { key: "email", label: t.contact.fields.email },
    { key: "organisation", label: t.contact.fields.organisation },
    { key: "role", label: t.contact.fields.role },
    { key: "country", label: t.contact.fields.country },
  ];

  return (
    <section id="contact" className="scroll-mt-20 md:scroll-mt-24">
      <CtaBand />

      <div className="section-y">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:px-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            {status === "success" ? (
              <div className="surface-card p-7 md:p-9">
                <h3 className="text-2xl font-semibold">{t.contact.successTitle}</h3>
                <p className="mt-4 text-sm leading-relaxed text-steel">
                  {t.contact.success}
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="glow-text mt-6 font-mono text-sm text-cyan hover:text-cyan-deep"
                >
                  {t.contact.again}
                </button>
              </div>
            ) : (
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
                        type={f.key === "email" ? "email" : "text"}
                        autoComplete={f.key === "email" ? "email" : undefined}
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

                <div
                  className="absolute -left-[9999px] h-px w-px overflow-hidden"
                  aria-hidden="true"
                >
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
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

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`${ctaClasses("primary")} disabled:cursor-not-allowed disabled:opacity-60`}
                >
                  {status === "sending" ? t.contact.sending : t.contact.fields.submit}
                </button>

                {status === "error" && (
                  <p role="alert" className="text-sm text-amber-alert">
                    {t.contact.error}{" "}
                    <a
                      href={`mailto:${brand.email}`}
                      className="glow-text font-mono text-cyan hover:text-cyan-deep"
                    >
                      {brand.email}
                    </a>
                  </p>
                )}
              </form>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="surface-card h-full p-7">
              <Eyebrow>{t.contact.locationsTitle}</Eyebrow>
              <ul className="mt-6 space-y-6">
                {t.contact.locations.map((l) => (
                  <li key={l.place} className="flex gap-3">
                    <MapPin size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-cyan" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-surface-white">{l.place}</p>
                      <p className="mt-1 text-[13px] leading-snug text-steel">{l.role}</p>
                      <address className="mt-2 font-mono text-[11px] leading-relaxed tracking-[0.04em] text-steel not-italic">
                        {l.address.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="hairline my-7" />
              <p className="font-mono text-[11px] tracking-[0.16em] text-steel uppercase">
                {t.contact.emailLabel}
              </p>
              <a
                href={`mailto:${brand.email}`}
                className="glow-text mt-3 inline-flex items-center gap-2 font-mono text-sm text-cyan hover:text-cyan-deep"
              >
                <Mail size={15} strokeWidth={1.5} />
                {brand.email}
              </a>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
