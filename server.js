var express = require('express');
var app     = express();
var request = require('request');
var yelp = require("yelp").createClient({
  consumer_key: process.env.YELP_CONSUMER_KEY, 
  consumer_secret: process.env.YELP_CONSUMER_SECRET,
  token: process.env.YELP_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET
});

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/api', function(req, res) {
  yelp.business("yelp-san-francisco", function(error, data) {
    console.log(error);
    console.log(data);
    res.json(data);
  });
});

app.listen(8000, function(){
    console.log("WhereTO running");
})