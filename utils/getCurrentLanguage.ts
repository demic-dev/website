import { Languages } from "../types";

export function getCurrentLanguage(): Languages {
  const selectedLang = localStorage.getItem("lang") || navigator?.language;

  if (
    selectedLang &&
    selectedLang.split("-")[0] in (["en", "fr", "it"] as Languages[])
  ) {
    return selectedLang.split("-")[0] as Languages;
  }

  return "en";
}
