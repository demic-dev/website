// #region ::: IMPORTS
// libs
import React from "react";
import Link from "next/link";
// styles
import * as styled from "../styles/components/PostCard.style";
// types
import { MetadataPost } from "../types/post";
// utils
import { getFormattedDate } from "../utils/translations";
// #endregion ::: IMPORTS

const PostCard: React.FC<MetadataPost> = (post) => {
  return (
    <styled.Container>
      <Link href={`/posts/${post.id}`} passHref>
        <styled.TitleContainer>{post.title.toLowerCase()}</styled.TitleContainer>
      </Link>
      <styled.MetaDataContainer>
        <small>{getFormattedDate(post.date)}</small> &middot; <small>{post.readingTime} min</small>
      </styled.MetaDataContainer>
    </styled.Container>
  );
};

export default PostCard;
