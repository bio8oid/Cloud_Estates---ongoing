import React, { useState, useEffect } from "react";
import { Link } from "gatsby"
import SEO from "../components/Seo/seo"
import styled from 'styled-components';
import { theme } from '../utils/theme';
import Layout from "../components/Layout/Layout"
import arrowDown from "../images/arrow_down.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Roller } from "react-awesome-spinners";


const StyledWrapper = styled.div`
text-align: center;
`

const Title = styled.h1`
font-size: 4rem;
opacity: .6;
padding: 0 5%;

    ${theme.media.tablet} {
        font-size: 3rem;
    }
    ${theme.media.mobile} {
        font-size: 2rem;
    }
`

const StyledProductConetnt = styled.div`
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
const StyledProductDescription = styled.div`
${theme.centered};
width: 100%;

 p {
    display: block;
    font-size: 3rem;
    color: black;
    font-weight: bolder;
    text-shadow: 0 0 5px skyblue;
    /* -webkit-text-stroke: .1px skyblue; */
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

const StyledProductImage = styled.div`
   /* max-height: 30vh; */
   margin-bottom: 50px;
   position: relative;

img {
   ${theme.responsiveImg};
   /* max-height: 30vh; */
   border-radius: 50px;
   border: 10px solid ${theme.colors.primary};

    /* @media not all and (hover: none) {
        &:hover {
            box-shadow: 0 0 10px  ${theme.colors.primary};
            opacity: .9;
            ${theme.hover.text}
        }
    } */
        /* ${theme.media.cloud} {
        max-height: 23vh;
    }
        ${theme.media.desktop} {
        max-height: 20vh;
    }
        ${theme.media.tablet} {
        max-height: 14vh;
    } */
        ${theme.media.mobile} {
        border-radius: 25px;
    }

    @media not all and (hover: none) {
        &:hover { 
            box-shadow: 0 0 10px  ${theme.colors.primary};
            opacity: .9;
        &:hover ~ ${StyledProductDescription} p { 
            ${theme.hover.text};
            text-shadow: 0 0 5px white;
        }
        }
    }
}
`

const StyledButton = styled.div`
position: fixed;
bottom: 0;
left: 20px;
opacity: .6;

img {
      max-height: 100px;
      transform: rotate(90deg);

@media not all and (hover: none) {
    &:hover {
       border: 2px solid ${theme.colors.primary};
       border-radius: 50%;
       padding: 5px;
        }
    }  

    ${theme.media.mobile} {
        height: 50px;
    }
}
`

const PropertiesList = (props) => {

    const [loading, setLoading] = useState(true)
    const [pageContent, setPageContent] = useState({ properties: [{}] });

    console.log('pageContent2:', pageContent.properties)

    let routeTag = props.location.state.route;

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
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);


    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    }


    return (

        <Layout>
        <StyledWrapper>
            <SEO title="Properties" />
                <Title>Welcome to {routeTag.replace(/["]/g, "")} Products List</Title>

            {loading && <styledRoller style={{position: "absolute", top: "50%"}}>
                <Roller color="#040026" />
                </styledRoller> ||

             <Carousel
                swipeable={true}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true}
                keyBoardControl={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                  { pageContent.properties.map(x => (
                    <div index={x.id} key={Math.random()} >
                        <StyledProductConetnt >
                            <h3 >{x.title}</h3>
                                <Link as="a" to="/propertyView" state={{ route: routeTag }} >  
                            <StyledProductImage>
                                    <img src={x.img} alt={x.title} />
                            <StyledProductDescription>
                            <p>{x.location}</p>
                            <p>{x.price} £ PM</p>
                            </StyledProductDescription>
                            </StyledProductImage>
                                </Link>
                        </StyledProductConetnt>
                    </div>
                ))}
            </Carousel>}

        <StyledButton>
                <Link to="/" >
                    <img src={arrowDown} alt="arrow-down" />
                </Link>
        </StyledButton>
        
        </StyledWrapper>
        </Layout>
    )
}

export default PropertiesList;


   /* animation: ${({ wind }) => wind ? `flyBastards 5s infinite linear alternate` : 'flyBastards 10s infinite linear alternate'};
      
    @keyframes flyBastards {
  from {
    transform: translateY(-10%);
  }
  to {
    transform: translateY(10%);
  }
}  */