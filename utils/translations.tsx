// #region ::: IMPORTS
// libs
import { it, fr, enUS, Locale } from "date-fns/locale";
import { format } from "date-fns";
// types
import { LanguageObject, Language } from "../types/language";
// #endregion ::: IMPORTS

export const AVAILABLE_LANGUAGES: LanguageObject[] = [
  { flag: "🇮🇹", code: "it" },
  { flag: "🇺🇸", code: "en" },
  // { flag: "🇫🇷", code: "fr" },
];

function getDateLocale(locale: Language): Locale {
  switch (locale) {
    case "en":
      return enUS;
    case "it":
      return it;
    case "fr":
      return fr;
  }
}

export function getFormattedDate(
  locale: Language,
  date: Date | string,
  formatStr: string = "dd MMMM yyyy"
): string {
  return format(date, formatStr, { locale: getDateLocale(locale) });
}

export const MD_COMPONENTS = {
  i: <i />,
  b: <strong />,
  c: <code />,
  p: <p />,
};
