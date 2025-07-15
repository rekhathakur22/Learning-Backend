// using built in module fs using require()
const fs = require("fs");

// Node js -> run time envrionment
// npm -> node package manager that allow to use different libraries of node js
// node modules -> node is having buit in modules that can be used using require()

// Example of built in node module fs(file system)
// you can use the module using two method 1.callback 2.promises
// in this example we used callback method

const filePath = "example.txt";
const dataToWrite = "hello i writing successfully";

fs.writeFile(filePath, dataToWrite, (err) => {
  if (err) {
    console.log("error occured", err);
  } else {
    console.log("data written succesfully");
  }
});

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.log("error occured", err);
  } else {
    console.log(data);
  }
});
