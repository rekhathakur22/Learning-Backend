const db = require("../utils/database");

module.exports = class Home {
  constructor(homename, price, location, img, description) {
    this.homename = homename;
    this.price = price;
    this.location = location;
    this.img = img;
    this.description = description;
    this.id = id;
  }

  save() {}

  static fetchAll() {
    return db.execute("SELECT * FROM homes");
  }

  static findById(homeId, callback) {}

  static deleteById(homeId, callback) {}
};
