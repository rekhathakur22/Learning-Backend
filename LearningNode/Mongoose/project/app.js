const path = require("path");
const mongoose = require("mongoose");

// external module
const express = require("express");

// Local module
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");
const authRouter = require("./routes/authRouter");

const app = express();

// Setting the View Engine ejs:
app.set("view engine", "ejs");
app.set("views", "views"); // Setting the Views Directory:

// it making the static files like accessible
app.use(express.static(path.join(__dirname, "public")));

// parse the body
app.use(express.urlencoded({ extended: true }));

// handling favicon request
app.get("/favicon.ico", (req, res) => res.status(204).end());

// Authetication
app.use(authRouter);
// user page
app.use(userRouter);

// url management
app.use("/host", hostRouter);

// erro page middleware
app.use((req, res, next) => {
  res.render("errorPage");
});

mongoose
  .connect(
    "mongodb+srv://rekha:SoftEng22%4022@cluster0.ugcugtj.mongodb.net/roomly?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
