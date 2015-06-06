var mongoose = require('mongoose');
var placeSchema = require('../config/schema').Place();

module.exports = mongoose.model('Place', placeSchema);