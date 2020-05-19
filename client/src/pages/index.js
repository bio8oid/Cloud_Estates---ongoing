import React from 'react'
import Home from '../components/Home/home';
import SEO from "../components/Seo/seo"
import Layout from "../components/Layout/layout"


const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Home />
    </Layout>
)

export default IndexPage;