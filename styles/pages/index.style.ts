import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 3rem;

  font-size: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 1.5rem 2rem;

  @media (min-width: 640px) {
    gap: 6rem;
    padding: 2.5rem 4rem;
  }

  &::-webkit-scrollbar {
    visibility: hidden;
  }
`;

const BodyContainer = styled.div`
  padding: 0.5rem;
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3rem;
  font-weight: 600;
  text-align: center;

  @media (min-width: 640px) {
    font-size: 4rem;
  }
`;

export { FooterContainer, BodyContainer };
