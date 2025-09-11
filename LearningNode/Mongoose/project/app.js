const path = require("path");
const mongoose = require("mongoose");

// external module
const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const DBpath =
  "mongodb+srv://rekha:SoftEng22%4022@cluster0.ugcugtj.mongodb.net/roomly?retryWrites=true&w=majority&appName=Cluster0";

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
// mongodb store
const store = new MongoDBStore({
  uri: DBpath,
  collection: "sessions",
});
// handling session
app.use(
  session({
    secret: "SomeRandomSecretKey",
    resave: false,
    saveUninitialized: true,
    store: store,
  })
);

// handling cookies
app.use((req, res, next) => {
  req.isLoggedIn = req.session.isLoggedIn;
  next();
});

// Authetication
app.use(authRouter);
// user page
app.use(userRouter);

// url management
app.use("/host", (req, res, next) => {
  if (!req.isLoggedIn) {
    return res.redirect("/login");
  }
  next(); // next() will move to next middleware
});
app.use("/host", hostRouter);

// erro page middleware
app.use((req, res, next) => {
  res.render("errorPage", {
    isLoggedIn: req.isLoggedIn,
  });
});

mongoose
  .connect(DBpath)
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
