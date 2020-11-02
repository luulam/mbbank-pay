import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'AvertaStdCY-Bold';
    src: local('AvertaStdCY-Bold') url('./assets/fonts/AvertaStdCY-Bold.otf') format('AvertaStdCY-Bold');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'AvertaStdCY-Regular';
    src: local('AvertaStdCY-Regular') url('./assets/fonts/AvertaStdCY-Regular.otf') format('AvertaStdCY-Regular');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'AvertaStdCY-Semibold';
    src: local('AvertaStdCY-Semibold') url('./assets/fonts/AvertaStdCY-Semibold.otf') format('AvertaStdCY-Semibold');
    font-weight: normal;
    font-style: normal;
  }
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    background: #f5f5f5;
    margin: 0px;
  }

  body {
    font-family: 'AvertaStdCY-Bold', 'AvertaStdCY-Regular';
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
