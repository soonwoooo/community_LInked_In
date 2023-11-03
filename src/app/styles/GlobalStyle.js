import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* 다른 전역 스타일 규칙 */

  body {
    margin:0;
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

  /* 다른 전역 스타일 규칙 */
`;

export default GlobalStyle;
