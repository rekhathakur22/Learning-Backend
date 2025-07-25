const path = require("path");
const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-home.html"));
});

hostRouter.post("/add-home", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "homeAdded.html"));
});

module.exports = hostRouter;
