var express = require('express');
var router = express.Router();

var Post = require('../modules/post');

/* GET home page. */
router.get('/', function (req, res, next) {
    Post.find({},null,{sort:{postTime:-1}},function(err,post){
        res.render("index",{posts:post});
    });
});



module.exports = router;