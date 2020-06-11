import React from "react";
import styled from 'styled-components';
import { theme } from '../../utils/theme';
import Layout from "../Layout/Layout";
import MultiButton from "../MultiButton/MultiButton";
import { StyledContactButton } from "../MultiButton/MultiButton";

// ---- Images ----

import cloud3 from "../../images/cloud_3.webp";

// ---- Property View Styles ----

const StyledPropertyDescription = styled.div`
${theme.flex.centeredColumn};
min-height: 45vh;
background : white;
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
opacity: .6;

${theme.media.mobile} {
    flex-direction: column;
    opacity: .7;
}
`
const StyledContainerCenter = styled.div`
text-align: center;
width: 70vw;
opacity: .6;

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


const PropertyContent = props => {

    return (
        <Layout>

            {props.propertyContent.map(x => (
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
                            <MultiButton state={{ route: props.routeData.routeTag, id: props.routeData.propertyId, pathname: "/contact", buttonType: "chat" }} />
                        </StyledContactButton>

                        <StyledColumn>
                            <p>DEPOSIT : {x.deposit}</p>
                            <p>COMMISSION : {x.commission}</p>
                            <p>RENT PRICE : {x.price} £ PM</p>
                        </StyledColumn>

                    </StyledContainerWrapper>
                </StyledPropertyDescription>
            ))}

        </Layout>
    )
}

export default PropertyContent;