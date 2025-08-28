/// core modules
const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/database");
module.exports = class Favourite {
  constructor(homeId) {
    this.homeId = homeId;
  }

  addToFavourite() {
    const db = getDb();

    return db
      .collection("favorites")
      .findOne({ homeId: this.homeId }) // check if already exists
      .then((existing) => {
        if (existing) {
          return { message: "Already in favourites" };
        }
        return db.collection("favorites").insertOne(this);
      });
  }

  static getFavourite() {
    const db = getDb();
    return db.collection("favorites").find().toArray();
  }

  static deleteFavouriteById(homeId) {}
};
