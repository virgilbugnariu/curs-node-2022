const {
  GraphQLNonNull,
  GraphQLString, GraphQLID, GraphQLInt
} = require("graphql");
const studentType = require("../types/studentType");
const updateStudentResolver = require('../resolvers/updateStudentResolver');

module.exports = {
  type: studentType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    groupId: {
      type: GraphQLInt,
    }
  },
  resolve: updateStudentResolver,
}
