const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const pathLog = __dirname + "/server.log";
fs.unlinkSync(pathLog);
const log_file = fs.createWriteStream(pathLog, { flags: "w" });

const port = 3000;
const app = express();

const msgFunc = (req) =>
  `[${new Date().toISOString()}] Success: ${
    req.method
  } http://192.168.1.30/ {"counter": ${
    req.body.counter
  }, "X-RANDOM": "${req.header("X-RANDOM")}"} \n`;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, _, next) => {
  console.log(msgFunc(req));

  next();
});

app.post("/", (req, res) => {
  log_file.write(msgFunc(req));

  res.status(201).json({
    status: true,
  });
});

app.listen(port, () => {
  console.log(`simple client server app listening at http://localhost:${port}`);
});
