'use client';

import { useState } from 'react';
import { submitForm } from '@/lib/api';

const IconUserCircle = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="8" r="3.2" /><path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" /></svg>
);
const IconMail = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 6.5 8 6 8-6" /></svg>
);
const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.3a16 16 0 0 0 6 6l1.5-1.4a2 2 0 0 1 2.1-.4c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2z" /></svg>
);
const IconCalendar = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M3 9h18" /><path d="M8 2v4M16 2v4" /></svg>
);
const IconSend = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7Z" /></svg>
);
const IconLock = (props) => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="4" y="10.5" width="16" height="10" rx="2" /><path d="M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5" /></svg>
);

export default function MarriageCounselingRequestForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    try {
      await submitForm({ service: 'marriage-counseling', ...form, preferredDate: form.date });
      setStatus('success');
    } catch (err) {
      setError(err.message);
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <div className="marriage-req-success">
        <p>Thank you! Your request has been received. Our team will be in touch with you soon.</p>
      </div>
    );
  }

  return (
    <form className="marriage-req-form" onSubmit={handleSubmit}>
      <label className="marriage-req-label">Full Name</label>
      <div className="marriage-req-input-wrap">
        <IconUserCircle />
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
      </div>

      <label className="marriage-req-label">Email Address</label>
      <div className="marriage-req-input-wrap">
        <IconMail />
        <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.org" required />
      </div>

      <label className="marriage-req-label">Phone Number</label>
      <div className="marriage-req-input-wrap">
        <IconPhone />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="(123) 456-7890" />
      </div>

      <label className="marriage-req-label">Preferred Date</label>
      <div className="marriage-req-input-wrap">
        <IconCalendar />
        <input name="date" type="date" value={form.date} onChange={handleChange} placeholder="mm/dd/yyyy" />
      </div>

      <label className="marriage-req-label">Tell us more about your needs</label>
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Briefly describe what's going on and how we can help..." rows={3} />

      {error && <p className="marriage-req-error">{error}</p>}

      <button type="submit" className="marriage-btn marriage-req-btn-primary marriage-req-submit" disabled={status === 'submitting'}>
        <IconSend />
        {status === 'submitting' ? 'Sending…' : 'Request Appointment'}
      </button>

      <p className="marriage-req-privacy">
        <IconLock />
        We respect your privacy. Your information is safe with us.
      </p>
    </form>
  );
}
