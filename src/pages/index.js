import React from 'react'
import Home from '../components/Home/home';
import SEO from "../components/Seo/seo"
import Layout from "../Layout/layout"


const IndexPage = () => (

    <>
        <SEO title="home" />
        <Layout>
            <Home />
        </Layout>
    </>
)

export default IndexPage;