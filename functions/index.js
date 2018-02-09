var session = require('express-session');

var express = require('express')
  , vimeoAPI = require('./routes/vimeoAPI')
  , http = require('http')
  , path = require('path');
var router = express.Router();

router.post('/index', vimeoAPI.upload)
