import React from 'react';
import Layout from "../components/Layout/Layout";
import SEO from "../components/Seo/seo";
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Rent from '../components/Rent/Rent';
import CitySection from '../components/CitySection/CitySection';
import UpperCloudsSection from '../components/UpperCloudsSection/UpperCloudsSection';
import { Parallax } from 'react-spring/renderprops-addons';


const IndexPage = parallax => (

    <Layout>
        <SEO title="Home" />
        <Parallax ref={ref => (parallax = ref)} pages={4}>
            <UpperCloudsSection />
            <Header onClick={() => parallax.scrollTo(2)} />
            <Hero onClick={() => parallax.scrollTo(1)} />
            <About onClick={() => parallax.scrollTo(2)} />
            <CitySection onClick={() => parallax.scrollTo(0)}/>
            <Rent />
        </Parallax>
   </Layout>

)

export default IndexPage;