import Link from "gatsby-link";
import * as React from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Segment
} from "semantic-ui-react";

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

export default (props: IndexPageProps) => (
  <div>
    <h1>Hello</h1>
  </div>
);
