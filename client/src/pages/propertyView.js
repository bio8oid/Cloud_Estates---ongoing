import React from "react";
// import { Link } from "gatsby";
import SEO from "../components/Seo/seo";
// import styled from 'styled-components';
import Layout from "../components/Layout/Layout"
import ArrowButton from "../components/ArrowButton/ArrowButton";
import { StyledHomeButton } from "../components/ArrowButton/ArrowButton"

// const StyledHomeButton = styled(StyledButton)`
// right: 20px;

// img {
//     transform: rotate(0);
// }
// `

const PropertyView = props =>  (
    
    <Layout>
        <SEO title="Property" />

        <StyledHomeButton>
        <ArrowButton state={{ route: props.location.state.route, pathname: "/", tag: "home" }}/>
        </StyledHomeButton>

        <h1>Hi from the property view</h1>
        {console.log(props)}

        <ArrowButton state={{ route: props.location.state.route, pathname: "/propertiesList" }}/>
    </Layout>
)

export default PropertyView;