import React from "react"
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from "gatsby"
import SEO from "../components/seo"

const Globalstyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const StyledWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background: #ccc;

&:hover {
  background:lightgreen;
}
`;


const IndexPage = () => (
  <>
    <Globalstyle />
    <StyledWrapper>
      <SEO title="home" />
      <div>
        <h1>Hi people</h1>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </StyledWrapper>
  </>
)

export default IndexPage