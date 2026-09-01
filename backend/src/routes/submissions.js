const express = require('express');
const rateLimit = require('express-rate-limit');
const Submission = require('../models/Submission');
const { requireAdmin } = require('../middleware/auth');

const router = express.Router();

const submitLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
});

// Public: any of the 11 site forms posts here.
router.post('/', submitLimiter, async (req, res) => {
  const { service, firstName, lastName, name, email, phone, preferredDate, contactMethod, topic, message } = req.body || {};

  if (!service || !email) {
    return res.status(400).json({ error: 'service and email are required' });
  }

  if (!Submission.SERVICE_VALUES.includes(service)) {
    return res.status(400).json({ error: 'Unknown service value' });
  }

  const submission = await Submission.create({
    service,
    firstName,
    lastName,
    name,
    email,
    phone,
    preferredDate,
    contactMethod,
    topic,
    message,
    source: req.headers.referer || undefined,
  });

  res.status(201).json({ id: submission._id });
});

// Admin: list submissions, newest first, optional filters.
router.get('/', requireAdmin, async (req, res) => {
  const { service, status, page = 1, limit = 25 } = req.query;

  const filter = {};
  if (service) filter.service = service;
  if (status) filter.status = status;

  const pageNum = Math.max(1, parseInt(page, 10) || 1);
  const limitNum = Math.min(100, Math.max(1, parseInt(limit, 10) || 25));

  const [items, total] = await Promise.all([
    Submission.find(filter)
      .sort({ createdAt: -1 })
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum),
    Submission.countDocuments(filter),
  ]);

  res.json({ items, total, page: pageNum, limit: limitNum });
});

router.patch('/:id/status', requireAdmin, async (req, res) => {
  const { status } = req.body || {};
  if (!['new', 'contacted', 'closed'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }

  const submission = await Submission.findByIdAndUpdate(req.params.id, { status }, { new: true });
  if (!submission) return res.status(404).json({ error: 'Submission not found' });

  res.json({ item: submission });
});

module.exports = router;
