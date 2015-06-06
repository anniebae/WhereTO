var express    = require('express');
var PlacesCtrl = require('../controllers/places-ctrl'),
    postPlaces = PlacesCtrl.postPlaces;

var places = express.Router();

places.route('/')
  .post(getAuth, postPlaces);

function getAuth(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
    res.redirect('/welcome')
  }

module.exports = places;