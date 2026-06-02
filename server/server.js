// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const contactRoutes = require('./routes/contact');

// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use('/api/contact', contactRoutes);
// // serve static files in production (if built)
// if (process.env.NODE_ENV === 'production') {
//   const path = require('path');
//   app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
//   });
// }

// const PORT = process.env.PORT || 5000;
// const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio_db';

// mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('MongoDB connected');
//     app.listen(PORT, () => console.log('Server running on port', PORT));
//   })
//   .catch(err => {
//     console.error('DB connection error:', err.message);
//   });
// const API = process.env.REACT_APP_API || 'http://localhost:5000/api';

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const path = require("path");

// dotenv.config();
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// const MONGO = process.env.MONGO_URI || "mongodb://localhost:27017/portfolio_db";
// mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch(err => console.error("❌ DB connection error:", err.message));

// // Contact Schema & Model (instead of separate file)
// const contactSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   message: { type: String, required: true },
//   date: { type: Date, default: Date.now },
// });
// const Contact = mongoose.model("Contact", contactSchema);

// // Routes
// // Save contact form data
// app.post("/api/contact", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;
//     if (!name || !email || !message) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     const newContact = new Contact({ name, email, message });
//     await newContact.save();

//     res.status(201).json({ success: true, msg: "Message stored in DB" });
//   } catch (err) {
//     console.error("❌ Error saving contact:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // Get all contacts (optional - for admin)
// app.get("/api/contact", async (req, res) => {
//   try {
//     const contacts = await Contact.find().sort({ date: -1 });
//     res.json(contacts);
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // Serve React frontend in production
// // if (process.env.NODE_ENV === "production") {
// //   app.use(express.static(path.join(__dirname, "client", "build")));
// //   app.get("*", (req, res) => {
// //     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// //   });
// // }

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const path = require("path");

// dotenv.config();
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// const MONGO = process.env.MONGO_URI || "mongodb://localhost:27017/portfolio_db";

// mongoose.connect(MONGO, { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true 
// })
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch(err => console.error("❌ DB connection error:", err.message));

// // Contact Schema & Model
// const contactSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   message: { type: String, required: true },
//   date: { type: Date, default: Date.now },
// });

// const Contact = mongoose.model("Contact", contactSchema);

// // Routes
// // Save contact form data
// app.post("/api/contact", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     const newContact = new Contact({ name, email, message });
//     await newContact.save();

//     res.status(201).json({ success: true, msg: "Message stored in DB" });
//   } catch (err) {
//     console.error("❌ Error saving contact:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // Get all contacts (optional - for admin)
// app.get("/api/contact", async (req, res) => {
//   try {
//     const contacts = await Contact.find().sort({ date: -1 });
//     res.json(contacts);
//   } catch (err) {
//     console.error("❌ Error fetching contacts:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // // ✅ Serve frontend only if you deploy frontend + backend together
// // if (process.env.NODE_ENV === "production") {
// //   app.use(express.static(path.join(__dirname, "client", "build")));
// //   app.get("*", (req, res) => {
// //     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// //   });
// // }

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config();
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// const MONGO = process.env.MONGO_URI || "mongodb://localhost:27017/portfolio_db";
// mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("✅ MongoDB connected"))
//   .catch(err => console.error("❌ DB connection error:", err.message));

// // Contact Schema & Model
// const contactSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   message: { type: String, required: true },
//   date: { type: Date, default: Date.now },
// });
// const Contact = mongoose.model("Contact", contactSchema);

// // Routes
// app.post("/api/contact", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;
//     if (!name || !email || !message) {
//       return res.status(400).json({ error: "All fields are required" });
//     }

//     const newContact = new Contact({ name, email, message });
//     await newContact.save();

//     res.status(201).json({ success: true, msg: "Message stored in DB" });
//   } catch (err) {
//     console.error("❌ Error saving contact:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// app.get("/api/contact", async (req, res) => {
//   try {
//     const contacts = await Contact.find().sort({ date: -1 });
//     res.json(contacts);
//   } catch (err) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const MONGO = process.env.MONGO_URI || "mongodb://localhost:27017/portfolio_db";
mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ DB connection error:", err.message));

// Contact Schema & Model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});
const Contact = mongoose.model("Contact", contactSchema);

// Routes
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ success: true, msg: "Message stored in DB" });
  } catch (err) {
    console.error("❌ Error saving contact:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/api/contact", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
