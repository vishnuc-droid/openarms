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
  'churches-faith-training',
  'community-outreach',
  'school-staff-training',
  'local-referrals',
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

    // Step 2 – Eligibility Information
    dob: { type: String, trim: true },
    servicesFor: { type: String, enum: ['Myself', 'My child', 'Another dependent'], trim: true },
    parentGuardianName: { type: String, trim: true },
    relationshipToClient: { type: String, trim: true },
    address: { type: String, trim: true },
    city: { type: String, trim: true },
    state: { type: String, trim: true },
    zip: { type: String, trim: true },
    memberId: { type: String, trim: true },
    eligibilityCompletedAt: { type: Date },
  },
  { timestamps: true }
);

submissionSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Submission', submissionSchema);
module.exports.SERVICE_VALUES = SERVICE_VALUES;
