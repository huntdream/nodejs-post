var express = require('express');
var router = express.Router();
var passport = require('passport');


/*Get Log in page */
router.get('/login', function (req, res, next) {
    res.render('login');
});

router.post("/login",passport.authenticate("login",{
    successRedirect:"/",
    failureRedirect:"/login",
    failureFlash:true
}));

router.get("/logout",function(req,res){
    req.logout();
    res.redirect("/");
});


module.exports = router;