const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact - save a message
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ message: 'All fields are required' });

    const contact = new Contact({ name, email, message });
    await contact.save();
    res.json({ message: 'Message received' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/contact - list messages (for owner use)
router.get('/', async (req, res) => {
  try {
    const list = await Contact.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
