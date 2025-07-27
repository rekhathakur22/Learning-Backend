// external module
const express = require("express");

// using express routing
const hostRouter = express.Router();

// if user comes of add-home page
hostRouter.get("/add-home", (req, res) => {
  res.render("add-home");
});

// store registered homes
const registeredHome = [];

// user submit the data
hostRouter.post("/add-home", (req, res) => {
  console.log("home registered: ", req.body);
  registeredHome.push(req.body);
  console.log(registeredHome);
  res.render("homeAdded");
});

// exporting more then one modules
// at destination destructure this module using
exports.hostRouter = hostRouter;
exports.registeredHome = registeredHome;
