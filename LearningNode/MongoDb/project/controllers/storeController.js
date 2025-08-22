const Favourite = require("../models/favourite");
const Home = require("../models/homes");

exports.getHome = (req, res) => {
  Home.fetchAll()
    .then((registeredHome) => {
      res.render("store/landingPage", { registeredHome });
    })
    .catch((err) => {
      console.error("Database fetch error:", err);
      res.status(500).send("Something went wrong while loading homes.");
    });
};

exports.getBooking = (req, res) => {
  res.render("store/booking");
};

exports.getFavourite = (req, res) => {
  Favourite.getFavourite().then(([homeIds]) => {
    const FavRegisteredHome = homeIds.map((favHome) => favHome.home_id);
    Home.fetchAll()
      .then((registeredHome) => {
        const favouriteWithDetails = FavRegisteredHome.map((homeId) =>
          registeredHome.find((home) => home.id === homeId)
        );
        res.render("store/favourite", {
          favouriteWithDetails: favouriteWithDetails,
        });
      })
      .catch((err) => {
        console.error("Database fetch error:", err);
        res.status(500).send("Something went wrong while loading homes.");
      });
  });
};

exports.postAddFavourite = (req, res) => {
  Favourite.addToFavourite(req.body.id)
    .then(res.redirect("/favourite"))
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
      });
    }
  });
};

exports.deleteFavourite = (req, res) => {
  const homeId = req.params.homeId;
  console.log("came to delete home", homeId);
  Favourite.deleteFavouriteById(homeId)
    .then(res.redirect("/favourite"))
    .catch((error) => {
      if (error) {
        console.log("error is occured", error);
      }
    });
};
