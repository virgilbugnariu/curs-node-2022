const express = require('express');
const JWTMiddleware = require('./middlewares/JWTMiddleware');
const { graphqlHTTP } = require('express-graphql');
const app = express();

const schema = require('./graphql');

app.use(express.json());

app.post('/graphql', JWTMiddleware, graphqlHTTP({
    schema: schema,
}));

app.listen(8080);