const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const dotenv = require("dotenv").config();
var credentials = require("./cred").credentials;

// Connect to firebase and use firestore
admin.initializeApp({
  credential: admin.credential.cert(credentials),
  databaseURL: "https://delta-af605-default-rtdb.firebaseio.com",
});
const db = admin.firestore();

// Define app and port
const app = express();
const port = process.env.PORT;

// Middleware
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

// Get specific user by user_id
app.get("/users/:user_id", async (req, res) => {
  const rec = req.params.user_id;
  const snapshot = await db.collection("users").doc(rec).get();
  if (!snapshot.exists) {
    res.json({ msg: "User does not exist", data: {} });
  }
  return res.json({ msg: "Success", data: snapshot.data() });
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

app.listen(port, () => console.log(`Listening on Port ${port}!`));
