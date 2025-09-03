const mongoose = require("mongoose");

const favSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Home",
    required: true,
  },
});

module.exports = mongoose.model("Favorite", favSchema);
