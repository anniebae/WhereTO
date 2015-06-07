var express       = require('express');
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var LocalConfig   = require('../config/passport-local');
var User          = require('../models/user');

var AuthCtrl      = require('../controllers/auth-ctrl'),
          getAuth = AuthCtrl.getAuth,
          getRoot = AuthCtrl.getRoot,
            login = AuthCtrl.login,
           logout = AuthCtrl.logout;

var auth = express.Router();

auth.route('/')
  .get(getAuth, getRoot);

auth.route('/login')
  .post(login);

auth.route('/logout')
  .get(logout);

module.exports = auth;