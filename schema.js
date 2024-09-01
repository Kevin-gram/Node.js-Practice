const mongoose = require("mongoose");
const newItem = new mongoose.Schema({
  name: String,
  age: Number,
  address: String,
});
const Blog = mongoose.model("Blog", newItem);
