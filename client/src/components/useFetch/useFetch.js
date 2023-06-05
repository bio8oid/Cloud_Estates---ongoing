import { useState, useEffect } from "react";

const useFetch = (query, data) => {

    const [pageContent, setPageContent] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = "https://clouds-back.onrender.com/graphql";

    useEffect(() => {

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Access-Control-Allow-Origin": "*"
        };

        let string = isNaN(data) ? `{"tag": ${data}}` : `{"id": ${data}}`;

        const fetchData = async () => {
            try {
                const body = await JSON.stringify({ query, variables: { string } });
                const res = await fetch(url, { method: 'POST', headers: headers, body: body });
                const data = await res.json();
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

export default useFetch;
