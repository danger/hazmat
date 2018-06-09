import GatsbyLink from "gatsby-link"
import * as React from "react"
import { Button, Form, Grid, Header, Image, Message, Segment } from "semantic-ui-react"

export default () => (
  <div className="login-form">
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="green" textAlign="center">
          HELLO
        </Header>
        <Form size="large">
          <Segment stacked>
            <Button color="green" fluid size="large">
              Login via GitHub
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
    <GatsbyLink to="/dashboard/installation">Hello</GatsbyLink>
    <GatsbyLink to="/dashboard/partial">two</GatsbyLink>
  </div>
)
