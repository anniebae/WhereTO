var express       = require('express');
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var bodyParser    = require('body-parser');
var cookieParser  = require('cookie-parser');
var mongoose      = require('mongoose');
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var app = express();

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
app.use(express.static(root));

// Authentication Initialization
app.use(passport.initialize());
app.use(passport.session());

// Routes
var routes = require('./routes/router');
var apiRouter = require('./routes/api-router');
app.use('/', routes);
app.use('/api', apiRouter);

// Models
var User = require('./models/user');

// Authentication Configuration
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Database
var database = require('./config/database')(mongoose);

// Authentication Controller
var authentication = require('./config/authentication')(passport);


app.listen(8000, function(){
    console.log("WhereTO running");
});