const express = require('express');
const router = express.Router();
const Book = require('../models/searchbook');

// GET /api/books/search?location=delhi
router.get('/search', async (req, res) => {
  const { location } = req.query;

  try {
    const query = location
      ? { location: { $regex: new RegExp(location, 'i') } }
      : {};

    const books = await Book.find(query);
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

module.exports = router;
