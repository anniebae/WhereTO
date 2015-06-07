var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var getAuth   = require('../controllers/sessions-ctrl').getAuth;
var LocalConfig  = require('../config/passport-local');
var auth = express.Router();

auth.route('/', getAuth)
  .get(getRoot);

auth.route('/login', getAuth)
  .post(login);

auth.route('/logout')
  .get(logout);


module.exports = auth;

function getRoot(req, res) {
  res.render('search/index', {layout: 'main', user: req.user});
}

function login(req, res, next) {
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
}

function logout(req, res) {
    req.logout();
    res.redirect('/');
}
