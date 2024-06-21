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
  gap: 4rem;

  @media (min-width: 720px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

const SectionContent = styled.p`
  flex: 3 0 0;
  text-align: justify;
`;

const TLDRImageContainer = styled.div`
  flex: 1 0 auto;

  width: 148px;
  height: 148px;

  background-color: lightgray;
  border-radius: 4px;

  rotate: 0.45rad;

  /* TO DELETE */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InDetailLineContainer = styled.div`
  flex: 1 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 1em 0 0 0;
`;

export {
  BodyContainer,
  SectionContainer,
  SectionContent,
  TLDRImageContainer,
  InDetailLineContainer,
};
