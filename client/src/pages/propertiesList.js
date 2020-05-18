import React, { useState, useEffect } from "react";
import { Link } from "gatsby"
import SEO from "../components/Seo/seo"

const PropertiesList = (props) => {

    const routeContent = props.location.state.route
    // const [content, setContent] = useState({ routeContent});



    console.log(routeContent)
    
    // useEffect(() => setContent(routeContent), [content]);
    
    // const newState = props.state.route
    // console.log('state', newState)
    
    let string = `{"tag": ${routeContent}}`  
    // let string = '{"tag": "vip"}'  //<=====  THIS ONE !!!

    var query = `query Properties($string: String) {
        properties(filter: $string) {
            title
            price
            location
        }
    }`;

    fetch('http://localhost:8080/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({query, variables: { string }}),
    })
        .then(res => {
            if (res.status !== 200 && res.status !== 201) {
                throw new Error('Failed!');
            }
            return res.json();
        })
        .then(resData => {
            console.log(resData.data.properties);
            // console.log(resData.data.properties.filter(x=>x.tag === "vip"));
            return resData;
        })
        .catch(err => {
            console.log(err);
        });


    return (

        <>
            <SEO title="Properties" />
    <h1>Hi from the properties list </h1>
            <p>Welcome to Products List</p>
            <Link to="/propertyView" >Go to product</Link>
        </>
    )
}

export default PropertiesList;