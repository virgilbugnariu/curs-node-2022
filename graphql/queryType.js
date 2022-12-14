const { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');

const models = require('../models');

const studentType = require('./types/studentType');

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
      students: {
        type: new GraphQLList(studentType),
        resolve: () => {
          return models.Student.findAll();
        }
      },
      student: {
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
    }
  });

module.exports = queryType;