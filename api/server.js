// BUILD YOUR SERVER HERE
//import 
const express = require("express");
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
    res.json(
			"creates a user using the information sent inside the `request body`."
		);
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
