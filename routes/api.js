var express    = require('express');
var request    = require('request');
var bodyParser = require('body-parser');
var urlencoded = bodyParser.urlencoded({extended: false});    
var api = express.Router();

api.post('/search', urlencoded, function(req, res) {
  if (!req.body) return res.sendStatus(400)
  var request = req.body; // to be the params from search filed
  var location = request.location;
  var term = request.term;
  yelp.search({term: term, location: location}, function(error, data) {
    console.log(error);
    console.log(data);
    res.json(data);
  });
});

module.exports = api;