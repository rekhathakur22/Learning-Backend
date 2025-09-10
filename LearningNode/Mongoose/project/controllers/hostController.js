const Home = require("../models/homes");

exports.getAddHome = (req, res) => {
  res.render("host/add-home", {
    isLoggedIn: req.isLoggedIn,
  });
};

exports.getEditHome = (req, res) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then((home) => {
    if (!home) {
      console.log("Home not found for this id");
      res.redirect("/host/host-home");
    } else {
      res.render("host/edit-home", { home, isLoggedIn: req.isLoggedIn }); //home is single object
    }
  });
};

exports.getHostHome = (req, res) => {
  Home.find()
    .then((registeredHome) => {
      res.render("host/host-home", {
        registeredHome,
        isLoggedIn: req.isLoggedIn,
      });
    })
    .catch((err) => {
      console.error("Database fetch error:", err);
      res.status(500).send("Something went wrong while loading homes.");
    });
};

exports.postDeleteHome = (req, res) => {
  const homeId = req.params.homeId;
  Home.findByIdAndDelete(homeId).then(() => {
    res.redirect("/host/host-home");
  });
};

exports.postEditHome = (req, res) => {
  const { homeId, homename, price, location, img, description } = req.body;
  Home.findById(homeId)
    .then((home) => {
      (home.homename = homename),
        (home.price = price),
        (home.location = location),
        (home.img = img),
        (home.description = description);

      home.save().then((result) => {
        console.log("home updated");
      });

      res.redirect("/host/host-home");
    })
    .catch((err) => {
      console.log("error while updating home", err);
    });
};

exports.postAddHome = (req, res) => {
  const { homename, price, location, img, description } = req.body;

  const home = new Home({
    homename,
    price,
    location,
    img,
    description,
  });

  home.save().then(() => {
    console.log("home saved succesfully");
  });
  res.render("host/homeAdded", { isLoggedIn: req.isLoggedIn });
};
