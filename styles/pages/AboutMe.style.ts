import styled from "styled-components";

const BodyContainer = styled.div`
  padding: 1rem 2rem;

  font-size: 1.5rem;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  align-items: center;
  gap: 2rem;

  margin-bottom: 2rem;

  @media (min-width: 720px) {
    gap: 10rem;
    flex-direction: row;
    align-items: stretch;
  }
`;

const SectionContent = styled.p`
  flex: 3 0 0;
  text-align: justify;
`;

const TLDRImageContainer = styled.div`
  flex: 0 0 auto;

  width: 224px;
  height: 224px;

  padding: 0.5rem;

  background-color: #ece8be;
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 720px) {
    margin-right: 5rem;
  }

  img {
    /* z-index: -1; */

    /* filter: grayscale(100%); */
    border-radius: 100%;

    user-select: none;
  }
`;

const InDetailLineContainer = styled.div`
  display: none;

  @media screen and (min-width: 720px) {
    flex: 1 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 1em 0 0 0;
  }
`;

export {
  BodyContainer,
  SectionContainer,
  SectionContent,
  TLDRImageContainer,
  InDetailLineContainer,
};
