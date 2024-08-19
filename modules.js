const { error } = require("console");
const { people, cars } = require("./people");
const fs = require("fs");
fs.readFile("./blog1.txt", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});
console.log(people, cars);
