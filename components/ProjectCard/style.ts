// #region ::: IMPORTS
// libs
import styled from "styled-components";
// #endregion ::: IMPORTS

const Container = styled.div`
  padding: 2rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 0.5rem;
  
  @media screen and (min-width: 720px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;

  width: 100%;
  height: 256px;

  flex: 0 0 auto;

  @media screen and (min-width: 720px) {
    width: 64px;
    height: 64px;
  }
`;

const MetaDataContainer = styled.div`
  a {
   text-decoration: none;
  }

  p {
    margin: 1rem 0 1.25rem 0;

    font-size: 1.25rem;
    font-weight: 400;

    color: #323232;
  }
`;

export { Container, ImageContainer, MetaDataContainer };
