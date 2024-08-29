const express = require("express");
const app = express();
const mongoose = require("mongoose");

const dbUri = "mongodb+srv://Nodejs:chico1234@nodejs.vbkfa.mongodb.net/";
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
app.set("view engine", "ejs");
app.listen(3000);
app.get("/", (req, resp) => {
  resp.render("index");
});
app.get("/about", (req, resp) => {
  resp.render("about");
});
app.get("/about-us", (req, resp) => {
  resp.render("about");
});
app.use((req, resp) => {
  resp.status(404).render("404");
});
