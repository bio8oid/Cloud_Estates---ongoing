import React, { useState, useEffect } from "react";
import { Link } from "gatsby"
import SEO from "../components/Seo/seo"
// import Query from './query'

const PropertiesList = (props) => {

    const [pageContent, setPageContent] = useState({ properties: [{}] });
    const [pageTag, setPageTag] = useState('');
    console.log('pageContent:', pageContent)
    console.log('pageContent2:', pageContent.properties)
    // setPageTag(props.location.state.route) 
    
    // useEffect(() => { setPageTag(props.location.state.route), [pageTag]});

    // useEffect(() => setPage(1), [props.tabsList]);

    const url = "http://localhost:8080/graphql";
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    const routeTag = props.location.state.route
    console.log(routeTag)
    let string = `{"tag": ${routeTag}}`
    var query = `query Properties($string: String) {
            properties(filter: $string) {
                title
                price
                location
            }
        }`;

    const body = JSON.stringify({ query, variables: { string } });

    useEffect(() => {
      const  fetchData = async () => {
            try {
                const res = await fetch(url, { method: 'POST', headers: headers, body: body });
                const preData = await res.json();
                console.log('data:', preData)
                const data = preData.data
                console.log('data:', data)
                setPageContent(data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);


    return (
        <>
            <SEO title="Properties" />
            <ul>
            {pageContent.properties.map(x => (
                <>
                <li key={x.objectID}>{x.title}</li>
                <li>{x.price}</li>
                </>
            ))}
            </ul>
            {/* <h1>{pageContent.properties.map(x=>x)}</h1> */}
            {/* <h1>{pageContent.properties[0].title}</h1> */}
            {/* <button onClick={() => getContent()}>here </button> */}
            <p>Welcome to Products List</p>
            <Link to="/propertyView" state={{route: routeTag}} >Go to product</Link>
        </>
    )
}

export default PropertiesList;