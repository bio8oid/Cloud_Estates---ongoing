import React from "react";
import styled from 'styled-components';
import { theme } from '../../../utils/theme';
import arrowDown from "../../../images/arrow_down.png"
import { StyledHero } from '../Hero/Hero';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

// ---- Styles ----

const StyledAbout = styled(StyledHero)`
justify-content: center;
align-items: center;
height: 100%;

img {
height: 80px;
width: 80px;
margin-top: 30px;

@media not all and (hover: none) {
    &:hover {
       border: 2px solid ${theme.colors.primary};
       border-radius: 50%;
       padding: 5px;
        }
    }  
}

p {
  padding: 0 10%;
  font-size: 2.5rem;
}

${theme.media.tablet} {
  p {
    margin-top: 50%;
    font-size: 2rem;
  }
}

${theme.media.mobile} {
  p {
    margin-top: 50%;
    font-size: 1.5rem;
  }
}
`;


const About = props => (

  <ParallaxLayer offset={1} speed={0.1} onClick={props.onClick}>
    <StyledAbout>
      <p>Founded in 966, Cloud Estates started life as a two-person agency in NothingToDoOnThe Hill.<br />Over the years we are proud to have become World's leading cloud estate agent.<br />We provide all services related to cloud rent and have offer to everyone.</p>
      <img src={arrowDown} alt="arrow-down" />
    </StyledAbout>
  </ParallaxLayer>

)

export default About;