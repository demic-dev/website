import styled from "styled-components";

const FooterContainer = styled.div`
  padding: 1.5rem 2rem;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 3rem;

  font-size: 1.5rem;

  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  @media (min-width: 720px) {
    padding: 2.5rem 4rem;
  }

  a {
    flex: 1 0 auto;
  }
`;

const BodyContainer = styled.div`
  padding: 1rem;

  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3rem;
  font-weight: 600;
  text-align: center;

  @media (min-width: 720px) {
    padding: 0.5rem;

    font-size: 4rem;
  }
`;

export { FooterContainer, BodyContainer };
