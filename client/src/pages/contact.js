// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
// import { Link } from "gatsby";
import SEO from "../components/Seo/seo";
import Layout from "../components/Layout/Layout";
import { StyledHomeButton } from "../components/MultiButton/MultiButton";
import MultiButton from "../components/MultiButton/MultiButton";
import useRouteData from "../components/useRouteData/useRouteData"

const Contact = props => {

  const routeData = useRouteData(props);

  return (
    <Layout>

      {console.log('props:', props)}
      {console.log('routeData.routeTag:', routeData.routeTag)}

      <SEO title="Contact" />
      <h1>Contact Agent</h1>

      <StyledHomeButton>
        <MultiButton state={{ id: routeData.propertyId, pathname: "/", buttonType: "home" }} />
      </StyledHomeButton>

      <MultiButton state={{ route: routeData.routeTag, id: routeData.propertyId, pathname: routeData.routeTag === "header" ? "/" : "/propertyView" }} />

    </Layout>
  )

}

export default Contact;