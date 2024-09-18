const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(
    "mongodb+srv://man:123@node.vbkfa.mongodb.net/user?retryWrites=true&w=majority&appName=Node"
  )
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.set("view engine", "ejs");
app.listen(3000, () => console.log("Server is running on port 3000"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/about-us", (req, res) => {
  res.render("about");
});

app.use((req, res) => {
  res.status(404).render("404");
});

app.post("/add-item", async (req, res) => {
  const newItem = new Item({
    name: "Sample Item",
    description: "This is a sample item.",
  });

  try {
    await newItem.save();
    res.send("added successfully!");
  } catch (err) {
    res.status(500).send("Failed to add item.");
  }
});
