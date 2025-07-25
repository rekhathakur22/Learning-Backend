// Request Parsing using body_parser
// it is a old method currently all features of body parser is available on express js

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Home Page</title>
</head>
<body>
  <h1>Welcome to Our Website!</h1>
  <p>We are happy to see you here 😊</p>
  <a href="/contact-us">Contact Us</a>
</body>
</html>
    `);
});

app.get("/contact-us", (req, res) => {
  res.send(
    `
    <!DOCTYPE html>
<html lang="en">
<head>
 
  <title>Contact-us</title>
</head>
<body>
  <form action="/contact-us" method="POST">
    <input type="text" name="username" placeholder="Enter Your name">
    <br>
     <input type="email" name="email" placeholder="Enter Your email">
    <br>
     <input type="text" name="mobile" placeholder="Enter Your contact-number">
    <br>
     <button>Submit</button>
  </form>
</body>
</html>
    `
  );

  app.use(bodyParser.urlencoded());

  app.post("/contact-us", (req, res) => {
    console.log("after parsing", req.body);
    res.send("<h1>request submitted successfully </h1>");
  });
});
app.listen(4000);
