'use client';

import { useState } from 'react';
import { submitForm } from '@/lib/api';

const IconSend = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7Z" /></svg>
);

export default function FinalCtaForm() {
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '', date: '', time: '', message: '' });
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
        phone: form.phone,
        email: form.email,
        preferredDate: form.date,
        message: form.time ? `Preferred time: ${form.time}\n${form.message}` : form.message,
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
          <span>First Name</span>
          <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required />
        </label>
        <label className="final-cta-field">
          <span>Last Name</span>
          <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" required />
        </label>
      </div>
      <div className="final-cta-form-row">
        <label className="final-cta-field">
          <span>Phone</span>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
        </label>
        <label className="final-cta-field">
          <span>Email</span>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        </label>
      </div>
      <div className="final-cta-form-row">
        <label className="final-cta-field">
          <span>Date</span>
          <input name="date" type="date" value={form.date} onChange={handleChange} placeholder="Date" />
        </label>
        <label className="final-cta-field">
          <span>Time</span>
          <input name="time" type="time" value={form.time} onChange={handleChange} placeholder="Time" />
        </label>
      </div>
      <label className="final-cta-field">
        <span>Message</span>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows={3} />
      </label>

      {error && <p className="final-cta-form-error">{error}</p>}

      <button type="submit" className="final-cta-form-submit" disabled={status === 'submitting'}>
        <IconSend />
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
