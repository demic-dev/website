// #region ::: IMPORTS
// libs
import React from "react";
import Link from "next/link";
// styles
import * as styled from "./style";
// types
import { MetadataPost } from "../../types/post";
// utils
import { getFormattedDate } from "../../utils/translations";
// #endregion ::: IMPORTS

const PostCard: React.FC<MetadataPost> = (post) => {
  return (
    <styled.Container>
      <Link href={`/posts/${post.id}`} passHref>
        {post.title}
      </Link>
      <styled.MetaDataContainer>
        <small>{getFormattedDate(post.date)}</small> &middot;{" "}
        <small>{post.readingTime} min</small>
      </styled.MetaDataContainer>
    </styled.Container>
  );
};

export default PostCard;
