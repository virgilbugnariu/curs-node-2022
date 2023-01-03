const {
  GraphQLNonNull,
  GraphQLString
} = require("graphql");
const studentType = require("../types/studentType");
const createStudentResolver = require('../resolvers/createStudentResolver');

module.exports = {
  type: studentType,
  args: {
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: createStudentResolver,
}
