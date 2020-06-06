const express = require("express");
const cors = require('cors');
const config = require('./config');
const graphqlHTTP = require('express-graphql');
const app = express();
const mongoose = require("mongoose");
const graphQlSchema = require('./graphql/schema/schema');
const graphQlResolvers = require('./graphql/resolvers/propertyResolver');

app.use(cors());

const {
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema
} = require("graphql");

mongoose.connect(config.DB, { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.use("/graphql", graphqlHTTP({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
}));

app.listen(config.PORT, function () {
    console.log("Server is running on Port: " + config.PORT);
});