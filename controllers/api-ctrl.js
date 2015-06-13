var request    = require('request');
var yelp = require('../config/yelp');

exports.getYelpData = function(req, res) {
  if (!req.body) return res.sendStatus(400);
  var request = req.body;
  var location = request.location.split(' ').join('+');
  var term = request.term;
  yelp.search({term: term, location: location}, function(error, data) {
    console.log(error);
    console.log(data);
    res.json(data);
  });
};