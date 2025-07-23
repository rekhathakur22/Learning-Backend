const http = require("http");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log(req.url);
  console.log(req.method);
  res.send(" <h1>hyy</h1>");
  next();
});

const server = http.createServer(app);

server.listen(5000);
