// #region ::: IMPORTS
// libs
import React from "react";
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
  );
};

export default Blog;
