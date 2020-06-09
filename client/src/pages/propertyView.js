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
import cloud3 from "../images/cloud_3.webp"


// ---- Property View Styles ----

const StyledPropertyDescription = styled.div`
${theme.flex.centeredColumn};
background : white;
min-height: 45vh;
position: fixed;
bottom: 0;
left: 0;
right: 0;
margin: 0;

p {
    font-size: 1.25rem;
    font-weight: bolder;
}

${theme.media.cloud} {
    height: 51vh;
}

${theme.media.desktop} {
    min-height: 58vh;
}

${theme.media.tabletPro} {
    min-height: 60vh;
}

${theme.media.tablet} {
    min-height: 70vh;
}

${theme.media.mobile} {
    position: static;
    opacity: .9;
}
`
const StyledBackgroundImage = styled.div`
position: absolute;
max-height: 46vh;
z-index: -1;

img {
    position: relative;
    max-width: 100%;
    opacity: .6;
}
`
const StyledContainerWrapper = styled.div`
${theme.flex.centered};
text-align: center;

${theme.media.mobile} {
    flex-direction: column;
}
`
const StyledContainerCenter = styled.div`
text-align: center;
width: 70vw;

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

                    <StyledBackgroundImage>
                        <img src={cloud3} alt="cloud3" />
                    </StyledBackgroundImage>

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