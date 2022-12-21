import Link from "next/link";
import { ILink } from "../types/link";

export const renderLink = ({ href, value, newWindow }: ILink) => (
  <Link href={href} passHref>
    <a
      target={newWindow ? "_blank" : undefined}
      rel={newWindow ? "noopener" : undefined}
    >
      {value}
    </a>
  </Link>
);
