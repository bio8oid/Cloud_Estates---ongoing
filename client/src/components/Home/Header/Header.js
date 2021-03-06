import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import { theme } from '../../../utils/theme';
import { StyledCloud3 } from '../CitySection/CitySection';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

// ---- Images ----

import logoTop from "../../../images/logo_cloud.webp"
import logoBottom from "../../../images/logo_estates.webp"


// ---- Styles ----

const StyledHeader = styled.div`
${theme.flex.centered};
justify-content: space-between;
align-items: center;
width:100%;

a {
    font-family: 'Gloria Hallelujah';
    color: #040026;
    font-weight: 900;
    font-size: 3rem;
    opacity:.6;
    text-decoration: none;
    padding: 0 50px;

    &:hover {
        ${theme.hover.text};
    }
}

${theme.media.mobile} {
${theme.flex.centeredColumn};
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
    ${theme.flex.centeredColumn};
    width: 50vw;
}

    ${theme.media.mobile} {
        a {
            font-size: 2rem;
        }
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


const Header = props => (

    <ParallaxLayer offset={0} speed={0.1} onClick={props.onClick}>
        <StyledHeader>
            <LogoWrapper>
                <LogoTop>
                    <img src={logoTop} alt="logo-top" />
                </LogoTop >
                <LogoBottom>
                    <img src={logoBottom} alt="logo-bottom" />
                </LogoBottom>
            </LogoWrapper>
            <MeanuWrapper>
                <a id="rent-button" href='#rent'>rent</a>
                <Link as="a" to="/contact" state={{ route: "header" }} >contact</Link>
            </MeanuWrapper>
        </StyledHeader>
        <StyledCloud3 fade />
    </ParallaxLayer>

)

export default Header;