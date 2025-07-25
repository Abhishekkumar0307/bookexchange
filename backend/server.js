const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Core Routes
const authRoutes = require('./routes/auth');
const historyRoutes = require('./routes/history');


const borrowRequestRoutes = require('./routes/borrowRequests');
const notificationRoutes = require("./routes/notifications");
const exchangeChatRoutes = require("./routes/exchangeChat");
const homeRoutes = require('./routes/homeRoutes');
const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/profile");

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/history', historyRoutes);
app.use('/api/borrowrequests', borrowRequestRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/exchangechat", exchangeChatRoutes);
app.use('/api', homeRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected to bookloop database');
    app.listen(5000, () => console.log('🚀 Server running at http://localhost:5000'));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
