// #region ::: IMPORTS
// libs
import Head from "next/head";
// types
import type { NextPage } from "next";
// styles
import * as styled from "../styles/pages/index.style";
// utils
import { getTranslation } from "../utils/translations";
// data
import { FOOTER_LINKS } from "../data/links";
import Link from "next/link";
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
        <div
          dangerouslySetInnerHTML={{ __html: getTranslation("/.index.hero") }}
        />
      </styled.BodyContainer>

      <footer>
        <styled.FooterContainer>
          {FOOTER_LINKS.map((props) => (
            <Link href={props.href} key={props.value} passHref>
              <a target={"_blank"} rel={"noopener"}>
                {getTranslation(props.value)}
              </a>
            </Link>
          ))}
        </styled.FooterContainer>
      </footer>
    </>
  );
};

export default Home;
