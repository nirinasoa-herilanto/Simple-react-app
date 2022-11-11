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

    background: var(--white);
  }

  h1 {
    color: var(--blue-500);
    font-size: 32px;
  }

  p {
    color: var(--zinc);
    font-size: 18px;
  }
`;

export default GlobalStyle;
