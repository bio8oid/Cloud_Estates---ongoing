import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { theme } from '../../utils/theme';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// ---- Slider Component Styles ----

const StyledPropertyImage = styled.div`

img {
    ${theme.responsiveImg};
    height: 55vh;
    width: 50%;
    margin-left: 25%;
    margin-top: 1%;
    border-radius: 50px;

        ${theme.media.cloud} {
            width: 80%;
            margin-left: 10%;
        }
        ${theme.media.desktop} {
            width: 100%;
            margin-left: 0;
            border-radius: 0;
            margin-top: 0;
        }
        ${theme.media.mobile} {
            max-height: 30vh;
        }
}
`


const Slider = props => {

    const [runSlider, setRunSlider] = useState(true);

    useEffect(() => {
        if (props.propertyContent[0].img.length === 1 ) setRunSlider(false); 
    }, [props.propertyContent]);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return (

        <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={runSlider}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
            {props.propertyContent[0].img.map(item =>
                <StyledPropertyImage key={Math.random()}>
                    <img src={item} alt={item} />
                </StyledPropertyImage>
            )}

        </Carousel>
    )
}

export default Slider;