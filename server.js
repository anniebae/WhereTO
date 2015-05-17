var express          = require('express');
var app              = express();
var request          = require('request');
var bodyParser       = require('body-parser');
var ejs              = require('ejs');
var Firebase         = require('firebase');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var yelp             = require("yelp").createClient({
  consumer_key: process.env.YELP_CONSUMER_KEY, 
  consumer_secret: process.env.YELP_CONSUMER_SECRET,
  token: process.env.YELP_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET
});
var root = __dirname + '/public';
var ref = new Firebase('https://where-to.firebaseio.com');

app.use(express.static(root));
app.set('view engine', 'ejs');
app.set('views', root + '/views');

app.get('/', function(req, res){
  res.render('layouts/welcome');
});

app.post('/api/authenticate', urlencodedParser, function(req, res) {
  if (!req.body) return res.sendStatus(400)
    var request = req.body;
    var token = request.user('token');
    console.log(token);
  if (token === "")
    res.redirect('/');
  else {
    res.redirect('/dashboard');
  }
});

app.get('/dashboard', function(req, res) {
  res.render('layouts/application');
});

app.post('/api/search', urlencodedParser, function(req, res) {
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


app.listen(8000, function(){
    console.log("WhereTO running");
})