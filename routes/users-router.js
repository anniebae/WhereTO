var express 	= require('express');
var passport 	= require('passport');
var User 			= require('../models/user');
var AuthCtrl 	= require('../controllers/auth-ctrl');
var UsersCtrl = require('../controllers/users-ctrl'),
    postUsers = UsersCtrl.postUsers,
     getUsers = UsersCtrl.getUsers,
      getUser = UsersCtrl.getUser,
      putUser = UsersCtrl.putUser,
   deleteUser = UsersCtrl.deleteUser;

var router = express.Router();

router.route('/')
	.post(postUsers)
	.get(getUsers);

router.route('/:username')
	.get(getUser);

router.route('/:id')
	.put(putUser)
	.delete(deleteUser);

function getAuth(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
    res.redirect('/welcome')
  }

module.exports = router;