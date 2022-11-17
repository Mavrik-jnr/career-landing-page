import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,*::after,*::before{
box-sizing:border-box;
margin:0;

}
  body {
    margin: 0;
    font-family: "Inter", Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
