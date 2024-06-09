import { ILink } from "../types/link";

export const HOME_LINK: ILink = {
  value: "home",
  href: "/home/"
}

export const HEADER_LINKS: ILink[] = [
  // {
  //   newWindow: true,
  //   value: "old site",
  //   href: "https://demic-portfolio.netlify.app/",
  // },
  {
    value: "resume",
    href: "/static/resume.pdf",
  },
  {
    value: "blog",
    href: "/blog/",
  },
  {
    value: "projects",
    href: "/projects/",
  },
  {
    value: "about me",
    href: "/about-me",
  },
];

export const FOOTER_LINKS: ILink[] = [
  {
    newWindow: true,
    value: "linkedin",
    href: "https://www.linkedin.com/in/michele-de-cillis/",
  },
  {
    newWindow: true,
    value: "github",
    href: "https://github.com/demic-dev",
  },
  {
    newWindow: true,
    value: "email me",
    href: "mailto:decillismicheledeveloper@gmail.com",
  },
];
