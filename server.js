console.log("server js works");
const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');

app.use(express.json());

app.listen(3000);
let user = [
    {
        username: 'renrevo',
        password: 'Q1w2e3r4#',
    },
    {
        username: 'punnu',
        password: 'Q1w2e3r4#',
    }
]
app.get('/auth', (request, response) => {
    response.json(user)
});