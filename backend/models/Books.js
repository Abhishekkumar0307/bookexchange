const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: String,
  author: String,
  description: String,
  imageUrl: String,
  condition: String,
  availability: String,
  location: String,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Books", bookSchema);
