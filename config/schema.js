var mongoose = require('mongoose');

exports.Collection = function() {
  new mongoose.Schema({
    name        : {type: String},
    places      : []
  });
}

exports.User = function() {
  return new mongoose.Schema({
    name        : {type: String, required: true},
    password    : {type: String, required: true},
    email       : {type: String, required: true, unique: true},
    username    : {type: String, required: true, unique: true},
    collections : []
  });
}


exports.Place = function() {
  return new mongoose.Schema({
    name        : {type: String, required: true},
    location    : {type: String, required: true},
    yelpId      : {type: Number, require: true},
    collection  : {type: String}
  });
}
