import React, { useState }from 'react';
import Layout from "../components/Layout/Layout";
import SEO from "../components/Seo/seo";
import Header from '../components/Home/Header/Header';
import Hero from '../components/Home/Hero/Hero';
import About from '../components/Home/About/About';
import Rent from '../components/Home/Rent/Rent';
import CitySection from '../components/Home/CitySection/CitySection';
import UpperCloudsSection from '../components/Home/UpperCloudsSection/UpperCloudsSection';
import { Parallax } from 'react-spring/renderprops-addons';


const IndexPage = (props, parallax, ) => {
// console.log('props:', props)

        const [routeTag, setRouteTag] = useState(null);



return (
    <Layout { ...routeTag } >
        <SEO title="Home" />
        <Parallax ref={ref => (parallax = ref)} pages={4}>
            <UpperCloudsSection />
            <Header onClick={() => parallax.scrollTo(2)} />
            <Hero onClick={() => parallax.scrollTo(1)} />
            <About onClick={() => parallax.scrollTo(2)} />
            <CitySection onClick={() => parallax.scrollTo(0)} />
            <Rent onClick={(tag) => setRouteTag(tag)}/>
        </Parallax>
    </Layout> 
)


}

export default IndexPage;