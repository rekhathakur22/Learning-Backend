// external module
const express = require("express");
const userRouter = express.Router();

const storeController = require("../controllers/storeController");

// from controller
userRouter.get("/", storeController.getHome);
userRouter.get("/booking", storeController.getBooking);
userRouter.get("/favourite", storeController.getFavourite);

// export
module.exports = userRouter;
