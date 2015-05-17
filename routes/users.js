var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var UsersCtrl = require('../controllers/users');

var router = express.Router();

router.route('/').get(UsersCtrl.getUsers);

module.exports = router;