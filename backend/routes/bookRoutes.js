const express = require("express");
const Book = require("../models/Books");

const router = express.Router();

// POST /api/books/add
router.post("/add", async (req, res) => {
  const {
    userId,
    title,
    author,
    description,
    imageUrl,
    condition,
    availability,
    location,
    price,
  } = req.body;

  if (!userId || !title || !author || !price) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  try {
    const newBook = new Book({
      userId,
      title,
      author,
      description,
      imageUrl,
      condition,
      availability,
      location,
      price,
    });

    await newBook.save();
    res.status(201).json({ message: "Book added successfully", book: newBook });
  } catch (error) {
    console.error("Add Book Error:", error);
    res.status(500).json({ message: "Server error while adding book." });
  }
});

module.exports = router;
