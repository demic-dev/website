// #region ::: IMPORTS
// libs
import React from "react";
import Link from "next/link";
// components
import TagsBadges from "../TagsBadges";
// styles
import * as styled from "./style";
// types
import { MetadataProject } from "../../types/project";
import Image from "next/image";
// #endregion ::: IMPORTS

const ProjectCard: React.FC<MetadataProject> = (project) => {
  return (
    <styled.Container>
      <styled.ImageContainer>
        <Image
          src={project.headImage}
          alt={project.headAlt}
          layout="fill"
          objectFit="fill"
        />
      </styled.ImageContainer>
      <styled.MetaDataContainer>
        <Link href={`/projects/${project.id}`}>{project.title}</Link>
        <p>{project.description}</p>
        <TagsBadges tags={project.tags} />
      </styled.MetaDataContainer>
    </styled.Container>
  );
};

export default ProjectCard;
