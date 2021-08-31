var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./src/routes/indexRoutes');
var authRouter = require('./src/routes/authRoutes');
var characterRouter = require('./src/routes/characterRoutes');
var movieRouter = require('./src/routes/movieRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/characters', characterRouter);
app.use('/movies', movieRouter);

module.exports = app;
