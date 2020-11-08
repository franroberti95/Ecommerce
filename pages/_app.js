import React from "react"
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from "../theme/theme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const App = ({ Component, pageProps }) =>
    <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    </>;

export default App