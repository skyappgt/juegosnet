'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const router = express.Router();

//routes 
var indexRouter = require('../routes/index');
//var usersRouter = require('../routes/users');

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);


app.use(bodyParser.json());
app.use('/.netlify/functions/server', indexRouter);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);

