const path = require("path");
// external module

const express = require("express");

// Local module

const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

const app = express();

// middlewares
app.use(userRouter);
app.use("/host", hostRouter);
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  const resolvePath = path.join(__dirname, "views", "errorPage.html");
  res.sendFile(resolvePath);
});

app.listen(3000);
