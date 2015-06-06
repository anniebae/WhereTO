var express = require('express');
var Place = require('../models/place');

exports.postPlaces = function(req, res) {
  console.log('mcblovin: ', req.body);
  console.log('Current User: ', req.user);
  var currentUser = req.user;
  var place = new Place({
    venue      : req.body.venue,
    yelpId     : req.body.yelpId,
    city       : req.body.city,
    zipcode    : req.body.zipcode,
    category   : req.body.category
  });
  currentUser.places.push(place);

  currentUser.save(function(err) {
    if (err) return console.log(err); 
    console.log('Me just saved: ', place);
    res.redirect('/search');
  });
}