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
import { appWithTranslation, useTranslation } from "next-i18next";
// components
import InvertedCursor from "../components/InvertedCursor";
// styles
import * as styled from "../styles/pages/_app.style";
// utils
import { AVAILABLE_LANGUAGES } from "../utils/translations";
import { GlobalStyles, themes } from "../utils/ThemeConfig";
// data
import { HEADER_LINKS } from "../data/links";
// types
import { Language } from "../types/language";
import dynamic from "next/dynamic";
// #endregion ::: IMPORTS

const NoSSRBackgroundTitle = dynamic(
  () => import("../components/BackgroundTitle"),
  { ssr: false }
);

const useBreakpoint = createBreakpoint({ L: 720, S: 350 });

function MyApp({ Component, pageProps }: AppProps) {
  const [themeIndex, setThemeIndex] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [currentPageTitle, setCurrentPageTitle] = useState<string>(
    typeof window === "undefined" ? "" : document.title
  );

  const { t } = useTranslation();

  const { route: currentRoute, events, ...router } = useRouter();

  const headerRef = useRef<HTMLElement>(null);
  const breakpoint = useBreakpoint();

  const headerHeight = headerRef.current?.clientHeight;

  const handleMenu = () => setIsMenuOpen((v) => !v);

  const handleThemeIndex = () =>
    setThemeIndex((idx) => (idx + 1) % themes.length);

  const handleLanguage = (code: Language) => () => {
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      undefined,
      { locale: code }
    );
  };

  const activeTheme = themes[themeIndex];
  const nextTheme = themes[(themeIndex + 1) % themes.length];

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
    if (breakpoint !== "S") {
      setIsMenuOpen(false);
    }
  }, [breakpoint]);

  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyles />
      <InvertedCursor route={currentRoute} />
      <NoSSRBackgroundTitle title={currentPageTitle} route={currentRoute} />
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
                <Link
                  passHref
                  key={props.value}
                  href={props.href}
                  locale={props.locale}
                >
                  <styled.HeaderLinks selected={props.href === router.pathname}>
                    {t(props.value)}
                  </styled.HeaderLinks>
                </Link>
              ))}
            </styled.ModalLinksContainer>
          </styled.ModalContainer>
        ) : null}
        {/* default header on pc and mobile */}

        <styled.HeaderWrapper ref={headerRef}>
          <styled.HeaderButtonContainer>
            <styled.ThemeSwitcherButton onClick={handleThemeIndex}>
              {nextTheme.emoji}
            </styled.ThemeSwitcherButton>

            {AVAILABLE_LANGUAGES.map((lang) => (
              <styled.ThemeSwitcherButton
                key={lang.code}
                onClick={handleLanguage(lang.code)}
                selected={lang.code === router.locale}
              >
                {lang.flag}
              </styled.ThemeSwitcherButton>
            ))}
          </styled.HeaderButtonContainer>

          <styled.HeaderLinksContainer>
            {HEADER_LINKS.map((props) => (
              <Link
                passHref
                key={props.value}
                href={props.href}
                locale={props.locale}
              >
                <styled.HeaderLinks selected={props.href === router.pathname}>
                  {t(props.value)}
                </styled.HeaderLinks>
              </Link>
            ))}
          </styled.HeaderLinksContainer>

          <styled.HeaderMenuButton onClick={handleMenu}>
            {isMenuOpen ? "✕" : "☰"}
          </styled.HeaderMenuButton>
        </styled.HeaderWrapper>

        <Component {...pageProps} />
      </styled.Container>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
