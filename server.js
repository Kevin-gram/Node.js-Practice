const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect("/about");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.listen(3000, (req, resp) => {
  console.log("sever is listning on port 3000");
});
