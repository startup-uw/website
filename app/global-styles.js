import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 100;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }
  
  b {
    font-weight: 700;
  }

  p,
  label {
    font-family: 'Lato', sans-serif;
    line-height: 1.5em;
  }

  h1, h2, h3 {
    margin: 0;
    font-weight: 100;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;
