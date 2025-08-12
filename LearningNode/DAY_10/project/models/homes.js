// core modules
const fs = require("fs");
const path = require("path");
const Favourite = require("./favourite");
const filePath = path.join(__dirname, "..", "data", "home.json");
module.exports = class Home {
  constructor(homename, price, location, img) {
    this.homename = homename;
    this.price = price;
    this.location = location;
    this.img = img;
  }

  save() {
    const currentHome = this;

    Home.fetchAll((registeredHome) => {
      if (currentHome.id) {
        registeredHome = registeredHome.map((home) => {
          if (home.id === currentHome.id) {
            return currentHome;
          }
          return home;
        });
      } else {
        currentHome.id = Math.random().toString();
        registeredHome.push(currentHome);
      }

      fs.writeFile(filePath, JSON.stringify(registeredHome), (err) => {
        console.log("save", err);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(filePath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findById(homeId, callback) {
    this.fetchAll((homes) => {
      const homeFound = homes.find((home) => {
        return home.id === homeId;
      });
      callback(homeFound);
    });
  }

  static deleteById(homeId, callback) {
    this.fetchAll((homes) => {
      homes = homes.filter((home) => home.id !== homeId);
      Favourite.deleteFavouriteById(homeId, callback);
      fs.writeFile(filePath, JSON.stringify(homes), callback);
    });
  }
};
