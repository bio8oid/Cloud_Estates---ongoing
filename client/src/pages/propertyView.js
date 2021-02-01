import React, { useEffect, useState } from "react";
import SEO from "../components/Seo/seo";
import Layout from "../components/Layout/Layout";
import Spinner from "../components/Spinner/Spinner";
import MultiButton from "../components/MultiButton/MultiButton";
import { StyledHomeButton } from "../components/MultiButton/MultiButton";
import Slider from "../components/Slider/Slider";
import useFetch from "../components/useFetch/useFetch";
import PropertyContent from "../components/PropertyContent/PropertyContent";

// ---- Images ----

import route404 from "../images/404.webp";


const PropertyView = props => {

    const [routeTag, setRouteTag] = useState('')

    useEffect(() => {
        if (props.location.state !== null && props.location.state.route !== "") {
            localStorage.setItem('routeTag', JSON.stringify(props.location.state.route))
        }
        setRouteTag(JSON.parse(localStorage.getItem('routeTag')) || props.location.state.route);
    }, [props]);

    const viewRouteData = props['*'];

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

    const res = useFetch(query, viewRouteData);

    const loading = res.loading;
    const propertyContent = res.pageContent.length === 0 ? [{ img: [`${route404}`] }] : res.pageContent;

    return (
        <Layout>
            <SEO title="Property" />

            {loading ? <Spinner /> : <Slider propertyContent={propertyContent} auto={true} />}

            <PropertyContent propertyContent={propertyContent} routeData={viewRouteData} />

            <StyledHomeButton>
                <MultiButton state={{ id: viewRouteData, pathname: "/", buttonType: "home" }} />
            </StyledHomeButton>

            <MultiButton state={{ route: viewRouteData, id: viewRouteData, pathname: `/propertiesList/${routeTag}` }} />

        </Layout>
    )
}

export default PropertyView;
