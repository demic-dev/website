// #region ::: IMPORTS
// libs
import React from "react";
import { NextPage } from "next";
// components
import ContentWrapper from "../../components/ContentWrapper";
// utils
import { getAllPostIds, getPostData } from "../../utils/getPosts";
// types
import { ParsedPost } from "../../types/post";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
// #endregion ::: IMPORTS

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: Params) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

const Post: NextPage<{ postData: ParsedPost }> = ({ postData }) => {
  return (
    <ContentWrapper>
      <h1>{postData.title}</h1>
      <small>{postData.date}</small>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </ContentWrapper>
  );
};

export default Post;
