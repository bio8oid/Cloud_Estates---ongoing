const { buildSchema } = require('graphql');

module.exports = buildSchema(`

type Property {
    id: Float!
    tag: String!,
    title: String!,
    desc: String!,
    price: Float!,
    location: String!,
    availability: String!,
    deposit: String!,
    commission: String!,
    factor: String!,
    img: String!
}
type RootQuery {
    properties: [Property!]!
}
schema {
    query: RootQuery
}
`);