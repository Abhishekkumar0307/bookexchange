// const express = require('express');
// const { searchBooks, getTrendingBooks } = require('../controllers/bookController');
// const router = express.Router();

// router.get('/search', searchBooks);
// router.get('/trending', getTrendingBooks);

// module.exports = router;
const express = require('express');
const router = express.Router();
const Book = require('../models/Books');

// ✅ 1. Add new book
router.post('/add', async (req, res) => {
  const { title, src, location, price } = req.body;

  try {
    const newBook = new Book({ title, src, location, price });
    await newBook.save();
    res.status(201).json({ message: 'Book added successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add book' });
  }
});

// ✅ 2. Get all books (for frontend listing)
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

// ✅ 3. Search by location (optional)
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
