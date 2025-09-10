exports.getLogin = (req, res) => {
  res.render("auth/login", {
    pageTitle: "Login",
    isLoggedIn: false,
  });
};

exports.postLogin = (req, res) => {
  console.log(req.body);
  res.cookie("isLoggedIn", true); // sends the cookie to the browser
  res.redirect("/");
};

exports.postLogout = (req, res) => {
  res.clearCookie("isLoggedIn");
  res.redirect("/");
};
