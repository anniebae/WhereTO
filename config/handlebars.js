// node_modules
var handlebars = require('express-handlebars');

// own unique module
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