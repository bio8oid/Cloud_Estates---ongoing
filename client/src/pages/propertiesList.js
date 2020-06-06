import React, { useState, useEffect } from "react";
import SEO from "../components/Seo/seo"
import styled from 'styled-components';
import { theme } from '../utils/theme';
import Layout from "../components/Layout/Layout"
import ArrowButton from "../components/ArrowButton/ArrowButton"
import CarouselComponent from "../components/PropertiesList/Carousel/Carousel"
import Spinner from "../components/Spinner/Spinner"
import cloud3 from "../images/cloud_3.webp"
import useFetch from "../components/Fetch/Fetch"


// ---- List Styles ----

const StyledWrapper = styled.div`
text-align: center;
`
const StyledBackground = styled.div`
background: url(${cloud3}) no-repeat center;
${theme.responsiveImg};
min-height: 90vh;
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

    const [routeData, setRouteData] = useState({});

    useEffect(() => {

        // To keep state after page reload

        const routeTagData = props.location.state === null ? JSON.parse(localStorage.getItem('keptRouteTag')) : props.location.state.route;

        const setLocalStorage = data => localStorage.setItem('keptRouteTag', JSON.stringify(data));

        const setTag = async () => {
            const tagData = await routeTagData;
            setRouteData({ name: '"tag"', value: tagData });
            setLocalStorage(tagData);
        }
        setTag();
    }, []);

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
    const routeTag = res.routeFetchData.value || "empty";
    const pageContent = res.pageContent;

    return (
        <Layout>
            <SEO title="Properties" />
            <StyledBackground>
                <StyledWrapper>

                    {loading ? <Spinner /> :
                    <Title>Welcome to {routeTag.replace(/["]/g, "")} Products List</Title>}
                    <CarouselComponent pageContent={pageContent} state={{ route: routeTag }} />

                    <ArrowButton state={{ route: routeTag, pathname: "/" }} />
                </StyledWrapper>
            </StyledBackground>
        </Layout>
    )
}

export default PropertiesList;