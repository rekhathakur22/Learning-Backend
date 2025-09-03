const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  homename: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  img: String,
  description: String,
});

module.exports = mongoose.model("Home", homeSchema);

/* const { ObjectId } = require("mongodb");



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

    Favourite.deleteFavouriteById(homeId);

    return db
      .collection("homes")
      .deleteOne({ _id: new ObjectId(String(homeId)) });
  }
};

*/
