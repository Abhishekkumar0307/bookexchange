const Book = require('../models/Book');

exports.searchBooks = async (req, res) => {
  const { query } = req.query;
  try {
    const books = await Book.find({
      $or: [
        { title: new RegExp(query, 'i') },
        { author: new RegExp(query, 'i') }
      ]
    });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTrendingBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ popularity: -1 }).limit(4);
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
