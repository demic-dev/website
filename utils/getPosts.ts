// #region ::: IMPORTS
// libs
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
// types
import { MetadataPost, ParsedPost } from "../types/post";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
// #endregion ::: IMPORTS

const postsDirectory = path.join(process.cwd(), "content/posts");

/**
 * Fetch the written posts from the `posts` directory and returns only their metadata, sorted by date.
 * @returns {MetadataPost[]}
 */
export function getSortedPostsData(): MetadataPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      ...(matterResult.data as MetadataPost),
      id,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * Fetch all the posts id and parse in a next-readable way.
 * @returns {Params[]}
 */
export function getAllPostIds(): Params[] {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

/**
 * Fetch the post from the `posts` directory and return the whole post content.
 * @param id the post id
 * @returns {ParsedPost}
 */
export async function getPostData(id: string): Promise<ParsedPost> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    ...(matterResult.data as MetadataPost),
    id,
    contentHtml,
  };
}
