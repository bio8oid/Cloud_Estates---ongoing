import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import { theme } from '../../utils/theme';

// ---- Images ----

import arrowDown from "../../images/arrow_down.webp";
import homeImg from "../../images/home.webp";
import chat from "../../images/chat.webp";

// ---- MultiButton Component Styles ----

export const StyledButton = styled.div`
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

    ${theme.media.tabletPro} {
        height: 70px;
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

  ${theme.media.tabletPro} {
        height: 70px;
        right: 110px;
    }
 ${theme.media.mobile} {
        height: 50px;
        right: 90px;
    }
`
export const StyledContactButton = styled.div`
div {
    margin: 0;
    position: static;
    opacity: 1;
    padding: 0 10px;
} 

img {
    transform: rotate(0);
}
`


const MultiButton = props => (

    <StyledButton>
        {/* {console.log('props:', props)} */}
        <Link state={{ route: props.state.route, id: props.state.id.value }} to={`${props.state.pathname}`} >

            {props.state.buttonType === "home" ?
                <img src={homeImg} alt="home-button" /> :
                props.state.buttonType === "chat" ?
                    <img src={chat} alt="chat-button" /> :
                    <img src={arrowDown} alt="arrow-down" />}

        </Link>
    </StyledButton>

)

export default MultiButton;