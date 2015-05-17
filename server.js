var express          = require('express');
var app              = express();
var handlebars       = require('express-handlebars');
var apiRouter        = require('./routes/api-router');
var appRouter        = require('./routes/app-router');

// Handlebars
var viewDirectories = [
  'views/welcome',
  'views/query',
  'views/dependencies',
  'views/partials'
];
var hbs = handlebars.create({
    defaultLayout:'main',
    extname: '.hbs',
    partialsDir: viewDirectories
  });

// Config
var root = __dirname + '/public';
app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('hbs', hbs.engine);
app.use(express.static(root));


// Routes
app.get('/', appRouter);
app.get('/dashboard', appRouter);
app.post('/api/search', apiRouter);

app.listen(8000, function(){
    console.log("WhereTO running");
})