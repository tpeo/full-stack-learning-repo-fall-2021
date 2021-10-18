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

// "Fake" database (json object)
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

/**
 * Routes Section
 */

app.get("/", (req, res) => {
  console.log(`Recieved a GET Request at ${Date.now()}`);
  return res.json({ msg: "Recieved a GET Request" });
});

// Get All Users
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
  console.log(users[user_id]);

  // Checks if user id exists within the app
  if (users[user_id] == undefined) {
    console.log(`${user_id} not found!`);
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
  //TODO
});
// Deleting a User
app.delete("/user/:user_id", (req, res) => {
  //TODO
});
