const mongoose = require('mongoose');

const SERVICE_VALUES = [
  'adult-counseling',
  'family-therapy',
  'marriage-counseling',
  'depression-anxiety-counseling',
  'grief-counseling',
  'child-counseling',
  'family-support',
  'parenting-classes',
  'foster-care',
  'pro-bono-counseling',
  'general-contact',
  'training-request',
  'careers',
];

const submissionSchema = new mongoose.Schema(
  {
    service: { type: String, required: true, enum: SERVICE_VALUES },
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    name: { type: String, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
    preferredDate: { type: String, trim: true },
    insurance: { type: String, trim: true },
    insuranceOther: { type: String, trim: true },
    contactMethod: { type: String, trim: true },
    topic: { type: String, trim: true },
    message: { type: String, trim: true },
    status: { type: String, enum: ['new', 'contacted', 'closed'], default: 'new' },
    source: { type: String, trim: true },
  },
  { timestamps: true }
);

submissionSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Submission', submissionSchema);
module.exports.SERVICE_VALUES = SERVICE_VALUES;
