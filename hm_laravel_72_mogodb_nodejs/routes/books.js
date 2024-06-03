const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Route to get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        console.log(books)
        res.json(1);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to add a new book
router.post('/', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        publishedDate: req.body.publishedDate,
        pages: req.body.pages,
        language: req.body.language
    });

    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
