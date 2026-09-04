'use client';

import { useState } from 'react';
import { submitForm } from '@/lib/api';

const IconSend = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7Z" /></svg>
);

const SERVICE_OPTIONS = [
  'Adult & Individual Counseling',
  'Family Counseling',
  'Marriage & Couples Therapy',
  'Depression & Anxiety Counseling',
  'Grief & Loss Counseling',
  'Child & Adolescent Counseling',
  'Family Support Services',
  'Parenting Support & Classes',
  'Foster Care & Adoption Support',
  'Other / I’m Not Sure',
];

export default function FinalCtaForm() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', service: '', insurance: '', contactMethod: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    try {
      await submitForm({
        service: 'general-contact',
        firstName: form.firstName,
        lastName: form.lastName,
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        phone: form.phone,
        insurance: form.insurance,
        contactMethod: form.contactMethod,
        message: form.message,
      });
      setStatus('success');
    } catch (err) {
      setError(err.message);
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <div className="final-cta-form-success">
        <p>Thank you! Your message has been received. Our team will be in touch with you soon.</p>
      </div>
    );
  }

  return (
    <form className="final-cta-form" onSubmit={handleSubmit}>
      <div className="final-cta-form-row">
        <label className="final-cta-field">
          <span>First Name*</span>
          <input name="firstName" value={form.firstName} onChange={handleChange} required />
        </label>
        <label className="final-cta-field">
          <span>Last Name*</span>
          <input name="lastName" value={form.lastName} onChange={handleChange} required />
        </label>
      </div>
      <div className="final-cta-form-row">
        <label className="final-cta-field">
          <span>Email Address*</span>
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </label>
        <label className="final-cta-field">
          <span>Phone Number</span>
          <input name="phone" type="tel" value={form.phone} onChange={handleChange} />
        </label>
      </div>
      <label className="final-cta-field">
        <span>What type of support are you looking for?*</span>
        <select name="service" value={form.service} onChange={handleChange} required>
          <option value="" disabled>Select an option</option>
          {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </label>
      <label className="final-cta-field">
        <span>How will you be paying for services?</span>
        <select name="insurance" value={form.insurance} onChange={handleChange}>
          <option value="" disabled>Select Your Insurance Provider</option>
          <option value="SoonerCare">SoonerCare</option>
          <option value="Humana">Humana</option>
          <option value="Aetna">Aetna</option>
          <option value="Oklahoma Complete Health">Oklahoma Complete Health</option>
          <option value="Private Pay">Private Pay</option>
          <option value="Not Sure">I&rsquo;m not sure / I need help verifying my coverage</option>
        </select>
      </label>
      <label className="final-cta-field">
        <span>Preferred contact method</span>
        <select name="contactMethod" value={form.contactMethod} onChange={handleChange}>
          <option value="">No preference</option>
          <option value="phone">Phone</option>
          <option value="email">Email</option>
          <option value="either">Either</option>
        </select>
      </label>
      <label className="final-cta-field">
        <span>Message / How can we help?*</span>
        <textarea name="message" value={form.message} onChange={handleChange} rows={4} required />
      </label>

      {error && <p className="final-cta-form-error">{error}</p>}

      <button type="submit" className="final-cta-form-submit" disabled={status === 'submitting'}>
        <IconSend />
        {status === 'submitting' ? 'Sending…' : 'Continue to Eligibility'}
      </button>
    </form>
  );
}
