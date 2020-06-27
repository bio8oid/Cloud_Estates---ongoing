import { useState, useEffect } from "react";


const useFetch = (query, string) => {

    const [pageContent, setPageContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [routeFetchData, setRouteFetchData] = useState({});

    useEffect(() => {
        setRouteFetchData(string);
    }, [string]);

    // const prefix = "https://cors-anywhere.herokuapp.com/";

    // const url = "http://localhost:8080/graphql";

    // const url = "https://cloud-estates.netlify.app/graphql";

    // const url = "https://cloudestates.netlify.app/graphql";

    // const url = "https://estates-clouds.herokuapp.com/graphql";

    const url = "https://cloud-estates.herokuapp.com/graphql";

    useEffect(() => {

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Access-Control-Allow-Origin": "*"
        };

        var tagHasBeenSet = function () {
            return new Promise(resolve => {
                if (routeFetchData.name && routeFetchData.value !== undefined) {
                    var variables = `{${routeFetchData.name}: ${routeFetchData.value}}`;
                    resolve(variables);
                }
            });
        };

        const fetchData = async () => {
            try {
                let string = await tagHasBeenSet();
                console.log('string:', string)
                const body = await JSON.stringify({ query, variables: { string } });
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
    }, [routeFetchData, query]);
    return { pageContent, loading, routeFetchData };
};

export default useFetch;