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
    // console.log('props:', props.location.state.route)

    // let routeTag = '';
    // if (props.location.state.route !== "") {
    //     localStorage.setItem('routeTag', JSON.stringify(props.location.state.route))
    // } else {
    //     routeTag = JSON.parse(localStorage.getItem('routeTag'));
    // }

    if (props.location.state !== null && props.location.state.route !== "") {
        localStorage.setItem('routeTag', JSON.stringify(props.location.state.route))
    }

    const routeTag = JSON.parse(localStorage.getItem('routeTag')) || props.location.state.route;


    // const routeData = useRouteData(props);
    const viewRouteData = props['*'];
    // console.log('VIEWrouteData:', routeData)
    // let viewRouteData;
    // if (props['*'] !== "") {
    //     localStorage.setItem('viewRouteData', JSON.stringify(props['*']))
    // } else {
    //     viewRouteData = JSON.parse(localStorage.getItem('viewRouteData'));

    // }
    // viewRouteData = props['*'];

    // if (props.location.state !== null) {
    //     localStorage.setItem('buttonData', JSON.stringify(`"${props['*']}"`))
    // }


    //   const buttonData = JSON.parse(localStorage.getItem('buttonData')) || props.location.state.route;


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

    const res = useFetch2(query, viewRouteData);
    // console.log('resview2:', res)
    // console.log('resview2pageContent:', res.pageContent[0].id)
    // console.log('routeData.propertyId:', routeData.propertyId)

    const loading = res.loading;
    const propertyContent = res.pageContent.length === 0 ? [{ img: [`${route404}`] }] : res.pageContent;
    // const propertyContent = res.pageContent;

    return (
        <Layout>
            <SEO title="Property" />

            {loading ? <Spinner /> : <Slider propertyContent={propertyContent} auto={true} />}

            <PropertyContent propertyContent={propertyContent} routeData={viewRouteData} />

            <StyledHomeButton>
                <MultiButton state={{ id: viewRouteData, pathname: "/", buttonType: "home" }} />
            </StyledHomeButton>

            {/* {console.log('routeDataView:', viewRouteData)} */}
            <MultiButton state={{ route: viewRouteData, id: viewRouteData, pathname: `/propertiesList2/${routeTag}` }} />

        </Layout>
    )
}

export default PropertyView2;