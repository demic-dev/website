// #region ::: IMPORTS
// general imports
import "../styles/globals.css";
// libs
import type { AppProps } from "next/app";
import { createBreakpoint } from "react-use";
import { ThemeProvider } from "styled-components";
import { useEffect, useRef, useState } from "react";
// components
import CustomLink from "../components/CustomLink";
// styles
import * as styled from "../styles/pages/_app.style";
// utils
import { HEADER_LINKS } from "../data/links";
import { GlobalStyles, themes } from "../utils/ThemeConfig";
import InvertedCursor from "../components/InvertedCursor";
import { Languages } from "../types";
// #endregion ::: IMPORTS

const useBreakpoint = createBreakpoint({ L: 640, S: 350 });

function MyApp({ Component }: AppProps) {
  // const [] = useState<Languages>(
  //   localStorage.getItem("lang") || navigator?.language
  // );
  const [themeIndex, setThemeIndex] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const headerRef = useRef<HTMLElement>(null);

  const breakpoint = useBreakpoint();

  const headerHeight = headerRef.current?.clientHeight;

  const handleMenu = () => setIsMenuOpen((v) => !v);

  const handleThemeIndex = () =>
    setThemeIndex((idx) => (idx + 1) % themes.length);

  const handleLanguage = () => {};

  useEffect(() => {
    if (breakpoint !== "S") {
      setIsMenuOpen(false);
    }
  }, [breakpoint]);

  return (
    <ThemeProvider theme={themes[themeIndex]}>
      <GlobalStyles />
      <InvertedCursor />
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
              {HEADER_LINKS.map(CustomLink)}
            </styled.ModalLinksContainer>
          </styled.ModalContainer>
        ) : null}
        {/* default header on pc and mobile */}
        <header ref={headerRef}>
          <styled.HeaderWrapper>
            <styled.HeaderButtonContainer>
              <styled.ThemeSwitcherButton onClick={handleThemeIndex}>
                ⥃
              </styled.ThemeSwitcherButton>
              <styled.ThemeSwitcherButton onClick={handleLanguage}>
                🌐
              </styled.ThemeSwitcherButton>
            </styled.HeaderButtonContainer>

            <styled.HeaderLinksContainer>
              {HEADER_LINKS.map(CustomLink)}
            </styled.HeaderLinksContainer>

            <styled.HeaderMenuButton onClick={handleMenu}>
              {isMenuOpen ? "✕" : "☰"}
            </styled.HeaderMenuButton>
          </styled.HeaderWrapper>
        </header>

        <Component />
      </styled.Container>
    </ThemeProvider>
  );
}

export default MyApp;
