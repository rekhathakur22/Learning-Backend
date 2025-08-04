const Home = require("../models/homes");

exports.getAddHome = (req, res) => {
  res.render("host/add-home");
};

exports.getHostHome = (req, res) => {
  res.render("host/host-home");
};

exports.postAddHome = (req, res) => {
  const home = new Home(
    req.body.homename,
    req.body.price,
    req.body.location,
    req.body.img
  );
  home.save();

  res.render("host/homeAdded");
};
