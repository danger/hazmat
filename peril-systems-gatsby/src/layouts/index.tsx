import Link from "gatsby-link";
import "prismjs/themes/prism-okaidia.css";
import * as React from "react";
import { Button, Container, Icon, Segment, Sidebar } from "semantic-ui-react";
import "../css/responsive.css";
import "../css/semantic.min.css";
import "../css/styles.css";

export const menuItems = [
  { name: "Home", path: "/", exact: true, icon: "home", inverted: true },
  { name: "About", path: "/about/", exact: true, icon: "info circle" }
];

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}

export default class DefaultLayout extends React.PureComponent<
  DefaultLayoutProps,
  void
> {
  public render() {
    const { pathname } = this.props.location;
    const isHome = pathname === "/";

    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar.Pusher style={{ minHeight: "100vh" }}>
          <div style={{ paddingBottom: 60 }}>{this.props.children()}</div>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}
