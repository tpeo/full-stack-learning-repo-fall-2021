//Imports
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

// Define app and port
const app = express();
const port = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
  console.log(`Function ${req.method} ${req.url} was fired at ${Date.now()}`);
  next();
}); // Logger Function for Debugging, demonstrates middleware use

// "Fake" database
let users = {
  0: {
    id: "0",
    name: "jonathan",
    age: 21,
  },
};

// Initialize the server on Port specified by env variable
app.listen(process.env.PORT, () =>
  console.log(`Listening on Port ${process.env.PORT}!`)
);

// Routes and Requests
app.get("/", (req, res) => {
  return res.json({ msg: "Recieved a GET Request" });
});

// Get all Users
app.get("/user", (req, res) => {
  const user_arr = [];
  for (var key in users) {
    user_arr.push(users[key]);
  }
  return res.json({ msg: "Success", data: user_arr });
});

// Get Specific User
app.get("/user/:user_id", (req, res) => {
  // Get user ID From Query Parameters
  const user_id = req.params.user_id;
  // Checks if user id exists within the app
  if (users[user_id] == undefined) {
    return res.json({ msg: "Error: user id not found", data: {} });
  }
  return res.json({ msg: "Success", data: users[user_id] });
});

// Creating a user
app.post("/user", (req, res) => {
  const body = req.body;
  // Check if all valid fields exist
  if (body.age == undefined && body.name == undefined) {
    return res.json({
      msg: "Error: age or name not defined in request",
      data: {},
    });
  }
  // Checks if user exists
  let exists = false;
  for (var key in users) {
    if (users[key]["name"] == body.name) {
      exists = true;
    }
  }
  if (exists) {
    return res.json({ msg: "Error: name already exists", data: {} });
  }

  // Create new user object
  const user_id = Object.keys(users).length;
  const user_obj = { id: user_id, name: body.name, age: body.age };

  // Add user to our database
  users[user_id] = user_obj;
  return res.json({ msg: "Success", data: user_obj });
});

// Updating a User
app.put("/user/:user_id", (req, res) => {
  const body = req.body;
  const user_id = req.params.user_id;
  // Check if all valid fields exist
  if (body.age == undefined && body.name == undefined) {
    return res.status(400).json({
      msg: "Error: age or name not defined in request",
      data: {},
    });
  }
  // Checks if user exists
  let exists = user_id in users ? true : false;
  if (!exists) {
    return res
      .status(404)
      .json({ msg: "Error: user does not exist", data: {} });
  }
  // Update User Information
  const user_obj = { id: user_id, name: body.name, age: body.age };
  users[user_id] = user_obj;

  // Heres an example of sending a status code
  return res.json({ msg: "Success" });
});

// Deleting a User
app.delete("/user/:user_id", (req, res) => {
  const user_id = req.params.user_id;
  if (users[user_id] == undefined) {
    console.log(`${user_id} not found!`);
    return res.json({ msg: "Error: user id not found", data: {} });
  }
  // Delete Object
  const user_obj = users[user_id];
  delete users[user_id];

  return res.json({ msg: "Success", data: user_obj });
});
