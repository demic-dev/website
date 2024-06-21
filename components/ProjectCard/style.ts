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

const ImageContainer = styled.div`
  position: relative;

  width: 64px;
  height: 64px;

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

export { Container, ImageContainer, MetaDataContainer };
