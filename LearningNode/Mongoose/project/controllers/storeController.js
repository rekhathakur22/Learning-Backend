const Favourite = require("../models/favourite");
const Home = require("../models/homes");

exports.getHome = (req, res) => {
  Home.find()
    .then((registeredHome) => {
      res.render("store/landingPage", {
        registeredHome,
        isLoggedIn: req.isLoggedIn,
      });
    })
    .catch((err) => {
      console.error("Database fetch error:", err);
      res.status(500).send("Something went wrong while loading homes.");
    });
};

exports.getBooking = (req, res) => {
  res.render("store/booking", {
    isLoggedIn: req.isLoggedIn,
  });
};

exports.getFavourite = (req, res) => {
  Favourite.find()
    .populate("id")
    .then((favHomes) => {
      const FavRegisteredHome = favHomes.map((favHome) => favHome.id);
      res.render("store/favourite", {
        favouriteWithDetails: FavRegisteredHome,
        isLoggedIn: req.isLoggedIn,
      });
    })
    .catch((err) => {
      console.error("Database fetch error:", err);
      res.status(500).send("Something went wrong while loading homes.");
    });
};

exports.postAddFavourite = (req, res) => {
  const { id } = req.body;
  const favourite = new Favourite({ id });

  favourite
    .save()
    .then(() => {
      res.redirect("/favourite");
    })
    .catch((error) => {
      if (error) {
        console.log("error occured", error);
      }
    });
};

exports.getHomeDetail = (req, res) => {
  const homeId = req.params.homeId;
  console.log(homeId);
  Home.findById(homeId).then((home) => {
    console.log(home);
    if (!home) {
      console.log("home not found");
      res.redirect("/");
    } else {
      res.render("store/homeDetail", {
        id: home.id,
        homename: home.homename,
        price: home.price,
        location: home.location,
        img: home.img,
        description: home.description,
        isLoggedIn: req.isLoggedIn,
      });
    }
  });
};

exports.deleteFavourite = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Favourite.findOneAndDelete({ id: id })
    .then(res.redirect("/favourite"))
    .catch((error) => {
      if (error) {
        {
          console.log("error is occured", error);
        }
      }
    });
};
