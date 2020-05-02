import React from "react"
import styled from 'styled-components'
import img from '../../images/gatsby-astronaut.png'

// import { Link } from "gatsby"

const SlideTwoStyles = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
color: black;
font-size: 5rem;
background: url(${img}) no-repeat fixed center;
background-size: cover;
`;

const SlideTwo = () => (
    <>
            <SlideTwoStyles>
                <div>
                    <h1>Hi people. Hello!</h1>
            </div>
            </SlideTwoStyles>
    </>
)

export default SlideTwo;

// import styled from 'styled-components'

// const H1 = styled.h1`
//   font-size:  ${({ isBig }) => isBig ? '5em' : '3em'};
//   color:  ${({ isBlue }) => isBlue ? 'blue' : 'white'};
// `;

// export default H1;