import React from "react"
import { Link } from "gatsby"
import SEO from "../components/Seo/seo"

const PropertyView = (props) =>  (
    
    <>
        <SEO title="Property" />
        <h1>Hi from the property view</h1>
        <Link to="/#rent">Go back to the homepage</Link>
        <Link to="/propertiesList" state={{ route: props.location.state.route}} >Go back to properties list</Link>
    </>
)

export default PropertyView;