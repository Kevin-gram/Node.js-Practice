const http = require("http");
const server = http.createServer((req, resp) => {
  console.log("your server is being created");
});
server.listen(3000, "localhost", () => {
  console.log("listening for the request on the port 3000");
});
