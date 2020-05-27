import React from "react";
import styled from 'styled-components';
import { theme } from '../../../utils/theme';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

// ---- Images ---- 

import cloud1 from "../../../images/cloud_1.webp"
import cloud8 from "../../../images/cloud_8.webp"
import cloud9 from "../../../images/cloud_9.webp"

// ---- Clouds Styles----

const StyledCloud1 = styled.div`
animation: ${({ wind }) => wind ? `flyBastards 45s infinite linear` : 'flyBastards 100s infinite linear'};
`;
const StyledCloud8 = styled.div`
img {
  ${theme.responsiveImg};
  opacity: .2;
  animation: ${({ wind }) => wind ? `flyBastards 60s infinite linear` : 'flyBastards 90s infinite linear'};
}
`;
const StyledCloud9 = styled(StyledCloud8)`
@keyframes flyBastards {
  from {
    transform: translate(-100%);
  }
  to {
    transform: translate(99%);
  }
}
`;


const UpperCloudsSection = () => (

  <>
    <ParallaxLayer offset={3} speed={0} factor={1} style={{ background: "skyblue", backgroundSize: 'cover', opacity: 0.3 }} />

    <ParallaxLayer offset={1.6} speed={-0.5} >
      <StyledCloud1 wind fade fly>
        <img src={cloud1} alt="" />
      </StyledCloud1>
    </ParallaxLayer>

    <ParallaxLayer offset={1.4} speed={.8} >
      <StyledCloud8 wind fade>
        <img src={cloud8} alt="" />
      </StyledCloud8>
    </ParallaxLayer>

    <ParallaxLayer offset={1.8} speed={.4} >
      <StyledCloud9 fade>
        <img src={cloud9} alt="" />
      </StyledCloud9>
    </ParallaxLayer>
  </>

)

export default UpperCloudsSection;