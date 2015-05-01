var express          = require('express');
var app              = express();
var request          = require('request');
var bodyParser       = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var yelp             = require("yelp").createClient({
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


app.post('/api/search', urlencodedParser, function(req, res) {
	var location = "Montreal";
	var food = "food";
	yelp.search({term: food, location: location}, function(error, data) {
  	console.log(error);
  	console.log(data);
  	res.json(data);
	});
});


app.post('/api', urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  var request = req.body;
  var cityInput = request.city;
  var location = cityInput.split(' ').join('-');
  var city = 'yelp-' + location;
  console.log(city);
  yelp.business(city, function(error, data) {
    console.log(error);
    console.log(data);
    res.json(data);
    
    console.log(data);
  });
});


app.listen(8000, function(){
    console.log("WhereTO running");
})