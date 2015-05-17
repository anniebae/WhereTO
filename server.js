var express       = require('express');
var app           = express();
var mongoose      = require('mongoose');
var bodyParser    = require('body-parser');
var cookieParser  = require('cookie-parser');
var session       = require('express-session');
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash         = require('connect-flash');
var handlebars    = require('express-handlebars');
var bcrypt        = require('bcrypt');
var apiRouter     = require('./routes/api-router');
var appRouter     = require('./routes/app-router');
var database      = require('./config/database');

mongoose.connect(database.url);

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
app.use(cookieParser());
app.use(bodyParser());
app.use(express.static(root));

app.use(session({ secret: 'dudemanjones' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

// Routes
app.get('/', appRouter);
app.get('/welcome', appRouter);
app.post('/api/search', apiRouter);

app.listen(8000, function(){
    console.log("WhereTO running");
})