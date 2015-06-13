var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var LocalConfig = require('../config/passport-local');
var User = require('../models/user');

exports.getAuth = function(req, res, next) {
  if (req.isAuthenticated()) {
    console.log('getAuth(): ', req);
    return next();
  }
  res.render('welcome/index', {
    layout: 'welcome'
  });
};

exports.getRoot = function(req, res) {
  res.render('search/index', {
    layout: 'main',
    user: req.user
  });
};

exports.login = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
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
};

exports.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};