/*
Buffering Chunks-> A chunk is a small piece of data sent or received over a stream.

Buffering means temporarily storing chunks until:

All data has been received

You're ready to process the data
*/

/*
What is Parsing?
Parsing is the process of analyzing and converting data (usually a string) into a more usable structure (like an object, tree, array, or syntax structure).
*/

/*
URLSearchParams()->
1. it is a constructor that return instance of a class 
2. there are different method by which we can access keys and values 
3. .get(), .delete(--,--), .append()
4. it is used for decode the encoded data in form of urls 
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
    // Buffering Chuncks
    const body = [];
    req.on("data", (chunck) => {
      console.log(chunck);
      body.push(chunck);
    });
    // data recieved by post method is encoded data we have to decode it using parsing
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      const params = new URLSearchParams(fullBody); // break all the parameters into key value pairs
      console.log(params);

      const jsObject = {}; // initialize empty object
      for (const [key, value] of params) {
        jsObject[key] = value;
      }

      // file writing
      fs.writeFileSync("user.txt", JSON.stringify(jsObject));

      console.log(fullBody);
      console.log(jsObject);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    res.end();
  }
});

const PORT = 3002;
server.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
