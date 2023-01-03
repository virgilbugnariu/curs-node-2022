const {GraphQLNonNull, GraphQLID} = require("graphql");
const studentType = require("../types/studentType");
const models = require("../../models");

module.exports = {
  type: studentType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    }
  },
  resolve: async (_, { id }) => {
    if(!id) {
      return null;
    }

    const studentData = await models.Student.findByPk(id);

    return studentData;
  }
}
