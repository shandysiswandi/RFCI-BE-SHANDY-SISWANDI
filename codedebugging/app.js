const express = require("express");
const redirectUri = require("./src/services/authService");
const { callback } = require("./src/services/authCallbackService");

const config = require("./src/config");

const app = express();

app.get("/", (_, res) => {
  const auth = redirectUri();
  res.redirect(auth);
});

app.get("/oauth-github-callback", (req, res) => {
  return callback(req, res);
});

app.listen(config);
console.log(`App listening on http://localhost:${config.port}`);
