import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import { theme } from '../../utils/theme';
import Spinner from "../../components/Spinner/Spinner";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// ---- Carousel Component Styles ----

const StyledProductConetnt = styled.div`
   margin: 25px;

   h3 {
       font-size: 2.5rem;
       font-weight: bolder;
       opacity: .6;

    ${theme.media.desktop} {
        font-size: 1.5rem;
        }
   }

   a {
       text-decoration: none;
          max-height: 30vh;
   }
`
const StyledProductDescription = styled.div`
${theme.flex.centeredColumn};
${theme.centered};
max-width: 100%;

 p {
    display: inline-block;
    font-size: 3rem;
    color: black;
    font-weight: bolder;
    text-shadow: 0 0 5px skyblue;
    margin: 0;

        ${theme.media.mobile} {
        font-size: 1.5rem;
    }
}
    @media not all and (hover: none) {
        &:hover p {
            ${theme.hover.text};
        }
    }
`
const StyledProductImage = styled.div`
   margin-bottom: 50px;
   position: relative;

img {
   ${theme.responsiveImg};
   height: 35vh;
   border-radius: 50px;
   border: 10px solid ${theme.colors.primary};

        ${theme.media.cloud} {
        height: 45vh;
    }

        ${theme.media.mobile} {
        border-radius: 25px;
        height: 35vh;
    }

    @media not all and (hover: none) {
        &:hover { 
            border: 10px solid rgba(4, 0, 38, .6);
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
    // console.log('propscarousel:', props)

    const responsive = {
        cloud: {
            breakpoint: { max: 3000, min: 1524 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 1524, min: 1048 },
            items: 2,
        },
        tabletPro: {
            breakpoint: { max: 1048, min: 576 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 1,
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
                    <StyledProductConetnt>
                        <h3 >{x.title}</h3>
                        {/* <Link as="a" to={`/propertyView`} state={{ route: props.state.route, id: x.id }} > */}
                        <Link as="a" to={`/propertyView2/${x.id}`} state={{ route: props.state.route, id: x.id }} >
                            {/* <Link as="a" to={`/propertyView2/${x.id}`} > */}
                            <StyledProductImage>
                                {props.loading ? <Spinner /> : <img src={x.img[0]} alt={x.title} />}
                                <StyledProductDescription>
                                    <p>{x.location}</p>
                                    <p>{x.price}&nbsp;£&nbsp;PM</p>
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