// #region ::: IMPORTS
// libs
import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// components
import PostCard from "../../components/PostCard";
import ContentWrapper from "../../components/ContentWrapper";
// styles
import * as styled from "../../styles/pages/posts/index.style";
// utils
import { getSortedPostsData } from "../../utils/getPosts";
// types
import { MetadataPost } from "../../types/post";
import { LanguageProp } from "../../types/language";
// #endregion ::: IMPORTS

export async function getStaticProps({ locale }: LanguageProp) {
  const postsMeta = getSortedPostsData();

  return {
    props: {
      postsMeta,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

const Blog: NextPage<{ postsMeta: MetadataPost[] }> = ({ postsMeta }) => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("blog.index.title")}</title>
        <meta name="description" content="Michele De Cillis's website" />
        <meta name="author" content="Michele De Cillis" />
      </Head>

      <ContentWrapper>
        <h1
          dangerouslySetInnerHTML={{
            __html: t("blog.index.title"),
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
