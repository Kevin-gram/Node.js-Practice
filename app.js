const express = require("express");
const app = express();
app.listen(3000);
app.get("/", (req, resp) => {
  resp.send("./views/index.html", { root: __dirname });
});
