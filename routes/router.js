var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();


router.get('/', function (req, res) {
    res.render('query/index', {user: req.user});
});

router.get('/welcome', function(req, res) {
    res.render('welcome/index', {user: req.user});
});

router.post('/register', function(req, res) {
  User.register(new User({
    username: req.body.username 
  }), req.body.password, function(err, user) {
      if (err) {
        return res.render('welcome/index', {user: user});
      }

      passport.authenticate('local')(req, res, function () {
        res.redirect('/');
      });
  });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/welcome');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;