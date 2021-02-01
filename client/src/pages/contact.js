import React, { useEffect, useState } from "react";
import SEO from "../components/Seo/seo";
import Layout from "../components/Layout/Layout";
import { StyledHomeButton } from "../components/MultiButton/MultiButton";
import MultiButton from "../components/MultiButton/MultiButton";
import FormComponent from "../components/Form/Form";

const Contact = props => {

  const [buttonData, setButtonData] = useState('')

  useEffect(() => {
    if (props.location.state !== null) {
      localStorage.setItem('buttonData', JSON.stringify(props.location.state.route))
    }
    setButtonData(JSON.parse(localStorage.getItem('buttonData')) || props.location.state.route);
  }, [props]);


  return (
    <Layout>
      <SEO title="Contact" />

      <FormComponent />

      <StyledHomeButton>
        <MultiButton state={{ id: '', pathname: "/", buttonType: "home" }} />
      </StyledHomeButton>

      <MultiButton state={{ route: '', id: '', pathname: buttonData === "header" ? "/" : `/propertyView/${buttonData}` }} />

    </Layout>
  )
}

export default Contact;