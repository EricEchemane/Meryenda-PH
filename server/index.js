const express = require('express');
const app = express();
const PORT = 2900;
const cors = require('cors');

require('dotenv').config();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send({
        message: 'Welcome to Meryenda Server',
        author: 'Eric Echemane',
        version: "1.0.0"
    });
});

app.listen(PORT, () => console.log(`Meryenda Server running on port ${PORT}`));