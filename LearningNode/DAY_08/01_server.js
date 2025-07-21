// Core module
const http = require("http");
// external module
const express = require("express");

const app = express();
console.log(app);
const server = http.createServer(app);

server.listen(5000);
