var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var usersCtrl = require('../controllers/users');

var router = express.Router();

router.route('/')
	.post(usersCtrl.postUsers)
	.get(usersCtrl.getUsers);

router.route('/:username')
	.get(usersCtrl.getUser);

router.route('/:id')
	.delete(usersCtrl.deleteUser);

module.exports = router;