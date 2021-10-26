const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const dotenv = require("dotenv").config();
const credentials = require("./cred.json");

// Connect to firebase and use firestore
admin.initializeApp({
  credential: admin.credential.cert(credentials),
  databaseURL: "YOUR_DATABASE_URL_HERE",
});

// Intialize firestore instance
const db = admin.firestore();

// Define app and port
const app = express();
const port = process.env.PORT;

// More Middlware
app.use(cors());
app.use(express.json());

// Get all Users
app.get("/users", async (req, res) => {
  const snapshot = await db.collection("users").get();
  const users = [];
  snapshot.forEach((doc) => {
    users.push(doc.data());
  });
  return res.json({ msg: "Success", data: users });
});

// Create user
app.post("/users", async (req, res) => {
  const body = req.body;
  console.log(body);
  const docRef = await db.collection("users").doc(body.name);
  const exists = await docRef.get().then((doc) => {
    if (doc.exists) {
      return true;
    } else {
      return false;
    }
  });

  if (exists) {
    return res.send({ msg: "Error, user already exists" });
  } else {
    const data = await docRef.set(req.body);
    return res.send({ msg: "Success", data: data });
  }
});

// TODO: Create query for users that are older than a given value
app.get("/users/:age", async (req, res) => {
  const age = parseInt(req.params.age);
  // Invalid Parameters
  if (isNaN(age)) {
    return res.status(400).json({ msg: "Invalid Input" });
  }

  // Verify the validity of the age parameter
  const snapshot = await db.collection("users").where("age", ">=", age).get();
  const users = [];

  // Iterate Through each element
  snapshot.forEach((doc) => {
    users.push(doc.data());
  });

  return res.json({ msg: "Success", data: users });
});

// OPTIONAL: Write a function to delete users from the database
// OPTIONAL: Write a function to update user information

app.listen(port, () => console.log(`Listening on Port ${port}!`));
