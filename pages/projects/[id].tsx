// #region ::: IMPORTS
// libs
import React from "react";
import Image from "next/image";
import { NextPage } from "next";
// components
import TagsBadges from "../../components/TagsBadges";
import ContentWrapper from "../../components/ContentWrapper";
// styles
import * as styled from "../../styles/pages/projects/[id].style";
// utils
import { getAllProjectIds, getProjectData } from "../../utils/getProjects";
// types
import { ParsedProject } from "../../types/project";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
// #endregion ::: IMPORTS

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: Params) {
  const projectData = await getProjectData(params.id);

  return {
    props: {
      projectData,
    },
  };
}

const Project: NextPage<{ projectData: ParsedProject }> = ({ projectData }) => {
  return (
    <ContentWrapper>
      {projectData.headImage ? (
        <styled.HeadingImageContainer>
          <Image
            layout="fill"
            objectFit="fill"
            src={projectData.headImage}
            alt={projectData.headAlt}
          />
        </styled.HeadingImageContainer>
      ) : null}
      <h1>{projectData.title}</h1>
      <TagsBadges tags={projectData.tags} />
      <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
    </ContentWrapper>
  );
};

export default Project;
