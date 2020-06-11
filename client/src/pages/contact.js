// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { theme } from '../utils/theme';
// import { Link } from "gatsby";
import SEO from "../components/Seo/seo";
import Layout from "../components/Layout/Layout";
import { StyledHomeButton, StyledEmailButton } from "../components/MultiButton/MultiButton";
import MultiButton from "../components/MultiButton/MultiButton";
import useRouteData from "../components/useRouteData/useRouteData";

// ---- Images ----

import cloud3 from "../images/cloud_3.webp";


const StyledFormContainer = styled.div`
${theme.flex.centeredColumn};
background: url(${cloud3});
${theme.responsiveImg};
background-position: center;
height: 100vh;
opacity: .6;

  h1 {
    text-align: center;
    font-size: 4rem;
  }
`
const StyledFormWrapper = styled.div`
${theme.flex.centeredColumn};
margin-bottom: 10%;
text-align: center;
padding: 50px;

  input, textarea {
      width: 100%;
      height: 80px;
      margin-bottom: 30px;
      border-radius: 25px;
      padding-left: 20px;
      border: 5px solid ${theme.colors.primary};
    }

  textarea {
      padding-top: 15px;
      height: 100%;
  }
`

const Contact = props => {

  const routeData = useRouteData(props);

  return (
    <Layout>
      <SEO title="Contact" />

      {/* {console.log('props:', props)} */}

      <StyledFormContainer>

        <h1>Contact Agent</h1>

        <StyledFormWrapper>
          <form>
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <textarea name="contact-area" id="" cols="30" rows="15" placeholder='Your message'></textarea>

            <StyledEmailButton>
              <MultiButton state={{ id: routeData.propertyId, pathname: "/contact", buttonType: "email" }} />
            </StyledEmailButton>

          </form>
        </StyledFormWrapper>
      </StyledFormContainer>

      <StyledHomeButton>
        <MultiButton state={{ id: routeData.propertyId, pathname: "/", buttonType: "home" }} />
      </StyledHomeButton>

      <MultiButton state={{ route: routeData.routeTag, id: routeData.propertyId, pathname: routeData.routeTag === "header" ? "/" : "/propertyView" }} />

    </Layout>
  )
}

export default Contact;