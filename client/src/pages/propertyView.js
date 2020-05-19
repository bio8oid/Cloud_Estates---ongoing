import React from "react"
import { Link } from "gatsby"
import SEO from "../components/Seo/seo"
import Layout from "../components/Layout/layout"


const PropertyView = (props) =>  (

    <Layout>
        <SEO title="Property" />
        <Link to="/">Go back to the homepage</Link>
        <h1>Hi from the property view</h1>
        <Link to="/propertiesList" state={{ route: props.location.state.route}} >Go back to properties list</Link>
    </Layout>
)

export default PropertyView;