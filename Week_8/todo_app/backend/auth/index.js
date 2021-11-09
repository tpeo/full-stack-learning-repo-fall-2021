const firebase = require("../firebase/cred");
const jwt = require("jwt-decode");
const { default: jwtDecode } = require("jwt-decode");

function authMiddleware(req, res, next) {
  const headerToken = req.headers.authorization;
  if (!headerToken) {
    return res.status(401).send({ message: "No token provided" });
  }

  if (headerToken && headerToken.split(" ")[0] !== "Bearer") {
    res.status(401).send({ message: "Invalid token" });
  }

  const token = headerToken.split(" ")[1];
  firebase
    .auth()
    .verifyIdToken(token)
    .then(() => {
      // Send some important metadata to each call
      req.username = jwtDecode(token).name;
      next();
    })
    .catch(() => res.status(403).send({ msg: "Could not authorize" }));
}

module.exports = authMiddleware;
