import styled from "styled-components";

const BodyContainer = styled.div`
  width: auto;

  margin: 0 auto;
  padding: 1rem 2rem;

  font-size: 1.5rem;

  @media (min-width: 720px) {
    max-width: 40rem;
  }
`;

const PostsContainer = styled.main`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

export { BodyContainer, PostsContainer };
