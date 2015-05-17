var express       = require('express');
var handlebars    = require('express-handlebars');


var viewDirectories = [
  'views/welcome',
  'views/query',
  'views/dependencies',
  'views/partials'
];

var hbs = handlebars.create({
    defaultLayout:'main',
    extname: '.hbs',
    partialsDir: viewDirectories
  });

module.exports = hbs;