import React from "react";
import styled from 'styled-components';
import { theme } from '../../utils/theme';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import About from '../About/About';
import PropertiesList from '../PropertiesList/PropertiesList';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

// ---- images ---- 

import bottomFront from "../../images/bottom_front.png"
import bottomMiddle from "../../images/bottom_middle.png"
import bottomBack from "../../images/bottom_back.png"
import bottomRight from "../../images/bottom_right.png"
import cloud1 from "../../images/cloud_1.png"
import cloud2 from "../../images/cloud_2.png"
import cloud3 from "../../images/cloud_3.png"
import cloud8 from "../../images/cloud_8.png"
import cloud9 from "../../images/cloud_9.png"



const StyledCloud1 = styled.div`
animation: ${({ speed }) => speed ? `flyBastards 45s infinite linear` : 'flyBastards 100s infinite linear'};
`;

const StyledCloud2 = styled.div`
background: ${({ css }) => css ? `url(${cloud2}) no-repeat center` : 'none'};
opacity: ${({ fade }) => fade ? '.2' : '1'};
animation: ${({ fly }) => fly ? 'flyBastards 65s infinite linear' : 'none'};
${theme.responsiveImg};
transform: translateX(50%);

 ${theme.media.cloud} {
     transform: none;
  }
`;

const StyledCloud3 = styled.div`
background: url(${cloud3}) no-repeat center;
${theme.responsiveImg};
opacity: ${({ fade }) => fade ? '.6' : '1'};
`;

const StyledCloud8 = styled.div`
img {
  ${theme.responsiveImg};
  opacity: .2;
  animation: ${({ speed }) => speed ? `flyBastards 60s infinite linear` : 'flyBastards 90s infinite linear'};
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

const StyledBottomFront = styled.div`
background: url(${bottomFront}) no-repeat center ;
${theme.responsiveImg};
`;

const StyledBottomMiddle = styled.div`
background: url(${bottomMiddle}) no-repeat left;
${theme.responsiveImg};
transform: translateX(-45%);
`;

const StyledBottomBack = styled.div`
background: url(${bottomBack}) no-repeat top;
${theme.responsiveImg};
`;

const StyledBottomRight = styled.div`
  background: url(${bottomRight}) no-repeat right;
  height: 40%;
  width: 40%;
  background-size: cover;
  transform: translate(150%, 20%);
`;


const Home = parallax => (

  <>
    <Parallax ref={ref => (parallax = ref)} pages={4}>

      <ParallaxLayer offset={3} speed={0} factor={1} style={{ background: "skyblue", backgroundSize: 'cover', opacity: 0.3 }} />

      <ParallaxLayer offset={1.6} speed={-0.5} >
        <StyledCloud1 speed fade fly>
          <img src={cloud1} alt="" />
        </StyledCloud1>
      </ParallaxLayer>

      <ParallaxLayer offset={1.4} speed={.8} >
        <StyledCloud8 speed fade>
          <img src={cloud8} alt="" />
        </StyledCloud8>
      </ParallaxLayer>

      <ParallaxLayer offset={1.8} speed={.4} >
        <StyledCloud9 fade>
          <img src={cloud9} alt="" />
        </StyledCloud9>
      </ParallaxLayer>

      <ParallaxLayer offset={2.4} speed={.1}>
        <StyledCloud3 />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={-.2}>
        <StyledBottomMiddle />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={.5}>
        <StyledBottomFront />
      </ParallaxLayer>

      <ParallaxLayer offset={2.95} speed={0.2} >
        <StyledCloud1 fly>
          <img src={cloud1} alt="" />
        </StyledCloud1>
      </ParallaxLayer>

      <ParallaxLayer offset={2.5} speed={-0.1} >
        <StyledCloud2 css />
      </ParallaxLayer>

      <ParallaxLayer offset={3.15} speed={0.1} >
        <StyledBottomRight />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.1} >
        <StyledBottomFront />
      </ParallaxLayer>

      <ParallaxLayer
        offset={3}
        speed={-0.3}
      />

      <ParallaxLayer
        offset={0}
        speed={0.1}
        onClick={() => parallax.scrollTo(2)}
        >
        <Header />
        <StyledCloud3 fade />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.1}
        onClick={() => parallax.scrollTo(2)}
      >
        <About />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={0}
      >
        <PropertiesList />
      </ParallaxLayer>

      <ParallaxLayer
        offset={.75}
        speed={0.1}
      >
        <StyledCloud2 fade fly>
          <img src={cloud2} alt="" />
        </StyledCloud2>
      </ParallaxLayer>

      <ParallaxLayer
        offset={3}
        speed={.5}
        onClick={() => parallax.scrollTo(0)}
      >
        <StyledBottomBack />
      </ParallaxLayer>

      <ParallaxLayer offset={.5} speed={-0.2} 
        onClick={() => parallax.scrollTo(1)}
        >
        <Hero />
      </ParallaxLayer>

    </Parallax>
  </>
)

export default Home;