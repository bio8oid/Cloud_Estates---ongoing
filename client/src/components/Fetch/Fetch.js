import React, { useState, useEffect } from "react";


const useFetch = (query, string) => {

    const [pageContent, setPageContent] = useState([]);
    const [loading, setLoading] = useState(true)
    const [routeTag, setRouteTag] = useState({});

    useEffect(() => {
        setRouteTag(string);
    }, [string]);


    const url = "http://localhost:8080/graphql";

        const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };


    useEffect(() => {

        const fetchData = async () => {
            try {
                let string = await `{${routeTag.name}: ${routeTag.value}}`
                const body = JSON.stringify({ query, variables: { string } });
                const res = await fetch(url, { method: 'POST', headers: headers, body: body });
                const data = await res.json();
                setPageContent(data.data.properties);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [routeTag]);
    return { pageContent, loading, routeTag };
}


export default useFetch;