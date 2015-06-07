var express    = require('express');
var LocalConfig  = require('../config/passport-local');
var getAuth    = require('../controllers/sessions-ctrl').getAuth;
var PlacesCtrl = require('../controllers/places-ctrl'),
    postPlaces = PlacesCtrl.postPlaces;

var places = express.Router();

places.route('/')
  .post(getAuth, postPlaces);

module.exports = places;