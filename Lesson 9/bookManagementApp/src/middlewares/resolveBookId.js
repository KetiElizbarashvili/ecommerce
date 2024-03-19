const BookModel = require('../models/BookModel');

async function resolveBookId(request, response, next) {
    const bookId = request.params.bookId;

    const bookData = await BookModel.findByPk(parseInt(bookId));

    if (!bookData) {
        console.error(`NO_BOOK_FOUND, bookId: ${bookId}`);
        return response.status(400).json({
            success: false,
            message: 'No book found for given ID',
        });
    }

    request.book = bookData.toJSON();

    await next();
}

module.exports = { resolveBookId };
