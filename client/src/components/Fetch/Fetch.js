import React, { useState, useEffect } from "react";


// const [loading, setLoading] = useState(true)
// const [pageContent, setPageContent] = useState({ properties: [{}] });
// const [routeTag, setRouteTag] = useState("");
// console.log('pageContent:', pageContent)



// const [routeTag, setRouteTag] = useState("");

// const body = JSON.stringify({ query, variables: { string } });
// const res = await fetch(url, { method: 'POST', headers: headers, body: body });

// const query = `query Properties($string: String) {
//             properties(filter: $string) {
//                 id
//                 title
//                 price
//                 location
//                 img
//             }
//         }`;

//         let string = `{"tag": ${tag}}`




const useFetch = (query, string) => {
console.log('setTag:', string)

    const [pageContent, setPageContent] = useState([]);
    // const [error, setError] = useState(null);
    const [routeTag, setRouteTag] = useState("");
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     setRouteTag(string);
    // }, [string]);

    // useEffect(() => {
    //     const stringData = async ( ) => {
            
    //         console.log('I am string:', string)
    //         if (string !== null) {
    //             let tagData = string;
    //             return tagData
    //         }
    //         console.log('I am string:', string)
    //         await setRouteTag(string)
            
    //     };

    //         stringData();
    //     }, []);
    //     console.log('stringData:', stringData())





    let anyData = `{ "id": "7" }`
    // let anyData = `{"tag": ${string}}`
    console.log('anyData:', anyData)

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ query, variables: {anyData}  }),
    }


    // const body =  JSON.stringify({ query, variables: { string } })

    // console.log('routeTagAfter fetch:', routeTag)

    //     const headers = {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    // };

    const url = "http://localhost:8080/graphql";

    useEffect(() => {
        const fetchData = async () => {
            try {

                // const tag = await string
                // setRouteTag(tag);

                // const tag = routeTag;
                // const tag = await stringData();
                // console.log('tag:', tag)
                // let stringgy = `{"tag": "gift"}`
                // let stringgy = `{"tag": ${tag}}`
                // const body = JSON.stringify({ query, variables: { stringgy } });
                // const res = await fetch(url, { method: 'POST', headers: headers, body: body });
                
                const res = await fetch(url, options);
                const json = await res.json();
                console.log('json:', json.data.properties);
                // setPageContent(json.data);
                // setLoading(false)
            } catch (error) {
                // setError(error);
                console.log(error);
            }
        };
        fetchData();
    }, []);
    // return { pageContent, loading };
    return { pageContent, loading, routeTag };
};




// useEffect(() => {
//     const query = `query Properties($string: String) {
//             properties(filter: $string) {
//                 id
//                 title
//                 price
//                 location
//                 img
//             }
//         }`;

//     const url = "http://localhost:8080/graphql";
//     const headers = {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     };

//     // const tagData = stringData === null ? routeTag : props.location.state.route;
//     const stringgy = string;

//     const fetchData = async () => {
//         try {
//             const tag = await stringgy;
//             console.log('tag:', tag)
//             // setRouteTag(tag);
//             let string = `{"tag": ${tag}}`
//             // let string = `{"tag": "gift"}`
//             const body = JSON.stringify({ query, variables: { string } });
//             const res = await fetch(url, { method: 'POST', headers: headers, body: body });
//             const preData = await res.json();
//             const data = preData;
//             console.log('data:', data);
//             setPageContent(data);
//             // setLoading(false);
//         } catch (err) {
//             console.log(err);
//         }
//     }
//     fetchData();
// }, []);
// }






export default useFetch;
