const Book = require('../models/Book');

exports.getRecommendations = async (req, res) => {
  const { userId } = req.params;

  try {
    // Dummy logic for now: return books by genre or top rated
    const recommendedBooks = await Book.find().limit(4);
    res.json(recommendedBooks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
