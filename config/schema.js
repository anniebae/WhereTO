var mongoose = require('mongoose');

exports.User = function() {
  return new mongoose.Schema({
    name        : {type: String, required: true},
    password    : {type: String, required: true},
    email       : {type: String, required: true, unique: true},
    username    : {type: String, required: true, unique: true},
    
  });
};

export.Place = function() {
  return new mongoose.Schema({
    name        : {type: String, required: true},
    location    : {type: String, required: true},
    yelpId      : {type: Number, require: true}
  });
}