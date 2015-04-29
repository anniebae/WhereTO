var express = require('express');
var app     = express();
var request = require('request');


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/search', function(req, res) {
	

	var request = require('request');
	request('http://api.yelp.com/v2/search/?location=New%20York,%20NY', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    console.log(body) // Show the HTML for the Google homepage. 
	  }
	});

});

app.listen(8000, function(){
    console.log("WhereTO running");
})