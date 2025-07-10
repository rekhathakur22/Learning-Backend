const http = require("http");

// function requestListner(req,res){
//   console.log(req);
// }

// http.createServer(requestListner);

/*http.createServer() returns an object of class http.Server, which represents your HTTP server — allowing you to handle requests and start listening on ports.
 */

const server = http.createServer((req, res) => {
  console.log(req);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
