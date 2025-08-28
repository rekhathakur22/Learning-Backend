const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/database");
module.exports = class Home {
  constructor(homename, price, location, img, description, homeId) {
    this.homename = homename;
    this.price = price;
    this.location = location;
    this.img = img;
    this.description = description;
    if (homeId) {
      this.homeId = homeId; // 👈 ab se hamesha ObjectId store hoga
    }
  }

  save() {
    const db = getDb();
    if (this.homeId) {
      // updated
      return db.collection("homes").updateOne(
        { _id: new ObjectId(String(this.homeId)) }, // already ObjectId hai
        {
          $set: {
            homename: this.homename,
            price: this.price,
            location: this.location,
            img: this.img,
            description: this.description,
          },
        }
      );
    } else {
      return db.collection("homes").insertOne(this);
    }
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

  static deleteById(homeId) {
    const db = getDb();
    return db
      .collection("homes")
      .deleteOne({ _id: new ObjectId(String(homeId)) });
  }
};
