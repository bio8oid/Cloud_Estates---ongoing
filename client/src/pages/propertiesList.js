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

    // const [loading, setLoading] = useState(true)
    // const [pageContent, setPageContent] = useState({ properties: [{}] });
    const [routeTaggy, setRouteTaggy] = useState("");
    console.log('routeTaggy:', routeTaggy)
    // console.log('routeTag:', routeTag)
    // const [pageContent, loading] = useFetch(query, string);
    // console.log('pageContent:', pageContent)

    // useEffect(() => {
        // const setTag = async () => {
        //     const tag = await props.location.state.route;
        //     return tag;
        // }
    //     setTag();
    // }, []);
    
    // console.log('tag:', tag)

    const query = `query Properties($string: String) {
            properties(filter: $string) {
                id
                title
                price
                location
                img
            }
        }`;

    // const keptTag = localStorage.getItem('keptRouteTag');
    // if (keptTag) setRouteTag(JSON.parse(localStorage.getItem('keptRouteTag')));

    
    useEffect(() => {
        const setTag = async () => {
            const tag = await props.location.state === null ? JSON.parse(localStorage.getItem('keptRouteTag')) : props.location.state.route;
            console.log('tag:', tag);
            setRouteTaggy(tag);
            localStorage.setItem('keptRouteTag', JSON.stringify(tag));
        }
        setTag();
    }, []);

    // const tag = props.location.state === null ? JSON.parse(localStorage.getItem('keptRouteTag')) : props.location.state.route;

    // const setContent = async () => {
    // console.log('routeTagAfter:', routeTag)
    // let string = `{"tag": ${routeTag}}`
    // let string = `{"tag": ${tag}}`

    console.log('routeTaggyAfter:', routeTaggy)

    const res = useFetch(query, routeTaggy);

    const loading = res.loading;
    const routeTag = res.routeTag;
    const pageContent = res.pageContent;

    console.log('res:', res)
    console.log('loading:', loading)
    console.log('pageContent:', pageContent)


    return (

        <Layout>
            <SEO title="Properties" />
            <StyledBackground>
                <StyledWrapper>

                   <Title>Welcome to {routeTag.replace(/["]/g, "")} Products List</Title>

                    {/* {loading ? <Title>Welcome to {routeTag.replace(/["]/g, "")} Products List</Title> : "Loadimg..."} */}
                    {/* <Title>Welcome to {tag.replace(/["]/g, "")} Products List</Title> */}

                    {loading ? <Spinner /> : <CarouselComponent pageContent={pageContent} state={{ route: routeTag }} />}

                    <ArrowButton state={{ route: routeTag, pathname: "/" }} />
                </StyledWrapper>
            </StyledBackground>
        </Layout>
    )
}

export default PropertiesList;









// useEffect(() => {
//     const keptTag = localStorage.getItem('keptRouteTag');
//     keptTag ? setRouteTag(JSON.parse(keptTag));
// })

// useEffect(() => {
//     localStorage.setItem('keptRouteTag',JSON.stringify( routeTag))
// })





    // useEffect(() => {
    //     const keptTag = localStorage.getItem('keptRouteTag');
    //     if (keptTag) setRouteTag(JSON.parse(keptTag));
    // },[]);

    // console.log('routeTag2:', routeTag)

    // useEffect(() => {
    //     // const keptTag = localStorage.getItem('keptRouteTag');
    //     // if (keptTag) setRouteTag(JSON.parse(keptTag));

    //     const query = `query Properties($string: String) {
    //         properties(filter: $string) {
    //             id
    //             title
    //             price
    //             location
    //             img
    //         }
    //     }`;

    //     const url = "http://localhost:8080/graphql";
    //     const headers = {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     };

    //     if (routeTag !== null) {
    //         var tagData = routeTag ;
    //     }
    //     // const tagData = props.location.state === null && routeTag !== "" ? props.location.state.route : routeTag;

    //     const fetchData = async () => {
    //         try {
    //             const tag = await  tagData;
    //             // setRouteTag(tag);
    //             let string = `{"tag": ${tag}}`
    //             const body = JSON.stringify({ query, variables: { string } });
    //             const res = await fetch(url, { method: 'POST', headers: headers, body: body });
    //             const preData = await res.json();
    //             const data = preData.data.properties
    //             // setPageContent(data);
    //             // setLoading(false);
    //             // localStorage.setItem('keptRouteTag', JSON.stringify(tag))
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     fetchData();
    // }, []);
