const mongoose = require('mongoose');

const userHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bookTitle: String,
  bookImage: String,
  status: String, // Borrowed, Returned, etc.
  category: String, // Fiction, History, etc.
  type: String, // borrowed or lent
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserHistory', userHistorySchema);
