var http = require('http');
var express = require('express');
var moviesRouter = require('./routes/moviesRouter');
var booksRouter = require('./routes/booksRouter');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var db = mongoose.connect('mongodb://localhost/MoviesDb');

app.use(bodyParser.json());
app.use('/books', booksRouter);
app.use('/movies', moviesRouter);

app.listen(3000);