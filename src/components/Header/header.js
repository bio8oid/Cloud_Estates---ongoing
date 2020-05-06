import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import { theme } from '../../utils/theme';

// import Cloud1 from "../Footer/footer"

// import logoTop from "../../images/logo_sky.png"
// import logoBottom from "../../images/logo_estates.png"

// import img from "../../images/logo.png"
// const StyledLink = styled.a`
//   background: ${theme.colors.mainGradient};
// `;

// const Cloud1 = styled.div`
// background: url(${cloud1}) no-repeat center ;
// height: 50%;
// width: 50%;
// background-size: cover;
// // transform: translateX(-30%);
// transform: ${({ translate }) => translate ? 'translateX(150%)' : 'translateX(-30%)'};
// opacity: ${({ fade }) => fade ? '.4' : '1'};
// `;

const StyledHeader = styled.div`
display: flex;
flex-direction: row;
// justify-content: flex-end;
// justify-content: space-around;
// justify-content: center;
align-items: center;
// height: 100%;
// background: transparent;
// position: absolute;
// top: 0;
// z-index: 999999;
// overflow: hidden;
// height: 30vh;
// height: 100%;
width:100%;
// border: 2px solid green;
// background-size: cover;

a {
    font-family: Indie Flower;
    color: orange;
    font-size: 1rem;
    text-decoration: none;
    padding: 0 50px;
    border: 1px solid orange;
}
`;

const LogoWrapper = styled.div`
height: 100%;
width: 20vw;
padding: 2%;
`;

const LogoTop = styled.div`
${theme.responsive};
`;

const LogoBottom = styled.div`
${theme.responsive};
margin-left: 100px;
`;

const Header = () => (

  <>
    <StyledHeader>
            <LogoWrapper>
            <LogoTop>
                <img src="./images/logo_sky.png" style={{width: "100%", height: "auto"}} />
            </LogoTop >
            <LogoBottom>
                <img src="./images/logo_estates.png" style={{width: "100%", height: "auto"}} />
            </LogoBottom>
            </LogoWrapper>
            <Link as="a" to="/page-2">About</Link>
            <Link as="a" to="/page-2">Contact</Link>
    </StyledHeader>
</>
)

export default Header;