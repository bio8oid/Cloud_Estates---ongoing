import React from "react"
import SEO from "../components/Seo/seo"
import Layout from "../components/Layout/Layout"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ textAlign: "center", marginTop: "50%" }}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
