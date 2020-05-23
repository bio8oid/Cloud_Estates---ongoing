import React, { useState, useEffect, useContext } from "react";
import { Link } from "gatsby"
import styled from 'styled-components';
import { theme } from '../../utils/theme';
import Layout from "../../components/Layout/Layout"

import { SpinnerContext } from '../../../provider';

const StyledCarouselContent = styled.div`
   margin: 25px;

   h3 {
       font-size: 2rem;
       opacity: .6;
   }

   a {
       text-decoration: none;
       max-height: 30vh;
   }
`

const StyledCarouselDescription = styled.div`
${theme.centered};
width: 100%;

 p {
    display: block;
    font-size: 3rem;
    color: black;
    font-weight: bolder;
    text-shadow: 0 0 5px skyblue;
    margin: 0;

    ${theme.media.tablet} {
        font-size: 2rem;
    }
}

    @media not all and (hover: none) {
        &:hover p {
            ${theme.hover.text};
        }
    }
`

const StyledCarouselImage = styled.div`
   /* max-height: 30vh; */
   margin-bottom: 50px;
   position: relative;

img {
   ${theme.responsiveImg};
   border-radius: 50px;
   border: 10px solid ${theme.colors.primary};

        ${theme.media.mobile} {
        border-radius: 25px;
    }

    @media not all and (hover: none) {
        &:hover { 
            box-shadow: 0 0 10px  ${theme.colors.primary};
            opacity: .9;
        &:hover ~ ${StyledCarouselDescription} p { 
            ${theme.hover.text};
            text-shadow: 0 0 5px white;
        }
        }
    }
}
`


const CarouselContent = (props, {onStateChange}) => {
// console.log('props:', props)

    // const SpinnerRun = useContext(SpinnerContext);
    // console.log('SpinnerRun1:', SpinnerContext)
    // console.log('SpinnerRun2:', SpinnerRun)
    // console.log('SpinnerRun3:', SpinnerRun.stopSpinner)

    const [loading, setLoading] = useState(true)
    console.log('loading:', loading)

    const [pageContent, setPageContent] = useState({ properties: [{}] });

    // export const SpinnerRun = React.createContext(loading);

    console.log('pageContent2:', pageContent.properties)

    onStateChange = param => param;


    let routeTag = props.state;
    console.log('routeTag:', routeTag)

    useEffect(() => {
        let string = `{"tag": ${routeTag}}`
        const query = `query Properties($string: String) {
            properties(filter: $string) {
                id
                title
                price
                location
                img
            }
        }`;

        const url = "http://localhost:8080/graphql";
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        const body = JSON.stringify({ query, variables: { string } });

        const fetchData = async () => {
            try {
                const res = await fetch(url, { method: 'POST', headers: headers, body: body });
                const preData = await res.json();
                const data = preData.data
                setPageContent(data);
                setLoading(false);  
                // console.log('loading:', loading)
                // onStateChange(loading);


                // onStateChange(setLoading(false));
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);
    console.log('loading:', loading)

    onStateChange(loading);



    return (
        <Layout>
        <>
                {/* <SpinnerContext.Consumer>
                    {context => (() => context.stopSpinner())}
                </SpinnerContext.Consumer> */}

                {pageContent.properties.map(x => (
                    <div index={x.id} key={Math.random()} >
                        <StyledCarouselContent >
                            <h3 >{x.title}</h3>
                            <Link as="a" to="/propertyView" state={{ route: routeTag }} >
                                <StyledCarouselImage>
                                    <img src={x.img} alt={x.title} />
                                    <StyledCarouselDescription>
                                        <p>{x.location}</p>
                                        <p>{x.price} £ PM</p>
                                    </StyledCarouselDescription>
                                </StyledCarouselImage>
                            </Link>
                        </StyledCarouselContent>
                    </div>
                ))}
                
        </>
            </Layout>
    )
}

export default CarouselContent;