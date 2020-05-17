import React from "react"
import { Link } from "gatsby"
import SEO from "../components/Seo/seo"

const PropertiesList = (props) => {
// console.log('props:', props)

    let string = `"{\"tag\": \"vip\"}"`


    let requestBody = {
        query: `
            query {  
                properties {
                title
                price
                location
            }
        }
      `
    };
    console.log(JSON.stringify(requestBody));

    fetch('http://localhost:8080/graphql', {
        method: 'POST',
        // body: requestBody,
        // body: JSON.parse(requestBody),
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            if (res.status !== 200 && res.status !== 201) {
                throw new Error('Failed!');
            }
            return res.json();
        })
        .then(resData => {
            console.log(resData);
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
            <Link to="/propertyView">Go to product</Link>
        </>
    )
}

export default PropertiesList;