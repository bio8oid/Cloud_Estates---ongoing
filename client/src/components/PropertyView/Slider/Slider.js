import React from "react";
// import { Link } from "gatsby"
import styled from 'styled-components';
import { theme } from '../../../utils/theme';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// ---- Styles ----


const StyledPropertyImage = styled.div`
max-height: 70vh;

img {
   ${theme.responsiveImg};
}
`


const Slider = props => {
// console.log('props:', props)
// console.log('propsIMG:', props.propertyContent[0].img)

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    }

    return (

        <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true}
            keyBoardControl={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
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