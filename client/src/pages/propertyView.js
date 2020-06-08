import React, { useState, useEffect } from "react";
import SEO from "../components/Seo/seo";
import styled from 'styled-components';
import { theme } from '../utils/theme';
import Spinner from "../components/Spinner/Spinner"
import Layout from "../components/Layout/Layout"
import MultiButton from "../components/MultiButton/MultiButton";
import { StyledHomeButton, StyledContactButton } from "../components/MultiButton/MultiButton"
import Slider from "../components/PropertyView/Slider/Slider"
import useFetch from "../components/Fetch/Fetch";


// ---- Property View Styles ----

const StyledPropertyDescription = styled.div`
display: flex;
flex-direction: column;
align-items: center;
min-height: 40vh;
opacity: .6;

p {
    font-size: 1.25rem;
    font-weight: bolder;
}
`
const StyledContainerWrapper = styled.div`
text-align: center;
display: flex;
flex-direction: row;

${theme.media.mobile} {
    flex-direction: column;
}
`
const StyledContainerCenter = styled.div`
width: 70vw;
text-align: center;

h3 {
    font-size: 2.5rem;
    margin: 0;
}

p {
    font-size: 1.5rem;
}
`
const StyledColumn = styled.div`
width: 35vw;

${theme.media.tablet} {
    width: 50vw;
}

${theme.media.mobile} {
    p {
        font-size: 1rem;
    };
}
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

    return (

        <Layout>
            <SEO title="Property" />

            {loading ? <Spinner /> : <Slider propertyContent={propertyContent} />}

            {propertyContent.map(x => (
                <StyledPropertyDescription index={x.id} key={Math.random()} >
                    <StyledContainerCenter>
                        <h3>{x.title}</h3>
                        <p>{x.desc}</p>
                    </StyledContainerCenter>

                    <StyledContainerWrapper>
                        <StyledColumn>
                            <p>LOCATION : {x.location}</p>
                            <p>AVAILABLE : {x.availability}</p>
                            <p>FACTOR : {x.factor}</p>
                        </StyledColumn>

                        <StyledContactButton>
                            <MultiButton state={{ route: routeTag, id: propertyId, pathname: "/contact", buttonType: "chat" }} />
                        </StyledContactButton>

                        <StyledColumn>
                            <p>DEPOSIT : {x.deposit}</p>
                            <p>COMMISSION : {x.commission}</p>
                            <p>RENT PRICE : {x.price} £ PM</p>
                        </StyledColumn>

                    </StyledContainerWrapper>
                </StyledPropertyDescription>
            ))}

            <StyledHomeButton>
                <MultiButton state={{ id: propertyId, pathname: "/", buttonType: "home" }} />
            </StyledHomeButton>

            <MultiButton state={{ route: routeTag, id: propertyId, pathname: "/propertiesList" }} />

        </Layout>

    )
}

export default PropertyView;