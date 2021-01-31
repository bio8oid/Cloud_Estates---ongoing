import { useState, useEffect } from "react";

const useFetch2 = (query, data) => {

    const [pageContent, setPageContent] = useState([]);
    const [loading, setLoading] = useState(true);

    // const [routeFetchData, setRouteFetchData] = useState({});

    // useEffect(() => {
    //     setRouteFetchData(string);
    // }, [string]);

    // const prefix = "https://cors-anywhere.herokuapp.com/";

    // const url = "http://localhost:9000/graphql";

    const url = "http://localhost:8080/graphql";

    // const url = "https://cloud-estates.netlify.app/graphql";

    // const url = "https://cloudestates.netlify.app/graphql";

    // const url = "https://estates-clouds.herokuapp.com/graphql";

    /// last one

    // const url = "https://cloud-estates.herokuapp.com/graphql";

    // const url = "/graphql";

    useEffect(() => {

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Access-Control-Allow-Origin": "*"
        };

        // var tagHasBeenSet = function () {
        //     let variables = '';
        //     return new Promise(resolve => {
        //         if (typeof data === 'string') {
        //             variables = `{"tag": "${data}"}`;
        //         } else {
        //             variables = `{"id": "${data}"}`;
        //         }
        //         resolve(variables);
        //     });
        // };


        //     {
        //         body: {
        //             "query": "query Properties($string: String) {
        //             properties(filter: $string) {
        //                 id
        //                 title
        //                 desc
        //                 price
        //                 location
        //                 availability
        //                 deposit
        //                 commission
        //                 factor
        //                 img
        //             }
        //         } ", "variables": { "string": "{ \"id\": 12}" }
        //     }
        // }

        let string = isNaN(data) ? `{"tag": ${data}}` : `{"id": ${data}}`;
        // let string = typeof data === 'string' ? `{"tag": ${data}}` : `{"id": ${data}}`;

        // let string =  `{"tag": "${data}"}`;

        const fetchData = async () => {
            try {
                // let string = await tagHasBeenSet();
                // console.log('fetch-data:', data)
                // let string = `{"tag": "${data}"}`;
                const body = await JSON.stringify({ query, variables: { string } });
                // const body = await JSON.stringify({ query, variables: { string: `{"tag": "${string}"}` } });
                // const body = await JSON.stringify({ query, variables: { string: `{"${name}": "${value}"}` } });
                console.log('body:', body)
                const res = await fetch(url, { method: 'POST', headers: headers, body: body });
                const data = await res.json();
                console.log('data:', data)
                setPageContent(data.data.properties);
                setLoading(false);
            } catch (err) {
                console.log(err);
            };
        };
        fetchData();
    }, [query, data]);
    return { pageContent, loading };
};

export default useFetch2;
