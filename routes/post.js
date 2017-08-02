var express = require('express');
var router = express.Router();
var Post = require('../modules/post');

router.post("/post",function(req,res,next){
    var article = req.body.article;
    newPost = new Post({
        article:article
    });
    newPost.save();
    res.send(article);
    res.redirect("/");
});

module.exports = router;