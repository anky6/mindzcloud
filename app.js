var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var node_index = require('./functions/index');
var app = express();

import { StitchClientFactory } from 'mongodb-stitch'
let appId = 'myapp-lotbo'
let stitchClientPromise = StitchClientFactory.create(appId)
stitchClientPromise.then(client => {
  let db = client.service('mongodb', 'mongodb-atlas').db('Mindzcloud')
  let item = db.collection('Users')
  console.log(item)
}).then(result => console.log('success: ', result))
  .catch(e => console.log('error: ', e))


app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist')));
app.set('view engine', 'html');
//app.use('/books', express.static(path.join(__dirname, 'dist')));
app.use('/index', node_index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // Website you wish to allow to connect
res.setHeader('Access-Control-Allow-Origin', 'https://localhost:8080');

// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);

// Pass to next layer of middleware
next();
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
