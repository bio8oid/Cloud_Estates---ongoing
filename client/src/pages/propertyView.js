import React, { useState, useEffect } from "react";
// import { Link } from "gatsby";
import SEO from "../components/Seo/seo";
// import styled from 'styled-components';
// import { theme } from '../utils/theme';
import CarouselComponent from "../components/Carousel/Carousel"
import Spinner from "../components/Spinner/Spinner"
import Layout from "../components/Layout/Layout"
import ArrowButton from "../components/ArrowButton/ArrowButton";
import { StyledHomeButton } from "../components/ArrowButton/ArrowButton"


const PropertyView = props =>  {
console.log('props:', props)
// console.log('props:', props)

    const [loading, setLoading] = useState(true)
    const [pageContent, setPageContent] = useState({ properties: [{}] });
    console.log('pageContent:', pageContent)

    let id = props.location.state.id;
    // let id = JSON.stringify(props.location.state.id);
    // console.log('id:', id)

    useEffect(() => {
        // let string = `{"tag": ${routeTag}}`
        let string = `{"id": ${id}}`
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
        <SEO title="Property" />

        {loading ? <Spinner /> : pageContent.properties.map(x => (
            <div index={x.id} key={Math.random()} >
                <img src={x.img} alt={x.title} />
                <h3 >{x.title}</h3>
                <p>{x.desc}</p>
                <p>{x.location}</p>
                <p>{x.availability}</p>
                <p>{x.deposit}</p>
                <p>{x.factor}</p>
                <p>{x.availability}</p>
                <p>{x.commission}</p>
                <p>{x.price} £ PM</p>
            </div>
        ))
        }

        <StyledHomeButton>
        <ArrowButton state={{ route: props.location.state.route, pathname: "/", tag: "home" }}/>
        </StyledHomeButton>

        <ArrowButton state={{ route: props.location.state.route, pathname: "/propertiesList" }}/>
    </Layout>

    )  
}

export default PropertyView;