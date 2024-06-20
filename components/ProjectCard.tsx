// #region ::: IMPORTS
// libs
import React from "react";
// styles
import * as styled from "../styles/components/ProjectCard.style";
// types
import { MetadataProject } from "../types/project";
import Link from "next/link";
// #endregion ::: IMPORTS

const ProjectCard: React.FC<MetadataProject> = (project) => {
  return (
    <styled.Container>
      <styled.Image />
      <styled.MetaDataContainer>
        <Link href={`/projects/${project.id}`}>{project.title}</Link>
        <p>{project.description}</p>
        <styled.TagsContainer>
          {project.tags.map((t) => (
            <styled.TagContainer key={t}>{t}</styled.TagContainer>
          ))}
        </styled.TagsContainer>
      </styled.MetaDataContainer>
    </styled.Container>
  );
};

export default ProjectCard;
