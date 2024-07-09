import { UrlObject } from "url";

export type LinkProps = React.ForwardRefExoticComponent<
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof InternalLinkProps> &
    InternalLinkProps & {
      children?: React.ReactNode;
    } & React.RefAttributes<HTMLAnchorElement>
>;

export interface ILink {
  value: string;
  href: string | UrlObject;
  locale?: false;
}
