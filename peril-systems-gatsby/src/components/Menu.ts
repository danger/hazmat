import { GatsbyLinkProps } from "gatsby-link";
import * as React from "react";

export interface MenuItem {
  name: string;
  path: string;
  exact: boolean;
  icon?: string;
  inverted?: boolean;
}

export interface MenuProps extends React.HTMLProps<HTMLDivElement> {
  items: MenuItem[];
  pathname: string;
  Link: React.ComponentClass<GatsbyLinkProps> | any;
}
