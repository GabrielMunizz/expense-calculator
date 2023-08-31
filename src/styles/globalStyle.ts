import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: 'Source Code Pro', monospace;
}

body {
   width: 100%;
   height: 100vh;
   background-color: ${(props) => props.theme.colors.backgroundColor};
   color: ${(props) => props.theme.colors.main_text_color};
}
`;
