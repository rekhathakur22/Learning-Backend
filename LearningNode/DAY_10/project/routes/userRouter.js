// external module
const express = require("express");
const userRouter = express.Router();

const homeController = require("../controllers/home");

// from controller
userRouter.get("/", homeController.getHome);

// export
module.exports = userRouter;
