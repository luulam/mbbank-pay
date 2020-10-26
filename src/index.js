import React from 'react'
import { render } from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import styled from "styled-components"
import GlobalStyle from "global.styles"
import { Helmet } from "react-helmet"

const AppWrapper = styled.div`
  display: flex;
  scale: 1;
  flex-direction: column;
  min-height: 100%;
  margin: 0 auto;
  padding: 0 0px;
`

render(
    <React.StrictMode>
        <GlobalStyle />
        <AppWrapper>
            <Helmet titleTemplate="" defaultTitle="MBbank pay">
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
            </Helmet>
            <App />
        </AppWrapper>
    </React.StrictMode>, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()


