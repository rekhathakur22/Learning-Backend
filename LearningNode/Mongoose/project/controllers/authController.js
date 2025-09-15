const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

exports.getLogin = (req, res) => {
  res.render("auth/login", {
    pageTitle: "Login",
    isLoggedIn: false,
  });
};

exports.postLogin = (req, res) => {
  console.log(req.body);
  // res.cookie("isLoggedIn", true); // sends the cookie to the browser
  req.session.isLoggedIn = true;
  res.redirect("/");
};

exports.postLogout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
};

exports.getSignUp = (req, res) => {
  res.render("auth/signUp", {
    pageTitle: "Sign Up",
    isLoggedIn: false,
  });
};

exports.postSignUp = [
  // first name validation
  check("firstName")
    .notEmpty()
    .withMessage("First name is required")
    .isLength({ min: 2 })
    .withMessage("First name must be at least 2 characters long")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("First name must contain only letters"),

  // lastname validation
  check("lastName")
    .notEmpty()
    .withMessage("Last name is required")
    .isLength({ min: 2 })
    .withMessage("Last name must be at least 2 characters long")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("Last name must contain only letters"),

  // email validation

  check("email").notEmpty().withMessage("Email is required"),

  // password validation

  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+{}[\]|:;'",.<>]).{8,}$/
    )
    .withMessage(
      "Password must contain at least one lowercase, one uppercase, one number, and one special character"
    ),

  // confirm password validation

  check("confirmPassword")
    .notEmpty()
    .withMessage("Confirm Password is required")
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),
  // after validation, this function runs
  (req, res) => {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      role,
      term,
    } = req.body;
    const errors = validationResult(req);

    console.log(errors.array().map((err) => err.msg));

    if (!errors.isEmpty()) {
      // If validation fails, return errors
      return res.status(400).render("auth/signUp", {
        pageTitle: "Sign Up",
        isLoggedIn: false,
        errors: errors.array().map((err) => err.msg),
        oldInput: {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          role,
          term,
        },
      });
    }

    bcrypt
      .hash(password, 12)
      .then((hashedPassword) => {
        const user = new User({
          firstName,
          lastName,
          email,
          password: hashedPassword,
          userType: role,
        });
        return user.save();
      })
      .then(() => {
        res.redirect("/login");
      })
      .catch((err) => {
        console.log(err);
        res.status(500).render("auth/signUp", {
          pageTitle: "Sign Up",
          isLoggedIn: false,
          error:
            "An error occurred while creating the account. Please try again.",
          oldInput: {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            role,
            term,
          },
        });
      });
  },
];
