// core modules
const fs = require("fs");
const path = require("path");

module.exports = class Home {
  constructor(homename, price, location, img) {
    this.homename = homename;
    this.price = price;
    this.location = location;
    this.img = img;
  }

  save() {
    this.id = Math.random().toString();
    Home.fetchAll((registeredHome) => {
      registeredHome.push(this);
      const filePath = path.join(__dirname, "..", "data", "home.json");

      fs.writeFile(filePath, JSON.stringify(registeredHome), (err) => {
        console.log("save", err);
      });
    });
  }

  static fetchAll(callback) {
    const filePath = path.join(__dirname, "..", "data", "home.json");
    fs.readFile(filePath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
