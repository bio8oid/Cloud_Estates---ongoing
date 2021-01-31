import React from "react";
import SEO from "../components/Seo/seo";
import Layout from "../components/Layout/Layout";
import Spinner from "../components/Spinner/Spinner";
import MultiButton from "../components/MultiButton/MultiButton";
import { StyledHomeButton } from "../components/MultiButton/MultiButton";
import Slider from "../components/Slider/Slider";
import useFetch2 from "../components/useFetch/useFetch2";
// import useRouteData from "../components/useRouteData/useRouteData";
import PropertyContent from "../components/PropertyContent/PropertyContent";

// ---- Images ----

import route404 from "../images/404.webp";


const PropertyView2 = props => {

    // const routeData = useRouteData(props);
    const routeData = props['*'];
    console.log('VIEWrouteData:', routeData)

    const query = `query Properties($string: String) {
            properties(filter: $string) {
                id
                title
                desc
                price
                location
                availability
                deposit
                commission
                factor
                img
            }
        }`

    const res = useFetch2(query, routeData);
    console.log('resview2:', res)
    // console.log('resview2pageContent:', res.pageContent[0].id)
    // console.log('routeData.propertyId:', routeData.propertyId)

    const loading = res.loading;
    const propertyContent = res.pageContent.length === 0 ? [{ img: [`${route404}`] }] : res.pageContent;

    return (
        <Layout>
            <SEO title="Property" />

            {loading ? <Spinner /> : <Slider propertyContent={propertyContent} auto={true} />}

            <PropertyContent propertyContent={propertyContent} routeData={routeData} />

            <StyledHomeButton>
                {/* <MultiButton state={{ id: routeData, pathname: "/", buttonType: "home" }} /> */}
            </StyledHomeButton>

            {/* <MultiButton state={{ route: routeData, id: routeData, pathname: "/propertiesList" }} /> */}

        </Layout>
    )
}

export default PropertyView2;