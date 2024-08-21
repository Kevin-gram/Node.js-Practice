const http = require("http");
const fs = require("fs");
const server = http.createServer((req, resp) => {
  resp.setHeader("Content-Type", "text/html");
  fs.readFile("./views/index.html", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      resp.write(data);
      resp.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for the request on the port 3000");
});
