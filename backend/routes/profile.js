// // const express = require("express");
// // const router = express.Router();
// // const User = require("../models/userprofile");

// // router.get("/id/:userId", async (req, res) => {
// //   try {
// //     const user = await User.findById(req.params.userId);
// //     if (!user) return res.status(404).json({ error: "User not found" });
// //     res.json(user);
// //   } catch (err) {
// //     res.status(500).json({ error: "Server error" });
// //   }
// // });

// // // ✅ GET profile by email (optional)
// // router.get("/:email", async (req, res) => {
// //   try {
// //     const user = await User.findOne({ email: req.params.email });
// //     if (!user) return res.status(404).json({ message: "User not found" });
// //     res.json(user);
// //   } catch (err) {
// //     res.status(500).json({ message: "Server error", error: err.message });
// //   }
// // });

// // // ✅ PUT update by email
// // router.put("/:email", async (req, res) => {
// //   try {
// //     const { name, location, avatar } = req.body;
// //     let user = await User.findOne({ email: req.params.email });

// //     if (!user) {
// //       return res.status(404).json({ message: "User not found" });
// //     }

// //     user.name = name;
// //     user.location = location;
// //     user.avatar = avatar;

// //     await user.save();
// //     res.json(user);
// //   } catch (err) {
// //     res.status(500).json({ message: "Failed to update profile", error: err.message });
// //   }
// // });

// // module.exports = router;


// const express = require('express');
// const router = express.Router();
// const User = require('../models/userprofile'); // adjust path if needed

// // GET user by email
// router.get('/:email', async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.params.email });
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // PATCH user by email
// router.patch('/:email', async (req, res) => {
//   try {
//     const updatedUser = await User.findOneAndUpdate(
//       { email: req.params.email },
//       { $set: req.body },
//       { new: true }
//     );

//     if (!updatedUser) return res.status(404).json({ message: 'User not found' });
//     res.json(updatedUser);
//   } catch (err) {
//     res.status(500).json({ message: 'Update failed' });
//   }
// });

// // DELETE user by email
// router.delete('/:email', async (req, res) => {
//   try {
//     const deletedUser = await User.findOneAndDelete({ email: req.params.email });
//     if (!deletedUser) return res.status(404).json({ message: 'User not found' });
//     res.json({ message: 'User deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ message: 'Deletion failed' });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const User = require('../models/userprofile'); // Adjust path if needed

// ✅ GET user by ID
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// ✅ PATCH user by ID
router.patch('/:userId', async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.userId,
    { $set: req.body },
    { new: true }
  );

  if (!updatedUser) return res.status(404).json({ message: 'User not found' });
  res.json(updatedUser);
});


// ✅ DELETE user by ID
router.delete('/:userId', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userId);
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Deletion failed', error: err.message });
  }
});

module.exports = router;

