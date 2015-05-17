var express       = require('express');
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var bodyParser    = require('body-parser');
var cookieParser  = require('cookie-parser');
var mongodb       = require('mongodb');
var mongoose      = require('mongoose');
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var handlebars    = require('express-handlebars');


var routes = require('./routes/router');
var apiRouter = require('./routes/api-router');

var app = express();

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

// Express Config
var root = __dirname + '/public';

app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('hbs', hbs.engine);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'dudeman jones',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(root));

// Routes
app.use('/', routes);
app.use('/api', apiRouter);

var User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.connect('mongodb://localhost/where-to', function(err) {
  if (err) {
    console.log('Could not connect! Ensure that you have mongodb running on localhost!');
  }
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log('Connected to DB');
});

var authentication = require('./config/authentication')(passport);


app.listen(8000, function(){
    console.log("WhereTO running");
})