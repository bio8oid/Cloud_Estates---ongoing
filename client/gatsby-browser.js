/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// Import the component at the top of the file

// const React = require("react")

// exports.wrapRootElement = ({ element }) => {
//     return (
//             {element}
//     )
// }


// import CarouselComponent from './src/components/CarouselComponent';

// export const wrapPageElement = ({ element, props }) => (
//     <CarouselComponent {...props}>{element}</CarouselComponent>
// );


// const React = require("react")
// const Layout = require("./src/components/Layout/Layout").default

// exports.wrapPageElement = ({ element, props }) => {
//     // props provide same data to Layout as Page element will get
//     // including location, data, etc - you don't need to pass it
//     return <Layout {...props}>{element}</Layout>
// }





import Provider from './provider';

export const wrapRootElement = Provider;