var express = require('express');
var request          = require('request');
var bodyParser       = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var yelp 						 = require("yelp").createClient({
  consumer_key: process.env.YELP_CONSUMER_KEY, 
  consumer_secret: process.env.YELP_CONSUMER_SECRET,
  token: process.env.YELP_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET
});
    
var apiRouter = express.Router();

apiRouter.post('/api/search', urlencodedParser, function(req, res) {
  if (!req.body) return res.sendStatus(400)
  var request = req.body; // to be the params from search filed
  var location = request.location;
  var term = request.term;
  yelp.search({term: term, location: location}, function(error, data) {
    console.log(error);
    console.log(data);
    res.json(data);
  });
});


module.exports = apiRouter;