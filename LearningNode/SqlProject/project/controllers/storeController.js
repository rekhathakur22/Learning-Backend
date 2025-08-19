const Favourite = require("../models/favourite");
const Home = require("../models/homes");

exports.getHome = (req, res) => {
  Home.fetchAll()
    .then(([registeredHome]) => {
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
  Favourite.getFavourite((homeIdArray) => {
    Home.fetchAll()
      .then(([registeredHome]) => {
        const favouriteWithDetails = homeIdArray.map((homeId) =>
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
  Favourite.addToFavourite(req.body.id, (error) => {
    if (error) {
      console.log("error occured", error);
    }
    res.redirect("/favourite");
  });
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

exports.deleteFavourite = (req, res) => {
  const homeId = req.params.homeId;
  console.log("came to delete home", homeId);
  Favourite.deleteFavouriteById(homeId, (error) => {
    if (error) {
      console.log("error is occured", error);
    } else {
      res.redirect("/favourite");
    }
  });
};
