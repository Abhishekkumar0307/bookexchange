const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const BorrowRequest = require('../models/BorrowRequest');

// Send a new borrow request
router.post('/send', async (req, res) => {
  try {
    const { senderId, receiverId, bookId, message } = req.body;

    const request = new BorrowRequest({
      senderId: new mongoose.Types.ObjectId(senderId),
      receiverId: new mongoose.Types.ObjectId(receiverId),
      bookId: new mongoose.Types.ObjectId(bookId),
      message,
    });

    await request.save();
    res.status(201).json({ message: 'Borrow request sent', request });

  } catch (err) {
    console.error('Detailed error:', err);
    res.status(500).json({
      message: 'Error sending request',
      error: err.message || 'Unknown error'
    });
  }
});

// Get incoming requests for a user
router.get('/incoming/:userId', async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.params.userId);  // ✅ Convert to ObjectId

    const rawRequests = await BorrowRequest.find({ receiverId: userId })
      .populate('bookId')
      .populate('senderId');

    const formattedRequests = rawRequests.map(req => ({
      _id: req._id,
      bookTitle: req.bookId?.title || 'Unknown Title',
      bookImage: req.bookId?.imageUrl || '',
      senderEmail: req.senderId?.email || 'Unknown Sender',
      status: req.status,
      timestamp: req.createdAt,
    }));

    res.json(formattedRequests);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching incoming requests', error: err });
  }
});

// Get outgoing requests for a user
router.get('/outgoing/:userId', async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.params.userId);  // ✅ Convert to ObjectId

    const rawRequests = await BorrowRequest.find({ senderId: userId })
      .populate('bookId')
      .populate('receiverId');

    const formattedRequests = rawRequests.map(req => ({
      _id: req._id,
      bookTitle: req.bookId?.title || 'Unknown Title',
      bookImage: req.bookId?.imageUrl || '',
      receiverEmail: req.receiverId?.email || 'Unknown Receiver',
      status: req.status,
      timestamp: req.createdAt,
    }));

    res.json(formattedRequests);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching outgoing requests', error: err });
  }
});

// Accept or reject a request
// PATCH route to update borrow request status
router.put('/:requestId', async (req, res) => {
  const { status } = req.body;

  try {
    const updated = await BorrowRequest.findByIdAndUpdate(
      req.params.requestId,
      { status },
      { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Request not found" });

    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Error updating request', error: err });
  }
});

module.exports = router;
