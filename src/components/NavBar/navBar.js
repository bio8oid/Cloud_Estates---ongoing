import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import img from "../../images/logo.png"

// const StyledLink = styled.a`
//   background: ${theme.colors.mainGradient};
// `;

const StyledHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
// justify-content: center;
align-items: center;
height: 100%;
background: black;

height: 10vh;
width:100%;
border: 2px solid green;
background-size: cover;

a {
    color: orange;
    font-size: 1rem;
    text-decoration: none;
    padding: 0 50px;
    border: 1px solid orange;

}

`;

// background: ${ props => props.logo ? `url(${ img }) no-repeat center` : 'green'};

const Logo = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: flex-end;
height: 100px;
width: 100px;
background: url(${ img}) no-repeat center;
background-color: green;
background-size: cover;
border: 1px solid orange;
// position: relative;

p {
    height: 30%;
    border: 1px solid orange;
    text-align: center;
    transform: translateY(80px);
    color: orange;
    background-color: green;
    // position: absolute;
    // bottom: -50%;
    // left: 50%;
}
// position: fixed;
// left: 0;
`;

// background: url(${img}) no-repeat center ;
// font-size:  ${({ isBig }) => isBig ? '5em' : '3em'};


const Navbar = () => (

  <>
    <StyledHeader>
            <Logo><p>Foxes</p></Logo>
            <Link as="a" to="/page-2">Go to page 2 (link)</Link>
            <Link as="a" to="/404">Go to page 404</Link>
    </StyledHeader>
</>
)

export default Navbar;