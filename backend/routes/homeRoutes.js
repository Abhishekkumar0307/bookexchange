const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const Recommendation = require('../models/Recommendation');
const Insight = require('../models/Insight');
const Event = require('../models/Event');

// GET trending books
router.get('/books/trending', async (req, res) => {
  try {
    const trendingBooks = await Book.find().sort({ popularity: -1 }).limit(6);
    res.json(trendingBooks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET personalized recommendations
router.get('/recommendations/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const recommendations = await Recommendation.find({ userId });
    res.json(recommendations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET user insights
router.get('/insights/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const insight = await Insight.findOne({ userId });
    res.json(insight);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET upcoming events
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
