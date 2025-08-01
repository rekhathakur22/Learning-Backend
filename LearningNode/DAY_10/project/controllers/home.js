const Home = require("../models/homes");

exports.getAddHome = (req, res) => {
  res.render("add-home");
};

exports.postAddHome = (req, res) => {
  const home = new Home(
    req.body.homename,
    req.body.price,
    req.body.location,
    req.body.img
  );
  home.save();

  res.render("homeAdded");
};

exports.getHome = (req, res) => {
  Home.fetchAll((registeredHome) => {
    res.render("home", { registeredHome });
  });
};
