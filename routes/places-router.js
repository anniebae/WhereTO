var express = require('express');
var LocalConfig = require('../config/passport-local');
var getAuth = require('../controllers/auth-ctrl').getAuth;

var PlacesCtrl = require('../controllers/places-ctrl'),
  postPlaces = PlacesCtrl.postPlaces,
  deletePlace = PlacesCtrl.deletePlace;

var places = express.Router();

places.route('/')
  .post(getAuth, postPlaces);

places.route('/:id')
  .delete(getAuth, deletePlace);

module.exports = places;