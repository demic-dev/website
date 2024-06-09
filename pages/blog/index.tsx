import React from "react";
import { NextPage } from "next";

import * as styled from "../../styles/pages/blog/index.style";

const Blog: NextPage<{}> = () => {
  return (
    <>
      <styled.BodyContainer>
        <h1>Posts</h1>
      </styled.BodyContainer>
    </>
  );
};

export default Blog;
