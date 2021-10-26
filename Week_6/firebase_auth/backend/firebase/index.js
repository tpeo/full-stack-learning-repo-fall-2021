const firebase = require("firebase-admin");
const credentials = require("./cred.json");

firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
  databaseURL: "https://<yourproject>.firebaseio.com",
});

module.exports = firebase;
