import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${variables}

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;

    background:${({ theme }: any) => theme.bg};
  }

  h1 {
    color: var(--blue-500);
    font-size: 32px;
  }

  p {
    font-size: 18px;
    color: ${({ theme }: any) => theme.paragraph};
    text-align: justify;
  }

`;

export default GlobalStyle;
