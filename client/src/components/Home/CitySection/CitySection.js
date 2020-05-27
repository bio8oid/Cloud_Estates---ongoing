import React from "react";
import styled from 'styled-components';
import { theme } from '../../../utils/theme';
import Footer from '../Footer/Footer';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

// ---- Images ---- 

import cloud1 from "../../../images/cloud_1.webp"
import cloud2 from "../../../images/cloud_2.webp"
import cloud3 from "../../../images/cloud_3.webp"
import bottomFront from "../../../images/bottom_front.webp"
import bottomMiddle from "../../../images/bottom_middle.webp"
import bottomRight from "../../../images/bottom_right.webp"
import bottomBack from "../../../images/bottom_back.webp"

// ---- Styled Clouds ----

const StyledCloud1 = styled.div`
animation: ${({ wind }) => wind ? `flyBastards 45s infinite linear` : 'flyBastards 100s infinite linear'};
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
export const StyledCloud3 = styled.div`
background: url(${cloud3}) no-repeat center;
${theme.responsiveImg};
opacity: ${({ fade }) => fade ? '.6' : '1'};
`;


// ---- Bottom Section Styles----

const StyledBottomFront = styled.div`
background: url(${bottomFront}) no-repeat center ;
${theme.responsiveImg};
`;
const StyledBottomMiddle = styled.div`
background: url(${bottomMiddle}) no-repeat left;
${theme.responsiveImg};
transform: translateX(-45%);
`;
const StyledBottomRight = styled.div`
background: url(${bottomRight}) no-repeat right;
height: 40%;
width: 40%;
background-size: cover;
transform: translate(150%, 20%);
`;
const StyledBottomBack = styled.div`
background: url(${bottomBack}) no-repeat top;
${theme.responsiveImg};
`;


const CitySection = props => (

    <>
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
            <Footer />
        </ParallaxLayer>

        <ParallaxLayer offset={.75} speed={0.1}>
            <StyledCloud2 fade fly>
                <img src={cloud2} alt="cloud2" />
            </StyledCloud2>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={.5} onClick={props.onClick}>
            <StyledBottomBack />
        </ParallaxLayer>
    </>
)

export default CitySection;