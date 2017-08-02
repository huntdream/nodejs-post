var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    article:String,
    postTime:{type:Date,default:Date.now}
});

var Post = mongoose.model("Post",postSchema);

module.exports = Post;