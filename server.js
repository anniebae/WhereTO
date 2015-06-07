// Node modules
var express        = require('express');
var methodOverride = require('method-override');
var path           = require('path');
var favicon        = require('serve-favicon');
var logger         = require('morgan');
var bodyParser     = require('body-parser');
var cookieParser   = require('cookie-parser');

// Schema
var mongoose = require('mongoose');

// User Authentication
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var LocalConfig   = require('./config/passport-local')(passport);

// Database
var db = require('./config/db')(mongoose);

// Models
var User = require('./models/user');

// Controllers
var UsersCtrl = require('./controllers/users-ctrl');

// Routes
var authRouter   = require('./routes/auth-router');
var usersRouter  = require('./routes/users-router');
var placesRouter = require('./routes/places-router');
var apiRouter    = require('./routes/api-router');

var app = express();


// __dirname (express variable) is head of file (WhereTO) 
var root = __dirname + '/public';

// Handlebars
var hbs = require('./config/handlebars');
app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('hbs', hbs.engine);

// Express Configuration
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
    var method = req.body._method
    delete req.body._method
    return method
  }
}));
app.use(express.static(root));

// Authentication Initialization
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', authRouter);
app.use('/api', apiRouter);
app.use('/users', usersRouter);
app.use('/places', placesRouter);

// Authentication Configuration
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.listen(8000, function(){
    console.log("WhereTO running");
});