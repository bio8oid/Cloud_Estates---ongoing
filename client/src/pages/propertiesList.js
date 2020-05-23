// import React, { useContext } from "react";
import React, { useState, useEffect } from "react";
// import { Link } from "gatsby"
import SEO from "../components/Seo/seo"
import styled from 'styled-components';
import { theme } from '../utils/theme';
import Layout from "../components/Layout/Layout"
import ArrowButton from "../components/ArrowButton/ArrowButton"
import Spinner from "../components/Spinner/Spinner"
import CarouselComponent from "../components/Carousel/Carousel"
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Query from "./query";
// import { Roller } from "react-awesome-spinners";

// import { SpinnerContext } from '../../provider';


const StyledWrapper = styled.div`
text-align: center;
`

const Title = styled.h1`
font-size: 4rem;
opacity: .6;
padding: 0 5%;

    ${theme.media.tablet} {
        font-size: 3rem;
    }
    ${theme.media.mobile} {
        font-size: 2rem;
    }
`


const PropertiesList = props => {

    // const SpinnerRun = useContext(SpinnerContext);
    // console.log('SpinnerRun:', SpinnerRun.loading)

console.log('props:', props)

    const [loading, setLoading] = useState(true)
    console.log('loading:', loading)
    // console.log('onch:', props.onStateChange)

   const onStateChange = param => param;


    useEffect(() => {
        onStateChange(loading);
    }, [loading]);

// console.log('propsload:', props.state)
// console.log('propsload:', props.loading)
// console.log('propsload2:', loading)

    // const [loading, setLoading] = useState(true)
    // const [pageContent, setPageContent] = useState({ properties: [{}] });

    // console.log('pageContent2:', pageContent.properties)

    let routeTag = props.location.state.route;


    return (

        <Layout>
            <StyledWrapper>
                <SEO title="Properties" />
                <Title>Welcome to {routeTag.replace(/["]/g, "")} Products List</Title>

    
                 {/* {false  && <Spinner /> || 
                <CarouselComponent state={{ route: routeTag }}/>} */}

                 {
               loading  &&
                 <Spinner /> ||
                    <CarouselComponent onStateChange={loading => onStateChange(loading)} state={{ route: routeTag }}/>
                  }


                <ArrowButton />
            </StyledWrapper>
        </Layout>
    )
}

export default PropertiesList;