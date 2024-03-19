const express = require('express')
const bookRouter = express.Router();
const booksService = require("../services/bookManagementService")
const sequelize = require('../config/database')

bookRouter.post('/books/create', booksService.createBook);
bookRouter.get('/books/getAll', booksService.getAllBooks);
bookRouter.get('/books/getOne/:bookId', booksService.getOneBook);


module.exports = bookRouter;