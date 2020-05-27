import React, { useState, useEffect } from "react";
// import { Link } from "gatsby";
import SEO from "../components/Seo/seo";
import styled from 'styled-components';
// import { theme } from '../utils/theme';
// import CarouselComponent from "../components/PropertiesList/Carousel/Carousel"
// import {StyledWrapper} from "./PropertiesList"
import Spinner from "../components/Spinner/Spinner"
import Layout from "../components/Layout/Layout"
import ArrowButton from "../components/ArrowButton/ArrowButton";
import { StyledHomeButton } from "../components/ArrowButton/ArrowButton"
import Slider from "../components/PropertyView/Slider/Slider"

const StyledPropertyDescription = styled.div`
display: flex;
justify-content: space-around;
max-width: 70vw;
max-height: 30vh;
border: 1px solid #000;
`

const PropertyView = props =>  {

console.log('props:', props)
// console.log('props:', props.location.state.route)

    const [loading, setLoading] = useState(true)
    const [propertyContent, setPropertyContent] = useState({ properties: [{}] });
    const [routeTag, setRouteTag] = useState('"vip"');
    const [propertyId, setPropertyId] = useState(null);
    console.log('propertyId:', propertyId)
    console.log('propertyContent:', propertyContent)

    useEffect(() => {
        const query = `query Properties($string: String) {
            properties(filter: $string) {
                id
                title
                desc
                price
                location
                availability
                deposit
                commission
                factor
                img
            }
        }`;

        const url = "http://localhost:8080/graphql";
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        const tagData = props.location.state === null ? routeTag : props.location.state.route;

        const fetchData = async () => {
            try {
                const tag = await tagData;
                setRouteTag(tag);
                let id = await props.location.state.id;
                setPropertyId(id)
                let string = `{"id": ${id}}`
                const body = JSON.stringify({ query, variables: { string } });
                const res = await fetch(url, { method: 'POST', headers: headers, body: body });
                const preData = await res.json();
                const data = preData.data
                setPropertyContent(data);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [ propertyId ]);

    
return (

    <Layout>
        <SEO title="Property" />

        {loading ? <Spinner /> : <Slider propertyContent={propertyContent.properties} />}

        {loading ? <Spinner /> : propertyContent.properties.map(x => (
            <StyledPropertyDescription index={x.id} key={Math.random()} >
                <h3 >{x.title}</h3>
                <p>{x.desc}</p>
                <p>{x.location}</p>
                <p>{x.availability}</p>
                <p>{x.deposit}</p>
                <p>{x.factor}</p>
                <p>{x.availability}</p>
                <p>{x.commission}</p>
                <p>{x.price} £ PM</p>
            </StyledPropertyDescription>
        ))}

        <StyledHomeButton>
        <ArrowButton state={{ pathname: "/", tag: "home" }}/>
        </StyledHomeButton>

        <ArrowButton state={{ route: routeTag, pathname: "/propertiesList" }}/>

    </Layout>

    )  
}

export default PropertyView;