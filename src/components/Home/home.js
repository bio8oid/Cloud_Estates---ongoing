import React from "react"
// import ReactDOM from 'react-dom'
// import { Parallax, ParallaxLayer } from 'react-spring/addons'
// import { Parallax, ParallaxLayer } from 'react-spring'
import styled from 'styled-components'
// import { Link } from "gatsby"
// import SEO from "../components/Seo/seo"
// import Slider from '@farbenmeer/react-spring-slider';
// import SlideOne from '../components/Slider/slide1';
// import SlideTwo from '../components/Slider/slide2';
// import SlideThree from '../components/Slider/slide3';
// import ArrowComponent from '../components/Slider/arrows';
import { theme } from '../../utils/theme';
import Header from '../Header/header';

import bottomFront from "../../images/bottom_front.png"
import bottomMiddle from "../../images/bottom_middle.png"
import bottomBack from "../../images/bottom_back.png"
import bottomRight from "../../images/bottom_right.png"
import clouds from "../../images/clouds.png"
import cloud1 from "../../images/cloud_1.png"
import cloud2 from "../../images/cloud_2.png"
import cloud3 from "../../images/cloud_3.png"
import cloud4 from "../../images/cloud_4.png"
import cloud5 from "../../images/cloud_5.png"
import cloud6 from "../../images/cloud_6.png"
import cloud7 from "../../images/cloud_7.png"

// import { motion, useViewportScroll, useTransform } from "framer-motion";


// import NavBar from '../components/NavBar/navBar';

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

// import { useState } from "react";
// import { motion } from "framer-motion";

// const StyledLink = styled.a`
// // height: 100%;

//   text-decoration: none;
//   color: green;
//   border:10px solid orange;
//   border-radius: 25px;
//   // padding: 50px 25px;
//   background: ${theme.colors.mainGradient};
//   color: orange;
//   margin:50px;

  
// // body {
// //   padding: 0;
// //   margin: 0;
// //   background: #fdfdfd;
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   min-height: 100vh;
// // }

// // * {
// //   box-sizing: border-box;
// // }

// // .switch {
// //   width: 170px;
// //   height: 100px;
// //   border-radius: 100px;
// //   padding: 10px;
// //   display: flex;
// //   cursor: pointer;
// // }

// // .switch.on {
// //   background-color: #22cc88;
// //   justify-content: flex-end;
// // }

// // .switch.off {
// //   background-color: #dddddd;
// //   justify-content: flex-start;
// // }

// // .switch div {
// //   width: 80px;
// //   height: 80px;
// //   background-color: #ffffff;
// //   border-radius: 200px;
// //   box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.02);
// // }
// `;

// const StyledHeader = styled.div`
// // display: flex;
// // flex-direction: column;
// // justify-content: center;
// // align-items: center;
// // height: 100vh;
// // height:100%;

// height: 100%;
// weight: 100%;
// text-align: center;
// color: orange;
// font-size: 2rem;

// `;
// background: url(${img}) no-repeat center ;
// font-size:  ${({ isBig }) => isBig ? '5em' : '3em'};

// const StyledImage = styled.div`
// display: flex;

// img {
//   border: 5px solid orange;
//   height: 300px;
//   width: 300px;
//   color: black;
//   background-size: cover;
// }
// `;

// const StyledSlider = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// border: 5px solid orange;
// height: 600px;
// width: 100%;
// color: black;

// img {
//   border: 5px solid orange;
//   height: 300px;
//   width: 300px;
//   color: black;
//   background-size: cover;
// }
// `;

// const StyledMotion = styled.div`

//   width: 100vw;
//   height: 300vh;
//   overflow-x: hidden;
//   padding: 0;
//   margin: 0;
//   background: linear-gradient(180deg, #40f, #05f);


// .wrapper {
//   width: 150px;
//   height: 150px;
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translateX(-50%) translateY(-50%);
// }

// .container {
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   background: rgba(255, 255, 255, 0.2);
//   border-radius: 30px;
// }

