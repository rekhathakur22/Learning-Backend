// external module
const express = require("express");
const hostRouter = express.Router();

const homeController = require("../controllers/hostController");
hostRouter.get("/add-home", homeController.getAddHome); // if user comes of add-home page
hostRouter.get("/host-home", homeController.getHostHome);
hostRouter.post("/add-home", homeController.postAddHome); // user submit the data
hostRouter.get("/edit-home/:homeId", homeController.getEditHome);
hostRouter.post("/edit-home", homeController.postEditHome);
hostRouter.post("/delete-home/:homeId", homeController.postDeleteHome);
// exporting more then one modules
// at destination destructure this module using
exports.hostRouter = hostRouter;
