var express = require('express');


var app = express.Router();

app.get('/', function(req, res){
  res.render('welcome/index');
});

app.get('/dashboard', function(req, res) {
  res.render('query/index');
});

module.exports = app;