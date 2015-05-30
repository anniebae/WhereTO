var express    = require('express');
var request    = require('request');
var bodyParser = require('body-parser');
var urlencoded = bodyParser.urlencoded({extended: false});
var foursquare = require('../config/foursquare');    
var api = express.Router();

api.post('/yelp', urlencoded, function(req, res) {
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

api.get('/login', function(req, res) {
  res.writeHead(303, { 'location': foursquare.getAuthClientRedirectUrl() });
  res.end();
});

api.get('/callback', function (req, res) {
  foursquare.getAccessToken({
    code: req.query.code
  }, function (error, accessToken) {
    if(error) {
      res.send('An error was thrown: ' + error.message);
    }
    else {
      // Save the accessToken and redirect.
    }
  });
});

module.exports = api;