const Home = require("../models/homes");

exports.getHome = (req, res) => {
  Home.fetchAll((registeredHome) => {
    res.render("store/landingPage", { registeredHome });
  });
};

exports.getBooking = (req, res) => {
  res.render("store/booking");
};

exports.getFavourite = (req, res) => {
  res.render("store/favourite");
};

exports.getHomeDetail = (req, res) => {
  const homeId = req.params.homeId;
  console.log("at home details page", homeId);
  res.render("store/homeDetail");
};
