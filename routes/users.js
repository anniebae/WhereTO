var express 	= require('express');
var passport 	= require('passport');
var User 			= require('../models/user');
var usersCtrl = require('../controllers/users');
var authCtrl 	= require('../controllers/auth');

var router = express.Router();

router.route('/')
	.post(usersCtrl.postUsers)
	.get(getAuth, usersCtrl.getUsers);

router.route('/:username')
	.get(getAuth, usersCtrl.getUser);

router.route('/:id')
	.put(getAuth, usersCtrl.putUser)
	.delete(getAuth, usersCtrl.deleteUser);

function getAuth(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
    res.redirect('/welcome')
  }

module.exports = router;