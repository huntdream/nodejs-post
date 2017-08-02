var express = require('express');
var router = express.Router();
var User = require('../modules/user');

/* GET users listing. */
router.get('/users', function (req, res, next) {
    User.find()
        .sort({createTime:"descending"})
        .exec(function(err,users){
            if(err){
                return next(err);
            }
            res.render("list",{users:users});
        });
});

module.exports = router;
