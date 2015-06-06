var mongoose = require('mongoose');
var placeSchema = require('../config/schema').Place();
var collectionSchema = require('../config/schema').Collection();



module.exports = mongoose.model('Place', placeSchema, collectionSchema);