import React, { useState, useEffect } from "react";
import SEO from "../components/Seo/seo"
import styled from 'styled-components';
import { theme } from '../utils/theme';
import Layout from "../components/Layout/Layout"
import MultiButton from "../components/MultiButton/MultiButton"
import CarouselComponent from "../components/Carousel/Carousel"
import Spinner from "../components/Spinner/Spinner"
import cloud3 from "../images/cloud_3.webp"
import useFetch from "../components/useFetch/useFetch"
import useRouteData from "../components/useRouteData/useRouteData"


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

//  const [routeData, setRouteData] = useState({});

 const data = useRouteData(props);

//  const routeTagData = { name: '"tag"', value: routeDatas.routeTag };

//  useEffect(() => {
     
//      const setSomething = async () => {
//          console.log('routeData:', routeDatas);
//          console.log('routeDataTag:', routeDatas.routeTag);

//          console.log('routeTagData:', routeTagData)

//          const something = await routeTagData
//         setRouteData(something);
//     }
//         setSomething();
//  }, [routeTagData] );




    // const [routeData, setRouteData] = useState({});

    // useEffect(() => {

    //     // To keep state after page reload

    //     const routeTagData = props.location.state === null ? JSON.parse(localStorage.getItem('keptRouteTag')) : props.location.state.route;

    //     const setLocalStorage = data => localStorage.setItem('keptRouteTag', JSON.stringify(data));

    //     const setTag = () => {
    //         setRouteData({ name: '"tag"', value: routeTagData });
    //         setLocalStorage(routeTagData);
    //     }
    //     setTag();
    // }, [props.location.state]);


    const query = `query Properties($string: String) {
            properties(filter: $string) {
                id
                title
                price
                location
                img
            }
        }`;

    const res = useFetch(query, data.routeData);


    // const res = useFetch(query, routeData);

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

                    <MultiButton state={{ route: routeTag, id: "", pathname: "/" }} />

                </StyledWrapper>
            </StyledBackground>
        </Layout>
    )
}

export default PropertiesList;