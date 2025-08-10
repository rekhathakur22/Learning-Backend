// core module import
const path = require("path");

// external module
const express = require("express");

// Local module
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");

const app = express();

// Setting the View Engine ejs:
app.set("view engine", "ejs");
app.set("views", "views"); // Setting the Views Directory:

// it making the static files like accessible
app.use(express.static(path.join(__dirname, "public")));
// parse the body
app.use(express.urlencoded({ extended: true }));

// middlewares

// user page
app.use(userRouter);

// url management
app.use("/host", hostRouter);

// erro page middleware
app.use((req, res, next) => {
  res.render("errorPage");
});

// server creation
app.listen(3000);
