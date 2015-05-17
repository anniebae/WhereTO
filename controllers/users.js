var express = require('express');
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var authConfig = require('../config/auth');
var User = require('../models/user');

exports.postUsers = function(req, res) {

  User.register(new User({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }), req.body.password, function(err, user) {
      if (err) {
        return res.render('welcome/index');
      }
      passport.authenticate('local')(req, res, function() {
        res.redirect('/');
      });
  });

};

exports.getUsers = function(req, res) {
  User.find(function(err, users) {
    if (err)
      res.send(err);

    res.json(users);
  });
};

exports.getUser = function(req, res) {
  User.findByUsername(req.params.username, function(err, user) {
    if (err)
      res.send(err);
      console.log(user);
      res.json(user);
  });
};