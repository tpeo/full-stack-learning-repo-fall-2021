const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const dotenv = require("dotenv").config();
const authMiddleware = require("./auth/index");
const uuid = require("uuid");

// Intialize firestore instance
const db = admin.firestore();

// Define app and port
const app = express();
const port = process.env.PORT;

// More Middlware
app.use(cors());
app.use(express.json());

// Use Authentication for all Routes
app.use("/", authMiddleware);

// Call to Check if User is Valid
app.get("/auth", authMiddleware, (req, res) => {
  return res.json({ msg: "Success" });
});

/**
 * Section on Todo Database
 */

// GET all TODOS: return a list of todos
app.get("/todos", async (req, res) => {
  const username = req.username;
  const snapshot = await db.collection(username).get();
  const todos = [];
  snapshot.forEach((doc) => {
    todos.push(doc.data());
  });
  return res.json({ msg: "Success", data: todos });
});

// Create a TODO: returns a new todo object
app.post("/todos", async (req, res) => {
  const username = req.username;
  const description = req.body.description;
  if (!description) {
    return res.json({ msg: "Description not found" });
  }

  // Create unique identifier for the todo item
  const id = uuid.v1();

  // Create the todo object, status represents completion of todo
  const todo = { description: description, status: false, id: id };

  // Add the entry to the database
  const docRef = await db.collection(username).doc(id);
  docRef.set(todo);

  return res.json({ msg: "Success", data: todo });
});

// Toggle a Todo: returns the id of the todo toggled
app.delete("/todos", async (req, res) => {
  const username = req.username;
  const id = req.body.id;
  const snapshot = await db.collection(username).doc(id).get();
  const todo = snapshot.data();

  // Toggle the TODO to the opposite status
  todo["status"] = !todo.status;
  const snapshot2 = await db.collection(username).doc(id);
  snapshot2.set(todo);

  return res.json({ msg: "Success", data: { id: id } });
});

app.listen(port, () => console.log(`Listening on Port ${port}!`));
