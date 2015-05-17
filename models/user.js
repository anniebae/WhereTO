var mongoose = require('mongoose');
var Schema 	 = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var bcrypt = require('bcrypt');

var User = new Schema({
	name		 : {type: String, required: true},
	password : {type: String, required: true},
	email    : {type: String, required: true, unique: true},
	username : {type: String, required: true, unique: true}
});

User.pre('save', function(next) {
	var user = this;
	if (!user.isModified('password')) return next();
	bcrypt.genSalt(10, function(err, salt) {
		if (err) return next(err);

		bcrypt.hash(user.password, salt, function(err, hash) {
			if (err) return next(err);
			user.password = hash;
			next();
		});
	});
});

User.methods.comparePassword = function(candidatePassword, cb) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if (err) return cb(err);
		cb(null, isMatch);
	});
};


User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);