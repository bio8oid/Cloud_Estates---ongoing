import React, { useState, useEffect } from "react";
import SEO from "../components/Seo/seo";
import styled from 'styled-components';
// import { theme } from '../utils/theme';
import Spinner from "../components/Spinner/Spinner"
import Layout from "../components/Layout/Layout"
import MultiButton from "../components/MultiButton/MultiButton";
import { StyledHomeButton } from "../components/MultiButton/MultiButton"
import Slider from "../components/PropertyView/Slider/Slider"
import useFetch from "../components/Fetch/Fetch";


const StyledPropertyDescription = styled.div`
display: flex;
justify-content: space-around;
max-width: 70vw;
max-height: 30vh;
border: 1px solid #000;
`


const PropertyView = props => {

    const [routeTag, setRouteTag] = useState("");
    const [propertyId, setPropertyId] = useState({});

    useEffect(() => {

        // To keep state after page reload

        const routeTagData = props.location.state === null ? JSON.parse(localStorage.getItem('keptRouteTag')) : props.location.state.route;

        const idData = props.location.state === null ? JSON.parse(localStorage.getItem('keptRouteId')) : props.location.state.id;

        const setLocalStorage = (data) => localStorage.setItem('keptRouteId', JSON.stringify(data));

        const setTag = async () => {
            setPropertyId({ name: '"id"', value: idData });
            setRouteTag(routeTagData);
            setLocalStorage(idData);
        }
        setTag();
    }, [props.location.state]);

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

    const res = useFetch(query, propertyId);

    const loading = res.loading;
    const propertyContent = res.pageContent;
    console.log('propertyContent:', propertyContent)

    return (

        <Layout>
            <SEO title="Property" />

            {loading ? <Spinner /> : <Slider propertyContent={propertyContent} />}

            {propertyContent.map(x => (
                <StyledPropertyDescription index={x.id} key={Math.random()} >
                    <h3 >{x.title}</h3>
                    <p>{x.desc}</p>
                    <p>{x.location}</p>
                    <p>{x.availability}</p>
                    <p>{x.deposit}</p>
                    <p>{x.factor}</p>
                    <p>{x.availability}</p>
                    <p>{x.commission}</p>
                    <p>{x.price} £ PM</p>
                </StyledPropertyDescription>
            ))}

            <StyledHomeButton>
                <MultiButton state={{ pathname: "/", tag: "home" }} />
            </StyledHomeButton>

            <MultiButton state={{ route: routeTag, pathname: "/propertiesList" }} />

        </Layout>

    )
}

export default PropertyView;