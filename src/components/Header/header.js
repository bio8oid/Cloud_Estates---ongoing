import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import { theme } from '../../utils/theme';
import logoTop from "../../images/logo_cloud.png"
import logoBottom from "../../images/logo_estates.png"
// import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'


const StyledHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width:100%;
// border: 3px solid red;

a {
    // font-family: 'Indie Flower';
    font-family: 'Gloria Hallelujah';
    // font-family: 'Handlee', cursive;
    font-weight: 900;
    cursor: pointer;
    color: orange;
    font-size: 3rem;
    opacity:.6;
    // color: #b198b8;
    color: #040026;
    // text-transform: uppercase;
    text-decoration: none;
    padding: 0 50px;

    &:hover {
        color: skyblue;
        -webkit-text-stroke: 2px black;
    }
}



${theme.media.mobile} {
flex-direction: column;
justify-content: center;
align-items: center;               
}
`;

const LogoWrapper = styled.div`
height: 100%;
width: 25vw;
padding: 2%;

${theme.media.tabletPro} {
    width: 50vw;
}
`;

const MeanuWrapper = styled.div`
margin-right: 2%;

${theme.media.tabletPro} {
    display: flex;
    flex-direction: column;
    align-items: center; 
    width: 50vw;
}
`;

const LogoTop = styled.div`
img {
    ${theme.responsiveImg};
}
`;

const LogoBottom = styled.div`
img {
    ${theme.responsiveImg};
    margin-left: 100px;
    padding-right: 100px;

    ${theme.media.mobile} {
        margin: 0;
        padding: 0 10%;
    }
}
`;

const Header = (props, parallax, ref) => (
    <div>
        <StyledHeader>
            <LogoWrapper>
                <LogoTop>
                    <img src={logoTop} />
                </LogoTop >
                <LogoBottom>
                    <img src={logoBottom} />
                </LogoBottom>
            </LogoWrapper>
            <MeanuWrapper>
                <a href='#rent'>rent</a>
                <Link as="a" to="/contact">contact</Link>
            </MeanuWrapper>
        </StyledHeader>
    </div>
)

export default Header;