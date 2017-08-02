var express = require('express');
var router = express.Router();
var passport = require("passport");

var User = require('../modules/user');

/*Get Sign up page*/
router.get("/signup", function (req, res) {
    res.render("signup");
});

router.post("/signup", function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({username: username}, function (err, user) {
        if (err) {
            return next(err);
        }
        if (user) {
            req.flash("error", "User already exists");
            return res.redirect("/login");
        }
        var newUser = new User({
            username: username,
            password: password
        });
        newUser.save(next);
    });
}, passport.authenticate("login", {
    successRedirect: "/",
    failureRedirect: "/signup",
    failureFlash: true
}));

module.exports = router;