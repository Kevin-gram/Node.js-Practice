const mongoose = require("mongoose");
const schemachema = mongoose.Schema;
const blogSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    snippet: {
      type: String,
      require: true,
    },
    body: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
