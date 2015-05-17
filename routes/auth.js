var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var flash = require('connect-flash');
var authConfig = require('../config/auth');
var router = express.Router();


router.get('/', ensureAuthenticated, function(req, res) {
  res.render('query/index', {user: req.user});
});

router.get('/welcome', function(req, res) {
    res.render('welcome/index', {user: req.user});
});

router.get('/login', function(req, res) {
  res.render('welcome/index', {user: req.user});
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { 
      return next(err) 
    }
    if (!user) {
      return res.redirect('/welcome');
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


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
    res.redirect('/welcome')
}

module.exports = router;