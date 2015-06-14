var express = require('express'),
    methodOverride = require('method-override'),
    methodConfig = require('./config/method-override'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    mongoose = require('mongoose'),
    passport      = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    LocalConfig   = require('./config/passport-local')(passport),
    db = require('./config/db')(mongoose),
    authRouter   = require('./routes/auth-router'),
    usersRouter  = require('./routes/users-router'),
    placesRouter = require('./routes/places-router'),
    apiRouter    = require('./routes/api-router'),
    hbs = require('./config/handlebars'),
    root = __dirname + '/public';

var app = module.exports = express();

app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('hbs', hbs.engine);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'dudeman jones',
  resave: false,
  saveUninitialized: false
}));
app.use(methodOverride(methodConfig));
app.use(express.static(root));
app.use(logger('dev'));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', authRouter);
app.use('/api', apiRouter);
app.use('/users', usersRouter);
app.use('/places', placesRouter);

var listeningOn = require('./index');