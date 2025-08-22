const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/database");
module.exports = class Home {
  constructor(homename, price, location, img, description, _id) {
    this.homename = homename;
    this.price = price;
    this.location = location;
    this.img = img;
    this.description = description;
    this._id = _id;
  }

  save() {
    const db = getDb();
    return db.collection("homes").insertOne(this);
  }

  static fetchAll() {
    const db = getDb();
    return db.collection("homes").find().toArray();
  }

  static findById(homeId) {
    console.log(homeId);
    const db = getDb();
    return db
      .collection("homes")
      .find({ _id: new ObjectId(String(homeId)) })
      .next();
  }

  static deleteById(homeId) {}
};
