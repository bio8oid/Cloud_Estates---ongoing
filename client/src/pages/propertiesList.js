import React, { useState, useEffect } from "react";
import SEO from "../components/Seo/seo"
import styled from 'styled-components';
import { theme } from '../utils/theme';
import Layout from "../components/Layout/Layout"
import ArrowButton from "../components/ArrowButton/ArrowButton"
import CarouselComponent from "../components/PropertiesList/Carousel/Carousel"
import Spinner from "../components/Spinner/Spinner"
import cloud3 from "../images/cloud_3.webp"


// import { useAsync } from 'react-async-hook';

import { useAsync } from "react-async"
// import { useFetch } from "react-async"

// import useFetch from "../components/Fetch/Fetch"
// ---- List Styles ----

const StyledWrapper = styled.div`
text-align: center;
`
const StyledBackground = styled.div`
background: url(${cloud3}) no-repeat center;
${theme.responsiveImg};
min-height: 90vh;
`

const Title = styled.h1`
font-size: 4rem;
opacity: .6;
padding: 0 5%;

    ${theme.media.tablet} {
        font-size: 3rem;
    }
    ${theme.media.mobile} {
        font-size: 2rem;
    }
`


const PropertiesList = props => {
console.log('props:', props)

    // const [loading, setLoading] = useState(true)
    // const [pageContent, setPageContent] = useState({ properties: [{}] });
    const [routeTag, setRouteTag] = useState(null);
    console.log('routeTag:', routeTag)
    // const [pageContent, loading] = useFetch(query, string);
    // console.log('pageContent:', pageContent)


   useEffect(() => {
    const setTag = async () => {
        const tag = await props.location.state.route;
        setRouteTag(tag)
    }
       setTag();
    },[]);


    const query = `query Properties($string: String) {
            properties(filter: $string) {
                id
                title
                price
                location
                img
            }
        }`;

  
        let string = `{"tag": ${string}}`





    // You can use async/await or any function that returns a Promise
    const loadPlayer = async (query,  string ) => {
   const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ query, variables:  "vip"  })
        }

        const url = "http://localhost:8080/graphql";

        const res = await fetch(url, options)
        if (!res.ok) throw new Error(res.statusText)
        return res.json()
    }


    const { data, error, isPending } = useAsync(loadPlayer)































//     const MyComponent = (query, string) => {



//    const options = {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: JSON.stringify({ query, variables:  "vip"  })
//         }

//         const url = "http://localhost:8080/graphql";

//     // const headers = {
//     //     'Content-Type': 'application/json',
//     //     'Accept': 'application/json'
//     // };

//         const { data, error, isPending, run } = useFetch(url, options)
//         // This will setup a promiseFn with a fetch request and JSON deserialization.

//         // const res = await fetch(url, { method: 'POST', headers: headers, body: body });
//         console.log(data)
//         console.log(error)
//         console.log(isPending)

//         // you can later call `run` with an optional callback argument to
//         // last-minute modify the `init` parameter that is passed to `fetch`
//         function clickHandler() {
//             run(init => ({
//                 ...init,
//                 headers: {
//                     ...init.headers,
//                     authentication: "...",
//                 },
//             }))
//         }
  

//         // alternatively, you can also just use an object that will be spread over `init`.
//         // please note that this is not deep-merged, so you might override properties present in the
//         // original `init` parameter
//     //     function clickHandler2() {
//     //         run({ body: JSON.stringify(formValues) })
//     //     }
//     }
//       MyComponent();

    // console.log(clickHandler())
    // console.log(clickHandler2())



















    // const keptTag = localStorage.getItem('keptRouteTag');
    // if (keptTag) setRouteTag(JSON.parse(localStorage.getItem('keptRouteTag')));



    // useEffect(() => {
    //     const setTag = async () => {
    //         const tag = await props.location.state === null ? JSON.parse(localStorage.getItem('keptRouteTag')) : props.location.state.route;
    //         console.log('tag:', tag)
    //         setRouteTag(tag)
    //         localStorage.setItem('keptRouteTag', JSON.stringify(tag))
    //         var updatedTag = await routeTag;
    //     }
    //     setTag();
    // }, []);
    
    // const res =  useFetch(query, updatedTag);

    // const tag = props.location.state === null ? JSON.parse(localStorage.getItem('keptRouteTag')) : props.location.state.route;
    //  console.log('tag:', tag)
    //  setRouteTag(tag)
    // localStorage.setItem('keptRouteTag', JSON.stringify(tag))

    // console.log('routeTagAfter:', routeTag)

    // const getget = (routeTag) => { 
    //         if (routeTag !== null) {
    //             return `{"tag": ${routeTag}}`
    //         }
    // } 

    // const taggy = useAsync(getget, routeTag)
    // console.log('taggy:', taggy)
    // let string = `{"tag": ${taggy}}`

    // const [pageContent, loading] = useFetch(query, string);
    // console.log('pageContent:', pageContent)

//     const asyncHero = useAsync(routeTag);
//     // const res = useFetch(query, asyncHero);
//     // console.log('res:', res)
//   console.log('asyncHero:', asyncHero.result)


//   const loading = res.loading;
//   const pageContent = res.pageContent.properties;
//   console.log('res:', res)
//   console.log('loading:', loading)
//   console.log('pageContent:', pageContent)

    // useEffect(() => {
    //     const keptTag = localStorage.getItem('keptRouteTag');
    //     if (keptTag) setRouteTag(JSON.parse(keptTag));
    // },[]);
    
    // console.log('routeTag2:', routeTag)

    // useEffect(() => {
    //     // const keptTag = localStorage.getItem('keptRouteTag');
    //     // if (keptTag) setRouteTag(JSON.parse(keptTag));

    //     const query = `query Properties($string: String) {
    //         properties(filter: $string) {
    //             id
    //             title
    //             price
    //             location
    //             img
    //         }
    //     }`;

    //     const url = "http://localhost:8080/graphql";
    //     const headers = {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     };

    //     if (routeTag !== null) {
    //         var tagData = routeTag ;
    //     }
    //     // const tagData = props.location.state === null && routeTag !== "" ? props.location.state.route : routeTag;

    //     const fetchData = async () => {
    //         try {
    //             const tag = await  tagData;
    //             // setRouteTag(tag);
    //             let string = `{"tag": ${tag}}`
    //             const body = JSON.stringify({ query, variables: { string } });
    //             const res = await fetch(url, { method: 'POST', headers: headers, body: body });
    //             const preData = await res.json();
    //             const data = preData.data.properties
    //             // setPageContent(data);
    //             // setLoading(false);
    //             // localStorage.setItem('keptRouteTag', JSON.stringify(tag))
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     fetchData();
    // }, []);

  
    return (

        <Layout>
            <SEO title="Properties" />
            <StyledBackground>
            <StyledWrapper>

                    <pre>{JSON.stringify(data, null, 2)}</pre>



                    {/* <Title>Welcome to {routeTag.replace(/["]/g, "")} Products List</Title>

                {loading ? <Spinner /> : <CarouselComponent pageContent={pageContent} state={{ route: routeTag }} />}

                <ArrowButton state={{ route: routeTag, pathname: "/" }}/> */}
            </StyledWrapper>
            </StyledBackground>
        </Layout>
    )
}

export default PropertiesList;

// useEffect(() => {
//     const keptTag = localStorage.getItem('keptRouteTag');
//     keptTag ? setRouteTag(JSON.parse(keptTag));
// })

// useEffect(() => {
//     localStorage.setItem('keptRouteTag',JSON.stringify( routeTag))
// })