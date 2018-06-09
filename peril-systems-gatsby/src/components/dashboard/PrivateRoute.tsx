import * as React from "react"

import { Redirect, Route } from "react-router-dom"
// import { isLoggedIn } from "../utils/auth"
const isLoggedIn = () => true
// More info at https://reacttraining.com/react-router/web/example/auth-workflow

// @ts-ignore
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isLoggedIn() ? (
        // If we’re not logged in, redirect to the home page.
        <Redirect to={{ pathname: `/dashboard/login` }} />
      ) : (
        <Component {...props} />
      )
    }
  />
)

export default PrivateRoute
