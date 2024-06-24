import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 720px) {
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

    /* mix-blend-mode: difference; */

    transition: padding 0.3s ease-in, width 0.3s, height 0.3s;

    /* transform: translate(-50%, -50%); */
    /* scale: 0.45; */

    pointer-events: none;
  }
`;
