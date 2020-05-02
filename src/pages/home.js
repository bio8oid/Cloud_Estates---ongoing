import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import SEO from "../components/Seo/seo"
// import Slider from '@farbenmeer/react-spring-slider';
// import SlideOne from '../components/Slider/slide1';
// import SlideTwo from '../components/Slider/slide2';
// import SlideThree from '../components/Slider/slide3';
// import ArrowComponent from '../components/Slider/arrows';
import { theme } from '../utils/theme';
// import Button from '../components/Button';


import { useState } from "react";
import { motion } from "framer-motion";

const StyledLink = styled.a`
  text-decoration: none;
  color: green;
  border:10px solid orange;
  border-radius: 25px;
  padding: 50px 25px;
  background: ${theme.colors.mainGradient};
  color: orange;
  margin:50px;

  
body {
  padding: 0;
  margin: 0;
  background: #fdfdfd;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

* {
  box-sizing: border-box;
}

.switch {
  width: 170px;
  height: 100px;
  border-radius: 100px;
  padding: 10px;
  display: flex;
  cursor: pointer;
}

.switch.on {
  background-color: #22cc88;
  justify-content: flex-end;
}

.switch.off {
  background-color: #dddddd;
  justify-content: flex-start;
}

.switch div {
  width: 80px;
  height: 80px;
  background-color: #ffffff;
  border-radius: 200px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.02);
}
`;

const StyledSlider = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// height: 100vh;
text-align: center;
color: orange;
font-size: 3rem;
`;
// font-size:  ${({ isBig }) => isBig ? '5em' : '3em'};



function Switch({ isOn, ...props }) {
  const className = `switch ${isOn ? "on" : "off"}`;
  
  return (
    <motion.div animate className={className} {...props}>
      <motion.div animate />
    </motion.div>
  );
}


// const [isOn, setIsOn] = useState(false);

const Home = () => (

  
  <>
    {/* <SEO title="home" /> */}
      <div>
        <h1>I am going to page 2</h1>
          <StyledLink>
            <Link to="/page-2">Go to page 2 (link)</Link>
          </StyledLink>
          <StyledLink>
            <Link to="/404">Go to page 2 (link)</Link>
          </StyledLink>
      </div>
      
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