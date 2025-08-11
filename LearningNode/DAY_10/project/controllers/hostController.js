const Home = require("../models/homes");

exports.getAddHome = (req, res) => {
  res.render("host/add-home");
};

exports.getEditHome = (req, res) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("Home not found for this id");
      res.redirect("/host/host-home");
    } else {
      res.render("host/edit-home", { home }); //home is single object
    }
  });
};

exports.getHostHome = (req, res) => {
  Home.fetchAll((registeredHome) => {
    res.render("host/host-home", { registeredHome });
  });
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
