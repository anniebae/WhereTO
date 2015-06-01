var express    = require('express');
var request    = require('request');
var bodyParser = require('body-parser');
var urlencoded = bodyParser.urlencoded({extended: false});
var foursquare = require('../config/foursquare');    
var api = express.Router();

api.post('/search', urlencoded, function(req, res) {
  var query = req.body.location;
  var path = foursquare.query + query;
  parseQuery(path);
});

module.exports = api;

var parseQuery = function(path) {
  var venueIds = [];
  request(path, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var res = JSON.parse(body); 
      var items = res.response.groups[0].items;
      for (var i = 0; i < items.length; i++) {
        var model = items[i].venue;
        console.log(model);
        venueIds.push(model.id);
      };
      console.log(venueIds);
    }
  });
}

var parseVenue = function(id) {
  var path = foursquare.venue + id;
  request(path, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var res = JSON.parse(body); 
      console.log(res);
    }
  });
}