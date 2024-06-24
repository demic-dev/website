// #region ::: IMPORTS
// libs
import React from "react";
import Head from "next/head";
import { NextPage } from "next";
// components
import ProjectCard from "../../components/ProjectCard";
import ContentWrapper from "../../components/ContentWrapper";
// styles
import * as styled from "../../styles/pages/projects/index.style";
// utils
import { getTranslation } from "../../utils/translations";
import { getSortedProjectsData } from "../../utils/getProjects";
// types
import { MetadataProject } from "../../types/project";
// #endregion ::: IMPORTS

export async function getStaticProps() {
  const projectsMeta = getSortedProjectsData();

  return {
    props: {
      projectsMeta,
    },
  };
}

const Blog: NextPage<{ projectsMeta: MetadataProject[] }> = ({
  projectsMeta,
}) => {
  return (
    <>
      <Head>
        <title>{getTranslation("projects.index.title")}</title>
        <meta name="description" content="Michele De Cillis's website" />
        <meta name="author" content="Michele De Cillis" />
      </Head>
      <ContentWrapper>
        <h1
          dangerouslySetInnerHTML={{
            __html: getTranslation("projects.index.title"),
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
