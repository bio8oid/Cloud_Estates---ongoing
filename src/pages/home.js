import React from "react"
import styled from 'styled-components'
// import { Link } from "gatsby"
// import SEO from "../components/Seo/seo"
import Slider from '@farbenmeer/react-spring-slider';
// import SlideOne from '../components/Slider/slide1';
// import SlideTwo from '../components/Slider/slide2';
// import SlideThree from '../components/Slider/slide3';
import ArrowComponent from '../components/Slider/arrows';
import { theme } from '../utils/theme';
// import Button from '../components/Button';
// import img from "../images/L_1.png"

import NavBar from '../components/NavBar/navBar';


// import { useState } from "react";
// import { motion } from "framer-motion";

const StyledLink = styled.a`
// height: 100%;

  text-decoration: none;
  color: green;
  border:10px solid orange;
  border-radius: 25px;
  // padding: 50px 25px;
  background: ${theme.colors.mainGradient};
  color: orange;
  margin:50px;

  
// body {
//   padding: 0;
//   margin: 0;
//   background: #fdfdfd;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
// }

// * {
//   box-sizing: border-box;
// }

// .switch {
//   width: 170px;
//   height: 100px;
//   border-radius: 100px;
//   padding: 10px;
//   display: flex;
//   cursor: pointer;
// }

// .switch.on {
//   background-color: #22cc88;
//   justify-content: flex-end;
// }

// .switch.off {
//   background-color: #dddddd;
//   justify-content: flex-start;
// }

// .switch div {
//   width: 80px;
//   height: 80px;
//   background-color: #ffffff;
//   border-radius: 200px;
//   box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.02);
// }
`;

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

const StyledSlider = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 5px solid orange;
height: 600px;
width: 100%;
color: black;

img {
  border: 5px solid orange;
  height: 300px;
  width: 300px;
  color: black;
  background-size: cover;
}
`;



// function Switch({ isOn, ...props }) {
//   const className = `switch ${isOn ? "on" : "off"}`;

//   return (
//     <motion.div animate className={className} {...props}>
//       <motion.div animate />
//     </motion.div>
//   );
// }


// const [isOn, setIsOn] = useState(false);



const data = [
  {
    "id": 1,
    "tag": "risers",
    "title": "W&W Nano Max Riser",
    "desc": "Developed using WIN&WIN's carbon technology that absorbs shock and minimizes movemnet to make shooting more accurate and stable.",
    "price": 595,
    "img": "https://www.lancasterarchery.com/media/catalog/product/cache/0f0282ddec6f407e3142cedcb490b752/4/7/4770098_riser.jpg"
  },
  {
    "id": 2,
    "tag": "risers",
    "title": "W&W INNO CXT 25\"",
    "desc": "Weight control system: riser weight is adjustable so you can customize the weight to fit your desire. Convenient center-shot adjustment system: adjust the limb and riser alignment without unstringing the bow.",
    "price": 615,
    "img": "https://www.lancasterarchery.com/media/catalog/product/cache/0f0282ddec6f407e3142cedcb490b752/4/7/4770098_riser.jpg"
  },
  {
    "id": 3,
    "tag": "risers",
    "title": "W&W Nano Max Riser 27\"",
    "desc": "Developed using WIN&WIN's carbon technology that absorbs shock and minimizes movemnet to make shooting more accurate and stable.",
    "price": 625,
    "img": "https://www.lancasterarchery.com/media/catalog/product/cache/0f0282ddec6f407e3142cedcb490b752/4/7/4770264_black-red_1.jpg"
  },
  {
    "id": 4,
    "tag": "risers",
    "title": "W&W CX7",
    "desc": "Developed using WIN&WIN's carbon technology that absorbs shock and minimizes movemnet to make shooting more accurate and stable.",
    "price": 655,
    "img": "https://www.lancasterarchery.com/media/catalog/product/cache/0f0282ddec6f407e3142cedcb490b752/4/7/4770098_riser.jpg"
  },
]

const Home = () => (


  <>
    <NavBar />

    <video autoplay="" muted="" loop="" id="vid">
      <source src="assets/videos/variousways.mp4" type="video/mp4" />
        <source src="assets/videos/variousways.ogg" type="video/ogg" />
        </video>

    <Slider
      activeIndex={3}
      // auto
      hasBullets
      hasArrows
      StyledSlider
      // BulletComponent={BulletComponent}
      ArrowComponent={ArrowComponent}
    >
      {data.map((item) => (

        <StyledSlider key={item.id}>
          <img src={item.img} alt={item.title} onClick={() => { this.handleId(item.id) }} />
          <p className="card-price">Price: {item.price} £</p>
          <h6 className="card-title">{item.title}</h6>
          <p className="card-description">{item.desc}</p>
        </StyledSlider>
      ))}
    </Slider>



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