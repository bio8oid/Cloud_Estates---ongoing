import React from "react";
import styled from 'styled-components';
import { theme } from '../../utils/theme';


const StyledFooter = styled.div`
height: 50px;
width: 30%;
background: black;
opacity: .8;
position: absolute;
bottom: 5%;
left: 0;

h3 {
    font-size: 2rem;
    color: white;
    text-align: center;
    font-family: ${theme.font.indie};
    /* position: relative; */
}
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
`;


const Footer = () => (
    <>
        <StyledFooter>
            <h3>bio8oid © </h3>
        </StyledFooter>
    </>
)

export default Footer;

// { new Date().getFullYear() }