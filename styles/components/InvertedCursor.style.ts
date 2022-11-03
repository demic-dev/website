import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 992px) {
    content: "";
    position: absolute;
    z-index: 999;
    top: var(--y, -100px);
    left: var(--x, -100px);
    width: 2em;
    height: 2em;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0.45);
    background: #fff;
    mix-blend-mode: difference;
    transition: 0.3s ease-in transform;

    pointer-events: none;
  }
`;
