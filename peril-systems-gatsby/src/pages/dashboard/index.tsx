import * as React from "react"
import { Route } from "react-router-dom"
import Installation from "../../components/dashboard/Installation"
import Login from "../../components/dashboard/Login"
import Partial from "../../components/dashboard/Partial"
import PrivateRoute from "../../components/dashboard/PrivateRoute"

const App = () => {
  console.log("app")
  return (
    <div>
      <PrivateRoute path="/dashboard/partial" component={Partial} />
      <PrivateRoute path="/dashboard/installation" component={Installation} />
      <Route path="/dashboard" component={Login} />
    </div>
  )
}

export default App
