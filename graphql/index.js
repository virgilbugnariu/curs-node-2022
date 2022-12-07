const { 
    GraphQLSchema,
} = require('graphql');

const queryType = require('./types/queryType')

const schema = new GraphQLSchema({
    query: queryType,
});

module.exports = schema;