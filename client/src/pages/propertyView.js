import React from "react"
import { Link } from "gatsby"
import SEO from "../components/Seo/seo"

const PropertyView = () => (
    <>
        <SEO title="Property" />
        <h1>Hi from the property view</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
    </>
)

export default PropertyView;