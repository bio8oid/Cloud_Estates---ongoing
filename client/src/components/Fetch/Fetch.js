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
    const [pageContent, setPageContent] = useState([]);
    // const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)
    
    // const tagData = stringData !== null ? stringData.route : "";
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ query, variables: { string } }),
    }

    //     const headers = {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    // };

    const url = "http://localhost:8080/graphql";

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const tag = await tagData;
            // let string = `{"tag": ${tag}}`
            // const body = JSON.stringify({ query, variables: { string } });
            const res = await fetch(url, options);
                const json = await res.json();
                console.log('json:', json)
                setPageContent(json.data);
                setLoading(false)
            } catch (error) {
                // setError(error);
                console.log(error);
            }
        };
        fetchData();
    }, []);
    return { pageContent, loading };
};

export default useFetch;



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

//     const tagData = stringData === null ? routeTag : props.location.state.route;

//     const fetchData = async () => {
//         try {
//             const tag = await tagData;
//             setRouteTag(tag);
//             let string = `{"tag": ${tag}}`
//             const body = JSON.stringify({ query, variables: { string } });
//             const res = await fetch(url, { method: 'POST', headers: headers, body: body });
//             const preData = await res.json();
//             const data = preData.data
//             setPageContent(data);
//             setLoading(false);
//         } catch (err) {
//             console.log(err);
//         }
//     }
//     fetchData();
// }, []);
