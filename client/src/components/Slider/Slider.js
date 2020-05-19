import React from "react";
import styled from 'styled-components';
// // import { Link } from "gatsby";
import { theme } from '../../utils/theme';
// // import Header from '../Header/Header';



// /* ${theme.flex.centered}; */
// const slideElement = styled.ul`
// border: 2px solid black;
// height: 300px;
// padding: 2%;
// background: #ccc;
// `


// const Slider = () => (

//     <> 

//     </> 
// )
    


// export default Slider;



// import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, ButtonFirst, ButtonLast } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const styledSlide = styled.div`
&:first-child {
border: 2px solid black;
margin: 25px !important;
}
`

const slideElement = styled.div`
border: 2px solid black;
height: 400px;
padding: 2%;
margin: 25px;
background: #ccc;
`

const SliderComponent = () => (

  <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={100}
    totalSlides={8}
    visibleSlides={3}
  >
    <Slider>
      <styledSlide>
      <Slide index={0} style={{margin: "25px"}}><slideElement><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IINup2-QYhNitcqBlDsJ4gHaHa%26pid%3DApi&f=1" alt="kutas"/></slideElement></Slide>
      </styledSlide>
      <Slide index={1}><slideElement><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IINup2-QYhNitcqBlDsJ4gHaHa%26pid%3DApi&f=1" alt="kutas"/></slideElement></Slide>
      <Slide index={2}><slideElement><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IINup2-QYhNitcqBlDsJ4gHaHa%26pid%3DApi&f=1" alt="kutas"/></slideElement></Slide>
      <Slide index={3}><slideElement><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IINup2-QYhNitcqBlDsJ4gHaHa%26pid%3DApi&f=1" alt="kutas"/></slideElement></Slide>
      <Slide index={4}><slideElement><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IINup2-QYhNitcqBlDsJ4gHaHa%26pid%3DApi&f=1" alt="kutas"/></slideElement></Slide>
      <Slide index={5}><slideElement><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IINup2-QYhNitcqBlDsJ4gHaHa%26pid%3DApi&f=1" alt="kutas"/></slideElement></Slide>
      <Slide index={6}><slideElement><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IINup2-QYhNitcqBlDsJ4gHaHa%26pid%3DApi&f=1" alt="kutas"/></slideElement></Slide>
      <Slide index={7}><slideElement><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IINup2-QYhNitcqBlDsJ4gHaHa%26pid%3DApi&f=1" alt="kutas"/></slideElement></Slide>
    </Slider>
    <DotGroup />
    <ButtonLast>last</ButtonLast>
    <ButtonFirst>first</ButtonFirst>
    <ButtonBack>Back</ButtonBack>
    <ButtonNext>Next</ButtonNext>
  </CarouselProvider>
)

export default SliderComponent;




// export default class extends React.Component {
//   render() {
//     return (
//       <CarouselProvider
//         naturalSlideWidth={100}
//         naturalSlideHeight={125}
//         totalSlides={3}
//       >
//         <Slider>
//           <Slide index={0}>I am the first Slide.</Slide>
//           <Slide index={1}>I am the second Slide.</Slide>
//           <Slide index={2}>I am the third Slide.</Slide>
//         </Slider>
//         <ButtonBack>Back</ButtonBack>
//         <ButtonNext>Next</ButtonNext>
//       </CarouselProvider>
//     );
//   }
// }









// import React from 'react'
// import AliceCarousel from 'react-alice-carousel'
// import 'react-alice-carousel/lib/alice-carousel.css'

// const Gallery = () => {
//   const handleOnDragStart = (e) => e.preventDefault()


//   responsive = {
//     0: { items: 1 },
//     1024: { items: 2 },
//   }

//   return (
//     <AliceCarousel 
//       responsive={this.responsive}
//     mouseTrackingEnabled>
//       <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IINup2-QYhNitcqBlDsJ4gHaHa%26pid%3DApi&f=1" onDragStart={handleOnDragStart} className="yours-custom-class" />
//       <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IINup2-QYhNitcqBlDsJ4gHaHa%26pid%3DApi&f=1" onDragStart={handleOnDragStart} className="yours-custom-class" />
//       <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IINup2-QYhNitcqBlDsJ4gHaHa%26pid%3DApi&f=1" onDragStart={handleOnDragStart} className="yours-custom-class" />
//       <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IINup2-QYhNitcqBlDsJ4gHaHa%26pid%3DApi&f=1" onDragStart={handleOnDragStart} className="yours-custom-class" />
//       <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IINup2-QYhNitcqBlDsJ4gHaHa%26pid%3DApi&f=1" onDragStart={handleOnDragStart} className="yours-custom-class" />
//     </AliceCarousel>
//   )
// }

// export default Gallery;



// import React from "react";
// import styled from 'styled-components';
// // import { Link } from "gatsby";
// import { theme } from '../../utils/theme';
// // import Header from '../Header/Header';
// // import Hero from '../Hero/Hero';
// // import About from '../About/About';
// // import PropertiesList from '../PropertiesList/PropertiesList';


// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";


// /* ${theme.flex.centered}; */
// const slideElement = styled.div`
//   border: 5px solid orange;
// height: 400px;
// padding: 2%;
// background: #ccc;
// `


// const Slider = () => {

//  const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3 // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2 // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1 // optional, default to 1.
//   }
// }

// return (
  
//   < > 
//     {/* <slideElement> */}
//   <Carousel
//       // swipeable={false}
//       // draggable={false}
//       showDots={true}
//       responsive={responsive}
//       ssr={true} // means to render carousel on server-side.
//       // infinite={true}
//       // autoPlay={this.props.deviceType !== "mobile" ? true : false}
//       // autoPlaySpeed={1000}
//       keyBoardControl={true}
//       // customTransition="all .5"
//       // transitionDuration={500}
//       containerClass="carousel-container"
//       // removeArrowOnDeviceType={["tablet", "mobile"]}
//       // deviceType={this.props.deviceType}
//       // dotListClass="custom-dot-list-style"
//       itemClass="carousel-item-padding-100-px"
    
//     >
//       {/* <slideElement style={{ }}><img src="https://ucarecdn.com/b7b2bc98-e1b3-47c5-89b6-5bc26a02cd8a/-/resize/1050/" alt="kutas" style={{ width: "100%", height: '500px', border: "5px solid black", bacgroundSize: "cover", bacgroundPosition: "center", margin: "25px" }} /></slideElement>
//       <slideElement style={{ }}><img src="https://ucarecdn.com/b7b2bc98-e1b3-47c5-89b6-5bc26a02cd8a/-/resize/1050/" alt="kutas" style={{ width: "100%", height: '500px', border: "5px solid black", bacgroundSize: "cover", bacgroundPosition: "center", margin: "25px" }} /></slideElement>
//       <slideElement style={{ }}><img src="https://ucarecdn.com/b7b2bc98-e1b3-47c5-89b6-5bc26a02cd8a/-/resize/1050/" alt="kutas" style={{ width: "100%", height: '500px', border: "5px solid black", bacgroundSize: "cover", bacgroundPosition: "center", margin: "25px" }} /></slideElement> */}
  

//       <slideElement >Item 4</slideElement>
//       <slideElement >Item 4</slideElement>
//       <slideElement >Item 4</slideElement>
//       <slideElement >Item 4</slideElement>
      
//     </Carousel> 
//   {/* </slideElement> */}
//     </> 
// )
    
// }

// export default Slider;






// import React from "react";
// import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
// const SliderComponent = () => {

//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     }

//     return (
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     );

// }

// export default SliderComponent;