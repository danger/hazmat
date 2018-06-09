// import Link from "gatsby-link"
import * as React from "react"
// import { graphql, QueryRenderer } from "react-relay"
import { Header } from "semantic-ui-react"
// import initEnvironment from "../../lib/createRelayEnvironment"
// import { wipInstallationsQueryResponse } from "./__generated__/wipInstallationsQuery.graphql"

// class WIPInstallations extends React.Component<wipInstallationsQueryResponse> {
//   public render() {
//     const { me } = this.props

//     return (
//       <QueryRenderer
//         environment={initEnvironment({ jwt: "OK" })}
//         query={graphql`
//           query wipInstallationsQuery {
//             me {
//               installations {
//                 edges {
//                   node {
//                     envVars
//                     iID
//                     login
//                   }
//                 }
//               }
//             }
//           }
//         `}
//         variables={{}}
//         render={({ error, props }) => {
//           if (error) {
//             return <div>Error!</div>
//           }
//           if (!props) {
//             return <div>Loading...</div>
//           }
//           return <div>User ID</div>
//         }}
//       />
//     )
//   }
// }

console.log("Hiii")
// export default () => <h2>Hi</h2>

import { Button, Form, Grid, Image, Message, Segment } from "semantic-ui-react"

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
          Log-in to Peril Dashboard
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
  </div>
)
