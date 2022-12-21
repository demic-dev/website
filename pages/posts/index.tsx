// #region ::: IMPORTS
// libs
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import slugify from "slugify";
// types
import type { NextPage } from "next";
import type { PageProps } from "../../types/page";
import type { PostInfo } from "../../types/post";
// components
import Header from "../../components/Header";
// styles
// utils
// #endregion ::: IMPORTS

// https://blog.openreplay.com/creating-a-markdown-blog-powered-by-next-js-in-under-an-hour

type Props = PageProps & {
  posts: PostInfo[];
};

const Posts: NextPage<Props> = (props) => {
  return (
    <div>
      <Header handleThemeIndex={props.handleThemeIndex} />
      {props.posts.map((p) => (
        <div key={p.slug}>
          {p.tags}
          <br />
          {p.title}
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync("data/posts");
  const posts = files.map((fileName) => {
    const post = fs.readFileSync(`data/posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(post);
    const slug = slugify(frontmatter.title, {
      lower: true,
      remove: /[*+~.()'"!:@]/g,
    });

    return { ...frontmatter, slug };
  });

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
