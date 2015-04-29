var express = require('express');
var app     = express();


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');

app.get('/', function(req, res){
  res.render('index');
});

app.listen(8000, function(){
    console.log("WhereTO running");
})