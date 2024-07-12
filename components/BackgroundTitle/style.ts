import styled from "styled-components";

export const Container = styled.div`
  display: none;

  @media screen and (min-width: 720px) {
    display: initial;

    position: absolute;
    bottom: 1rem;
    left: 0;
    z-index: -1;

    max-width: 100%;
    overflow-x: hidden;

    margin-left: 1rem;

    font-size: 12rem;
    font-weight: bold;
    color: ${({theme}) => theme.text};

    opacity: 0.1;
    user-select: none;
  }
`;
