import { ILink } from "../types/link";

export const HOME_LINK: ILink = {
  value: "home",
  href: "/home/",
};

export const HEADER_LINKS: ILink[] = [
  // {
  //   newWindow: true,
  //   value: "old site",
  //   href: "https://demic-portfolio.netlify.app/",
  // },
  {
    value: "_app.header.home",
    href: "/",
  },
  {
    value: "_app.header.resume",
    href: "/static/resume.pdf",
  },
  {
    value: "_app.header.blog",
    href: "/posts",
  },
  {
    value: "_app.header.projects",
    href: "/projects",
  },
  {
    value: "_app.header.about-me",
    href: "/about-me",
  },
];

export const FOOTER_LINKS: ILink[] = [
  {
    value: "/.index.footer.linkedin",
    href: "https://www.linkedin.com/in/michele-de-cillis/",
  },
  {
    value: "/.index.footer.github",
    href: "https://github.com/demic-dev",
  },
  {
    value: "/.index.footer.email-me",
    href: "mailto:decillismicheledeveloper@gmail.com",
  },
];
