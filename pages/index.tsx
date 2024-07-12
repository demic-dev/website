// #region ::: IMPORTS
// libs
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// types
import type { NextPage } from "next";
// styles
import * as styled from "../styles/pages/index.style";
// data
import { FOOTER_LINKS } from "../data/links";
// types
import { LanguageProp } from "../types/language";
// #endregion ::: IMPORTS

export async function getStaticProps({ locale }: LanguageProp) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const Home: NextPage<LanguageProp> = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>home</title>
        <meta name="description" content={t("/.index.meta-description")} />
        <meta name="author" content="Michele De Cillis" />
      </Head>

      <styled.BodyContainer>
        <div dangerouslySetInnerHTML={{ __html: t("/.index.hero") }} />
      </styled.BodyContainer>

      <footer>
        <styled.FooterContainer>
          {FOOTER_LINKS.map((props) => (
            <Link href={props.href} key={props.value} passHref>
              <a target={"_blank"} rel={"noopener"}>
                {t(props.value)}
              </a>
            </Link>
          ))}
        </styled.FooterContainer>
      </footer>
    </>
  );
};

export default Home;
