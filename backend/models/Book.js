/*const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  genre: String,
  imageUrl: String,
  popularity: Number,
});

module.exports = mongoose.model('Book', bookSchema);
*/
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  imageUrl: String,
  price: Number,
  popularity: Number
});

module.exports = mongoose.model('Book', bookSchema);
