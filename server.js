const http = require("http");
const fs = require("fs");

const server = http.createServer((req, resp) => {
  resp.setHeader("Content-Type", "text/html");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    default:
      path += "404.html";
      break;
  }

  fs.readFile(path, (error, data) => {
    if (error) {
      console.log(error);
      resp.end();
    } else {
      resp.write(data);
      resp.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for the request on the port 3000");
});
