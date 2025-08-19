// external module
const express = require("express");
const userRouter = express.Router();

const storeController = require("../controllers/storeController");

// from controller
userRouter.get("/", storeController.getHome);
userRouter.get("/booking", storeController.getBooking);
userRouter.get("/favourite", storeController.getFavourite);
userRouter.post("/favourite", storeController.postAddFavourite);
userRouter.get("/:homeId", storeController.getHomeDetail);
userRouter.post("/delete-favourite/:homeId", storeController.deleteFavourite);

// export
module.exports = userRouter;
