// BUILD YOUR SERVER HERE
//import 
const express = require("express");
const User = require('./users/model')
//instance of express app
const server = express();
//global middleware-boilerplate// teaches expr3ess to read JSON
server.use(express.json());

//GET 
server.get('/', (req, res) => {
    res.status(200).json({ message: "pauline is here" });
})

//| POST   | /api/users 
server.post('/api/users', (req, res) => {
    const user = req.body
    if (!user.name || !user.bio) {
        res.status(422).json({
            message: 'name and bio required'
        })
    } else {
        User.insert(user)
        .then(stuff => {

        })
        .catch(err => {
            res.status(500).json({
                message: 'error getting users',
                err: err.message,
                stack: err.stack,
            })
        })
    }
})

// | GET    | /api/users 
server.get("/api/users", (req, res) => {

	res.json("Returns an array users.");
});

//| GET    | /api/users/:id 
server.get("/api/users/:id", (req, res) => {
	res.json("Returns the user object with the specified `id`.");
});


//| DELETE | /api/users/:id
server.delete("/api/users/:id", (req, res) => {
	res.json(
		"Removes the user with the specified `id` and returns the deleted user."
	);
});


//| PUT    | /api/users/:id

server.put("/api/users/:id", (req, res) => {
	res.json(
		"Updates the user with the specified `id` using data from the `request body`. Returns the modified user"
	);
});

module.exports = server; // EXPORT YOUR SERVER instead of {}
