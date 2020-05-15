const { buildSchema } = require('graphql');

module.exports = buildSchema(`

type Property {
  id: ID!
  title: String!
  desc: String!
}
type RootQuery {
    properties: [Property!]
}
schema {
    query: RootQuery
}
`);