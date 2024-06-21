// #region ::: IMPORTS
// libs
import React from "react";
// styles
import * as styled from "./style";
// #endregion ::: IMPORTS

type Props = {
  tags: string[];
};

const TagsBadges: React.FC<Props> = ({ tags }) => {
  return (
    <styled.TagsContainer>
      {tags.map((t) => (
        <styled.TagContainer key={t}>{t}</styled.TagContainer>
      ))}
    </styled.TagsContainer>
  );
};

export default TagsBadges;
