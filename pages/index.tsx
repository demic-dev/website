// #region ::: IMPORTS
// libs
import Head from "next/head";
// components
import CustomLink from "../components/CustomLink";
// types
import type { NextPage } from "next";
// styles
import * as styled from "../styles/pages/index.style";
// data
import { FOOTER_LINKS } from "../data/links";
// #endregion ::: IMPORTS

const Home: NextPage<{}> = () => {
  return (
    <>
      <Head>
        <title>home</title>
        <meta name="description" content="Michele De Cillis's website" />
        <meta name="author" content="Michele De Cillis" />
      </Head>

      <styled.BodyContainer>
        <div>
          hello 👋 i&apos;m michele de cillis,
          <br />a developer based in 🇮🇹
        </div>
      </styled.BodyContainer>

      <footer>
        <styled.FooterContainer>
          {FOOTER_LINKS.map(CustomLink)}
        </styled.FooterContainer>
      </footer>
    </>
  );
};

export default Home;
