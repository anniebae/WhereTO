var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

module.exports = function(passport) {

	// Sessions
  passport.serializeUser(function(user, done) {
      done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
          done(err, user);
      });
  });

  
  passport.use('register', new LocalStrategy({
      usernameField : 'email',
      passwordField : 'password',
      passReqToCallback : true
  }, function(req, email, password, done) {
      process.nextTick(function() {
	      User.findOne({ 'email' : email }, function(err, user) {
	          if (err) {
	          	console.log(err);
	            return done(err);
	          }
	          if (user) {
	          	console.log(user);
	            return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
	          } else {
	            var newUser 		 = new User();
	            newUser.email    = email;
	            newUser.password = newUser.generateHash(password);

	            newUser.save(function(err) {
	                if (err) {
	                  throw err;
	                } else {
	                	return done(null, newUser);
	                }
	            });
	          
	          }
	      });    
      });
  }));

};