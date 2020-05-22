// import React from "react";
// import styled from 'styled-components';
// // import { Link } from "gatsby";
// import { theme } from '../../utils/theme';
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



// // import React from 'react';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, ButtonFirst, ButtonLast } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';

// // const styledSlide = styled.div`
// // &:first-child {
// // border: 2px solid black;
// // margin: 25px !important;
// // }
// // `

// const SliderComponent = () => (

//   <CarouselProvider
//     naturalSlideWidth={100}
//     naturalSlideHeight={100}
//     totalSlides={8}
//     visibleSlides={3}
//   >
//     <Slider>
//       <Slide index={0} style={{margin: "2%"}}><slideElement><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.IINup2-QYhNitcqBlDsJ4gHaHa%26pid%3DApi&f=1" alt="kutas"/></slideElement></Slide>
//     </Slider>
//     <DotGroup />
//     <ButtonLast>last</ButtonLast>
//     <ButtonFirst>first</ButtonFirst>
//     <ButtonBack>Back</ButtonBack>
//     <ButtonNext>Next</ButtonNext>
//   </CarouselProvider>
// )

// export default SliderComponent;











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
//       <slideElement style={{ }}><img src="https://ucarecdn.com/b7b2bc98-e1b3-47c5-89b6-5bc26a02cd8a/-/resize/1050/" alt="kutas" style={{ width: "100%", height: '500px', border: "5px solid black", bacgroundSize: "cover", bacgroundPosition: "center", margin: "25px" }} /></slideElement>
//       <slideElement style={{ }}><img src="https://ucarecdn.com/b7b2bc98-e1b3-47c5-89b6-5bc26a02cd8a/-/resize/1050/" alt="kutas" style={{ width: "100%", height: '500px', border: "5px solid black", bacgroundSize: "cover", bacgroundPosition: "center", margin: "25px" }} /></slideElement>
//       <slideElement style={{ }}><img src="https://ucarecdn.com/b7b2bc98-e1b3-47c5-89b6-5bc26a02cd8a/-/resize/1050/" alt="kutas" style={{ width: "100%", height: '500px', border: "5px solid black", bacgroundSize: "cover", bacgroundPosition: "center", margin: "25px" }} /></slideElement>
  
// {/* 
//       <slideElement >Item 4</slideElement>
//       <slideElement >Item 4</slideElement>
//       <slideElement >Item 4</slideElement>
//       <slideElement >Item 4</slideElement> */}
      
//     </Carousel> 
//     </> 
// )
    
// }

// export default Slider;



// import React from 'react';
// import ReactDOM from 'react-dom';

// import InfiniteCarousel from 'react-leaf-carousel';

// const Slider = () => (

  
//   <InfiniteCarousel
//     breakpoints={[
//       {
//         breakpoint: 500,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//         },
//       },
//     ]}
//     dots={true}
//     showSides={true}
//     sidesOpacity={.5}
//     sideSize={.1}
//     slidesToScroll={4}
//     slidesToShow={4}
//     scrollOnDevice={true}
//   >
//     <div>
//       <img
//         alt=''
//         src='https://placeholdit.imgix.net/~text?txtsize=20&bg=55b64e&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
//       />
//     </div>
//     <div>
//       <img
//         alt=''
//         src='https://placeholdit.imgix.net/~text?txtsize=20&bg=904098&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
//       />
//     </div>
//     <div>
//       <img
//         alt=''
//         src='https://placeholdit.imgix.net/~text?txtsize=20&bg=ef4d9c&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
//       />
//     </div>
//     <div>
//       <img
//         alt=''
//         src='https://placeholdit.imgix.net/~text?txtsize=20&bg=00f3d1&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
//       />
//     </div>
//     <div>
//       <img
//         alt=''
//         src='https://placeholdit.imgix.net/~text?txtsize=20&bg=00ffff&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
//       />
//     </div>
//     <div>
//       <img
//         alt=''
//         src='https://placeholdit.imgix.net/~text?txtsize=20&bg=ee1f34&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
//       />
//     </div>
//     <div>
//       <img
//         alt=''
//         src='https://placeholdit.imgix.net/~text?txtsize=20&bg=91b4c0&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
//       />
//     </div>
//     <div>
//       <img
//         alt=''
//         src='https://placeholdit.imgix.net/~text?txtsize=20&bg=ff6347&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
//       />
//     </div>
//     <div>
//       <img
//         alt=''
//         src='https://placeholdit.imgix.net/~text?txtsize=20&bg=ebbfbf&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
//       />
//     </div>
//     <div>
//       <img
//         alt=''
//         src='https://placeholdit.imgix.net/~text?txtsize=20&bg=def1f9&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
//       />
//     </div>
//     <div>
//       <img
//         alt=''
//         src='https://placeholdit.imgix.net/~text?txtsize=20&bg=cdf2c6&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
//       />
//     </div>
//     <div>
//       <img
//         alt=''
//         src='https://placeholdit.imgix.net/~text?txtsize=20&bg=9fa616&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
//       />
//     </div>
//     <div>
//       <img
//         alt=''
//         src='https://placeholdit.imgix.net/~text?txtsize=20&bg=2c4caa&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
//       />
//     </div>
//     <div>
//       <img
//         alt=''
//         src='https://placeholdit.imgix.net/~text?txtsize=20&bg=44e3e1&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
//       />
//     </div>
//     <div>
//       <img
//         alt=''
//         src='https://placeholdit.imgix.net/~text?txtsize=20&bg=ff6666&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
//       />
//     </div>
//     <div>
//       <img
//         alt=''
//         src='https://placeholdit.imgix.net/~text?txtsize=20&bg=94e1e3&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
//       />
//     </div>
//     <div>
//       <img
//         alt=''
//         src='https://placeholdit.imgix.net/~text?txtsize=20&bg=29083c&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
//       />
//     </div>
//     <div>
//       <img
//         alt=''
//         src='https://placeholdit.imgix.net/~text?txtsize=20&bg=ffff99&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
//       />
//     </div>
//     <div>
//       <img
//         alt=''
//         src='https://placeholdit.imgix.net/~text?txtsize=20&bg=616161&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
//       />
//     </div>
//     <div>
//       <img
//         alt=''
//         src='https://placeholdit.imgix.net/~text?txtsize=20&bg=ed7ebe&txtclr=ffffff&txt=215%C3%97215&w=215&h=215'
//       />
//     </div>
//   </InfiniteCarousel>

// )

// export default Slider;
