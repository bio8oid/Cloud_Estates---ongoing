/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions

    // page.matchPath is a special key that's used for matching pages
    // only on the client.
    if (page.path.match(/^\/propertiesList2/)) {
        page.matchPath = "/propertiesList2/*"

        // Update the page.
        createPage(page)
    }
    if (page.path.match(/^\/propertyView2/)) {
        page.matchPath = "/propertyView2/*"

        // Update the page.
        createPage(page)
    }
}