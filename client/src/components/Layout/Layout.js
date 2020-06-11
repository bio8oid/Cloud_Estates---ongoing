import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../../utils/theme';


const GlobalStyle = createGlobalStyle`
body {
  ${theme.font.indie};
  padding: 0;
  margin: 0;
  user-select: none;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
    html {
    box-sizing: border-box;
  }
`;


const Layout = ({ children, props }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);

export default Layout;