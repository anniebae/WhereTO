var express    = require('express');
var request    = require('request');
var bodyParser = require('body-parser');
var urlencoded = bodyParser.urlencoded({extended: false});
var foursquare = require('../config/foursquare');    
var api = express.Router();

var qEquals = '&query=';
var vEquals = '&v=20130815&near=';

api.post('/search', urlencoded, function(req, res) {
  var locString = req.body.location;
  var location = locString.split(' ').join('+');
  console.log(location);
  var query = foursquare + vEquals + location + qEquals + req.body.term;
  request(query, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
      res.json(body);
    }
  });
});

module.exports = api;