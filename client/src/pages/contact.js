import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import SEO from "../components/Seo/seo";
import Layout from "../components/Layout/Layout";
import { StyledHomeButton, StyledContactButton } from "../components/MultiButton/MultiButton";
import MultiButton from "../components/MultiButton/MultiButton";
import useRouteData from "../components/useRouteData/useRouteData"

const Contact = props => {

  const data = useRouteData(props);

//    const [routeTag, setRouteTag] = useState("");
// const [propertyId, setPropertyId] = useState({});

// useEffect(() => {

//   // To keep state after page reload

//   const routeTagData = props.location.state === null ? JSON.parse(localStorage.getItem('keptRouteTag')) : props.location.state.route;

//   const idData = props.location.state === null ? JSON.parse(localStorage.getItem('keptRouteId')) : props.location.state.id;

//   const setLocalStorage = (data) => localStorage.setItem('keptRouteId', JSON.stringify(data));

//   const setTag = async () => {
//     setPropertyId({ name: '"id"', value: idData });
//     setRouteTag(routeTagData);
//     setLocalStorage(idData);
//   }
//   setTag();
// }, [props.location.state]);
  
return (
  <Layout>
  {/* {console.log('props:', props)}
    {console.log('props:', props.location.state.id)} */}
    <SEO title="Contact" />
    <h1>Hi from the second page</h1>


    <StyledHomeButton>
    <MultiButton state={{ id: data.propertyId, pathname: "/", buttonType: "home" }} />
    </StyledHomeButton>

    <MultiButton state={{ route: data.routeTag, id: data.propertyId , pathname: "/propertyView" }} />

  </Layout>
)

}

export default Contact;