// #region ::: IMPORTS
// libs
import styled from "styled-components";
// #endregion ::: IMPORTS

const Container = styled.div`
  display: flex;
  flex-direction: column;

  a {
    font-size: 1.75rem;
    font-weight: 700;

    text-decoration: none;
  }
`;

const MetaDataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: gray;
  font-weight: 900;

  small {
    font-size: 1.125rem;
    font-weight: 400;
  }
`;

export { Container, MetaDataContainer };
