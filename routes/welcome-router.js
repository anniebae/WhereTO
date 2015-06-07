var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var getAuth   = require('../controllers/sessions-ctrl').getAuth;
var AuthCtrl = require('../controllers/auth-ctrl');
var welcome = express.Router();

welcome.get('/', getAuth, function(req, res) {
  res.render('search/index', {user: req.user});
});

welcome.get('/welcome', function(req, res) {
    res.render('welcome/index', {user: req.user});
});

welcome.get('/login', function(req, res) {
  res.render('welcome/index', {user: req.user});
});

welcome.post('/login', function(req, res, next) {
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

welcome.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/welcome');
});


module.exports = welcome;