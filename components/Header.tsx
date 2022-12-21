// #region ::: IMPORTS
// libs
import React, { useEffect, useRef, useState } from "react";
import { createBreakpoint } from "react-use";
// styles
import * as styled from "../styles/components/Header.style";
// data
import { HEADER_LINKS } from "../data/links";
// utils
import { renderLink } from "../utils/renderLink";
// #endregion ::: IMPORTS

const useBreakpoint = createBreakpoint({ L: 640, S: 350 });

type Props = {
  handleThemeIndex: () => void;
};

const Header: React.FC<Props> = ({ handleThemeIndex }) => {
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
    </>
  );
};

export default Header;
