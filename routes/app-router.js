var express 		  = require('express');
var bodyParser    = require('body-parser');
var cookieParser  = require('cookie-parser');
var session       = require('express-session');
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash         = require('connect-flash');
var bcrypt        = require('bcrypt');
var app = express.Router();

app.get('/',
	passport.authenticate('local',
	{failureRedirect: '/welcome' }), 
	function(req, res) {
  	res.redirect('query/index');
});

app.get('/welcome', function (req, res){
  res.render('welcome/index');
});

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/welcome');
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();
  res.redirect('/welcome');
}

module.exports = app;