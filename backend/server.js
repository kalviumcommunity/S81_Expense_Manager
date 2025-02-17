const express = require('express');
require('dotenv').config();
const cors=require('cors')
const connection = require('./db/connection');
const app = express();
const port = process.env.PORT; // Make sure it's lowercase 'process'

// Middleware to parse JSON
app.use(express.json());
app.use(cors())

app.get("/", async (req, res) => {
    res.send("hello.....");
});

app.post('/post', (req, res) => {
    const { name, age } = req.body;

    if (!name) {
        return res.status(400).json({ msg: "Please enter your name correctly" });
    }
    if (!age) {
        return res.status(400).json({ msg: "Please enter your age" });
    }

    return res.status(200).json(`{ msg: Your name is ${name} and your age is ${age} }`);
});

app.listen(port, async () => {
    try {
        await connection;
        console.log(`App is running on http://localhost:${port}`);
    } catch (error) {
        console.log(error);
    }
});

module.exports = app;
