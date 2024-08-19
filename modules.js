const { error } = require("console");
const { people, cars } = require("./people");
const fs = require("fs");
fs.readFile("./blog1.txt", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});
fs.writeFile(
  "./blog2.txt",
  "hello am the file crearted by the file System ",
  () => {
    console.log("File was created");
  }
);
console.log(people, cars);
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("directory created");
    }
  });
} else {
  fs.rmdir("./assets", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("THE FOLDER WAS DELETED SUCCESSFULY ");
  });
}
