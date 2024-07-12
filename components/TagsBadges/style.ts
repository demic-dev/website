import styled from "styled-components";

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 1.125rem;
  font-weight: 300;
`;

const TagContainer = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background-color: #4a4a4a;

  color: white;
`;

export { TagsContainer, TagContainer };
