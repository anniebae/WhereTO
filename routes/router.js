var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var router = express.Router();


router.get('/', ensureAuthenticated, function(req, res) {
  res.render('query/index', {user: req.user});
});

router.get('/welcome', function(req, res) {
    res.render('welcome/index', {user: req.user});
});

router.post('/register', function(req, res) {
  User.register(new User({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }), req.body.password, function(err, user) {
      console.log(user);
      if (err) {
        return res.render('welcome/index', {info: 'You\re obviously a bitch'});
      }
      passport.authenticate('local')(req, res, function() {
        res.redirect('/');
      });
  });
});

router.get('login', function(req, res) {
  res.render('welcome/index', {user: user});
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { 
      return next(err) 
    }
    if (!user) {
      return res.redirect('/welcome')
    }
    req.logIn(user, function(err) {
      if (err) { 
        return next(err); 
      }
      return res.redirect('/');
    });
  })(req, res, next);
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/welcome');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

function findByUsername(username, fn) {
  for (var i = 0, len = users.length; i < len; i++) {
    var user = users[i];
    if (user.username === username) {
      return fn(null, user);
    }
  }
  return fn(null, null);
}

passport.use(new LocalStrategy(function(username, password, done) {
  User.findOne({ username: username }, function(err, user) {
    if (err) { return done(err); }
    if (!user) { return done(null, false, { message: 'Unknown user ' + username }); }
    user.comparePassword(password, function(err, isMatch) {
      if (err) return done(err);
      if(isMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Invalid password' });
      }
    });
  });
}));


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/welcome')
}
module.exports = router;