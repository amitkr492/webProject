var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  
    username: { type: String, lowercase: true, required: true, unique: true},
    password: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, unique: true },
    
});

/*
//for creation of hash password instead of text password

//var bcrypt = require('bcrytp-nodejs');
UserSchema.pre('save', function(next) {
    var user = this;
    bcrypt.hash(user.password, null, function(err, hash) {
        if(err) return next(err);
        user.password = hash;
        next();
    });
 
  
});

*/

module.exports = mongoose.model('User' , UserSchema);



