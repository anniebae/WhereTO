var express   = require('express');

var places = express.Router();

places.post('/', function(req, res) {
  console.log(req.body);
});

module.exports = places;