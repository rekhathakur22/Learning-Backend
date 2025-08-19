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
  Home.fetchAll()
    .then(([registeredHome]) => {
      res.render("host/host-home", { registeredHome });
    })
    .catch((err) => {
      console.error("Database fetch error:", err);
      res.status(500).send("Something went wrong while loading homes.");
    });
};

exports.postDeleteHome = (req, res) => {
  const homeId = req.params.homeId;
  console.log("came to delete home", homeId);
  Home.deleteById(homeId, (error) => {
    if (error) {
      console.log("error is occured", error);
    } else {
      res.redirect("/host/host-home");
    }
  });
};

exports.postEditHome = (req, res) => {
  const { homeId, homename, price, location, img, description } = req.body;
  const home = new Home(homename, price, location, img, description, homeId);

  home.save();
  res.redirect("/host/host-home");
};

exports.postAddHome = (req, res) => {
  const home = new Home(
    req.body.homename,
    req.body.price,
    req.body.location,
    req.body.img,
    req.body.description
  );
  home.save();

  res.render("host/homeAdded");
};
