// BUILD YOUR SERVER HERE
const express = require("express");

const server = express();
server.use(express.json());

server.get('/hello', (req, res) => {
    res.status(200).json({ message: "hey there" });
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
