const express = require("express");
const Notification = require("../models/Notification");

const router = express.Router();

// Get all notifications for a user
router.get("/:userId", async (req, res) => {
  try {
    const notifications = await Notification.find({ userId: req.params.userId })
      .sort({ createdAt: -1 });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Add a new notification
router.post("/", async (req, res) => {
  const { userId, message } = req.body;

  try {
    const newNotification = new Notification({ userId, message });
    await newNotification.save();
    res.status(201).json({ message: "Notification created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to create notification" });
  }
});

module.exports = router;
