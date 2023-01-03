const {
    GraphQLObjectType,
} = require('graphql');

const studentsQuery = require('./queries/studentsQuery');
const studentQuery = require('./queries/studentQuery');
const groupQuery = require('./queries/groupQuery');

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
      students: studentsQuery,
      student: studentQuery,
      group: groupQuery,
    }
  });

module.exports = queryType;
