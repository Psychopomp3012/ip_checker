const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()

const port = process.env.PORT;

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`IP=> ${req.ip}`);
});

app.listen(port, () => {
    console.log(`running on ${port}`);
});