// #region ::: IMPORTS
// general imports
import "../styles/globals.css";
// libs
import { useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
// types
import type { PageProps } from "../types/page";
// utils
import { GlobalStyles, themes } from "../utils/ThemeConfig";
import InvertedCursor from "../components/InvertedCursor";
// #endregion ::: IMPORTS

function MyApp({ Component }: AppProps<PageProps>) {
  const [themeIndex, setThemeIndex] = useState<number>(0);

  const handleThemeIndex = () =>
    setThemeIndex((idx) => {
      if (idx === themes.length - 1) {
        return 0;
      }

      return idx + 1;
    });

  return (
    <ThemeProvider theme={themes[themeIndex]}>
      <GlobalStyles />
      <InvertedCursor />
      <Component handleThemeIndex={handleThemeIndex} />
    </ThemeProvider>
  );
}

export default MyApp;
