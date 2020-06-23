import React from "react"
import SEO from "../components/Seo/seo"
import Layout from "../components/Layout/Layout"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ textAlign: "center", marginTop: "40vh" }}>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness and poor commission :(</p>
    </div>
  </Layout>
)

export default NotFoundPage;