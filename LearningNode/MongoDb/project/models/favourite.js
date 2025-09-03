/// core modules

const { getDb } = require("../utils/database");

module.exports = class Favourite {
  constructor(homeId) {
    this.homeId = homeId;
  }

  addToFavourite() {
    const db = getDb();
    return db
      .collection("favorites")
      .findOne({ homeId: this.homeId })
      .then((result) => {
        if (!result) {
          return db.collection("favorites").insertOne(this);
        }
        return Promise.resolve();
      });
  }

  static getFavourite() {
    const db = getDb();
    return db.collection("favorites").find().toArray();
  }

  static deleteFavouriteById(homeId) {
    const db = getDb();
    return db.collection("favorites").deleteOne({ homeId: String(homeId) });
  }
};
