var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var UsersCtrl = require('../controllers/users');

var router = express.Router();

router.route('/')
	.post(UsersCtrl.postUsers)
	.get(UsersCtrl.getUsers);

router.route('/:username')
	.get(UsersCtrl.getUser);

module.exports = router;