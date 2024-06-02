const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Route to get all books using lean()
router.get('/', async (req, res) => {
    try {
        const books = await Book.find().lean();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
