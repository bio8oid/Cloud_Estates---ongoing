import React from "react";
import styled from 'styled-components';
import { theme } from '../../../utils/theme';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// ---- Slider Component Styles ----


const StyledPropertyImage = styled.div`
max-height: 100vh;

img {
    ${theme.responsiveImg};

        ${theme.media.mobile} {
            height: 30vh;
        }
}
`

const Slider = props => {

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
            autoPlay={true}
            autoPlaySpeed={5000}
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