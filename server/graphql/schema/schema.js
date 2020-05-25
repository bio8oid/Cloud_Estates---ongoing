const { buildSchema } = require('graphql');

module.exports = buildSchema(`

type Property {
    id: String!
    tag: String!
    title: String!
    desc: String!
    price: Float!
    location: String!
    availability: String!
    deposit: String!
    commission: String!
    factor: String!
    img: [String!]
}

input PropertyInput {
    id: Int!
    tag: String!
    title: String!
    desc: String!
    price: Float!
    location: String!
    availability: String!
    deposit: String!
    commission: String!
    factor: String!
    img: String!
}

type RootQuery {
    properties(filter: String): [Property!]!
}

type RootMutation {
    createProperty(propertyInput: PropertyInput): Property
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);




/// ===== second =========



// const Property = require('../../models/propertyModel');
// // var graphql = require('graphql');

// const graphql = {
//     GraphQLID,
//     GraphQLString,
//     GraphQLList,
//     GraphQLNonNull,
//     GraphQLObjectType,
//     GraphQLSchema
// } = require("graphql");

//  TodoType = new graphql.GraphQLObjectType({
//     name: 'property',
//     fields: function () {
//         return {

//             id: {
//                 type: graphql.GraphQLID
//             },
//             tag: {
//                 type: graphql.GraphQLString
//             },
//             title: {
//                 type: graphql.GraphQLString
//             },
//             desc: {
//                 type: graphql.GraphQLString
//             },
//             price: {
//                 type: graphql.GraphQLInt
//             },
//             location: {
//                 type: graphql.GraphQLString
//             },
//             availability: {
//                 type: graphql.GraphQLString
//             },
//             deposit: {
//                 type: graphql.GraphQLString
//             },
//             commission: {
//                 type: graphql.GraphQLString
//             },
//             factor: {
//                 type: graphql.GraphQLString
//             },
//             img: {
//                 type: graphql.GraphQLString
//             }
//         }
//     }
// });

//  queryType = new graphql.GraphQLObjectType({
//     name: 'Query',
//     fields: function () {
//         return {
//             properties: {
//                 type: new graphql.GraphQLList(TodoType),
//                 resolve: () => {
//                     return new Promise((resolve, reject) => {
//                         Property.find((err, properties) => {
//                             if (err) reject(err)
//                             else resolve(properties)
//                         });
//                     });
//                 }
//             }
//         }
//     }
// });

//  MutationAdd = {
//     type: TodoType,
//     description: 'Add property',
//     args: {
//         title: {
//             name: 'Property title',
//             type: new GraphQLNonNull(GraphQLString)
//         }
//     },
//     args: {
//         tag: {
//             name: 'Property title',
//             type: new GraphQLNonNull(GraphQLString)
//         }
//     },
//     resolve: (root, args) => {
//         var property = new Property({
//             title: args.title,
//             tag: args.tag
//         })
//         property.id = property._id
//         return new Promise((resolve, reject) => {
//             property.save(function (err) {
//                 if (err) reject(err)
//                 else resolve(property)
//             })
//         })
//     }
// }

// var MutationType = new GraphQLObjectType({
//     name: 'Mutation',
//     fields: {
//         add: MutationAdd
//     }
// });


// module.exports = new graphql.GraphQLSchema({
//     query: queryType,
//     mutation: MutationType
// });