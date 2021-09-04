const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./src/routes/indexRoutes');
const authRouter = require('./src/routes/authRoutes');
const characterRouter = require('./src/routes/characterRoutes');
const movieRouter = require('./src/routes/movieRoutes');
const genreRouter = require('./src/routes/genreRoutes');

const app = express();

// const db = require('./db');

app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/characters', characterRouter);
app.use('/movies', movieRouter);
app.use('/genres', genreRouter);

module.exports = app;
