// #region ::: IMPORTS
// libs
import Head from "next/head";
import Image from "next/image";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// styles
import * as styled from "../styles/pages/AboutMe.style";
// utils
import { MD_COMPONENTS } from "../utils/translations";
// types
import type { NextPage } from "next";
import { LanguageProp } from "../types/language";
// #endregion ::: IMPORTS

export async function getStaticProps({ locale }: LanguageProp) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const AboutMe: NextPage<{}> = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("/.about-me.title")}</title>
        <meta name="description" content={t("/.about-me.meta-description")} />
        <meta name="author" content="Michele De Cillis" />
      </Head>

      <styled.BodyContainer>
        <h1
          dangerouslySetInnerHTML={{
            __html: t("/.about-me.tl-dr.title"),
          }}
        />
        <styled.SectionContainer>
          <styled.SectionContent>
            <Trans
              i18nKey="/.about-me.tl-dr.content"
              t={t}
              components={{
                // cannot start from 0 because is a falsy value
                1: (
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.unimi.it/en/education/bachelor/computer-science"
                  />
                ),
                ...MD_COMPONENTS,
              }}
            />
          </styled.SectionContent>
          <styled.TLDRImageContainer>
            <Image
              width="232"
              height="232"
              src={require("../data/profile.png")}
              alt=""
              objectFit="cover"
              draggable={false}
            />
          </styled.TLDRImageContainer>
        </styled.SectionContainer>
        <h1
          dangerouslySetInnerHTML={{
            __html: t("/.about-me.in-detail.title"),
          }}
        />
        <styled.SectionContainer>
          <styled.InDetailLineContainer>
            <div />
          </styled.InDetailLineContainer>
          <styled.SectionContent>
            <Trans
              i18nKey="/.about-me.in-detail.content"
              t={t}
              components={{
                // cannot start from 0 because is a falsy value
                1: (
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.itisandria.it/component/content/article/2-non-categorizzato/2373-la-tombolata-dell-itis-e-su-repubblica.html"
                  />
                ),
                2: (
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.onlineimpresa.it/"
                  />
                ),
                3: (
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://humanvsmachine.co/"
                  />
                ),
                4: (
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.unimi.it/en/education/bachelor/computer-science"
                  />
                ),
                5: (
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://ecole-universitaire-paris-saclay.fr/formation/licence/informatique"
                  />
                ),
                6: (
                  <a href="https://github.com/demic-dev/als-biomarker-identification-project" />
                ),
                ...MD_COMPONENTS,
              }}
            />
          </styled.SectionContent>
        </styled.SectionContainer>
      </styled.BodyContainer>
    </>
  );
};

export default AboutMe;
