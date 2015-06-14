var mongoose = require('mongoose');

exports.User = function() {
  return new mongoose.Schema({
    name        : {type: String, required: true},
    password    : {type: String, required: true},
    email       : {type: String, required: true, unique: true},
    username    : {type: String, required: true, unique: true},
    places      : [placeSchema]
  });
};


exports.Place = function() {
  return new mongoose.Schema({
    venue       : {type: String, required: true},
    city        : {type: String, required: true},
    zipcode     : {type: Number, required: true},
    yelpId      : {type: String, required: true},
    category    : {type: String},
    imageUrl    : {type: String}
  });
};

var placeSchema = this.Place();