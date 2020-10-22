import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "theme/global.styles";
import HomeContainer from "containers/home";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  margin: 0 auto;
  padding: 0 0px;
  /* max-width: calc(768px); */
`;

export default function App() {
  return (
    <Router>
      <AppWrapper>
        <Helmet titleTemplate="" defaultTitle="">
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
        </Helmet>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
        </Switch>
      </AppWrapper>

      <GlobalStyle />
    </Router>
  );
}
