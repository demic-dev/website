// #region ::: IMPORTS
// libs
import React from "react";
import { NextPage } from "next";
// styles
import * as styled from "../../styles/pages/blog/index.style";
// utils
import { getTranslation } from "../../utils/translations";
// #endregion ::: IMPORTS

const Blog: NextPage<{}> = () => {
  return (
    <>
      <styled.BodyContainer>
        <h1
          dangerouslySetInnerHTML={{
            __html: getTranslation("blog.index.title"),
          }}
        />
      </styled.BodyContainer>
    </>
  );
};

export default Blog;
