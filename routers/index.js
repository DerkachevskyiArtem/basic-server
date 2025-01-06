const express = require('express');
const bookRouter = require('./booksRouters');
const rootRouter = express.Router();

rootRouter.use('/books', bookRouter);

module.exports = rootRouter;
