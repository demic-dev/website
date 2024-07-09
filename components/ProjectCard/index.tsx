// #region ::: IMPORTS
// libs
import React from "react";
import Link from "next/link";
import Image from "next/image";
// components
import TagsBadges from "../TagsBadges";
// styles
import * as styled from "./style";
// types
import { MetadataProject } from "../../types/project";
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
        <h2>
          <Link
            href={{
              pathname: `projects/[id]`,
              query: { id: project.id },
            }}
            passHref
          >
            {project.title}
          </Link>
        </h2>
        <p>{project.description}</p>
        <TagsBadges tags={project.tags} />
      </styled.MetaDataContainer>
    </styled.Container>
  );
};

export default ProjectCard;
