// core modules
const fs = require("fs");
const path = require("path");

const FavDataFilePath = path.join(__dirname, "..", "data", "favourite.json");

module.exports = class Favourite {
  static addToFavourite(id, callback) {
    Favourite.getFavourite((favourites) => {
      if (favourites.includes(id)) {
        console.log("home is already marked favourite");
        if (callback) callback(null);
      } else {
        favourites.push(id);
        fs.writeFile(FavDataFilePath, JSON.stringify(favourites), callback);
      }
    });
  }

  static getFavourite(callback) {
    fs.readFile(FavDataFilePath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static deleteFavouriteById(homeId, callback) {
    Favourite.getFavourite((homesIds) => {
      homesIds = homesIds.filter((homesIds) => homesIds !== homeId);
      fs.writeFile(FavDataFilePath, JSON.stringify(homesIds), callback);
    });
  }
};
