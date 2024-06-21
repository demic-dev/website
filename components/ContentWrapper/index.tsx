import React from "react";
import * as styled from "./style";

type Props = { children: React.ReactNode };

const ContentWrapper: React.FC<Props> = ({ children }) => {
  return <styled.BodyContainer>{children}</styled.BodyContainer>;
};

export default ContentWrapper;