// .item {
//   width: inherit;
//   height: inherit;
//   background: white;
//   transform-origin: 50% 100%;
// }

// `;



// function Switch({ isOn, ...props }) {
//   const className = `switch ${isOn ? "on" : "off"}`;

//   return (
//     <motion.div animate className={className} {...props}>
//       <motion.div animate />
//     </motion.div>
//   );
// }


// const [isOn, setIsOn] = useState(false);



// const data = [
//   {
//     "id": 1,
//     "tag": "risers",
//     "title": "W&W Nano Max Riser",
//     "desc": "Developed using WIN&WIN's carbon technology that absorbs shock and minimizes movemnet to make shooting more accurate and stable.",
//     "price": 595,
//     "img": "https://www.lancasterarchery.com/media/catalog/product/cache/0f0282ddec6f407e3142cedcb490b752/4/7/4770098_riser.jpg"
//   },
//   {
//     "id": 2,
//     "tag": "risers",
//     "title": "W&W INNO CXT 25\"",
//     "desc": "Weight control system: riser weight is adjustable so you can customize the weight to fit your desire. Convenient center-shot adjustment system: adjust the limb and riser alignment without unstringing the bow.",
//     "price": 615,
//     "img": "https://www.lancasterarchery.com/media/catalog/product/cache/0f0282ddec6f407e3142cedcb490b752/4/7/4770098_riser.jpg"
//   },
//   {
//     "id": 3,
//     "tag": "risers",
//     "title": "W&W Nano Max Riser 27\"",
//     "desc": "Developed using WIN&WIN's carbon technology that absorbs shock and minimizes movemnet to make shooting more accurate and stable.",
//     "price": 625,
//     "img": "https://www.lancasterarchery.com/media/catalog/product/cache/0f0282ddec6f407e3142cedcb490b752/4/7/4770264_black-red_1.jpg"
//   },
//   {
//     "id": 4,
//     "tag": "risers",
//     "title": "W&W CX7",
//     "desc": "Developed using WIN&WIN's carbon technology that absorbs shock and minimizes movemnet to make shooting more accurate and stable.",
//     "price": 655,
//     "img": "https://www.lancasterarchery.com/media/catalog/product/cache/0f0282ddec6f407e3142cedcb490b752/4/7/4770098_riser.jpg"
//   },
// ]


// const Home = () => {

//   const { scrollYProgress } = useViewportScroll();
//   const scale = useTransform(scrollYProgress, [0, 0.1], [0.1, 5]);


// return (
//     <>
//     <NavBar />

//     <Parallax pages={3} scrolling={false} horizontal ref={ref => (this.parallax = ref)}>
//       <ParallaxLayer offset={0} speed={0.5}>
//         <span onClick={() => this.parallax.scrollTo(1)}>Layers can contain anything</span>
//       </ParallaxLayer>
//     </Parallax>

//     {/* <StyledMotion>
//     <div className="wrapper">
//       <motion.div
//         className="container"
//         style={{
//           scale
//         }}
//         >

//         <motion.div
//           className="item"
//           style={{
//             scaleY: scrollYProgress
//           }}
//           />

//       </motion.div>
//     </div>
//     </StyledMotion> */}



//     {/* <Slider
//       activeIndex={3}
//       // auto
//       hasBullets
//       hasArrows
//       StyledSlider
//       // BulletComponent={BulletComponent}
//       ArrowComponent={ArrowComponent}
//     >
//       {data.map((item) => (

//         <StyledSlider key={item.id}>
//           <img src={item.img} alt={item.title} onClick={() => { this.handleId(item.id) }} />
//           <p className="card-price">Price: {item.price} £</p>
//           <h6 className="card-title">{item.title}</h6>
//           <p className="card-description">{item.desc}</p>
//         </StyledSlider>
//       ))}
//     </Slider> */}



//   </>
// )

// }




// const StyledSection = styled.div`
// box-shadow: 0px 0px 30px 10px grey;
// height: 100%;
// `;

