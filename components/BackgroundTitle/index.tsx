"use client";
// #region ::: IMPORTS
// libs
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
// styles
import { Container } from "./style";
// #endregion ::: IMPORTS

const DISABLED_ROUTE = ["/"];

const BackgroundTitle = () => {
  const [title, setTitle] = useState<string>("");
  const { route } = useRouter();
  
  console.log("ciao!!");
  useEffect(() => {
    console.log("ciao");
    setTitle(document.title.toLowerCase());
  }, [route]);
  
  if (typeof window === "undefined" || DISABLED_ROUTE.includes(route)) {
    return null;
  }

  return <Container>{title}</Container>;
};

export default BackgroundTitle;
