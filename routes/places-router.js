var express    = require('express');
var AuthCtrl   = require('../controllers/auth-ctrl');
var getAuth    = require('../controllers/sessions-ctrl').getAuth;
var PlacesCtrl = require('../controllers/places-ctrl'),
    postPlaces = PlacesCtrl.postPlaces;

var places = express.Router();

places.route('/')
  .post(getAuth, postPlaces);

module.exports = places;