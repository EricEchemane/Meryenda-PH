require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 2900;
const cors = require('cors');

const { authenticateUser } = require('./lib/authentication');
const login = require('./routes_handlers/login');

app.use(express.json());
app.use(cors());

app.get('/', authenticateUser, (req, res) => {
    res.send({
        message: 'Welcome to Meryenda Server',
        author: 'Eric Echemane',
        version: "1.0.0"
    });
});

app.post('/login', login);

app.listen(PORT, () => console.log(`Meryenda Server running on port ${PORT}`));