var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var getAuth   = require('../controllers/sessions-ctrl').getAuth;
var AuthCtrl = require('../controllers/auth-ctrl');
var auth = express.Router();

auth.get('/', getAuth, function(req, res) {
  res.render('search/index', {layout: 'main', user: req.user});
});

auth.get('/login', function(req, res) {
  res.render('welcome/index', {layout: 'welcome', user: req.user});
});

auth.post('/login', function(req, res, next) {
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

auth.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});


module.exports = auth;