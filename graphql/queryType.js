const { 
    GraphQLObjectType,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');


const Students = require('../controllers/Students');
const studentsController = new Students();

const studentType = require('./types/studentType');

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
                type: new GraphQLNonNull(GraphQLID),
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