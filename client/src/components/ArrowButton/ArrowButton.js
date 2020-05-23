import React from "react";
import { Link } from "gatsby"
import styled from 'styled-components';
import { theme } from '../../utils/theme';
import arrowDown from "../../images/arrow_down.png"


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


const ArrowButton = () => (

    <StyledButton>
        <Link to="/" >
            <img src={arrowDown} alt="arrow-down" />
        </Link>
    </StyledButton>
    
)

export default ArrowButton;