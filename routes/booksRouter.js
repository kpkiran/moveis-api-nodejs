var express = require('express');
var booksController = require('./../controllers/booksController');
var booksRouter = express.Router();

booksRouter.route('')
    .get(booksController);

module.exports = booksRouter;