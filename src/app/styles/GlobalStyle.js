import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`


  ${reset}

  body {

  }

  @font-face {
    font-family: "Gotham Pro";
    src: url("/fonts/GothamPro.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Gotham Pro";
    src: url("/fonts/GothamPro-Bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
  }

`;

export default GlobalStyle;
