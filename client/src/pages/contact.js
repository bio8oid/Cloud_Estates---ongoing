import React from "react"
import { Link } from "gatsby"
import SEO from "../components/Seo/seo"
import Layout from "../components/Layout/Layout"

const Contact = props => (
  
  <Layout>
  {/* {console.log('props:', props)} */}
    <SEO title="Contact" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/propertyView" state={{ route: props.location.state.route, id: props.location.state.id }}>Go back to the product view</Link>
  </Layout>
)

export default Contact;