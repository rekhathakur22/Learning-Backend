// Reading chuncks

// events -> Every action on a computer is an event, like when a connection is made or a file is opened.

/* 
.on() ->
.on() is a method provided by Node.js to listen for events.

It is used with any object that inherits from EventEmitter, like streams, servers, sockets, etc.
*/

/*
Common Readable Stream Events:
Event	Description
'open'->	File descriptor successfully opened
'data'->	A chunk of data is available
'end'	-> No more data to be read
'error'->	An error occurred while reading the file
'close'	->Stream has been closed
 */

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
    // new
    req.on("data", (chunck) => {
      console.log(chunck);
    });

    // new
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
