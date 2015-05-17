var express          = require('express');
var app              = express();
var Firebase         = require('firebase');
var handlebars       = require('express-handlebars');
var apiRouter        = require('./routes/api-router');
var appRouter        = require('./routes/app-router');

var hbs = handlebars.create({
    defaultLayout:'main',
    extname: '.hbs',
    partialsDir: ['views/welcome', 'views/query', 'views/dependencies', 'views/partials']

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

app.post('/api/search', apiRouter);


app.listen(8000, function(){
    console.log("WhereTO running");
})