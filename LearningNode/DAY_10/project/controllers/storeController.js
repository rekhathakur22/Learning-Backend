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

  Home.findById(homeId, (home) => {
    if (!home) {
      res.redirect("/");
    } else {
      res.render("store/homeDetail", {
        id: home.id,
        homename: home.homename,
        price: home.price,
        location: home.location,
        img: home.img,
      });
    }
  });
};
