// #region ::: IMPORTS
// libs
import Link from "next/link";
import styled from "styled-components";
// #endregion ::: IMPORTS

const Container = styled.div`
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.a`
  font-size: 1.75rem;
  font-weight: 700;

  text-decoration: none;
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

export { Container, MetaDataContainer, TitleContainer };
