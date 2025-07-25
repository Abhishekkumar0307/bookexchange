const express = require("express");
const router = express.Router();
const ExchangeMessage = require("../models/ExchangeMessage");

// 🟢 Get chat between two users
router.get("/:user1Id/:user2Id", async (req, res) => {
  const { user1Id, user2Id } = req.params;

  if (!user1Id || !user2Id) {
    return res.status(400).json({ message: "User IDs are required." });
  }

  try {
    const messages = await ExchangeMessage.find({
      $or: [
        { senderId: user1Id, receiverId: user2Id },
        { senderId: user2Id, receiverId: user1Id }
      ]
    }).sort({ time: 1 }); // ascending by time

    res.status(200).json(messages);
  } catch (err) {
    console.error("Error fetching chat:", err);
    res.status(500).json({ message: "Failed to fetch chat" });
  }
});

// 🟢 Send new message
router.post("/", async (req, res) => {
  const { senderId, receiverId, message } = req.body;

  if (!senderId || !receiverId || !message) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  try {
    const newMessage = new ExchangeMessage({
      senderId,
      receiverId,
      message,
      time: new Date() // ensure timestamp is set
    });

    const saved = await newMessage.save();
    res.status(201).json(saved); // return saved message
  } catch (err) {
    console.error("Error sending message:", err);
    res.status(500).json({ message: "Failed to send message" });
  }
});

module.exports = router;
