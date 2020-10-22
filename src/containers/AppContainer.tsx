import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeContainer from "containers/home";

export default function AppContainer() {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
    </Switch>
  );
}
