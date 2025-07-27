// external module
const express = require("express");

// local module
const { registeredHome } = require("./hostRouter");

// use express router
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  console.log("at home page:", registeredHome);
  res.render("home", { registeredHome });
});

// export
module.exports = userRouter;
