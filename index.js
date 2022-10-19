const express = require('express');
const jwt = require('jsonwebtoken');
const Students = require('./controllers/Students');
const JWTMiddleware = require('./middlewares/JWTMiddleware');
const adminOnlyGuard = require('./middlewares/adminOnlyGuard');

const app = express();

const JWT_KEY = '1158659639IFIUHSDIUSDF';

app.use(express.json());

const studentsController = new Students();

app.get('/students', (request, response) => {
    studentsController.getAll(request, response);
});

app.get('/students/:id', (request, response) => {
    studentsController.get(request, response);
});

app.post('/students', JWTMiddleware, adminOnlyGuard, (request, response) => {
    studentsController.create(request, response);
});

app.delete('/students/:id', (request, response) => {
    studentsController.delete(request, response);
});

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

app.listen(8080);