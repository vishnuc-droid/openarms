const express = require('express');
const rateLimit = require('express-rate-limit');
const Submission = require('../models/Submission');
const { requireAdmin } = require('../middleware/auth');
const { sendTeamNotification, buildNotificationHtml } = require('../config/mailer');

const router = express.Router();

const submitLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
});

// Public: any of the 11 site forms posts here.
router.post('/', submitLimiter, async (req, res) => {
  const { service, firstName, lastName, name, email, phone, preferredDate, insurance, insuranceOther, contactMethod, topic, message } = req.body || {};

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
    insurance,
    insuranceOther,
    contactMethod,
    topic,
    message,
    source: req.headers.referer || undefined,
  });

  {
    const displayName = submission.name || `${submission.firstName || ''} ${submission.lastName || ''}`.trim() || submission.email;
    const rows = [
      { label: 'Name', value: displayName },
      { label: 'Email', value: submission.email },
      { label: 'Phone', value: submission.phone },
      { label: 'Service', value: submission.topic || submission.service },
      { label: 'Payment/Insurance', value: submission.insurance },
      { label: 'Preferred Contact Method', value: submission.contactMethod },
      { label: 'Message', value: submission.message },
    ];

    sendTeamNotification({
      subject: `New Appointment Request — ${displayName}`,
      text: [
        `A new appointment request was submitted.`,
        ``,
        ...rows.map((r) => `${r.label}: ${r.value || '—'}`),
        ``,
        `This lead has NOT yet completed Step 2 (Eligibility Information).`,
      ].join('\n'),
      html: buildNotificationHtml({
        heading: 'New Appointment Request',
        intro: 'A new appointment request was submitted through the website.',
        rows,
        footerNote: 'This lead has NOT yet completed Step 2 (Eligibility Information).',
      }),
    });
  }

  res.status(201).json({ id: submission._id });
});

// Public: Step 2 (Eligibility Information) attaches to an existing Step 1 lead by id.
// No admin auth — the visitor only has the id from their own Step 1 submission,
// and this endpoint can only ever touch eligibility-specific fields on that one record.
router.patch('/:id/eligibility', submitLimiter, async (req, res) => {
  const {
    dob,
    servicesFor,
    parentGuardianName,
    relationshipToClient,
    address,
    city,
    state,
    zip,
    memberId,
  } = req.body || {};

  if (!dob || !servicesFor || !address || !city || !state || !zip) {
    return res.status(400).json({ error: 'dob, servicesFor, address, city, state, and zip are required' });
  }
  if (!['Myself', 'My child', 'Another dependent'].includes(servicesFor)) {
    return res.status(400).json({ error: 'Invalid servicesFor value' });
  }
  if (servicesFor !== 'Myself' && (!parentGuardianName || !relationshipToClient)) {
    return res.status(400).json({ error: 'parentGuardianName and relationshipToClient are required for a dependent' });
  }

  const submission = await Submission.findByIdAndUpdate(
    req.params.id,
    {
      dob,
      servicesFor,
      parentGuardianName,
      relationshipToClient,
      address,
      city,
      state,
      zip,
      memberId,
      eligibilityCompletedAt: new Date(),
    },
    { new: true, runValidators: true }
  ).catch(() => null);

  if (!submission) return res.status(404).json({ error: 'Submission not found' });

  {
    const displayName = submission.name || `${submission.firstName || ''} ${submission.lastName || ''}`.trim() || submission.email;
    const isDependent = submission.servicesFor !== 'Myself';
    const rows = [
      { label: 'Name', value: displayName },
      { label: 'Email', value: submission.email },
      { label: 'Date of Birth', value: submission.dob },
      { label: 'Services For', value: submission.servicesFor },
      isDependent && { label: 'Parent/Guardian', value: `${submission.parentGuardianName || ''} (${submission.relationshipToClient || ''})` },
      { label: 'Address', value: `${submission.address}, ${submission.city}, ${submission.state} ${submission.zip}` },
      { label: 'Insurance/Medicaid Member ID', value: submission.memberId },
      { label: 'Payment/Insurance', value: submission.insurance },
    ].filter(Boolean);

    sendTeamNotification({
      subject: `Eligibility Information Completed — ${displayName}`,
      text: [
        `Step 2 (Eligibility Information) has been completed for an existing lead.`,
        ``,
        ...rows.map((r) => `${r.label}: ${r.value || '—'}`),
      ].join('\n'),
      html: buildNotificationHtml({
        heading: 'Eligibility Information Completed',
        intro: 'Step 2 (Eligibility Information) has been completed for an existing lead.',
        rows,
      }),
    });
  }

  res.status(200).json({ item: submission });
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

// Admin: single submission detail.
router.get('/:id', requireAdmin, async (req, res) => {
  const submission = await Submission.findById(req.params.id).catch(() => null);
  if (!submission) return res.status(404).json({ error: 'Submission not found' });

  res.json({ item: submission });
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

// Admin: edit a lead's submitted details.
router.patch('/:id', requireAdmin, async (req, res) => {
  const {
    service, firstName, lastName, name, email, phone, insurance, insuranceOther, contactMethod, topic, message,
    dob, servicesFor, parentGuardianName, relationshipToClient, address, city, state, zip, memberId,
  } = req.body || {};

  if (service && !Submission.SERVICE_VALUES.includes(service)) {
    return res.status(400).json({ error: 'Unknown service value' });
  }
  if (email !== undefined && !email) {
    return res.status(400).json({ error: 'email is required' });
  }
  if (servicesFor && !['Myself', 'My child', 'Another dependent'].includes(servicesFor)) {
    return res.status(400).json({ error: 'Invalid servicesFor value' });
  }

  const update = {};
  for (const [key, value] of Object.entries({
    service, firstName, lastName, name, email, phone, insurance, insuranceOther, contactMethod, topic, message,
    dob, servicesFor, parentGuardianName, relationshipToClient, address, city, state, zip, memberId,
  })) {
    if (value !== undefined) update[key] = value;
  }

  const submission = await Submission.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true }).catch(() => null);
  if (!submission) return res.status(404).json({ error: 'Submission not found' });

  res.json({ item: submission });
});

router.delete('/:id', requireAdmin, async (req, res) => {
  const submission = await Submission.findByIdAndDelete(req.params.id).catch(() => null);
  if (!submission) return res.status(404).json({ error: 'Submission not found' });

  res.status(204).end();
});

module.exports = router;
