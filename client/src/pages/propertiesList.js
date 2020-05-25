import React, { useState, useEffect } from "react";
import SEO from "../components/Seo/seo"
import styled from 'styled-components';
import { theme } from '../utils/theme';
import Layout from "../components/Layout/Layout"
import ArrowButton from "../components/ArrowButton/ArrowButton"
import CarouselComponent from "../components/PropertiesList/Carousel/Carousel"
import Spinner from "../components/Spinner/Spinner"
import cloud3 from "../images/cloud_3.png"

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

    const [loading, setLoading] = useState(true)
    const [pageContent, setPageContent] = useState({ properties: [{}] });
    const [routeTag, setRouteTag] = useState('"vip"');
    console.log('pageContent:', pageContent)

    useEffect(() => {
        const query = `query Properties($string: String) {
            properties(filter: $string) {
                id
                title
                price
                location
                img
            }
        }`;

        const url = "http://localhost:8080/graphql";
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        
        const fetchData = async () => {
            try {
                const tag = await props.location.state.route;
                setRouteTag(tag);
                let string = `{"tag": ${tag}}`
                const body = JSON.stringify({ query, variables: { string } });
                const res = await fetch(url, { method: 'POST', headers: headers, body: body });
                const preData = await res.json();
                const data = preData.data
                setPageContent(data);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);


    return (

        <Layout>
            <SEO title="Properties" />
            <StyledBackground>
            <StyledWrapper>
                <Title>Welcome to {routeTag.replace(/["]/g, "")} Products List</Title>

                {loading ? <Spinner /> : <CarouselComponent pageContent={pageContent.properties} state={{ route: routeTag }} />}

                    <ArrowButton state={{ route: routeTag, pathname: "/" }}/>
            </StyledWrapper>
            </StyledBackground>
        </Layout>
    )
}

export default PropertiesList;