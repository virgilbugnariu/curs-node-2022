const { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLList,
} = require('graphql');


const Students = require('../../controllers/Students');
const studentsController = new Students();

const studentType = require('./studentType');

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
      students: {
        type: new GraphQLList(studentType),
        resolve: () => {
            return studentsController.getAll()
        }
      },
      student: {
        type: studentType,
        args: {
            id: {
                type: GraphQLID,
            }
        },
        resolve: (_, args) => {
            const { id } = args;
            return studentsController.get(id);
        }
      }
    }
  });

module.exports = queryType;