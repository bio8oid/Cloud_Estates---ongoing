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
// import clouds from "../../images/clouds.png"
import cloud1 from "../../images/cloud_1.png"
import cloud2 from "../../images/cloud_2.png"
import cloud3 from "../../images/cloud_3.png"
// import cloud4 from "../../images/cloud_4.png"
// import cloud5 from "../../images/cloud_5.png"
// import cloud6 from "../../images/cloud_6.png"
// import cloud7 from "../../images/cloud_7.png"
import cloud8 from "../../images/cloud_8.png"
import cloud9 from "../../images/cloud_9.png"

// import { motion, useViewportScroll, useTransform } from "framer-motion";

// import NavBar from '../components/NavBar/navBar';

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'


const StyledHero = styled.div`
display: flex;
flex-direction: column;
padding: 0 2%;
opacity: .6;

h1, h3, p {
  margin: 0;
  font-size: 7.5rem;
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
}

${theme.media.mobile} {
  h1 {
    font-size: 3rem;
  }
  
  h3 {
    font-size: 1rem;
  }
}
}
`;

const StyledAbout = styled(StyledHero)`
justify-content: center;
align-items: center;
height: 100%;

p {
  padding: 0 10%;
  font-size: 3rem;
}

${theme.media.tablet} {
  
  p {
    margin-top: 50%;
    font-size: 2.5rem;
  }
}

${theme.media.mobile} {
  
  p {
    margin-top: 50%;
    font-size: 1.5rem;
  }
}
`;

// const boxShadowMixin = css`
//   box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
// `;

// const boxShadowMixinFunc = (top, left, blur, color, inset = false) => {
//   return `box-shadow: ${inset ? 'inset' : ''} ${top}px ${left}px ${blur}px ${color};`;
// }

// const StyledComp = styled.div`
//   ${boxShadowMixin}
//   ${boxShadowMixinFunc(0, 0, 4, 'rgba(0, 0, 0, 0.5)')}
// `;

const StyledCloud1 = styled.div`
animation: ${({ speed }) => speed ? `flyBastards 45s infinite linear` : 'flyBastards 100s infinite linear'};
`;

const StyledCloud2 = styled.div`
background: ${({ css }) => css ? `url(${cloud2}) no-repeat center` : 'none'};
opacity: ${({ fade }) => fade ? '.2' : '1'};
animation: ${({ fly }) => fly ? 'flyBastards 45s infinite linear' : 'none'};
${theme.responsiveImg};
transform: translateX(50%);

 ${theme.media.cloud} {
     transform: none;
  }
`;

const StyledCloud3 = styled.div`
background: url(${cloud3}) no-repeat center ;
${theme.responsiveImg};
opacity: ${({ fade }) => fade ? '.6' : '1'};
}
`;

const StyledCloud8 = styled.div`
img {
  ${theme.responsiveImg};
opacity: .2;
// animation: flyBastards 80s infinite linear;
animation: ${({ speed }) => speed ? `flyBastards 60s infinite linear` : 'flyBastards 90s infinite linear'};
}
`;

const StyledCloud9 = styled(StyledCloud8)`

@keyframes flyBastards {
  from {
    transform: translate(-100%);
  }
  to {
    transform: translate(99%);
  }
}
`;


const StyledBottomFront = styled.div`
background: url(${bottomFront}) no-repeat center ;
${theme.responsiveImg};
`;

const StyledBottomMiddle = styled.div`
background: url(${bottomMiddle}) no-repeat left;
${theme.responsiveImg};
transform: translateX(-45%);
`;

const StyledBottomBack = styled.div`
background: url(${bottomBack}) no-repeat top;
${theme.responsiveImg};
`;

const StyledBottomRight = styled.div`
  background: url(${bottomRight}) no-repeat right;
  height: 40%;
  width: 40%;
  background-size: cover;
  transform: translate(150%, 20%);
`;

const Home = parallax => (
  
  <>
      <Parallax ref={ref => (parallax = ref)} pages={4}>

        <ParallaxLayer offset={3} speed={0} factor={1} style={{ background: "skyblue", backgroundSize: 'cover', opacity: 0.3 }} />
    
        <ParallaxLayer offset={1.6} speed={-0.5} >
        <StyledCloud1 speed fade fly>
            <img src={cloud1} alt=""/>
          </StyledCloud1>
        </ParallaxLayer>

        <ParallaxLayer offset={1.4} speed={.8} >
        <StyledCloud8 speed fade>
          <img src={cloud8} alt=""/>
        </StyledCloud8>
        </ParallaxLayer>

        <ParallaxLayer offset={1.8} speed={.4} >
        <StyledCloud9 fade>
          <img src={cloud9} alt=""/>
        </StyledCloud9>
        </ParallaxLayer>

        <ParallaxLayer offset={2.4} speed={.1}>
          <StyledCloud3 />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={-.2}>
          <StyledBottomMiddle />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={.5}>
          <StyledBottomFront />
        </ParallaxLayer>

        <ParallaxLayer offset={2.95} speed={0.2} >
        <StyledCloud1 fly>
          <img src={cloud1} alt="" />
        </StyledCloud1>
          {/* <StyledCloud1 css fly/> */}
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={-0.1} >
          <StyledCloud2 css />
        </ParallaxLayer>

        <ParallaxLayer offset={3.15} speed={0.1} >
          <StyledBottomRight />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.1} >
          <StyledBottomFront />
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
          <StyledCloud3 fade />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          // onClick={() => parallax.scrollTo(2)}
          >
          <StyledAbout>
          <p>Founded in 966, Cloud Estates started life as a two-person agency in NothingToDoOnThe Hill.<br/>Over the years we are proud to have become World's leading cloud estate agent.<br/>We provide all services involving cloud rent.</p>
        </StyledAbout>

        </ParallaxLayer>

        <ParallaxLayer
          offset={.75}
          speed={0.1}
          // onClick={() => parallax.scrollTo(2)}
          >
        <StyledCloud2 fade fly>
          <img src={cloud2} alt=""/>
        </StyledCloud2>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={.5}
          onClick={() => parallax.scrollTo(0)}
          >
          <StyledBottomBack />
        </ParallaxLayer>
        
      <ParallaxLayer offset={.5} speed={-0.2} >
        <StyledHero onClick={() => parallax.scrollTo(1)}>
          <h3>Famous for commission and deposit</h3>
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
//           <img src={item.img} alt={item.title} onClick={() => { this.handlealt=""Id(item.id) }} />
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