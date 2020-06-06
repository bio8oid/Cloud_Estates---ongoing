module.exports = {
  siteMetadata: {
    title: `Cloud Estates`,
    description: `Cloud estates. Cloud properties market related website`,
    author: `bio8oid`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Gloria Hallelujah\:400,700`,
          `Architects Daughter\:400,700`,
          `Indie Flower\:400,700`,
          `Patrick Hand\:400,700`,
          `Sriracha\:400,700`,
          `Handlee\:400,700`,
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        name: `icons`,
        path: `${__dirname}/src/icons`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}