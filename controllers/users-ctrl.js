var express       = require('express');
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var AuthCtrl      = require('../controllers/auth-ctrl');
var User          = require('../models/user');

exports.postUsers = function(req, res) {
  User.register(new User({
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }), req.body.password, function(err, user) {
      if (err) {
        return res.render('welcome/index', {layout: 'welcome'});
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
    console.log(users);
    res.render('users/index', {layout: 'main', users: users, user: req.user});
  });
};

exports.getUser = function(req, res) {
  User.findByUsername(req.params.username, function(err, user) {
    if (err)
      res.send(err);
      console.log(user);
      res.render('users/show', {layout: 'main', user: user});
  });
};

exports.putUser = function(req, res) {
  User.update(req.params._id, 
    {
      name     : req.body.name,
      email    : req.body.email,
      password : req.body.password,
      username : req.body.username,
      places   : req.body.places
    },
    function(err, num, raw) {
      if (err)
        res.send(err);
      res.json({message: name + ' updated'});
    });
};

exports.deletePlace = function(req, res) {
  var id = req.body.placeId;
  var places = req.user.places;
  console.log('before ', places);
  var newPlaces = places.remove(id);
  console.log('after ', newPlaces);
  // User.save(function (err) {
  // if (err) console.log(err);
  console.log(id + ' the sub-doc was removed')
// });
}

exports.deleteUser = function(req, res) {
  User.remove(req.params._id, function(err) {
    if (err)
      res.send(err);
    res.json({message: 'Account deleted'});
  });
};