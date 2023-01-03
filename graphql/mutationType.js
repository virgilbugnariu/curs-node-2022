const {
    GraphQLObjectType,
} = require('graphql');

const createStudentMutation = require('./mutations/createStudentMutation');
const updateStudentMutation = require('./mutations/updateStudentMutation');
const deleteStudentMutation = require('./mutations/deleteStudentMutation');
const loginMutation = require('./mutations/loginMutation');

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createStudent: createStudentMutation,
        updateStudent: updateStudentMutation,
        deleteStudent: deleteStudentMutation,
        login: loginMutation,
    }
});

module.exports = mutationType;
