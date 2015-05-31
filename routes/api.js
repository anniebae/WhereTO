var express    = require('express');
var request    = require('request');
var bodyParser = require('body-parser');
var urlencoded = bodyParser.urlencoded({extended: false});
var foursquare = require('../config/foursquare');    
var api = express.Router();

api.post('/search', urlencoded, function(req, res) {
  var query = req.body.location;
  var url = foursquare.query;
  var path = url + query;
  request(path, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(body);
      var dataRes = JSON.parse(body); 
      var items = dataRes.response.groups[0].items;
      for (var i = 0; i < items.length; i++) {
        var model = items[i].venue;
        console.log(model.id);
      };
    }
  });
});

module.exports = api;