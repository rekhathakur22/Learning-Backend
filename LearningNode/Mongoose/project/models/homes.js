const mongoose = require("mongoose");
const Favourite = require("./favourite");

const homeSchema = new mongoose.Schema({
  homename: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  img: String,
  description: String,
});

homeSchema.pre("findOneAndDelete", async function (next) {
  const homeId = this.getQuery()._id;
  await Favourite.deleteMany({ id: homeId });
  next();
});

module.exports = mongoose.model("Home", homeSchema);
