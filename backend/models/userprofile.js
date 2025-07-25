const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  location: String,
  avatar: String,
  since: String,
  booksShared: Number,
  membership: String,
});

// 👇 Fix: Check if model is already compiled
module.exports = mongoose.models.User || mongoose.model("User", userSchema);
