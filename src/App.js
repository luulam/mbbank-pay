import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "theme/global.styles";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import AppContainer from 'containers/AppContainer';

const AppWrapper = styled.div`
  display: flex;
  scale: 1;
  flex-direction: column;
  min-height: 100%;
  margin: 0 auto;
  padding: 0 0px;
`;

export default function App() {
  return (
    <Router>
      <AppWrapper>
        <Helmet titleTemplate="" defaultTitle="mbbank pay">
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
        </Helmet>
        <AppContainer />
      </AppWrapper>

      <GlobalStyle />
    </Router>
  );
}
