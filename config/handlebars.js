// node_modules
var handlebars = require('express-handlebars');

// own unique module
var viewDirectories = [
  'views/welcome',
  'views/search',
  'views/dependencies',
  'views/navbars'
];

var hbs = handlebars.create({
    defaultLayout:'main',
    extname: '.hbs',
    partialsDir: viewDirectories,
    layoutsDir: 'views/layouts'
  });

module.exports = hbs;