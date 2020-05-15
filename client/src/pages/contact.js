import React from "react"
import { Link } from "gatsby"
import SEO from "../components/Seo/seo"

const Contact = () => (
  <>
    <SEO title="Contact" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default Contact;