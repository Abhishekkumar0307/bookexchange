const mongoose = require('mongoose');

const insightSchema = new mongoose.Schema({
  userId: String,
  booksRead: Number,
  avgRating: Number,
  mostPopularGenre: String
});

module.exports = mongoose.model('Insight', insightSchema);
