// import React from "react";
import React, { useState, useEffect } from "react";

// import { Link } from "gatsby"
// import SEO from "../components/Seo/seo"
// import styled from 'styled-components';
// import { theme } from '../utils/theme';
import CarouselContent from "./CarouselContent"
// import ArrowButton from "../components/ArrowButton/ArrowButton"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Layout from "../../components/Layout/Layout"
// import { Roller } from "react-awesome-spinners";


const CarouselComponent = (props, { onStateChange } )=> {
console.log('onStateChange:', onStateChange)
// console.log('props:', props)

    // const [loading, setLoading] = useState(true)
    // console.log('loading:', loading)

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
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
            <CarouselContent onStateChange={loading => onStateChange(loading)} state={ props.state.route }/>
            </Carousel>
    )
}

export default CarouselComponent;