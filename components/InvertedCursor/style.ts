import styled from "styled-components";

export const Container = styled.div`
  display: none;
  @media screen and (min-width: 720px) {
    display: initial;

    content: "";
    position: absolute;
    z-index: 999;
    top: var(--y, -100px);
    left: var(--x, -100px);

    width: 0.5rem;
    height: 0.5rem;

    padding: 1rem;

    background-color: gray;
    background-clip: content-box;
    border: 1px solid gray;
    border-radius: 50%;

    transform: translate(-50%, -50%);

    transition: padding 0.3s ease-in, width 0.3s, height 0.3s;

    pointer-events: none;
  }
`;
