const books = require('../books.json');
const Joi = require('joi');
const BookModel = require('../models/BookModel');

const genreSchema = Joi.array();

const bookCreationSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().max(100).required(),
    publication_year: Joi.number()
        .integer()
        .min(1000)
        .max(new Date().getFullYear())
        .required(),
    genre: genreSchema,
    description: Joi.string().optional(),
    cover_image: Joi.string().uri().required(),
});

async function getAllBooks(req, res) {
    const allBooks = await BookModel.findAll();

    return res.json(allBooks);
}

function getOneBook(req, res) {
    const book = req.book;
    if (!book) {
        return res.status(404).json({
            success: false,
            message: 'Error, Book not found',
        });
    }

    return res.status(200).json({
        success: true,
        book,
    });
}

async function createBook(req, res) {
    const { error, value: requestBody } = bookCreationSchema.validate(req.body);

    if (error) {
        return res
            .status(400)
            .json({ success: false, message: error.details[0].message });
    }

    const newBook = await BookModel.create(requestBody);

    if (!newBook) {
        return res.status(400).json({
            success: false,
            message: 'Error, could not add data to db',
        });
    }

    return res.json({
        success: true,
        message: 'New Data added',
    });
}

const bookUpdateSchema = Joi.object({
    title: Joi.string(),
    author: Joi.string().max(100),
    publication_year: Joi.number()
        .integer()
        .min(1000)
        .max(new Date().getFullYear()),
    genre: genreSchema,
    description: Joi.string().allow(null),
    cover_image: Joi.string().uri(),
});

async function updateBook(req, res) {
    const bookId = req.book.id;
    console.log(bookId);
    const { error, value: requestBody } = bookUpdateSchema.validate(req.body);

    if (error) {
        return res
            .status(400)
            .json({ success: false, message: error.details[0].message });
    }

    try {
        const [updatedRowsCount] = await BookModel.update(requestBody, {
            where: { id: bookId },
        });

        if (updatedRowsCount === 0) {
            return res.status(404).json({
                success: false,
                message: 'Error, Book not found',
            });
        }

        return res.json({
            success: true,
            message: 'Book updated successfully',
        });
    } catch (error) {
        console.error('Error updating book:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
}

async function deleteBook(req, res) {
    const bookId = req.book.id;

    try {
        const deletedRowsCount = await BookModel.destroy({
            where: { id: bookId },
        });

        if (deletedRowsCount === 0) {
            return res.status(404).json({
                success: false,
                message: 'Error, Book not found',
            });
        }

        return res.json({
            success: true,
            message: 'Book deleted successfully',
        });
    } catch (error) {
        console.error('Error deleting book:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
}

module.exports = {
    getAllBooks,
    getOneBook,
    createBook,
    updateBook,
    deleteBook,
};
