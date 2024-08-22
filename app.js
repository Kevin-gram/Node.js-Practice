const express = require("express");
const app = express();
app.listen(3000);
app.get("/", (req, resp) => {
  resp.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", (req, resp) => {
  resp.sendFile("./views/about.html", { root: __dirname });
});
