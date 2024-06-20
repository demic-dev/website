// #region ::: IMPORTS
// libs
import styled from "styled-components";
// #endregion ::: IMPORTS

const Container = styled.div`
  padding: 2rem 1rem;

  display: flex;
  align-items: flex-start;
  gap: 2rem;
`;

const Image = styled.div`
  width: 64px;
  height: 64px;

  background-color: gray;

  flex: 0 0 auto;
`;

const MetaDataContainer = styled.div`
  a {
    font-size: 1.5rem;
    font-weight: 700;
  }

  p {
    margin: 1rem 0 1.25rem 0;

    font-size: 1.25rem;
    font-weight: 400;

    color: #323232;
  }
`;

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

export { Container, Image, MetaDataContainer, TagsContainer, TagContainer };
