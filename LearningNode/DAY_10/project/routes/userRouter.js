// core module
const path = require("path");

const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "home.html"));
});

module.exports = userRouter;
