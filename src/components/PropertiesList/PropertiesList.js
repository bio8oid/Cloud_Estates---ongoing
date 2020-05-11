import React from "react";
import styled from 'styled-components';
import { theme } from '../../utils/theme';
import { Link } from "gatsby"
// import data from '../../data.json'
import rentCloud from '../../images/rent_cloud.png'

const PropertiesContainer = styled.div`
${theme.flex.centered};
height: 100%;
padding: 2%;
`;

const CloudElement = styled.div`
position: relative;
border-radius: 50%;
padding: 2%;

img {
    opacity: 0;
    ${theme.responsiveImg};
    filter: grayscale(100%);
}

p {
    ${theme.font.indie};
    ${theme.font.size4};
    color: ${theme.colors.primary};
    text-align: center;
    height: 300px;
    width: 300px;
    line-height: 300px;
    opacity: .6;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 5px solid ${theme.colors.primary};
    border-radius: 50%;
    z-index: 1;

    @media not all and (hover: none) {
        &:hover  {
            ${theme.font.size5};
            text-shadow: 0 0 5px #fff;
            color: ${({ hover1 }) => hover1 ? 'skyblue' : 'black'};
            opacity: 1;
            border: none;
        }

        &:hover ~ img {
            opacity: 1;
            transform: rotate(5deg);
            filter: ${({ hover1, hover2 }) => hover2 ? 'grayscale(0%)' : hover1 ? "hue-rotate(260deg)  saturate(9) invert(100%)" : 'grayscale(100%)'};
            transition-duration: 1s;
        }
    }
}
`;


const PropertiesList = () => (
    <>
        <PropertiesContainer>
            <Link as="a" to="/contact">
                <CloudElement>
                    <p>plebs</p>
                    <img src={rentCloud} alt="plebs" />
                </CloudElement>
            </Link>
            <Link as="a" to="/contact">
                <CloudElement hover1>
                    <p >vip</p>
                    <img src={rentCloud} alt="vip" />
                </CloudElement>
            </Link>
            <Link as="a" to="/contact">
                <CloudElement hover2>
                    <p>gift</p>
                    <img src={rentCloud} alt="gift" />
                </CloudElement>
            </Link>
        </PropertiesContainer>
    </>
);

export default PropertiesList;



// {/* <PropertiesContainer>
//             {data.map((item) => (
//                 // <Link to="/product">
//                 // <CloudCard key={item.id}>
//                 <CloudImage key={item.id}>
//                     <CloudTitle titlePosition>
//                         {item.title}
//                     </CloudTitle>
//                         <img src={item.img} alt={item.title} />
//                     <CloudPrice pricePosition>
//                         {item.price} £ PM
//                     </CloudPrice>
//                     </CloudImage>
//                 {/* </CloudCard> */}
// {/* </Link> */ }
// {/* ))} */ }

// {/* </PropertiesContainer> */ }


// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

// /*
//  * This component is built using `gatsby-image` to automatically serve optimized
//  * images with lazy loading and reduced file sizes. The image is loaded using a
//  * `useStaticQuery`, which allows us to load the image from directly within this
//  * component, rather than having to pass the image data down from pages.
//  *
//  * For more information, see the docs:
//  * - `gatsby-image`: https://gatsby.dev/gatsby-image
//  * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
//  */

// const Image = () => {
//     const data = useStaticQuery(graphql`
//     query {
//       placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 300) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)

//     return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
// }

// export default Image


// /**
//  * Layout component that queries for data
//  * with Gatsby's useStaticQuery component
//  *
//  * See: https://www.gatsbyjs.org/docs/use-static-query/
//  */

// import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
// import "./layout.css"

// const Layout = ({ children }) => {
//     const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//     return (
//         <>
//             <Header siteTitle={data.site.siteMetadata.title} />
//             <div
//                 style={{
//                     margin: `0 auto`,
//                     maxWidth: 960,
//                     padding: `0 1.0875rem 1.45rem`,
//                 }}
//             >
//                 <main>{children}</main>
//                 <footer>
//                     © {new Date().getFullYear()}, Built with
//           {` `}
//                     <a href="https://www.gatsbyjs.org">Gatsby</a>
//                 </footer>
//             </div>
//         </>
//     )
// }

// Layout.propTypes = {
//     children: PropTypes.node.isRequired,
// }

// export default Layout