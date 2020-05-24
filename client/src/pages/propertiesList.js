import React, { useState, useEffect } from "react";
import SEO from "../components/Seo/seo"
import styled from 'styled-components';
import { theme } from '../utils/theme';
import Layout from "../components/Layout/Layout"
import ArrowButton from "../components/ArrowButton/ArrowButton"
import CarouselComponent from "../components/Carousel/Carousel"
import Spinner from "../components/Spinner/Spinner"

// ---- List Styles ----

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

    const [loading, setLoading] = useState(true)
    const [pageContent, setPageContent] = useState({ properties: [{}] });

    let routeTag = props.location.state.route;

    useEffect(() => {
        let string = `{"tag": ${routeTag}}`
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
        const body = JSON.stringify({ query, variables: { string } });

        const fetchData = async () => {
            try {
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
            <StyledWrapper>
                {/* <Title>Welcome to {routeTag.replace(/["]/g, "")} Products List</Title> */}

                {loading ? <Spinner /> :
                    <CarouselComponent pageContent={pageContent.properties} state={{ route: routeTag }} />}

                <ArrowButton state={{ route: props.location.state.route, pathname: "/" }}/>
            </StyledWrapper>
        </Layout>
    )
}

export default PropertiesList;