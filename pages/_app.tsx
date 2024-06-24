// #region ::: IMPORTS
// general imports
import "../styles/globals.css";
// libs
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { createBreakpoint } from "react-use";
import { ThemeProvider } from "styled-components";
// components
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

const useBreakpoint = createBreakpoint({ L: 720, S: 350 });

function MyApp({ Component, pageProps }: AppProps) {
  // I still don't know why it works, even if the state is not used...
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    getSelectedLanguage()
  );

  const [themeIndex, setThemeIndex] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [currentPageTitle, setCurrentPageTitle] = useState<string>(
    typeof window === "undefined" ? "" : document.title
  );

  const { route: currentRoute, events } = useRouter();

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
    const handleRouteChange = (url: string) => {
      setIsMenuOpen(false);
      setCurrentPageTitle(document.title);
    };

    events.on("routeChangeComplete", handleRouteChange);

    return () => {
      events.off("routeChangeComplete", handleRouteChange);
    };
  }, [events]);

  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("lang")) {
      localStorage.setItem("lang", navigator?.language.split("-")[0] || "en");
    }

    if (breakpoint !== "S") {
      setIsMenuOpen(false);
    }
  }, [breakpoint]);

  return (
    <ThemeProvider theme={themes[themeIndex]}>
      <GlobalStyles />
      <InvertedCursor route={currentRoute} />
      {breakpoint === "L" ? (
        <BackgroundTitle title={currentPageTitle} route={currentRoute} />
      ) : null}
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
              {HEADER_LINKS.map((props) =>
                props.href !== currentRoute ? (
                  <Link key={props.value} href={props.href} passHref>
                    <a>{getTranslation(props.value)}</a>
                  </Link>
                ) : null
              )}
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
              {AVAILABLE_LANGUAGES.map((lang) =>
                lang.code !== currentLanguage ? (
                  <styled.ThemeSwitcherButton
                    key={lang.code}
                    onClick={handleLanguage(lang.code)}
                  >
                    {lang.flag}
                  </styled.ThemeSwitcherButton>
                ) : null
              )}
            </styled.HeaderButtonContainer>

            <styled.HeaderLinksContainer>
              {HEADER_LINKS.map((props) =>
                props.href !== currentRoute ? (
                  <Link key={props.value} href={props.href} passHref>
                    <a>{getTranslation(props.value)}</a>
                  </Link>
                ) : null
              )}
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
