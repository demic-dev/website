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

const PostCard: React.FC<MetadataPost> = ({ date, id, title, readingTime }) => {
  return (
    <styled.Container>
      <Link href={`/posts/${id}`} passHref>
        <styled.TitleContainer>{title.toLowerCase()}</styled.TitleContainer>
      </Link>
      <styled.MetaDataContainer>
        <small>{getFormattedDate(date)}</small> &middot; <small>{readingTime} min</small>
      </styled.MetaDataContainer>
    </styled.Container>
  );
};

export default PostCard;
