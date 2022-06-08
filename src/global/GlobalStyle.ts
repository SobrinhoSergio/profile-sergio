import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --color-headings: #0077ff;
  --white: #fff;
  --yellow: #fdd20d;
  --grey: #aeaeae;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: var(--color-text);
}

button {
  cursor: pointer;
}

img {
  max-width: 100%;
  display: block;
}

::-webkit-scrollbar {
  width: 8px;
  height: 20px;
}

::-webkit-scrollbar-track {
  background: ${(props) => props.theme.colors.bgPanel};
  -webkit-box-shadow: inset 0 0 5px #333333;
  box-shadow: inset 0 0 5px #333333;
  border: 5px;
}

::-webkit-scrollbar-thumb {
  background-color: var(--color-headings);
  border-radius: 5px;
}

html {
  /* a cada 1rem será considera 10px */
  font-size: 62.5%;
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  background: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.colorText};
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  overflow-x: hidden;
}

.destaque {
  color: var(--color-headings);
}

`;

export default GlobalStyles;
