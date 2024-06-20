// #region ::: IMPORTS
// general imports
import "../styles/globals.css";
// libs
import type { AppProps } from "next/app";
import { createBreakpoint } from "react-use";
import { ThemeProvider } from "styled-components";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
// components
import CustomLink from "../components/CustomLink";
import InvertedCursor from "../components/InvertedCursor";
import BackgroundTitle from "../components/BackgroundTitle";
// styles
import * as styled from "../styles/pages/_app.style";
// utils
import {
  AVAILABLE_LANGUAGES,
  getSelectedLanguage,
  getTranslation,
} from "../utils/translations";
import { GlobalStyles, themes } from "../utils/ThemeConfig";
// data
import { HEADER_LINKS } from "../data/links";
// types
import { Language } from "../types/language";
// #endregion ::: IMPORTS

const useBreakpoint = createBreakpoint({ L: 640, S: 350 });

function MyApp({ Component, pageProps }: AppProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    getSelectedLanguage()
  );

  const [themeIndex, setThemeIndex] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const headerRef = useRef<HTMLElement>(null);

  const breakpoint = useBreakpoint();

  const headerHeight = headerRef.current?.clientHeight;

  const handleMenu = () => setIsMenuOpen((v) => !v);

  const handleThemeIndex = () =>
    setThemeIndex((idx) => (idx + 1) % themes.length);

  const handleLanguage = (code: Language) => () => {
    localStorage.setItem("lang", code);
    setCurrentLanguage(code);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", navigator?.language.split("-")[0] || "en");
    }

    if (breakpoint !== "S") {
      setIsMenuOpen(false);
    }
  }, [breakpoint]);

  return (
    <ThemeProvider theme={themes[themeIndex]}>
      <GlobalStyles />
      <InvertedCursor />
      {/* <BackgroundTitle /> */}
      <styled.Container>
        {/* menù open from mobile */}
        {isMenuOpen ? (
          <styled.ModalContainer
            style={{
              top: headerHeight,
              height: `calc(100vh - ${headerHeight}px)`,
            }}
          >
            <styled.ModalLinksContainer>
              {HEADER_LINKS.map((props) => (
                <CustomLink
                  {...props}
                  value={getTranslation(props.value)}
                  key={props.value}
                />
              ))}
            </styled.ModalLinksContainer>
          </styled.ModalContainer>
        ) : null}
        {/* default header on pc and mobile */}
        <header ref={headerRef}>
          <styled.HeaderWrapper>
            <styled.HeaderButtonContainer>
              {/* <styled.ThemeSwitcherButton onClick={handleThemeIndex}>
                ⥃
              </styled.ThemeSwitcherButton> */}
              {AVAILABLE_LANGUAGES.map((lang) => (
                <styled.ThemeSwitcherButton
                  key={lang.code}
                  onClick={handleLanguage(lang.code)}
                >
                  {lang.flag}
                </styled.ThemeSwitcherButton>
              ))}
            </styled.HeaderButtonContainer>

            <styled.HeaderLinksContainer>
              {HEADER_LINKS.map((props) => (
                <CustomLink
                  {...props}
                  value={getTranslation(props.value)}
                  key={props.value}
                />
              ))}
            </styled.HeaderLinksContainer>

            <styled.HeaderMenuButton onClick={handleMenu}>
              {isMenuOpen ? "✕" : "☰"}
            </styled.HeaderMenuButton>
          </styled.HeaderWrapper>
        </header>

        <Component {...pageProps} />
      </styled.Container>
    </ThemeProvider>
  );
}

export default MyApp;
