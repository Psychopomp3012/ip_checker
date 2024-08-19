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
    res.send(`
        <h3>1: ${req.socket.remoteAddress}</h3>
        <h3>2: ${req.headers['x-real-ip']}</h3>
        <h3>3: ${req.headers['x-forwarded-for']}</h3>
        <h3>4(cloudfare): ${req.headers['cf-connecting-ip']}</h3>
        <h3>Public IP=> ${req.ip}</h3>
    `);
    
});

app.listen(port, () => {
    console.log(`running on ${port}`);
});