const books = require("../books.json");

function getAllBooks(req, res) {
    return res.json(books)
}

function getOneBook(req, res) {
    let bookId = req.params.bookId;
    bookId = parseInt(bookId);

    for (let book of books) {
        if (book.id === bookId) {
            return res.json(book);
        }
    }

    return res.status(404).json({
        success: false,
        message: "Error, Book not found"
    });
}

function createBook(req, res) {
    let usedIds = [];

    for (let book of books) {
        usedIds.push(book.id)
    }

    let maxNumber = Math.max(...usedIds);

    let newId = maxNumber + 1;

    let requestBody = req.body;
    requestBody.id = newId;
    books.push(requestBody);

    return res.json({
        success: true,
        message: "New Data added"
    })
}

module.exports = {
    getAllBooks,
    getOneBook,
    createBook
}