require('dotenv').load();

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var helmet = require('helmet');
var session = require('express-session');
var csurf = require('csurf');

var responseLocals = require('./middleware/responseLocals');
var appLocals = require('./locals');
var viewHelpers = require('./helpers');

var pages = require('./routes/pages');
var posts = require('./routes/posts');
var topics = require('./routes/topics');
var news =  require('./routes/news');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(expressLayouts);

// helmet for security
app.use(helmet());

// configure express-session
var sessionConfig = {
  secret: 'testnews0078',
  resave: false,
  saveUninitialized: true,
  name: '_session',
  cookie: {}
};

if (app.get('env') === 'production') {
  // app.set('trust proxy', 1);
  sessionConfig.cookie.secure = true;
}

app.use(session(sessionConfig));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

// for CSRF protection using csurf
var csrfMiddleware = csurf({ cookie: true });
app.use(csrfMiddleware);

app.locals = Object.assign(viewHelpers, appLocals);
app.use(responseLocals);

// route namespaces
app.use('/', pages);
app.use('/posts', posts);
app.use('/topics', topics);
app.use('/news', news);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('common/error');
});

module.exports = app;
