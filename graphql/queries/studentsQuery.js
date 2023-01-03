const {GraphQLList} = require("graphql");
const studentType = require("../types/studentType");
const models = require("../../models");

module.exports = {
  type: new GraphQLList(studentType),
  resolve: () => {
    return models.Student.findAll();
  }
}
