const db = require("../utils/database");

module.exports = class Home {
  constructor(homename, price, location, img, description, id) {
    this.homename = homename;
    this.price = price;
    this.location = location;
    this.img = img;
    this.description = description;
    this.id = id;
  }

  save() {
    if (this.id) {
      return db.execute(
        "UPDATE homes SET homename = ?, location = ?, price = ?, img = ?, description = ? WHERE id = ?",
        [
          this.homename,
          this.location,
          this.price,
          this.img,
          this.description,
          this.id,
        ]
      );
    } else {
      return db.execute(
        "INSERT INTO homes (homename, price, location, img, description) VALUES(?,?,?,?,?)",
        [this.homename, this.price, this.location, this.img, this.description]
      );
    }
  }

  static fetchAll() {
    return db.execute("SELECT * FROM homes");
  }

  static findById(homeId) {
    return db.execute("SELECT * FROM homes WHERE id= ?", [homeId]);
  }

  static deleteById(homeId) {
    return db.execute("DELETE FROM homes WHERE id=?", [homeId]);
  }
};
