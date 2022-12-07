const express = require('express');
const jwt = require('jsonwebtoken');
const Students = require('./controllers/Students');
const JWTMiddleware = require('./middlewares/JWTMiddleware');
const adminOnlyGuard = require('./middlewares/adminOnlyGuard');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express();

const schema = require('./graphql');

const JWT_KEY = '1158659639IFIUHSDIUSDF';

app.use(express.json());

const studentsController = new Students();

app.post('/login', async (request, response) => {
    const { username, password } = request.body;
    if(username === 'virgil' && password === 'admin123') {
        const token = jwt.sign({ role: 'ADMIN', userID: 0 }, JWT_KEY);

        response.send(JSON.stringify({
            token,
        }));
    } else if(username === 'adrian' && password === 'student123') {
        const token = jwt.sign({ role: 'STUDENT', userID: 1 }, JWT_KEY);

        response.send(JSON.stringify({
            token,
        }));
    }  else {
        response.status(400).send(JSON.stringify({
            token: null,
        }));
    }

    response.send();
});

// var schema = buildSchema(`
//   type Query {
//     students: [Student]
//     student(id: ID!): Student
//   }

//   type Mutation {
//     createStudent(firstName: String!, lastName: String!): Student
//     updateStudent(id: ID!, firstName: String, lastName: String): Student
//     deleteStudent(id: ID!): Boolean
//   }

//   type Student {
//     id: ID!
//     firstName: String
//     lastName: String
//   }
// `);

var root = {
    // students: () => studentsController.getAll(),

    // student: ({ id }) => studentsController.get(id),

    createStudent: ({
        firstName,
        lastName
    }) => studentsController.create(firstName, lastName),
    
    updateStudent: ({
        id,
        firstName,
        lastName
    }) => studentsController.update(id, firstName, lastName),
    
    deleteStudent: ({ id }) => studentsController.delete(id) 
  };


app.post('/graphql', graphqlHTTP({
    schema: schema,
}));

app.listen(8080);