const calculateSum = require("./sum");

const homePage = (req, res) => {
  if (req.url === "/") {
    res.write(
      `
    <!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
<body>
  <h1>Welcome to home page</h1>
  <a href="/calculator">Calculator</a>
</body>
</html>
    `
    );

    res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.write(`
    <!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
<body>
  <h1>Welcome to Calculator</h1>
  <form action="/calculate-result" method = "POST">
    <input type="number" placeholder="first number" name="first-number">
    <input type="number" placeholder="second number" name="second-number">
    <input type="submit" value= "sum" >
  </form>
</body>
</html>
      `);

    res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    calculateSum(req, res);
  }
};

module.exports = homePage;
