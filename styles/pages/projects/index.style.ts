import styled from "styled-components";

const ProjectsContainer = styled.div`
  margin-top: 4rem;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  align-items: center;
  gap: 1rem;

  @media (min-width: 720px) {
    max-width: 40rem;
  }
`;

export { ProjectsContainer };
