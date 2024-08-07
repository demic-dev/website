export type Language = "it" | "en" | "fr";

type Flags = "🇮🇹" | "🇺🇸" | "🇫🇷";

export type LanguageObject = {
  flag: Flags;
  code: Language;
};

export type LanguageProp = {
  locale: Language;
};
