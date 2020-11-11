import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeContainer from "containers/home"
import * as ROUTES from 'constants/routes'

export default function AppContainer() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={HomeContainer} />
      </Switch>
    </Router>
  )
}
