import { createGlobalStyle, css } from "styled-components";
import AvertaStdCYBold from "./assets/fonts/AvertaStdCY-Bold.otf";
import AvertaStdCYRegular from "./assets/fonts/AvertaStdCY-Regular.otf";
import AvertaStdCYSemiBold from "./assets/fonts/AvertaStdCY-Semibold.otf";

export const fontFaces = css`
  @font-face {
    font-family: "AvertaStdCY-Bold";
    src: url(${AvertaStdCYBold}) format("truetype");
  }

  @font-face {
    font-family: "AvertaStdCY-Regular";
    src: url(${AvertaStdCYRegular}) format("truetype");
  }
  @font-face {
    font-family: "AvertaStdCY-Semibold";
    src: url(${AvertaStdCYSemiBold}) format("truetype");
  }
`;
const GlobalStyle = createGlobalStyle`
  ${fontFaces}

  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    background: #f5f5f5;
    margin: 0px;
  }

  body {
    font-family: 'AvertaStdCY-Bold', 'AvertaStdCY-Regular','AvertaStdCY-Semibold';
  } 


  body.fontLoaded {
    font-family: 'AvertaStdCY-Bold', 'AvertaStdCY-Regular','AvertaStdCY-Semibold';
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
