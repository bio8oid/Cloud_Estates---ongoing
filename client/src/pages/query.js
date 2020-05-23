// import  { useState, useEffect } from "react";

// const Query = props => {
// console.log('props:', props)

// const url = "http://localhost:8080/graphql";
// const headers = {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json'
// };
// // const routeTag = props.location.state.route
// // console.log(routeTag)
// // let string = `{"tag": ${routeTag}}`
// let string = `{"tag": "vip"}`
// var query = `query Properties($string: String) {
//             properties(filter: $string) {
//                 title
//                 price
//                 location
//             }
//         }`;

// const body = JSON.stringify({ query, variables: { string } });



//     const [pageContent, setPageContent] = useState([]);


//     useEffect(() => {
//         async function fetchData() {
//                  try {
//             const res = await fetch(url, { method: 'POST', headers: headers, body: body });
//             const preData = await res.json();
//             console.log('data:', preData)
//             const data = preData.data.properties
//             console.log('data:', data)
//             setPageContent(data);
//         } catch (err) {
//             console.log(err);
//         } 
//         } 
//         fetchData();
//     }, []);

//     return pageContent
// }

// export default Query;