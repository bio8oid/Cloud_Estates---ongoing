import React from "react";
import SEO from "../components/Seo/seo";
import Spinner from "../components/Spinner/Spinner";
import Layout from "../components/Layout/Layout";
import MultiButton from "../components/MultiButton/MultiButton";
import { StyledHomeButton } from "../components/MultiButton/MultiButton";
import Slider from "../components/Slider/Slider";
import useFetch from "../components/useFetch/useFetch";
import useRouteData from "../components/useRouteData/useRouteData";
import PropertyContent from "../components/PropertyContent/PropertyContent";

// ---- Images ----

import route404 from "../images/404.webp";


const PropertyView = props => {

    const routeData = useRouteData(props);

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

    const res = useFetch(query, routeData.propertyId);
    const loading = res.loading;
    const propertyContent = res.pageContent.length === 0 ? [{ img: [`${route404}`] }] : res.pageContent;

    return (
        <Layout>
            <SEO title="Property" />

            {loading ? <Spinner /> : <Slider propertyContent={propertyContent} auto={true} />}

            <PropertyContent propertyContent={propertyContent} routeData={routeData} />

            <StyledHomeButton>
                <MultiButton state={{ id: routeData.propertyId, pathname: "/", buttonType: "home" }} />
            </StyledHomeButton>

            <MultiButton state={{ route: routeData.routeTag, id: routeData.propertyId, pathname: "/propertiesList" }} />

        </Layout>
    )
}

export default PropertyView;