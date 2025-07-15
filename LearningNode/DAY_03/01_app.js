// Taking input from user
// Redirecting user request

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head> <title>coding started</title></head>");
    res.write("<body>");
    res.write("<h1>Add your details here</h1>");
    res.write('<form action="/submit-form" method = "POST">');
    res.write(
      '<input type="text" name ="username" placeholder="UserName"></br>'
    );
    res.write('<input type="email" name="email" placeholder="UserEmail"><br>');
    res.write(
      '<input type="text" name="contact-number" placeholder="Contact Number"><br>'
    );
    res.write('<input type="submit" value = "submit">');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else if (
    req.url.toLowerCase() === "/submit-form" &&
    req.method === "POST"
  ) {
    fs.writeFileSync("user.txt", "Rekha Thakur");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }
});

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
