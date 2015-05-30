var express    = require('express');
var request    = require('request');
var bodyParser = require('body-parser');
var urlencoded = bodyParser.urlencoded({extended: false});
var foursquare = require('../config/foursquare');    
var api = express.Router();

api.post('/search', urlencoded, function(req, res) {
  var query = foursquare + req.body.location;
  request(query, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
      res.json(body);
    }
  });
});

module.exports = api;