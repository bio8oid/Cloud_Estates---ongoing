// import React from "react";
import React, { useState } from "react";
// import { Link } from "gatsby"
// import SEO from "../components/Seo/seo"
// import styled from 'styled-components';
// import { theme } from '../utils/theme';
import Layout from "../../components/Layout/Layout"
// import ArrowButton from "../components/ArrowButton/ArrowButton"
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { Roller } from "react-awesome-spinners";



const Spinner = props => {
// console.log('props:', props)

    // const [loading, setLoading] = useState(true)

    return (
        <Layout>
            <div  style={{ position: "absolute", top: "50%", textAlign: "center" }}>
                <Roller  color="#040026" />
            </div>
        </Layout>

    )
}

export default Spinner;