// const StyledElement = styled.div`
// background: url(${img1}) no-repeat center ;
// height: 300px;
// width: 300px;
// background-size: cover;
// `;
// const StyledElement2 = styled.div`
// background: url(${img2}) no-repeat center ;
// height: 500px;
// width: 500px;
// height: 100%;
// width: 100%;
//   background-size: cover;

// `;
// const StyledElement3 = styled.div`
// background: url(${img3}) no-repeat center ;
// height: 300px;
// width: 300px;
// height: 100%;
// width: 100%;
//   background-size: cover;

// `;
// const StyledElement4 = styled.div`
// background: url(${img4}) no-repeat center ;
// height: 100%;
// width: 100%;
//   background-size: cover;

// `;
// const StyledElement5 = styled.div`
// background: url(${img5}) no-repeat center ;
// height: 300px;
// width: 300px;
//   background-size: cover;

// `;
// opacity:  ${({ fade }) => fade ? '.5' : '.2'};

// background: url(${cloud1}) no-repeat center ;
const StyledCloud1 = styled.div`

img {

  // height: 50%;
  // width: 50%;
  // background-size: cover;
  // transform: translateX(-15%);
  
  // display: flex;
  // flex-direction: column;
  // justify-content: flex-end;
  // align-items: center;
  
  ${theme.responsiveImg};
  // transform: ${({ translate }) => translate ? 'translateX(150%)' : 'translateX(-30%)'};
  opacity: ${({ fade }) => fade ? '.4' : '1'};
}
`;

// background: url(${cloud2}) no-repeat center ;
const StyledCloud2 = styled.div`
img {

  // transform: translateX(50%);
  ${theme.responsiveImg};
  // transform: ${({ translate }) => translate ? 'translateX(-50%)' : 'translateX(70%)'};
  opacity: ${({ fade }) => fade ? '.2' : '1'};
}
`;

// background: url(${cloud3}) no-repeat center ;
const StyledCloud3 = styled.div`
img {
  ${theme.responsiveImg};
// transform: translateX(-15%);
opacity: ${({ fade }) => fade ? '.6' : '1'};
}

}
`;

// background: url(${cloud3}) no-repeat center ;
const StyledCloud5 = styled.div`
img {
  ${theme.responsiveImg};
  // width: 100vw;
}
}
`;
// opacity: ${({ fade }) => fade ? '.6' : '1'};

// const Cloud4 = styled.div`
// background: url(${cloud4}) no-repeat center ;
// opacity: 0.1;
// ${theme.responsiveImg}
// `;
// const Cloud5 = styled.div`
// background: url(${cloud5}) no-repeat center ;
// opacity: 0.1;
// ${theme.responsiveImg}
// `;
// const Cloud6 = styled.div`
// background: url(${cloud6}) no-repeat center ;
// opacity: 0.1;
// ${theme.responsiveImg}
// `;

const StyledHero = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding: 0 2%;
opacity: .6;

h1, h3 {
  margin: 0;
  font-size: 8rem;
  text-align: center;
  font-family: 'Indie Flower';
  color: #040026;
}

h3 {
  font-size: 3rem;
}

@media not all and (hover: none) {
	h1:hover {
    color: skyblue;
    -webkit-text-stroke: 1px black;
	}
}
    
