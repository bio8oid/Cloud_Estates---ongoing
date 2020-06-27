import React, { useEffect } from "react"
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


const Layout = ({ children, props }) => {

  useEffect(() => {

    const query = `query Properties($string: String) {
            properties(filter: $string) {
                id
            }
        }`

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      "Access-Control-Allow-Origin": "*"
    };

    const url = "https://cloud-estates.herokuapp.com/graphql";

    const body = JSON.stringify({ query, variables: { "id": 14 } });
    fetch(url, { method: 'POST', headers: headers, body: body });

  }, []);


  return (

    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>

  )

};

export default Layout;