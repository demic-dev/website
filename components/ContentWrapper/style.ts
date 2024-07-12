import styled from "styled-components";

const BodyContainer = styled.div`
  width: auto;

  margin: 0 auto;
  padding: 1rem 2rem;

  h1 {
    margin-bottom: 2rem;
  }

  @media (min-width: 720px) {
    max-width: 40rem;
  }
`;

export { BodyContainer };
