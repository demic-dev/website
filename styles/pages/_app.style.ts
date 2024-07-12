import Link from "next/link";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.5rem 2rem;

  @media (min-width: 720px) {
    padding: 2.5rem 4rem;
  }
`;

const HeaderMenuButton = styled.button`
  font-size: 2rem;

  @media (min-width: 720px) {
    display: none;
  }
`;

const HeaderLinksContainer = styled.div`
  display: none;

  @media (min-width: 720px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 3rem;

    font-size: 1.5rem;
  }
`;

const HeaderButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  & > :first-child {
    margin-right: 1rem;
  }
`;

const ThemeSwitcherButton = styled.button<{ selected?: boolean }>`
  font-size: 2rem;

  text-decoration: ${({ selected }) => (selected ? "underline" : "none")};
  text-decoration-style: wavy;
`;

const slideFromBottom = keyframes`
  0% {
      transform: translateY(100%);
  }
  100% {
      transform: translateY(0);
  }
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  z-index: 1;

  width: 100%;
  height: 100%;
  overflow: hidden;

  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  padding: 1.5rem 2rem;
  box-sizing: border-box;

  animation: 0.25s ease-in 0s 1 ${slideFromBottom};
`;

const ModalLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.5rem;

  font-size: 2.5rem;

  @media screen and (min-width: 720px) {
    font-size: 3rem;
  }
`;

const HeaderLinks = styled.a<{ selected?: boolean }>`
  text-decoration-style: ${({ selected }) => (selected ? "wavy" : "inherit")};
`;

export {
  Container,
  HeaderLinksContainer,
  HeaderWrapper,
  HeaderMenuButton,
  HeaderButtonContainer,
  ThemeSwitcherButton,
  ModalContainer,
  ModalLinksContainer,
  HeaderLinks,
};
