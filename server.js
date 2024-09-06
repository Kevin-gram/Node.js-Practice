const http = require("http");
const fs = require("fs");
const _ = require("lodash");
const server = http.createServer((req, resp) => {
  resp.setHeader("Content-Type", "text/html");
  const num = _.random();
  console.log(num);
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      resp.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      resp.statusCode = 200;
      break;
    case "/about-me":
      resp.statusCode = 301;
      resp.setHeader("Location", "/about");
      resp.end();
      break;
    default:
      path += "404.html";
      resp.statusCode = 404;
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
