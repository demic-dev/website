// #region ::: IMPORTS
// libs
import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import { useTranslation } from "next-i18next";
// components
import ProjectCard from "../../components/ProjectCard";
import ContentWrapper from "../../components/ContentWrapper";
// styles
import * as styled from "../../styles/pages/projects/index.style";
// utils
import { getSortedProjectsData } from "../../utils/getProjects";
// types
import { MetadataProject } from "../../types/project";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { LanguageProp } from "../../types/language";
// #endregion ::: IMPORTS

export async function getStaticProps({ locale }: LanguageProp) {
  const projectsMeta = getSortedProjectsData();

  return {
    props: {
      projectsMeta,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const Blog: NextPage<{ projectsMeta: MetadataProject[] } & LanguageProp> = ({
  projectsMeta,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("projects.index.title")}</title>
        <meta name="description" content="Michele De Cillis's website" />
        <meta name="author" content="Michele De Cillis" />
      </Head>
      <ContentWrapper>
        <h1
          dangerouslySetInnerHTML={{
            __html: t("projects.index.title"),
          }}
        />
        <styled.ProjectsContainer>
          {projectsMeta.map((p) => (
            <ProjectCard {...p} key={p.id} />
          ))}
        </styled.ProjectsContainer>
      </ContentWrapper>
    </>
  );
};

export default Blog;
