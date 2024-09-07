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
  () => {}
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
const readStream = fs.createReadStream("./blog2.txt");
const writeStream = fs.createWriteStream("./blog3.txt");

readStream.on("data", (chunk) => {
  console.log(" ----New chunk is being created ---");
  console.log(chunk.toString());
});
writeStream.write("data", (chunk) => {
  console.log("\nNEW CHUNK\n");
  console.log(chunk);
});
readStream.on("error", (error) => {
  console.log(error);
});
