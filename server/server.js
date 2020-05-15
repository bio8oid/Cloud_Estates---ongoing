// const express = require("express");
// const bodyParser = require('body-parser');
// const bodyParser = require('body-parser-graphql');
// const cors = require('cors');
// const graphqlHTTP = require('express-graphql');
// const { buildSchema } = require('graphql');
const config = require('./config');
// const Property = require('./schema');
// const graphQlResolvers  = require('./schema');
// const graphQlResolvers  = require('./schema');
// var mongoose = require("mongoose");
// const helmet = require('helmet');
// const path = require('path');

// const app = express();

// import routes
// const router = require('./routes/product.route');

// app.use(cors());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.graphql());
// app.use('/api', router);
// app.use(helmet());

// send static files to client
// app.use(express.static(path.join(__dirname, '/../client/build')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/..client/build/index.html'));
// });

// connect to database
// mongoose.connect(config.DB, { useUnifiedTopology: true, useNewUrlParser: true });

// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log('MongoDB database connection established successfully');
// });

// connection.on('error', (err) => console.log('Error ' + err));

// app.use('/api', graphqlHTTP({ 
//     schema: buildSchema (`
//         type RootQuery {
//             events: [String!]!
//         }
//         schema {
//             query: RootQuery
//         }
//         `),
//         rootValue: {
//             events: () => {
//                 return ['kazik washing his head', 'Kate washing feet', 'I wonder why?']
//             },
//         },
//         api: true
//     }));




// app.use('/api', graphqlHTTP({ schema: require('./schema.js'), api: true}));






// app.listen(config.PORT, function () {
//     console.log("Server is running on Port: " + config.PORT);

// });




const express = require("express");
const graphqlHTTP = require('express-graphql');

const mongoose = require("mongoose");

const {
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema
} = require("graphql");

const graphQlSchema = require('./graphql/schema/schema');
const graphQlResolvers = require('./graphql/resolvers/propertyResolver');

var app = express();

mongoose.connect(config.DB, { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// const PropertyModel = mongoose.model("property", {
//     title: String,
//     desc: String
// });

// const PropertyType = new GraphQLObjectType({
//     name: "Property",
//     fields: {
//         id: { type: GraphQLID },
//         title: { type: GraphQLString },
//         desc: { type: GraphQLString }
//     }
// });


// const schema = new GraphQLSchema({
//     query: new GraphQLObjectType({
//         name: "Query",
//         fields: {
//             properties: {
//                 type: GraphQLList(PropertyType),
//                 resolve: (root, args, context, info) => {
//                     return PropertyModel.find().exec();
//                 }
//             },
//             property: {
//                 type: PropertyType,
//                 args: {
//                     id: { type: GraphQLNonNull(GraphQLID) }
//                 },
//                 resolve: (root, args, context, info) => {
//                     return PropertyModel.findById(args.id).exec();
//                 }
//             }
//         }
//     }),
// });

// app.use("/graphql", graphqlHTTP({
//     schema: schema,
//     graphiql: true
// }));

app.use("/graphql", graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
}));

app.listen(config.PORT, function () {
    console.log("Server is running on Port: " + config.PORT);
});









/// --------------- testing database -------------


// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// const uri = "mongodb+srv://bio8oid:biooid@bio8oid-idk43.mongodb.net/test?retryWrites=true&w=majority"

// MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {

//     assert.equal(null, err);
//     const db = client.db("cloud_properties");
//     var productsData = db.collection('properties').find({});

//     readProducts = doc => {
//         console.log(doc);
//     }

//     productsData.forEach(readProducts);
//     client.close();
// })