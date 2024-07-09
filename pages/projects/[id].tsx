// #region ::: IMPORTS
// libs
import React from "react";
import Image from "next/image";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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
import { Language, LanguageProp } from "../../types/language";
// #endregion ::: IMPORTS

export async function getStaticPaths({ locales }: { locales: Language[] }) {
  const paths = getAllProjectIds()
    .map((params) => {
      // https://nextjs.org/docs/pages/building-your-application/routing/internationalization#dynamic-routes-and-getstaticprops-pages
      return locales.map((locale) => ({
        ...params,
        locale,
      }));
    })
    .flat();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
  locale,
}: Params & LanguageProp) {
  const projectData = await getProjectData(params.id);

  return {
    props: {
      projectData,
      ...(await serverSideTranslations(locale, ["common"])),
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
