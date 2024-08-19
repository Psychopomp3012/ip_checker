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
    res.send("1:" + req.socket.remoteAddress + "\n2:" + req.headers['x-real-ip'] + "\n3:" + req.headers['x-forwarded-for'] + "\n4(cloudfare):" + req.headers['cf-connecting-ip']);
    res.send(`Public IP=> ${req.ip}`);
});

app.listen(port, () => {
    console.log(`running on ${port}`);
});