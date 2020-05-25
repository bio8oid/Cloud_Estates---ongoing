import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../../utils/theme';
// import Header from '../components/Header/header';


const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
  color: #040026;
  font-family: 'Indie Flower';
  user-select: none;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
    html {
    box-sizing: border-box;
  }
`;


const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);

export default Layout;