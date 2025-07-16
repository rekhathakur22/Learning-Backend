const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(
      `
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Myntra</title>
</head>
<body>
  <head>
    <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/men">Men</a></li>
    <li><a href="/women">women</a></li>
    <li><a href="/cart">Cart</a></li>
    <li><a href="/kids">kids</a></li>
  </ul>
  </head>
</body>
</html>
      `
    );
    return res.end();
  } else if (req.url === "/men") {
    res.write("<h1>Welcome to MEN Section</h1>");
    return res.end();
  } else if (req.url === "/women") {
    res.write("<h1>Welcome to Women Section</h1>");
    return res.end();
  } else if (req.url === "/kids") {
    res.write("<h1>Welcome to kids Section</h1>");
    return res.end();
  } else if (req.url === "/cart") {
    res.write("<h1>welcome to cart</h1>");
    return res.end();
  }
  res.end();
});

server.listen(3003);
