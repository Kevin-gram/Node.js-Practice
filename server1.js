const http = require("http");
const fs = require("fs").promises;
const { error } = require("console");

const app = http.createServer((req, res) => {
  switch (req.method) {
    case "GET":
      fs.readFile("./data.json", "utf-8")
        .then((data) => {
          if (!data) {
            console.log("there is an error gettin the data");
          }
          res.end(data);
        })
        .catch((error) => console.error(error));
      break;
    case "POST":
      let newUser = "";
      let allUsers = [];
      req.on("data", (chunk) => {
        newUser += chunk;
      });
      req.on("end", () => {
        newUser = JSON.parse(newUser);
        fs.readFile("./data.json", "utf-8").then((data) => {
          if (!data) {
            console.log("there is an error gettin the data");
          }
          allUsers = JSON.parse(data);
          allUsers.push(newUser);
          fs.writeFile(
            "./data.json",
            JSON.stringify(allUsers, null, 2),
            "utf-8"
          )
            .then((data) => {
              console.log("data added successfully");
            })
            .catch((error) => console.error(error));
        });
      });

      break;
  }
});
const port = 3000;
app.listen(3000, () => {
  console.log("the server is ready and running on port 3000");
});
