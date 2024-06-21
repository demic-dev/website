// #region ::: IMPORTS
// libs
import React from "react";
import { NextPage } from "next";
import Head from "next/head";
// components
import PostCard from "../../components/PostCard";
import ContentWrapper from "../../components/ContentWrapper";
// styles
import * as styled from "../../styles/pages/posts/index.style";
// utils
import { getTranslation } from "../../utils/translations";
import { getSortedPostsData } from "../../utils/getPosts";
// types
import { MetadataPost } from "../../types/post";
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
      <Head>
        <title>{getTranslation("blog.index.title")}</title>
        <meta name="description" content="Michele De Cillis's website" />
        <meta name="author" content="Michele De Cillis" />
      </Head>

      <ContentWrapper>
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
      </ContentWrapper>
    </>
  );
};

export default Blog;
