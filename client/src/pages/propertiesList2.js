import React from "react";
// import { Router } from "@reach/router";
// import { Link } from "gatsby";

import SEO from "../components/Seo/seo";
import styled from 'styled-components';
import { theme } from '../utils/theme';
import Layout from "../components/Layout/Layout";
import MultiButton from "../components/MultiButton/MultiButton";
import CarouselComponent from "../components/Carousel/Carousel";
import Spinner from "../components/Spinner/Spinner";
import cloud3 from "../images/cloud_3.webp";
import useFetch2 from "../components/useFetch/useFetch2";
// import useRouteData from "../components/useRouteData/useRouteData";

// ---- List Styles ----

const StyledWrapper = styled.div`
text-align: center;
`
const StyledBackground = styled.div`
background: url(${cloud3}) no-repeat center;
${theme.responsiveImg};
min-height: 100vh;
`
const Title = styled.h1`
font-size: 4rem;
opacity: .6;
padding: 5%;
margin: 0;

    ${theme.media.desktop} {
        margin-bottom: 0;
    }
    ${theme.media.tablet} {
        font-size: 3rem;
    }
    ${theme.media.mobile} {
        font-size: 2rem;
    }
`

const PropertiesList2 = props => {
    // console.log('props:', props)

    const routeData = `"${props['*']}"`;
    // console.log('routeData:', routeData)

    // if (`"${props['*']}"` !== null) {
    // localStorage.setItem('routeData', JSON.stringify(`"${props['*']}"`))
    // }

    // const routeData = JSON.parse(localStorage.getItem('routeData')) || `"${props['*']}"`;

    const query = `query Properties($string: String) {
            properties(filter: $string) {
                id
                title
                price
                location
                img
            }
        }`;

    const res = useFetch2(query, routeData);
    // console.log('res:', res)

    const loading = res.loading;
    const routeTag = props.location.pathname.replace(/\/propertiesList2\//, '') || "empty";
    // console.log('routeTag:', routeTag)
    // const routeTag = res.routeFetchData.value || "empty";
    const pageContent = res.pageContent;

    return (
        <Layout>
            <SEO title="Properties" />
            <StyledBackground>
                <StyledWrapper>

                    {loading ? <Spinner /> :
                        <Title>Welcome to {routeTag.replace(/["]/g, "")} Products List</Title>}
                    <CarouselComponent pageContent={pageContent} state={{ route: routeTag }} loading={loading} />

                    <MultiButton state={{ id: "", pathname: "/" }} />
                    {/* <Link as="a" to="/" >arrow back</Link> */}


                    {/* {loading ? <Spinner /> :
                        <Title>Welcome to </Title>}
                    <CarouselComponent pageContent={pageContent} state={{ route: routeTag }} loading={loading} />

                    <MultiButton state={{ route: routeTag, id: "", pathname: "/" }} /> */}

                </StyledWrapper>
            </StyledBackground>
        </Layout>
    )
}

export default PropertiesList2;