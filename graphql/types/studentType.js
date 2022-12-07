const { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
} = require('graphql');


const studentType = new GraphQLObjectType({
    name: 'Student',
    fields: {
        id: {
            type: GraphQLID,
        },
        firstName: {
            type: GraphQLString,
        },
        lastName: {
            type: GraphQLString,
        }
    }
});

module.exports = studentType;