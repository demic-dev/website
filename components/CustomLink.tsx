// #region ::: IMPORTS
// libs
import React from "react";
import Link from "next/link";
// #endregion ::: IMPORTS

type Props = {
  value: string;
  href: string;
  newWindow?: boolean;
};

const CustomLink: React.FC<Props> = ({ href, value, newWindow }) => {
  return (
    <Link href={href} passHref>
      <a
        target={newWindow ? "_blank" : undefined}
        rel={newWindow ? "noopener" : undefined}
      >
        {value}
      </a>
    </Link>
  );
};

export default CustomLink;
