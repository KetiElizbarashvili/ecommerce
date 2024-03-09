const express = require('express')
const bookRouter = express.Router();
const booksService = require("../services/bookManagementService")

bookRouter.post('/books/create', booksService.createBook);
bookRouter.get('/books/getAll', booksService.getAllBooks);
bookRouter.get('/books/getOne/:bookId', booksService.getOneBook);
bookRouter.delete('/books/delete/:bookId', booksService.deleteBook);
bookRouter.put('/books/update/:bookId', booksService.updateBook); 

module.exports = bookRouter;