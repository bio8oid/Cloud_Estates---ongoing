import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme';
// import Header from '../components/Header/header';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: Indie Flower;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

// const StyledWrapper = styled.div`
//   height: 100vh;
//   `;

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            {/* <StyledWrapper> */}
            {/* <Header /> */}
                {children}
            {/* </StyledWrapper> */}
        </>
    </ThemeProvider>
);

export default Layout;