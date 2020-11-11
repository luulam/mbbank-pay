import React from 'react'
import { render } from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import GlobalStyle from "global.styles"
import { Helmet } from "react-helmet"
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'theme';

render(
    <>
        <Helmet titleTemplate="" defaultTitle="MBbank pay">
            <meta charSet="UTF-8" />
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
            />
        </Helmet>

        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </>, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()


