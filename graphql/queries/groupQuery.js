const { GraphQLNonNull, GraphQLID} = require("graphql");
const models = require("../../models");
const groupType = require("../types/groupType");

module.exports = {
  type: groupType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    }
  },
  resolve: async (_, { id }) => {
    if(!id) {
      return null;
    }

    return models.Group.findByPk(id);
  }
}
