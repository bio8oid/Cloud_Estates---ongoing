import React from "react"
import { Link } from "gatsby"
import SEO from "../components/Seo/seo"

const PropertiesList = () => (
    <>
        <SEO title="Properties" />
        <h1>Hi from the properties list</h1>
        <p>Welcome to page 2</p>
        <Link to="/propertyView">Go back to the homepage</Link>
    </>
)

export default PropertiesList;