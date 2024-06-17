// #region ::: IMPORTS
// libs
import { it, fr, enUS, Locale } from "date-fns/locale";
import { format } from "date-fns";
// types
import { LanguageObject, Language } from "../types/language";
// data
import * as translations from "../data/translations.json";
// #endregion ::: IMPORTS

type TranslationType = {
  [key: string]: string | TranslationType;
};

export const AVAILABLE_LANGUAGES: LanguageObject[] = [
  { flag: "🇮🇹", code: "it" },
  { flag: "🇺🇸", code: "en" },
  { flag: "🇫🇷", code: "fr" },
];

export function getTranslation(label: string, variables: any[] = []): string {
  try {
    const language = getSelectedLanguage();
    const subLabels = label.split(".");

    let result = translations as TranslationType;
    for (const index in subLabels) {
      if (typeof result !== "string") {
        result = result[subLabels[index]] as TranslationType;
      }
    }

    if (variables.length) {
      let bareTranslation = result[language] as string;

      for (const index in variables) {
        bareTranslation = bareTranslation.replace("~", variables[index]);
      }

      return bareTranslation as string;
    }

    return result?.[language] as string;
  } catch (e) {
    return label;
  }
}

export function getSelectedLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const selectedLang = localStorage?.getItem("lang");

  if (
    selectedLang &&
    AVAILABLE_LANGUAGES.map((l) => l.code).includes(selectedLang as Language)
  ) {
    return selectedLang.split("-")[0] as Language;
  }

  return "en";
}

export function getDateLocale(): Locale {
  switch (getSelectedLanguage()) {
    case "en":
      return enUS;
    case "it":
      return it;
    case "fr":
      return fr;
  }
}

export function getFormattedDate(
  date: Date | string,
  formatStr: string = "dd MMMM yyyy"
): string {
  return format(date, formatStr, { locale: getDateLocale() });
}
