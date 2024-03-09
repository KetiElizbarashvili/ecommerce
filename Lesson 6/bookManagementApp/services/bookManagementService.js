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



function deleteBook(req, res) {
    const bookId = parseInt(req.params.bookId);
    const bookIndex = books.findIndex(book => book.id === bookId);

    if (bookIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Book not found"
        });
    }

    books.splice(bookIndex, 1);
    return res.json({
        success: true,
        message: "Book deleted successfully"
    });
}

function updateBook(req, res) {
    const bookId = parseInt(req.params.bookId);
    const bookIndex = books.findIndex(book => book.id === bookId);

    if (bookIndex === -1) {
        return res.status(404).json({
            success: false,
            message: "Book not found"
        });
    }

    const updatedData = req.body;
    books[bookIndex] = { ...books[bookIndex], ...updatedData };
    return res.json({
        success: true,
        message: "Book updated successfully"
    });
} 


module.exports = {
    getAllBooks,
    getOneBook,
    createBook,
    deleteBook,
    updateBook
}