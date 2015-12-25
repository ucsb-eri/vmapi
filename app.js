var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fileUtils = require('./fileUtils');

var LOGDIR = '/var/log/nodejs';
var LOGFILE = LOGDIR + '/dnsZoneDisplay.log';
var CONF = './config.json';

if ( fileUtils.fileExists(CONF) == false ) {
    // want to do some kind of error generation
    console.log('You need to copy config-default.json to config.json.');
    console.log('Then edit config.json to reflect any values specfied.');
    console.log('Most critical is the zonedir path.');
    process.exit(0);
}

var apiClientDefined = require('./routes/apiClientDefined');
var apiClientMac = require('./routes/apiClientMac');

var app = express();
// need to modify settings in ./bin/www
//app.set('port',3001);
//app.listen(3001);  // listen on 3001

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/clientDefined', apiClientDefined);
app.use('/api/clientMac', apiClientMac);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('DEV');
    //res.render('error', {
    //  message: err.message,
    //  error: err
    //});
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send('PROD');
  //res.render('error', {
  //  message: err.message,
  //  error: {}
  //});
});


module.exports = app;
