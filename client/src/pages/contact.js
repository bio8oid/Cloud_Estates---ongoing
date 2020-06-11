import React from "react";
import SEO from "../components/Seo/seo";
import Layout from "../components/Layout/Layout";
import { StyledHomeButton } from "../components/MultiButton/MultiButton";
import MultiButton from "../components/MultiButton/MultiButton";
import useRouteData from "../components/useRouteData/useRouteData";
import FormComponent from "../components/Form/Form";


const Contact = props => {

  const routeData = useRouteData(props);

  return (
    <Layout>
      <SEO title="Contact" />

      <FormComponent />

      <StyledHomeButton>
        <MultiButton state={{ id: routeData.propertyId, pathname: "/", buttonType: "home" }} />
      </StyledHomeButton>

      <MultiButton state={{ route: routeData.routeTag, id: routeData.propertyId, pathname: routeData.routeTag === "header" ? "/" : "/propertyView" }} />

    </Layout>
  )
}

export default Contact;