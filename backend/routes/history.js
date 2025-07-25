const express = require('express');
const router = express.Router();
const UserHistory = require('../models/UserHistory');

// POST /api/history/add – Add a new history entry
router.post('/add', async (req, res) => {
  const { userId, bookTitle, bookImage, status, category, type, date } = req.body;

  try {
    const newEntry = new UserHistory({
      userId,
      bookTitle,
      bookImage,
      status,
      category,
      type,
      date,
    });

    await newEntry.save();
    res.status(201).json({ message: 'History added successfully' });
  } catch (err) {
    console.error('❌ Error adding history:', err);
    res.status(500).json({ error: err.message });
  }
});

// GET /api/history/:userId – Fetch all history for a user
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    const history = await UserHistory.find({ userId }).sort({ date: -1 });

    if (!history || history.length === 0) {
      return res.status(404).json({ message: 'No history found for this user' });
    }

    res.json(history);
  } catch (err) {
    console.error('❌ Error fetching history:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