${theme.media.desktop} {
  h1 {
    font-size: 5rem;
  }
  
  h3 {
    font-size: 3rem;
  }
`;

// background: url(${bottomFront}) no-repeat center ;
const StyledBottomFront = styled.div`
img {
  // height: 100%;
// width: 100%;
// background-size: cover;
${theme.responsiveImg};
}

`;

// background: url(${bottomMiddle}) no-repeat left;
const StyledBottomMiddle = styled.div`
img {
  // height: 100%;
// width: 100%;
// background-size: cover;
${theme.responsiveImg};
// transform: translateX(-50%)
}

`;

// background: url(${bottomBack}) no-repeat center;
const StyledBottomBack = styled.div`
img {
  // width: 100%;
// background-size: cover;
${theme.responsiveImg};
// height: 120%;
}

`;

// background: url(${bottomRight}) no-repeat right;
const StyledBottomRight = styled.div`
img {
  // display: flex;
// justify-content: flex-end;
// height: 40%;
// width: 40%;
// background-size: cover;
${theme.responsiveImg};
  // transform: translate(150%, 20%);
}

`;

const Home = parallax => (
  
  <>
      <Parallax ref={ref => (parallax = ref)} pages={4}>

        <ParallaxLayer offset={3} speed={0} factor={1} style={{ background: "skyblue", backgroundSize: 'cover', opacity: 0.3 }} />
    
        <ParallaxLayer offset={1.6} speed={-0.5} >
          <StyledCloud1 fade translate>
          <img src={cloud1} />
          </StyledCloud1>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} >
          <StyledCloud5 fade>
          <img src={cloud5} />
          </StyledCloud5>
        </ParallaxLayer>

        <ParallaxLayer offset={2.4} speed={.1}>
          <StyledCloud3>
          <img src={cloud3} />
          </StyledCloud3>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={-.2}>
          <StyledBottomMiddle>
          <img src={bottomMiddle} />
          </StyledBottomMiddle>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={.5}>
          <StyledBottomFront>
          <img src={bottomFront} />
          </StyledBottomFront>
        </ParallaxLayer>

        <ParallaxLayer offset={2.95} speed={0.2} >
          <StyledCloud1>
          <img src={cloud1} />
          </StyledCloud1>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={-0.1} >
          <StyledCloud2>
          <img src={cloud2} />
          </StyledCloud2>
        </ParallaxLayer>

        <ParallaxLayer offset={3.15} speed={0.1} >
          <StyledBottomRight>
          <img src={bottomRight} />
          </StyledBottomRight>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.1} >
        <StyledBottomFront>
          <img src={bottomFront} />
        </StyledBottomFront>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={-0.3}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.scrollTo(2)}
          >
        <Header/>
        <StyledCloud3 fade>
          <img src={cloud3} />
        </StyledCloud3>
        </ParallaxLayer>

        <ParallaxLayer
          offset={.75}
          speed={0.1}
          // onClick={() => parallax.scrollTo(2)}
          >
        <StyledCloud2 fade translate>
          <img src={cloud2} />
        </StyledCloud2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={.5}
          // onClick={() => parallax.scrollTo(0)}
          >
        <StyledBottomBack>
          <img src={bottomBack} />
        </StyledBottomBack>
        </ParallaxLayer>
        
      <ParallaxLayer offset={.5} speed={-0.2} >
        <StyledHero onClick={() => parallax.scrollTo(1)}>
          <h3>Famous for commision and deposit</h3>
          <h1>Sky is THE limit</h1>
        </StyledHero>
      </ParallaxLayer>

      </Parallax>
      </>
    )

export default Home;

// import { useState } from "react";
// import { motion } from "framer-motion";

// function Switch({ isOn, ...props }) {
//   const className = `switch ${isOn ? "on" : "off"}`;

//   return (
//     <motion.div animate className={className} {...props}>
//       <motion.div animate />
//     </motion.div>
//   );
// }

// export default function App() {
//   const [isOn, setIsOn] = useState(false);

//   return <Switch isOn={isOn} onClick={() => setIsOn(!isOn)} />;
// }


// <Slider
//   activeIndex={3}
//   // auto
//   hasBullets
//   hasArrows
//   StyledSlider
//   // BulletComponent={BulletComponent}
//   ArrowComponent={ArrowComponent}
// >

//   <SlideOne />
//   <SlideTwo />
//   <SlideThree />

//   <StyledSlider>
//     <div>
//       <h1>I am going to page 2</h1>
//       <StyledLink>
//         <a as={Link} to="/page-2">Go to page 2</a>
//       </StyledLink>
//     </div>
//   </StyledSlider>

// </Slider>