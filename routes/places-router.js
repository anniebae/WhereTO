var express    = require('express');
var PlacesCtrl = require('../controllers/places-ctrl'),
    postPlaces = PlacesCtrl.postPlaces;

var places = express.Router();

places.route('/')
  .post(postPlaces);

module.exports = places;