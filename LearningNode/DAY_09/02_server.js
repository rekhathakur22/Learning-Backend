const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("first middleware", req.url);
  next();
});

app.use((req, res, next) => {
  console.log("second middleware", req.method);
  next();
});

// app.use((req, res, next) => {
//   console.log("third middleware");
//   res.send(`<h1>welcome to middleware world</h1>`);
//   next();
// });

app.get("/", (req, res, next) => {
  res.send("<h1>Welcome to home page</h1>");
});

app.get("/contact-us", (req, res, next) => {
  res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <title>Contact us</title>
</head>
<body>
  <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="enter the name">
    <input type="text" name="Contact" placeholder="enter the contact number">
    <button>submit</button>
  </form>
</body>
</html>
    `);
});

app.post("/contact-us", (req, res, next) => {
  res.send("<h1>massage recieved succesfully</h1>");
});

app.listen(5000);
