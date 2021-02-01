import React from "react";
import SEO from "../components/Seo/seo";
import styled from 'styled-components';
import { theme } from '../utils/theme';
import Layout from "../components/Layout/Layout";
import MultiButton from "../components/MultiButton/MultiButton";
import CarouselComponent from "../components/Carousel/Carousel";
import Spinner from "../components/Spinner/Spinner";
import cloud3 from "../images/cloud_3.webp";
import useFetch from "../components/useFetch/useFetch";

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

const PropertiesList = props => {

    const routeData = `"${props['*']}"`;

    const query = `query Properties($string: String) {
            properties(filter: $string) {
                id
                title
                price
                location
                img
            }
        }`;

    const res = useFetch(query, routeData);

    const loading = res.loading;
    const routeTag = props.location.pathname.replace(/\/propertiesList\//, '') || "empty";
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

                </StyledWrapper>
            </StyledBackground>
        </Layout>
    )
}

export default PropertiesList;