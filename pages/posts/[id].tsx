// #region ::: IMPORTS
// libs
import React from "react";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// components
import ContentWrapper from "../../components/ContentWrapper";
// utils
import { getAllPostIds, getPostData } from "../../utils/getPosts";
// types
import { ParsedPost } from "../../types/post";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { Language, LanguageProp } from "../../types/language";
// #endregion ::: IMPORTS

export async function getStaticPaths({ locales }: { locales: Language[] }) {
  const paths = getAllPostIds()
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

export async function getStaticProps({ params, locale }: Params & LanguageProp) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
      ...(await serverSideTranslations(locale, ["common"])),
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
