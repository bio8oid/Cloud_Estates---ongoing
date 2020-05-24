import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import { theme } from '../../utils/theme';
import arrowDown from "../../images/arrow_down.png";
import homeImg from "../../images/home.png";

// ---- Styles ----

const StyledButton = styled.div`
position: fixed;
bottom: 0;
margin-left: 20px;
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
export const StyledHomeButton = styled(StyledButton)`
right: 140px;
opacity: 1;

img {
    transform: rotate(0) ;
}

 ${theme.media.mobile} {
        height: 50px;
        right: 90px;
    }
`

const ArrowButton = props => (

    <StyledButton >
        {/* {console.log(props)} */}
        <Link state={{ route: props.state.route }} to={`${props.state.pathname}`} >
            {props.state.tag === "home" ? <img src={homeImg} alt="home-button" /> : <img src={arrowDown} alt="arrow-down" />}
        </Link>
    </StyledButton>

)

export default ArrowButton;