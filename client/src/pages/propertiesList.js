import React, { useState, useEffect } from "react";
import { Link } from "gatsby"
import SEO from "../components/Seo/seo"
// import Query from './query'

const PropertiesList = (props) => {

    // const [pageData, setPageData] = useState([]);
    // const [pageContent, setPageContent] = useState([]);
    // console.log('pageContentState:', pageContent)
    // console.log('pageContentState2:', pageContent[0].title)
    // console.log('pageData:', pageData)

   
    // const [page, setPage] = useState(1);

    // const handlePage = id => e => {
    //     setPage(id);
    // }

    // useEffect(() => { getContent(pageContent)}, [props.pageContent]);



    // const url = "http://localhost:8080/graphql";
    // const headers = {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    // };
    // const routeTag = props.location.state.route
    // console.log(routeTag)
    // let string = `{"tag": ${routeTag}}`
    // var query = `query Properties($string: String) {
    //         properties(filter: $string) {
    //             title
    //             price
    //             location
    //         }
    //     }`;
    // const body = JSON.stringify({ query, variables: { string } });

    // export default function() {

    //     const [pageContent, setPageContent] = useState([]);

 
    // useEffect(async() => {
    
    //     try {
    //         const res = await fetch(url, { method: 'POST', headers: headers, body: body });
    //         const preData = await res.json();
    //         console.log('data:', preData)
    //         const data = preData.data.properties
    //         console.log('data:', data)
    //         setPageContent(data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }, []);
    //     return pageContent
    // }



    // useEffect(() => {

    // }, []);

    // const routeTag = props.location.state.route

    //     console.log(routeTag)
        
    //     let string = `{"tag": ${routeTag}}`
    //     var query = `query Properties($string: String) {
    //     properties(filter: $string) {
    //         title
    //         price
    //         location
    //     }
    // }`;

    // fetch('http://localhost:8080/graphql', {method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     },
    //     body: JSON.stringify({query, variables: { string }}),
    // })
    //     .then(res => {
    //         if (res.status !== 200 && res.status !== 201) {
    //             throw new Error('Failed!');
    //         }
    //         return res.json();
    //         // var data = res.json();
    //         // console.log('data:', data)
    //         // setPageData(data);
    //     })
    //     .then(
    //         resData => setPageData(resData)
    //         //  {
    //         // console.log(resData.data.properties);
    //         // var resData = resData.data.properties
    //         // // return resData;
    //         // setPageData(resData)
    //     // }
    //     )
    //     .catch(err => {
    //         console.log(err);
    //     });

    // var getContent = async () => {
    //     const url = "http://localhost:8080/graphql";
    //     const headers = {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     };
    //     const routeTag = props.location.state.route
    //     console.log(routeTag)
    //     let string = `{"tag": ${routeTag}}`
    //     var query = `query Properties($string: String) {
    //         properties(filter: $string) {
    //             title
    //             price
    //             location
    //         }
    //     }`;
    //     const body = JSON.stringify({ query, variables: { string } });
    //     try {
    //         const res = await fetch(url, {method: 'POST', headers: headers, body: body} );
    //         const preData = await res.json();
    //         console.log('data:', preData)
    //         const data = preData.data.properties
    //         console.log('data:', data)
    //         setPageContent(data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

//     useEffect(() => { const id = waitTo(() => {
//         getContent()
//     })
// return waitTo(id)
// }, []);







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

    // export default function () {

    const [pageContent, setPageContent] = useState([]);


    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(url, { method: 'POST', headers: headers, body: body });
                const preData = await res.json();
                console.log('data:', preData)
                const data = preData.data.properties
                console.log('data:', data)
                setPageContent(data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);
    // return pageContent
    // }
// }
















// const Query = Query();

    return (
        <>
            <SEO title="Properties" />
            <h1>{pageContent[0].title}</h1>
            {/* <button onClick={() => getContent()}>here </button> */}
            <p>Welcome to Products List</p>
            <Link to="/propertyView" >Go to product</Link>
        </>
    )
}

export default PropertiesList;