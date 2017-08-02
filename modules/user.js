var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var SALT_FACTOR = 10;

var noop = function () {};

//init the userSchema
var userSchema = mongoose.Schema({
    username:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    bio:String,
    createTime:{type:Date,default:Date.now}
});

//hash the password before save it to db
userSchema.pre('save',function(done){
    var user = this;
    if(!user.isModified("password")){
        return done();
    }

    bcrypt.genSalt(SALT_FACTOR,function (err,salt) {
        if(err) {
            return done(err);
        }

        bcrypt.hash(user.password,salt,noop,function(err,hashedPassword){
            if(err) {
                return done(err);
            }

            user.password = hashedPassword;
            done();
        });
    });
});

//check the password
userSchema.method('checkPassword',function (guess,done) {
    bcrypt.compare(guess,this.password,function(err,isMatch){
        done(err,isMatch);
    });
});

var User = mongoose.model('User',userSchema);

module.exports = User;