import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  }

  body{
    background: #eee;
    color: #242424;
    width: 100vw;
    height: auto;
    min-height: 100vh;
    overflow-x: hidden;
    font-family: 'Lora', serif;
  }
`;

export default GlobalStyle;