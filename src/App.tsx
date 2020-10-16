import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeContainer from "containers/home/";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <HomeContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
