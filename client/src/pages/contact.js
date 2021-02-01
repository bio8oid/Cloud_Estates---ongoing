import React from "react";
import SEO from "../components/Seo/seo";
import Layout from "../components/Layout/Layout";
import { StyledHomeButton } from "../components/MultiButton/MultiButton";
import MultiButton from "../components/MultiButton/MultiButton";
// import useRouteData from "../components/useRouteData/useRouteData";
import FormComponent from "../components/Form/Form";


const Contact = props => {
  // console.log('props:', props)
  // console.log('contact-props- route:', props.location.state.route)

  // const routeData = useRouteData(props);

  if (props.location.state !== null) {
    localStorage.setItem('buttonData', JSON.stringify(props.location.state.route))
  }

  const buttonData = JSON.parse(localStorage.getItem('buttonData')) || props.location.state.route;

  return (
    <Layout>
      <SEO title="Contact" />

      <FormComponent />

      <StyledHomeButton>
        <MultiButton state={{ id: '', pathname: "/", buttonType: "home" }} />
      </StyledHomeButton>
      {/* {console.log("contact", routeData)} */}
      <MultiButton state={{ route: '', id: '', pathname: buttonData === "header" ? "/" : `/propertyView2/${buttonData}` }} />

    </Layout>
  )
}

export default Contact;