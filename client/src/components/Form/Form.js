import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { theme } from '../../utils/theme';
import Layout from "../Layout/Layout";

// ---- Images ----

import cloud3 from "../../images/cloud_3.webp";
import email from "../../images/email.webp";

// ---- Form Styles ----

const StyledFormContainer = styled.div`
${theme.flex.centeredColumn};
background: url(${cloud3});
${theme.responsiveImg};
background-position: center;
min-height: 100vh;
opacity: .6;

  h1 {
    text-align: center;
    font-size: 4rem;
    padding: 0 5%;

    ${theme.media.mobile} {
        font-size: 2rem;
    }
  }

${theme.media.mobile} {
    height: 100%;
}
`
const StyledMonit = styled.h1`
  ${theme.media.mobile} {
    margin-top: 50%;
  }
`
const StyledFormWrapper = styled.div`
${theme.flex.centeredColumn};
margin-bottom: 5%;
text-align: center;
padding: 50px;

  input, textarea {
      width: 100%;
      height: 80px;
      margin-bottom: 30px;
      border-radius: 25px;
      padding-left: 20px;
      border: 5px solid ${theme.colors.primary};
      ${theme.font.indie};
      font-weight: bolder;
      font-size: 1.2rem;
      line-height: 1;
      outline-style: inherit;
    }

  textarea {
      padding-top: 15px;
      min-height: 30vh;
      overflow: hidden;
  }
`
const StyledSubmit = styled.div`
img {
    height: 100px;

  ${theme.media.tabletPro} {
      height: 70px;
    }

  ${theme.media.mobile} {
      height: 50px;
    }
}

input {
opacity: 0;
border: 1px solid #000;
display: inline-block;
width: 100px;
position: absolute;

@media not all and (hover: none) {
    &:hover ~ img{
       border: 2px solid ${theme.colors.primary};
       border-radius: 50%;
       padding: 5px;
        }
    }  
}
`


const FormComponent = () => {

  const [send, setSend] = useState(true);

  useEffect(() => {

    let textArea = document.getElementById('textAr');
    
    const autosize = () => {
      textArea.style.cssText = 'height:' + textArea.scrollHeight + 'px';
    };
    textArea.addEventListener('keydown', autosize);

  });

  const handleSubmit = () => {
    setSend(false);
  };

  return (
    <Layout>

      <StyledFormContainer>

        {send ? <h1>Contact Agent</h1> : ""}

        {send ? <StyledFormWrapper>
          <form onSubmit={() => handleSubmit()}>
            <input type="text" placeholder='Name' aria-label="name" required />
            <input type="email" placeholder='Email' aria-label="email" required />
            <textarea id="textAr" name="email-content" cols="30" placeholder='Your message' aria-label="email-content"
              required></textarea>

            <StyledSubmit>
              <input type="submit" ></input>
              <img src={email} alt="email-button" />
            </StyledSubmit>

          </form>

        </StyledFormWrapper>
          :
          <StyledMonit>Your message flew away !</StyledMonit>}

      </StyledFormContainer>

    </Layout>
  )
}

export default FormComponent;