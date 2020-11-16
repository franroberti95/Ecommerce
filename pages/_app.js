import React from "react"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    @font-face {
      font-family: Myriad;
      src: url("/fonts/myriad/MYRIADPRO-COND.otf");
    }
    
    @font-face {
      font-family: Myriad;
      src: url("/fonts/myriad/MYRIADPRO-BOLDCOND.otf");
      font-weight: bold;
    }
    
    body[data-theme='light'] {
      --colors-light-grey-1: #ebe9e9;
      --colors-light-grey-2: #cec7c7;
      --colors-light-grey-3: #686666;
      --colors-grey-1: #454040;
      --colors-primary: #fb740b;
      
      p,span,h1,h2,h3,h4,h5,h6,b{
      
        font-family: Myriad;
        }
    }
    body[data-theme='dark'] {
      --colors-light-grey-1: #ebe9e9;
      --colors-light-grey-2: #cec7c7;
      --colors-light-grey-3: #454040;
      --colors-primary: #fb740b;
      p,span,h1,h2,h3,h4,h5,h6,b{
      
        font-family: Myriad;
        }
    }
`;

const App = ({ Component, pageProps }) =>
    <>
        <GlobalStyle />
        <Component {...pageProps} />
    </>;

export default App