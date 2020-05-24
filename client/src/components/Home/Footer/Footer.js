import React from "react";
import styled from 'styled-components';
import { theme } from '../../../utils/theme';


const StyledFooter = styled.div`
${theme.flex.centered};
width: 30%;
background: black;
opacity: .8;
position: absolute;
bottom: 5%;
left: 0;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;

p {
    ${theme.font.indie};
    color: white;
    font-size: 1.5rem;
    margin: 0;
    padding: 10px;
}

    ${theme.media.mobile} {
    width: 100%;       
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;      
}
`;


const Footer = () => (
    <>
        <StyledFooter>
            <p>bio8oid © {new Date().getFullYear()}</p>
        </StyledFooter>
    </>
)

export default Footer;