const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  src: String,
  location: String,
  price: Number,
});

module.exports = mongoose.model('searchbook', bookSchema);
