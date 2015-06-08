var express    = require('express');
var bodyParser = require('body-parser');
var urlencoded = bodyParser.urlencoded({extended: false});
var ApiCtrl    = require('../controllers/api-ctrl'),
   getYelpData = ApiCtrl.getYelpData;

var api = express.Router();


api.route('/search')
  .post(urlencoded, getYelpData);

module.exports = api;