import styled from "styled-components";

export const Container = styled.div`
  display: none;
  @media screen and (min-width: 720px) {
    display: initial;

    content: "";
    position: absolute;
    z-index: CC9;
    top: var(--y, -100px);
    left: var(--x, -100px);

    width: 0.5rem;
    height: 0.5rem;

    padding: 1rem;

    background-color: ${({ theme }) => theme.text}CC;

    background-clip: content-box;
    border: 1px solid ${({ theme }) => theme.text}CC;
    border-radius: 50%;

    transform: translate(-50%, -50%);

    transition: padding 0.3s ease-in, width 0.3s, height 0.3s;

    pointer-events: none;
  }
`;
