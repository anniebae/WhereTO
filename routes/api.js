var express    = require('express');
var request    = require('request');
var foursquare = require('../config/foursquare');    
var api = express.Router();

api.get('/search', function(req, res) {
  request(foursquare, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
    }
  });
});

module.exports = api;