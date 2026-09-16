import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { en, type Dict } from "./en";
import { pt } from "./pt";
import { es } from "./es";
import { de } from "./de";
import { fr } from "./fr";

export type Lang = "de" | "en" | "es" | "fr" | "pt";

/** Languages offered in the selector — alphabetical by the language's own name (Deutsch, English, Español, Français, Português). */
export const LANGS: readonly { code: Lang; name: string; flag: "de" | "us" | "es" | "fr" | "br" }[] = [
  { code: "de", name: "Deutsch", flag: "de" },
  { code: "en", name: "English", flag: "us" },
  { code: "es", name: "Español", flag: "es" },
  { code: "fr", name: "Français", flag: "fr" },
  { code: "pt", name: "Português", flag: "br" },
];

const dictionaries: Record<Lang, Dict> = { en, pt, es, de, fr };
const STORAGE_KEY = "serenitech.lang";
const isLang = (v: unknown): v is Lang => typeof v === "string" && (LANGS as readonly { code: string }[]).some((l) => l.code === v);

type I18nValue = {
  lang: Lang;
  t: Dict;
  setLang: (lang: Lang) => void;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isLang(stored)) setLangState(stored);
    } catch {
      /* storage unavailable */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = dictionaries[lang].htmlLang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const value = useMemo(
    () => ({ lang, t: dictionaries[lang], setLang }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
