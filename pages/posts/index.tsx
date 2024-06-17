// #region ::: IMPORTS
// libs
import React from "react";
import { NextPage } from "next";
// styles
import * as styled from "../../styles/pages/posts/index.style";
// utils
import { getTranslation } from "../../utils/translations";
import { getSortedPostsData } from "../../utils/getPosts";
import { MetadataPost } from "../../types/post";
import PostCard from "../../components/PostCard";
// #endregion ::: IMPORTS

export async function getStaticProps() {
  const postsMeta = getSortedPostsData();

  return {
    props: {
      postsMeta,
    },
  };
}

const Blog: NextPage<{ postsMeta: MetadataPost[] }> = ({ postsMeta }) => {
  return (
    <>
      <styled.BodyContainer>
        <h1
          dangerouslySetInnerHTML={{
            __html: getTranslation("blog.index.title"),
          }}
        />
        <styled.PostsContainer>
          {postsMeta.map((p) => (
            <PostCard {...p} key={p.id} />
          ))}
        </styled.PostsContainer>
      </styled.BodyContainer>
    </>
  );
};

export default Blog;
