import React, { useState, useEffect } from "react";
import { Link } from "gatsby"
import SEO from "../components/Seo/seo"
// import Query from './query'
import styled from 'styled-components';
import { theme } from '../utils/theme';
import Layout from "../components/Layout/layout"


// import Slider from '../components/Slider/Slider';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, ButtonFirst, ButtonLast } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { object } from "prop-types";

const StyledProductConetnt = styled.div`
/* ${theme.flex.centered.column};
align-items: space-between;
justify-content: center; */
height: 100%;
position: absolute;
/* position: relative; */
   border: 2px solid red;

   h3 {
   border-radius: 25px;
   border: 10px solid ${theme.colors.primary};
   }
`

const StyledProductImage = styled.div`
   border-radius: 50%;
border: 10px solid ${theme.colors.primary};
   /* height: 200px;
   width: 200px; */
   min-height: 100px; 
    min-width: 100px;
    /* position: absolute; */
img {
border: 2px solid green;
   ${theme.responsiveImg};
    border-radius: 50%;
}
`

const PropertiesList = (props) => {

    const [pageContent, setPageContent] = useState({ properties: [{}] });
    console.log('pageContent2:', pageContent.properties)
    console.log('pageContent2:', pageContent.properties.length)

    const url = "http://localhost:8080/graphql";
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    const routeTag = props.location.state.route
    // console.log(routeTag)
    let string = `{"tag": ${routeTag}}`
    var query = `query Properties($string: String) {
            properties(filter: $string) {
                id
                title
                price
                location
                img
            }
        }`;

    const body = JSON.stringify({ query, variables: { string } });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, { method: 'POST', headers: headers, body: body });
                const preData = await res.json();
                // console.log('data:', preData)
                const data = preData.data
                // console.log('data:', data)
                setPageContent(data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);


    return (
        <Layout>
            <SEO title="Properties" />

            <h1>Welcome to Products List</h1>

            <CarouselProvider
                // naturalSlideWidth={100}
                // naturalSlideHeight={150}
                totalSlides={8}
                // totalSlides={pageContent.properties.length}
                visibleSlides={4}
            >
                <Slider style={{ border: "2px solid black", height: "50vh"}}>
                    {pageContent.properties.map(x => (
                        <Slide index={x.id} key={x.id} style={{ border: "2px solid black", margin: "2%", borderRadius: "50%", textAlign: "center" }} >
                            <StyledProductConetnt key={x.title} >
                            <h3 >{x.title}</h3>
                            <StyledProductImage>
                            <img src={x.img} alt={x.title} />
                            </StyledProductImage>
                            <p>{x.price} %</p>
                            <Link to="/propertyView" state={{ route: routeTag }} >Go to product</Link>
                            </StyledProductConetnt>
                        </Slide>
                    ))}
                </Slider>
                <DotGroup />
                <ButtonLast>last</ButtonLast>
                <ButtonFirst>first</ButtonFirst>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        </Layout>
    )
}

export default PropertiesList;