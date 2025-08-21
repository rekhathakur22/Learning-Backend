/// core modules
const db = require("../utils/database");
module.exports = class Favourite {
  static addToFavourite(homeId) {
    return db.execute("INSERT INTO favorites (home_id) VALUES (?)", [homeId]);
  }

  static getFavourite() {
    return db.execute("SELECT home_id FROM favorites");
  }

  static deleteFavouriteById(homeId) {
    return db.execute("DELETE FROM favorites WHERE home_id = ?", [homeId]);
  }
};
