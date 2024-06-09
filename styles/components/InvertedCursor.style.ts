import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 992px) {
    content: "";
    position: absolute;
    z-index: 999;
    top: var(--y, -100px);
    left: var(--x, -100px);

    width: 2.5em;
    height: 2.5em;

    background: #fff;
    border-radius: 50%;
    mix-blend-mode: difference;

    transition: 0.3s ease-in scale;
    transform: translate(-50%, -50%);
    scale: 0.45;

    pointer-events: none;
  }
`;
