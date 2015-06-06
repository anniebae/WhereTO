var mongoose = require('mongoose');
var collectionSchema = require('../config/schema').Collection();

module.exports = mongoose.model('Collection', collectionSchema);