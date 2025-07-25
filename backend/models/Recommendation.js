const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
  userId: String,
  title: String,
  imageUrl: String,
  price: Number
});

module.exports = mongoose.model('Recommendation', recommendationSchema);
