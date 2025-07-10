const http = require("http");

const server = http.createServer((req, res) => {
  //console.log(req.method, req.url, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title>coding started</title></head>");
    res.write("<body><h1> HOME PAGE </h1></body>");
    res.write("</head>");
  } else if (req.url === "/name") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title>coding started</title></head>");
    res.write("<body><h1> Products </h1></body>");
    res.write("</head>");
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title>coding started</title></head>");
    res.write("<body><h1> hello node js</h1></body>");
    res.write("</head>");
  }
  res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
