import React from "react";
import { Link } from "gatsby"
import styled from 'styled-components';
import { theme } from '../../../utils/theme';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// ---- Styles ----

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


const CarouselComponent = props => {
console.log('props:', props.state.route)

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

        <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true}
            keyBoardControl={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            {props.pageContent.map(x => (
                <div index={x.id} key={Math.random()} >
                    <StyledProductConetnt >
                        <h3 >{x.title}</h3>
                        <Link as="a" to="/propertyView" state={{ route: props.state.route, id: x.id }} >
                            <StyledProductImage>
                                <img src={x.img[0]} alt={x.title} />
                                <StyledProductDescription>
                                    <p>{x.location}</p>
                                    <p>{x.price} £ PM</p>
                                </StyledProductDescription>
                            </StyledProductImage>
                        </Link>
                    </StyledProductConetnt>
                </div>
            ))}
        </Carousel>
    )
}

export default CarouselComponent;