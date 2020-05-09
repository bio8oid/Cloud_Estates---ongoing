import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../../utils/theme';
// import Header from '../components/Header/header';


const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
    html {
    box-sizing: border-box;
  }

  user-select: none;
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