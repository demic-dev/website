// #region ::: IMPORTS
// libs
import React from "react";
import { NextPage } from "next";
// styles
import * as styled from "../../styles/pages/projects/index.style";
// utils
import { getTranslation } from "../../utils/translations";
import ProjectCard from "../../components/ProjectCard";
import { MetadataProject } from "../../types/project";
// #endregion ::: IMPORTS

const projects: MetadataProject[] = [
  {
    id: "uno",
    title: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet convallis dui quis porttitor lacus. Mi gravida dui fermentum ut.",
    tags: ["react", "typescript"],
  },
  {
    id: "due",
    title: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet convallis dui quis porttitor lacus. Mi gravida dui fermentum ut.",
    tags: ["react", "typescript"],
  },
  {
    id: "due",
    title: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet convallis dui quis porttitor lacus. Mi gravida dui fermentum ut.",
    tags: ["react", "typescript"],
  },
  {
    id: "due",
    title: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet convallis dui quis porttitor lacus. Mi gravida dui fermentum ut.",
    tags: ["react", "typescript"],
  },
  {
    id: "due",
    title: "lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet convallis dui quis porttitor lacus. Mi gravida dui fermentum ut.",
    tags: ["react", "typescript"],
  },
];

const Blog: NextPage<{}> = () => {
  return (
    <>
      <styled.BodyContainer>
        <h1
          dangerouslySetInnerHTML={{
            __html: getTranslation("projects.index.title"),
          }}
        />
        <styled.ProjectsContainer>
          {projects.map((p) => (
            <ProjectCard {...p} key={p.id} />
          ))}
        </styled.ProjectsContainer>
      </styled.BodyContainer>
    </>
  );
};

export default Blog;
