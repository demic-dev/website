// #region ::: IMPORTS
// libs
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { createBreakpoint } from "react-use";
// types
import type { NextPage } from "next";
import type { ILink } from "../types/link";
// styles
import * as styled from "../styles/pages/Home.style";
// data
import { HEADER_LINKS, FOOTER_LINKS } from "../data/links";
import { PageProps } from "../types/page";
// #endregion ::: IMPORTS

const useBreakpoint = createBreakpoint({ L: 640, S: 350 });

const renderLink = ({ href, value, newWindow }: ILink) => (
  <Link href={href} passHref>
    <a
      target={newWindow ? "_blank" : undefined}
      rel={newWindow ? "noopener" : undefined}
    >
      {value}
    </a>
  </Link>
);

const Home: NextPage<PageProps> = ({ handleThemeIndex }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const headerRef = useRef<HTMLElement>(null);

  const breakpoint = useBreakpoint();

  const handleMenu = () => setIsMenuOpen((v) => !v);

  useEffect(() => {
    if (breakpoint !== "S") {
      setIsMenuOpen(false);
    }
  }, [breakpoint]);

  const headerHeight = headerRef.current?.clientHeight;

  return (
    <>
      <Head>
        <title>home</title>
        <meta name="description" content="Michele De Cillis's website" />
        <meta name="author" content="Michele De Cillis" />
      </Head>

      <styled.Container>
        {isMenuOpen ? (
          <styled.ModalContainer
            style={{
              top: headerHeight,
              height: `calc(100vh - ${headerHeight}px)`,
            }}
          >
            <styled.ModalLinksContainer>
              {HEADER_LINKS.map(renderLink)}
            </styled.ModalLinksContainer>
          </styled.ModalContainer>
        ) : null}
        <header ref={headerRef}>
          <styled.HeaderWrapper>
            <styled.ThemeSwitcherButton onClick={handleThemeIndex}>
              ⥃
            </styled.ThemeSwitcherButton>

            <styled.HeaderMenuButton onClick={handleMenu}>
              {isMenuOpen ? "✕" : "☰"}
            </styled.HeaderMenuButton>
            <styled.HeaderLinksContainer>
              {HEADER_LINKS.map(renderLink)}
            </styled.HeaderLinksContainer>
          </styled.HeaderWrapper>
        </header>

        <styled.BodyContainer>
          <div>
            hello 👋 i&apos;m michele de cillis,
            <br />a front-end developer based in 🇮🇹
          </div>
        </styled.BodyContainer>

        <footer>
          <styled.FooterContainer>
            {FOOTER_LINKS.map(renderLink)}
          </styled.FooterContainer>
        </footer>
      </styled.Container>
    </>
  );
};

export default Home;
