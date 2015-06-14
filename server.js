var express = require('express'),
    methodOverride = require('method-override'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    mongoose = require('mongoose'),
    passport      = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    LocalConfig   = require('./config/passport-local')(passport),
    db = require('./config/db')(mongoose);


var User = require('./models/user');

var authRouter   = require('./routes/auth-router');
var usersRouter  = require('./routes/users-router');
var placesRouter = require('./routes/places-router');
var apiRouter    = require('./routes/api-router');

var app = module.exports = express();

var root = __dirname + '/public';

// Handlebars
var hbs = require('./config/handlebars');
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
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
app.use(express.static(root));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', authRouter);
app.use('/api', apiRouter);
app.use('/users', usersRouter);
app.use('/places', placesRouter);


var listeningOn = require('./index');