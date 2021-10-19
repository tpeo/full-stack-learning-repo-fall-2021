/**
 *  cred.js is a file that loads all credentials (in this case, from environment variables)
 *  and exports an object containing those credentials
 */

const dotenv = require("dotenv");

// Firebase Credentials
var credentials = {
  type: process.env.TYPE,
  project_id: process.env.PROJECT_ID,
  private_key_id: process.env.PRIVATE_KEY_ID,
  private_key: process.env.PRIVATE_KEY,
  client_email: process.env.CLIENT_EMAIL,
  client_id: process.env.CLIENT_ID,
  auth_uri: process.env.AUTH_URI,
  token_uri: process.env.TOKEN_URI,
  auth_provider_x509_cert_url: process.env.CERT_URL,
  client_x509_cert_url: process.env.CLIENT_CERT_URL,
};

exports.credentials = credentials;
