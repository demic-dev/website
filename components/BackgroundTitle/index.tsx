"use client";
// #region ::: IMPORTS
// libs
import React from "react";
// styles
import { Container } from "./style";
// #endregion ::: IMPORTS

const DISABLED_ROUTES =
  /^(?!\/$)(?!\/posts\/[^\/]+$)(?!\/projects\/[^\/]+$).*/gm;

type Props = {
  title: string;
  route: string;
};

const BackgroundTitle: React.FC<Props> = ({ title, route }) => {
  if (!route.match(DISABLED_ROUTES)) {
    return null;
  }

  return <Container suppressHydrationWarning>{title}</Container>;
};

export default BackgroundTitle;
