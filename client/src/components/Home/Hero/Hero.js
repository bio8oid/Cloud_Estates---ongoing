import React from "react";
import styled from 'styled-components';
import { theme } from '../../../utils/theme';
import { ParallaxLayer } from 'react-spring/renderprops-addons';


export const StyledHero = styled.div`
${theme.flex.centeredColumn};
padding: 0 2%;
opacity: .6;

h1, h3, p {
  margin: 0;
  font-size: 7.5rem;
  text-align: center;
  ${theme.font.indie};
}

h3 {
  font-size: 3rem;
}

@media not all and (hover: none) {
	h1:hover {
    ${theme.hover.text};
	}
}

${theme.media.desktop} {
  h1 {
    font-size: 5rem;
  }
  
  h3 {
    font-size: 3rem;
  }
}

${theme.media.mobile} {
  h1 {
    font-size: 3rem;
  }
  
  h3 {
    font-size: 1rem;
  }
}
`;

const Hero = props => (

  <ParallaxLayer offset={.5} speed={-0.2} onClick={props.onClick}>
    <StyledHero>
      <h3>Famous for commission and deposit</h3>
      <h1>Sky is THE limit</h1>
    </StyledHero>
  </ParallaxLayer>

)

export default Hero;