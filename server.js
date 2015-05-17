var express          = require('express');
var app              = express();
var request          = require('request');
var bodyParser       = require('body-parser');
var Firebase         = require('firebase');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var handlebars       = require('express-handlebars');


var hbs = handlebars.create({
    defaultLayout:'main',
    extname: '.hbs',
    partialsDir: ['views/welcome', 'views/query', 'views/dependencies', 'views/partials'],

  });

var root = __dirname + '/public';

app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('hbs', hbs.engine);
app.use(express.static(root));


app.get('/', function(req, res){
  res.render('welcome/index');
});

app.get('/dashboard', function(req, res) {
  res.render('query/index');
});






var yelp = require("yelp").createClient({
  consumer_key: process.env.YELP_CONSUMER_KEY, 
  consumer_secret: process.env.YELP_CONSUMER_SECRET,
  token: process.env.YELP_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET
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