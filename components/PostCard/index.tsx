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
      <h2>
        <Link
          href={{
            pathname: `/posts/[id]`,
            query: { id: post.id },
          }}
          passHref
        >
          {post.title}
        </Link>
      </h2>
      <styled.MetaDataContainer>
        {/* ADD DYNAMIC LOCALE */}
        <small>{getFormattedDate("en", post.date)}</small> &middot;{" "}
        <small>{post.readingTime} min</small>
      </styled.MetaDataContainer>
    </styled.Container>
  );
};

export default PostCard;
