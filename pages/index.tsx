// #region ::: IMPORTS
// libs
import Head from "next/head";
// types
import type { NextPage } from "next";
// components
import Header from "../components/Header";
// styles
import * as styled from "../styles/pages/Home.style";
// data
import { FOOTER_LINKS } from "../data/links";
import { PageProps } from "../types/page";
// utils
import { renderLink } from "../utils/renderLink";
// #endregion ::: IMPORTS

const Home: NextPage<PageProps> = ({ handleThemeIndex }) => {
  return (
    <>
      <Head>
        <title>home</title>
        <meta name="description" content="Michele De Cillis's website" />
        <meta name="author" content="Michele De Cillis" />
      </Head>

      <styled.Container>
        <Header handleThemeIndex={handleThemeIndex} />
        <styled.BodyContainer>
          <div>
            hello 👋 i&apos;m michele de cillis,
            <br />a front-end developer based in 🇮🇹
          </div>
        </styled.BodyContainer>

        <footer>
          <styled.FooterContainer>
            {FOOTER_LINKS.map(renderLink)}
          </styled.FooterContainer>
        </footer>
      </styled.Container>
    </>
  );
};

export default Home;
