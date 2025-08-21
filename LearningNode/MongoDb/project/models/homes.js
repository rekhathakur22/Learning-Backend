module.exports = class Home {
  constructor(homename, price, location, img, description, id) {
    this.homename = homename;
    this.price = price;
    this.location = location;
    this.img = img;
    this.description = description;
    this.id = id;
  }

  save() {}

  static fetchAll() {}

  static findById(homeId) {}

  static deleteById(homeId) {}
};
