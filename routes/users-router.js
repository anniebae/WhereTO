var express 	  = require('express');
var passport 	  = require('passport');
var LocalConfig = require('../config/passport-local');
var User        = require('../models/user');
var getAuth     = require('../controllers/auth-ctrl').getAuth;

var UsersCtrl   = require('../controllers/users-ctrl'),
    postUsers   = UsersCtrl.postUsers,
     getUsers   = UsersCtrl.getUsers,
      getUser   = UsersCtrl.getUser,
      putUser   = UsersCtrl.putUser,
   deleteUser   = UsersCtrl.deleteUser;

var users = express.Router();

users.route('/')
	.post(postUsers)
	.get(getAuth, getUsers);

users.route('/:username')
	.get(getAuth, getUser)
  .put(getAuth, putUser)
	.delete(getAuth, deleteUser);

module.exports = users;